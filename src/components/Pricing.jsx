import React from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { mockData } from '../mock';

const Pricing = () => {
   const scrollToContact = () => {
      const element = document.getElementById('contact');
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section id="pricing" className="section-padding">
         {/* Background handled globally by NeonBackground */}

         <div className="pricing-wrapper max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 w-[100%]">
               <h2 className="section-title">Pricing</h2>
               <p className="section-subtitle">
                  Individual approach to each project
               </p>
            </div>

            <Card className="pricing-card w-[49%]">
               <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-3 title-neon">Website Development</CardTitle>
                  <CardDescription className="text-base text-white">{mockData.pricing.note}</CardDescription>
               </CardHeader>
               <CardContent>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Full development cycle from design to launch</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Responsive layout for all devices</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Basic SEO optimization</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Analytics integration</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Technical support</span>
                     </li>
                  </ul>
                  <div className="pricing-badge mb-4 text-center p-2">
                     <span className="text-2xl font-bold">{mockData.pricing.startingPrice}</span>
                  </div>
                  <Button onClick={scrollToContact} className="w-full cta-button-large text-center">
                     Discuss Project
                  </Button>
               </CardContent>
            </Card>
            <Card className="pricing-card w-[49%]">
               <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-3 title-neon">Advertising Campaign</CardTitle>
                  <CardDescription className="text-base text-white">The cost of each campaign is calculated individually based on your goals and budget</CardDescription>
               </CardHeader>
               <CardContent>
                  <ul className="space-y-4 mb-8">
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Comprehensive development of advertising strategy and media plan</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Targeting the right audiences</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Launch and management of campaigns on popular platforms (Google, Facebook, YouTube)</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Analytics integration</span>
                     </li>
                     <li className="flex items-start text-white">
                        <Check className="w-5 h-5 mr-3 mt-0.5 check-icon" />
                        <span>Support and optimization</span>
                     </li>
                  </ul>
                  <div className="pricing-badge mb-4 text-center p-2">
                     <span className="text-2xl font-bold">{mockData.pricing.startingPrice}</span>
                  </div>
                  <Button onClick={scrollToContact} className="w-full cta-button-large text-center">
                     Discuss Project
                  </Button>
               </CardContent>
            </Card>
         </div>
      </section>
   );
};

export default Pricing;