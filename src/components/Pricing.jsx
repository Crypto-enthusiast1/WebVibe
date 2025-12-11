import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
   const { t } = useTranslation();
   const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section id="pricing" className="section-padding">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="section-title">{t('pricing.title')}</h2>
               <p className="section-subtitle">{t('pricing.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Карточка 1 */}
               <Card className="pricing-card flex flex-col h-full">
                  <CardHeader className="text-center pb-8">
                     <CardTitle className="text-2xl mb-3 title-neon">{t('pricing.website_development_title')}</CardTitle>
                     <CardDescription className="text-base text-white">{t('pricing.website_development_note')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                     <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature1')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature2')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature3')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature4')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature5')}</span></li>
                     </ul>
                     <div className="mt-auto">
                        <div className="pricing-badge mb-4 text-center p-2">
                           <span className="text-2xl font-bold">{t('pricing.starting_price')}</span>
                        </div>
                        <Button onClick={scrollToContact} className="w-full cta-button-large text-center">{t('pricing.cta_discuss')}</Button>
                     </div>
                  </CardContent>
               </Card>
               {/* Карточка 2 */}
               <Card className="pricing-card flex flex-col h-full">
                  <CardHeader className="text-center pb-8">
                     <CardTitle className="text-2xl mb-3 title-neon">{t('pricing.advertising_campaign_title')}</CardTitle>
                     <CardDescription className="text-base text-white">{t('pricing.advertising_campaign_note')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                     <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature7')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature8')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature9')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature4')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.feature10')}</span></li>
                     </ul>
                     <div className="mt-auto">
                        <div className="pricing-badge mb-4 text-center p-2">
                           <span className="text-2xl font-bold">{t('pricing.starting_price')}</span>
                        </div>
                        <Button onClick={scrollToContact} className="w-full cta-button-large text-center">{t('pricing.cta_discuss')}</Button>
                     </div>
                  </CardContent>
               </Card>
               {/* Карточка 3 - AI Automation */}
               <Card className="pricing-card flex flex-col h-full">
                  <CardHeader className="text-center pb-8">
                     <CardTitle className="text-2xl mb-3 title-neon">{t('pricing.ai_automation_title')}</CardTitle>
                     <CardDescription className="text-base text-white">{t('pricing.ai_automation_note')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-grow">
                     <ul className="space-y-4 mb-8 flex-grow">
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.ai_feature1')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.ai_feature2')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.ai_feature3')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.ai_feature4')}</span></li>
                        <li className="flex items-start text-white"><Check className="w-5 h-5 mr-3 mt-0.5 check-icon" /> <span>{t('pricing.ai_feature5')}</span></li>
                     </ul>
                     <div className="mt-auto">
                        <div className="pricing-badge mb-4 text-center p-2">
                           <span className="text-2xl font-bold">{t('pricing.starting_price')}</span>
                        </div>
                        <Button onClick={scrollToContact} className="w-full cta-button-large text-center">{t('pricing.cta_discuss')}</Button>
                     </div>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>
   );
};

export default Pricing;
