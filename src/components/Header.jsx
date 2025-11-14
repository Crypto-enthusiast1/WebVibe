import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const { t } = useTranslation();

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         setIsMobileMenuOpen(false);
      }
   };

   return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
               <div className="logo-text" onClick={() => scrollToSection('hero')} style={{ cursor: 'pointer' }}>
                  {t('header.logo')}
               </div>

               {/* Desktop Navigation */}
               <nav className="hidden md:flex items-center space-x-8">
                  <button onClick={() => scrollToSection('services')} className="nav-link">{t('nav.services')}</button>
                  <button onClick={() => scrollToSection('portfolio')} className="nav-link">{t('nav.portfolio')}</button>
                  <button onClick={() => scrollToSection('pricing')} className="nav-link">{t('nav.pricing')}</button>
                  <LanguageSwitcher />
                  <Button onClick={() => scrollToSection('contact')} className="cta-button">
                     {t('nav.get_in_touch')}
                  </Button>
               </nav>

               {/* Mobile Menu Button */}
               <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label={t('header.mobile_menu')}>
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
               </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
               <nav className="md:hidden pb-4 mobile-menu">
                  <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 nav-link">{t('nav.services')}</button>
                  <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left py-2 nav-link">{t('nav.portfolio')}</button>
                  <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 nav-link">{t('nav.pricing')}</button>
                  <div className="py-2 border-t border-white/10 mt-2">
                     <LanguageSwitcher />
                  </div>
                  <Button onClick={() => scrollToSection('contact')} className="w-full mt-2 cta-button">
                     {t('nav.get_in_touch')}
                  </Button>
               </nav>
            )}
         </div>
      </header>
   );
};

export default Header;