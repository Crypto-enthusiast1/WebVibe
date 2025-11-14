import React from 'react';
import { Code, TrendingUp, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useTranslation } from 'react-i18next';

const iconMap = {
   1: Code,
   2: TrendingUp,
   3: Target
};

const Services = () => {
   const { t } = useTranslation();
   return (
      <section id="services" className="section-padding">
         {/* Background handled globally by NeonBackground */}

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="section-title">{t('services.title')}</h2>
               <p className="section-subtitle">
                  {t('services.subtitle')}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {t('services.items', { returnObjects: true }).map((service) => {
                  const Icon = iconMap[service.id];
                  return (
                     <Card key={service.id} className="service-card group">
                        <CardHeader>
                           <div className="service-icon-wrapper mb-4">
                              <Icon className="w-8 h-8" />
                           </div>
                           <CardTitle className="text-xl mb-2 title-neon">{t(`services.items.${service.id}.title`) || service.title}</CardTitle>
                           <CardDescription className="text-base text-white">{t(`services.items.${service.id}.description`) || service.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2">
                              {(t(`services.items.${service.id}.features`, { returnObjects: true }) || service.features).map((feature, index) => (
                                 <li key={index} className="flex items-center text-sm">
                                    <span className="feature-dot"></span>
                                    <span className='text-white'>{feature}</span>
                                 </li>
                              ))}
                           </ul>
                        </CardContent>
                     </Card>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Services;