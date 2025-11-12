import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import CyberBackground from "./components/CyberBackground";

function App() {
   return (
      <div className="App">
         <CyberBackground />
         <Header />
         <main>
            <Hero />
            <Services />
            <Portfolio />
            <Pricing />
            <Contact />
         </main>
         <Footer />
         <Toaster />
         <BackToTop />
      </div>
   );
}

export default App;
