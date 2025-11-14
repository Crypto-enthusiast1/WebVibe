import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
   const { t } = useTranslation();
   const projects = t('portfolio.items', { returnObjects: true });

   return (
      <section id="portfolio" className="section-padding portfolio-section">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="section-title">{t('portfolio.title')}</h2>
               <p className="section-subtitle">
                  {t('portfolio.subtitle')}
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {Array.isArray(projects) && projects.map((project) => (
                  <Card key={project.id} className="portfolio-card group">
                     <CardHeader>
                        <div className="flex items-start justify-between">
                           <div>
                              <CardTitle className="text-xl mb-1 title-neon">{project.title}</CardTitle>
                              <CardDescription className="text-sm mb-3 text-white">{project.category}</CardDescription>
                           </div>
                        </div>
                        <CardDescription className="text-base text-white">{project.description}</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <div className="flex flex-wrap gap-2">
                           {Array.isArray(project.technologies) && project.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="tech-badge">
                                 {tech}
                              </Badge>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Portfolio;
