import React, { useEffect, useState } from 'react';
import { Rocket } from 'lucide-react';

const BackToTop = () => {
   const [visible, setVisible] = useState(false);

   useEffect(() => {
      const onScroll = () => {
         setVisible(window.scrollY > 150);
      };

      // set initial state
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
         aria-label="Scroll to top"
         title="Back to top"
      >
         <Rocket className="w-5 h-5" />
      </button>
   );
};

export default BackToTop;
