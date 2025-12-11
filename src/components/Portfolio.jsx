import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { useTranslation } from 'react-i18next';
import projectsStatic from '../locales/projectStatic.json';

const Portfolio = () => {
   const { t } = useTranslation();
   const projectsTranslation = t('portfolio.items', { returnObjects: true });
   const translationsArray = Array.isArray(projectsTranslation) ? projectsTranslation : [];
   const projects = projectsStatic.map((staticItem, idx) => ({
      ...staticItem,
      ...(translationsArray[idx] || {})
   }));

   return (
      <section id="portfolio" className="section-padding portfolio-section">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
               <h2 className="section-title">{t('portfolio.title')}</h2>
               <p className="section-subtitle">{t('portfolio.subtitle')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {projects.map((project, id) => (
                  <Card key={id} className="portfolio-card group flex flex-col md:flex-row justify-between">
                     <div className="flex-1">
                        <CardHeader>
                           <div className="flex flex-col">
                              <CardTitle className="text-xl mb-1 title-neon">{project.title}</CardTitle>
                              <CardDescription className="text-sm mb-3 text-white">{project.category}</CardDescription>
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
                     </div>
                     <div className="w-full md:w-[10rem] flex-shrink-0 flex items-center justify-center p-4">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                           <img
                              src={project.image}
                              alt="preview"
                              className="rounded-md shadow-md transition-transform hover:scale-105"
                           />
                        </a>
                     </div>
                  </Card>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Portfolio;
