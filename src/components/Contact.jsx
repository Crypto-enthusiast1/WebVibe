import { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { useToast } from '../hooks/use-toast';

import handleSecureFormSubmission from '@/formHandler';

const Contact = () => {
   const { t } = useTranslation();
   const { toast } = useToast();
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
      phone: ''
   });
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
         const result = await handleSecureFormSubmission(e.target);

         if (result.success) {
            toast({
               title: t('contact.success_title'),
               description: t('contact.success_description'),
            });
            setFormData({ name: '', email: '', message: '', phone: '' });
         } else {
            toast({
               title: 'Error',
               description: result.message,
            });
         }
      } catch (error) {
         toast({
            title: 'Error',
            description: 'Произошла ошибка при отправке формы',
         });
      } finally {
         setIsSubmitting(false);
      }
   };


   return (
      <section id="contact" className="section-padding contact-section">
         {/* Background handled globally by NeonBackground */}

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
               <h2 className="section-title">{t('contact.title')}</h2>
               <p className="section-subtitle">
                  {t('contact.subtitle')}
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <Card className="contact-card">
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2 text-white">
                        <MessageSquare className="w-5 h-5" />
                        {t('contact.form_title')}
                     </CardTitle>
                     <CardDescription>{t('contact.form_description')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                           <Input
                              type="text"
                              name="name"
                              placeholder={t('contact.name_placeholder')}
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="contact-input"
                           />
                        </div>
                        <div>
                           <Input
                              type="phone"
                              name="phone"
                              placeholder={t('contact.phone_placeholder')}
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="contact-input"
                           />
                        </div>
                        <div>
                           <Input
                              type="email"
                              name="email"
                              placeholder={t('contact.email_placeholder')}
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="contact-input"
                           />
                        </div>
                        <div>
                           <Textarea
                              name="message"
                              placeholder={t('contact.message_placeholder')}
                              value={formData.message}
                              onChange={handleChange}
                              rows={5}
                              className="contact-input"
                           />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full cta-button-large group">
                           {isSubmitting ? t('contact.sending_button') : t('contact.send_button')}
                           <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                     </form>
                  </CardContent>
               </Card>

               <div className="space-y-6">
                  <Card className="contact-info-card">
                     <CardHeader className="p-4">
                        <CardTitle className="flex items-center gap-2 text-lg text-white justify-center">
                           <Mail className="w-5 h-5" />
                           {t('contact.email_label')}
                        </CardTitle>
                     </CardHeader>
                     <CardContent className="flex flex-col items-center gap-2">
                        <a href="tel:+32473209725" className="contact-link">
                           +32 473 20 97 25
                        </a>
                        <a href="mailto:webvibeee@gmail.com" className="contact-link">
                           webvibeee@gmail.com
                        </a>
                     </CardContent>
                  </Card>

                  <Card className="contact-info-card">
                     <CardHeader className="items-center p-4">
                        <CardTitle className="text-lg text-white">{t('contact.social_media_label')}</CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-2 ">
                        <a href="https://t.me/artem_0x" target="_blank" rel="noopener noreferrer" className="contact-link block text-center">
                           {t('contact.telegram')}
                        </a>
                     </CardContent>
                  </Card>

                  <div className="contact-cta">
                     <p className="text-sm opacity-80 text-white">
                        {t('contact.response_time')}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;