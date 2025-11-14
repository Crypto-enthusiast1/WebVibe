import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
   const { i18n } = useTranslation();
   const [isOpen, setIsOpen] = useState(false);

   const languages = [
      { code: 'en', name: 'English', flag: '/images/en.png' },
      { code: 'fr', name: 'Français', flag: '/images/be.png' },
      { code: 'nl', name: 'Nederlands', flag: '/images/nl.png' }
   ];

   const changeLanguage = (langCode) => {
      i18n.changeLanguage(langCode);
      setIsOpen(false);
   };

   const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

   return (
      <div className="language-switcher relative">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-colors text-white justify-self-end"
            aria-label="Change language"
         >
            <img src={currentLang.flag} alt={currentLang.code} className="w-5 h-5 rounded" />
            <span className="text-sm font-medium">{currentLang.code.toUpperCase()}</span>
         </button>

         {isOpen && (
            <div className="absolute right-0 mt-2 bg-slate-900 border border-white/10 rounded-lg shadow-lg z-50 min-w-max">
               {languages.map((lang) => (
                  <button
                     key={lang.code}
                     onClick={() => changeLanguage(lang.code)}
                     className={`flex items-center gap-2 w-full px-4 py-2 text-left text-sm transition-colors ${i18n.language === lang.code
                        ? 'bg-white/10 text-white font-semibold'
                        : 'hover:bg-white/5 text-white/70'
                        }`}
                  >
                     <img src={lang.flag} alt={lang.code} className="w-5 h-5 rounded" />
                     <span>{lang.name}</span>
                  </button>
               ))}
            </div>
         )}
      </div>
   );
};

export default LanguageSwitcher;
