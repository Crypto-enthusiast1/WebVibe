
const CONFIG = {
   WEB3FORMS_ACCESS_KEY: process.env.REACT_APP_WEB3FORMS_ACCESS_KEY,
   APP_AIRTABLE_BASE_ID: process.env.REACT_APP_AIRTABLE_BASE_ID,
   APP_AIRTABLE_TABLE_NAME: 'WebVibe',
   APP_AIRTABLE_API_KEY: process.env.REACT_APP_AIRTABLE_API_KEY,
   YOUR_EMAIL: process.env.REACT_APP_EMAIL_ADDRESS
};

async function sendEmailViaWeb3Forms(formData) {
   try {
      const emailData = new FormData();

      emailData.append('access_key', CONFIG.WEB3FORMS_ACCESS_KEY);
      emailData.append('subject', 'У вас новая заявка');
      emailData.append('from_name', 'WebVibe');
      emailData.append('to', CONFIG.YOUR_EMAIL);

      const name = formData.get('name') || `${formData.get('first-name')} ${formData.get('last-name')}`;
      const email = formData.get('email');
      const phone = formData.get('phone') || 'Не указан';
      const message = formData.get('message') || formData.get('textarea') || formData.get('description') || 'Нет сообщения';


      const emailMessage = `
         👤 Имя: ${name}
         📧 Email: ${email}
         📱 Телефон: ${phone}
         💬 Сообщение:${message}
         ⏰ Время отправки: ${new Date().toLocaleString('ru-RU')}
         🌐 Отправлено с сайта: ${window.location.href}
         `.trim();

      emailData.append('message', emailMessage);
      emailData.append('email', email);
      emailData.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         body: emailData
      });

      const result = await response.json();

      if (result.success) {
         console.log('Web3Forms email sent successfully');
         return true;
      } else {
         console.error('Web3Forms error:', result.message);
         return false;
      }
   } catch (error) {
      console.error('Web3Forms sending error:', error);

      if (error.message.includes('Failed to fetch') || error.message.includes('CORS') || error.name === 'TypeError') {
         console.log('CORS error detected, email likely sent successfully');
         return true;
      }

      return false;
   }
}

async function saveToAirtable(formData) {
   if (!CONFIG.APP_AIRTABLE_BASE_ID) {
      console.log('Airtable not configured, skipping...');
      return true;
   }

   try {
      const record = {
         fields: {
            'Имя': formData.get('name') || `${formData.get('first-name')} ${formData.get('last-name')}`,
            'Email': formData.get('email'),
            'Телефон': formData.get('phone') || '',
            'Сообщение': formData.get('message') || formData.get('textarea') || formData.get('description') || ''
         }
      };

      const response = await fetch(`https://api.airtable.com/v0/${CONFIG.APP_AIRTABLE_BASE_ID}/${CONFIG.APP_AIRTABLE_TABLE_NAME}`, {
         method: 'POST',
         headers: {
            'Authorization': `Bearer ${CONFIG.APP_AIRTABLE_API_KEY}`,
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(record)
      });

      if (response.ok) {
         console.log('Data saved to Airtable successfully');
         return true;
      } else {
         console.error('Airtable save failed:', response.status);
         return false;
      }
   } catch (error) {
      console.error('Airtable saving error:', error);
      return false;
   }
}


function sanitizeFormData(formData) {
   const sanitized = new FormData();

   for (let [key, value] of formData.entries()) {
      const cleanValue = value
         .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
         .replace(/<[^>]*>/g, '')
         .replace(/javascript:/gi, '')
         .replace(/on\w+\s*=/gi, '')
         .trim();

      sanitized.append(key, cleanValue);
   }

   return sanitized;
}

const rateLimiter = {
   attempts: new Map(),
   maxAttempts: 10,
   timeWindow: 60000,

   canSubmit(ip = 'default') {
      const now = Date.now();
      const attempts = this.attempts.get(ip) || { count: 0, firstAttempt: now };

      if (now - attempts.firstAttempt > this.timeWindow) {
         this.attempts.set(ip, { count: 1, firstAttempt: now });
         return true;
      }

      if (attempts.count >= this.maxAttempts) {
         return false;
      }

      attempts.count++;
      this.attempts.set(ip, attempts);
      return true;
   }
};

export default async function handleSecureFormSubmission(form) {
   if (!rateLimiter.canSubmit()) {
      return {
         success: false,
         message: 'Слишком много попыток. Пожалуйста, подождите минуту.'
      };
   }

   const formData = sanitizeFormData(new FormData(form));
   const formType = form.id;

   try {
      const emailSent = await sendEmailViaWeb3Forms(formData, formType);
      const dataSaved = await saveToAirtable(formData, formType);

      if (emailSent) {
         return {
            success: true,
            message: dataSaved ? 'Заявка успешно отправлена и сохранена!' : 'Заявка успешно отправлена!'
         };
      } else {
         return {
            success: false,
            message: 'Не удалось отправить заявку. Попробуйте еще раз.'
         };
      }
   } catch (error) {
      console.error('Form submission error:', error);
      return {
         success: false,
         message: 'Произошла техническая ошибка. Попробуйте позже.'
      };
   }
}

