import React, { useState } from 'react';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
   const { toast } = useToast();
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
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

      // Mock submission - will be connected to backend later
      setTimeout(() => {
         toast({
            title: "Message sent!",
            description: "We will contact you shortly.",
         });
         setFormData({ name: '', email: '', message: '' });
         setIsSubmitting(false);
      }, 1000);
   };

   return (
      <section id="contact" className="section-padding contact-section">
         {/* Background handled globally by NeonBackground */}

         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
               <h2 className="section-title">Get in Touch</h2>
               <p className="section-subtitle">
                  Ready to discuss your project? Write to us!
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <Card className="contact-card">
                  <CardHeader>
                     <CardTitle className="flex items-center gap-2 text-white">
                        <MessageSquare className="w-5 h-5" />
                        Send a Message
                     </CardTitle>
                     <CardDescription>Fill out the form and we'll get back to you</CardDescription>
                  </CardHeader>
                  <CardContent>
                     <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                           <Input
                              type="text"
                              name="name"
                              placeholder="Your Name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="contact-input"
                           />
                        </div>
                        <div>
                           <Input
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="contact-input"
                           />
                        </div>
                        <div>
                           <Textarea
                              name="message"
                              placeholder="Your Message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="contact-input"
                           />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full cta-button-large group">
                           {isSubmitting ? 'Sending...' : 'Send'}
                           <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                     </form>
                  </CardContent>
               </Card>

               <div className="space-y-6">
                  <Card className="contact-info-card">
                     <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg text-white">
                           <Mail className="w-5 h-5" />
                           Email
                        </CardTitle>
                     </CardHeader>
                     <CardContent>
                        <a href="mailto:hello@webvibe.com" className="contact-link">
                           hello@webvibe.com
                        </a>
                     </CardContent>
                  </Card>

                  <Card className="contact-info-card">
                     <CardHeader>
                        <CardTitle className="text-lg text-white">Social Media</CardTitle>
                     </CardHeader>
                     <CardContent className="space-y-2">
                        <a href="https://t.me/webvibe" target="_blank" rel="noopener noreferrer" className="contact-link block">
                           Telegram: @webvibe
                        </a>
                        <a href="https://instagram.com/webvibe" target="_blank" rel="noopener noreferrer" className="contact-link block">
                           Instagram: @webvibe
                        </a>
                     </CardContent>
                  </Card>

                  <div className="contact-cta">
                     <p className="text-sm opacity-80 text-white">
                        We usually respond within 24 hours
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Contact;