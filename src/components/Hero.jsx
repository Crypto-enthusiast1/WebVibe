import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

const Hero = () => {
   const { t } = useTranslation();
   const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section id="hero" className="hero-section">
         {/* Background is provided globally by NeonBackground component */}

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full badge-neon mb-8">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">{t('hero.badge')}</span>
               </div>

               <h1 className="hero-title">
                  {t('footer.company_tagline')}
               </h1>

               <p className="hero-subtitle">
                  {t('footer.company_description')}
               </p>

               <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                  <Button onClick={scrollToContact} className="cta-button-large group">
                     {t('hero.cta_start_project')}
                     <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                     variant="outline"
                     onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
                     className="cta-button-outline"
                  >
                     {t('hero.cta_view_work')}
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;