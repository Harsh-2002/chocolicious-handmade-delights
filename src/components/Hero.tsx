
import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="public/lovable-uploads/32394168-ee8f-404e-a92c-26d6bfef9652.png" 
          alt="Chocolate cake with melting chocolate" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-white leading-tight mb-4">
            Handmade Cakes,<br />Made for You...
          </h1>
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-xl mx-auto">
            Indulge in Mumbai's finest 100% vegetarian custom chocolate cakes, 
            freshly baked with love for your special moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link 
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="bg-caramel-500 text-white px-8 py-3 rounded-full font-medium hover:bg-caramel-600 transition-colors inline-flex items-center justify-center"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
