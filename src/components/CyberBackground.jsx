
const CyberBackground = () => {
   return (
      <div className="cyber-background" aria-hidden="true">
         {/* Размытые световые пятна */}
         <div className="blur-spot spot-1"></div>
         <div className="blur-spot spot-2"></div>
         <div className="blur-spot spot-3"></div>

         {/* Паттерн из точек */}
         <div className="dot-pattern"></div>
      </div>
   );
};

export default CyberBackground;
