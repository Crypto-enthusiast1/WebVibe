import React from 'react';
import { Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
   const { t } = useTranslation();
   return (
      <footer className="footer">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
               <div>
                  <h3 className="footer-title">{t('footer.company')}</h3>
                  <p className="footer-text">
                     {t('footer.company_description')}
                  </p>
               </div>
               <div>
                  <h3 className="footer-title">{t('footer.services_title')}</h3>
                  <ul className="space-y-2">
                     <li><a href="#services" className="footer-link">{t('footer.services_website')}</a></li>
                     <li><a href="#services" className="footer-link">{t('footer.services_seo')}</a></li>
                     <li><a href="#services" className="footer-link">{t('footer.services_advertising')}</a></li>
                  </ul>
               </div>
               <div>
                  <h3 className="footer-title">{t('footer.contact_title')}</h3>
                  <ul className="space-y-2">
                     <li><a href="mailto:hello@webvibe.com" className="footer-link">{t('contact.email')}</a></li>
                     <li><a href="https://t.me/webvibe" className="footer-link">Telegram</a></li>
                     <li><a href="https://instagram.com/webvibe" className="footer-link">Instagram</a></li>
                  </ul>
               </div>
            </div>
            <div className="footer-bottom">
               <p className="flex items-center justify-center gap-2">
                  {t('footer.copyright')} <Heart className="w-4 h-4 footer-heart" /> {t('footer.made_with')}
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;