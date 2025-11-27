import { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BackToTop = () => {
   const { t } = useTranslation();
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         setVisible(window.scrollY > 150);
      };

      onScroll();

      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
   }, []);

   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   };

   return (
      <button
         className={`back-to-top ${visible ? 'show' : ''}`}
         onClick={scrollToTop}
         aria-label={t('header.scroll_to_top_title')}
         title={t('header.scroll_to_top_title')}
      >
         <Rocket className="w-5 h-5" />
      </button>
   );
};

export default BackToTop;
