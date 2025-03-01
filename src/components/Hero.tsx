
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-28 w-96 h-96 bg-cream-200 rounded-full opacity-60 blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -left-28 w-80 h-80 bg-caramel-200 rounded-full opacity-50 blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6 animate-fade-in-up">
            <span className="inline-block bg-cream-100 text-caramel-700 px-4 py-1.5 rounded-full text-sm font-medium">
              Artisanal Chocolate Cakes
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-chocolate-800 leading-tight">
              Handcrafted with 
              <span className="relative">
                <span className="relative z-10"> passion </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-caramel-200 -z-10 transform -rotate-1"></span>
              </span>
              and love
            </h1>
            <p className="text-lg text-chocolate-600 max-w-lg">
              Indulge in Mumbai's finest 100% vegetarian custom chocolate cakes, 
              freshly baked and delivered to make your special moments unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                to="products"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="btn-primary"
              >
                Explore Our Cakes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="btn-outline"
              >
                Custom Order
              </Link>
            </div>
            <div className="flex items-center space-x-8 pt-6">
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-medium text-chocolate-800">100%</span>
                <span className="text-sm text-chocolate-600">Vegetarian</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-medium text-chocolate-800">24hrs</span>
                <span className="text-sm text-chocolate-600">Fresh Baked</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-medium text-chocolate-800">Local</span>
                <span className="text-sm text-chocolate-600">Delivery</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-chocolate-500/20 to-caramel-500/20 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1089&ixlib=rb-4.0.3" 
                alt="Delicious chocolate cake with chocolate ganache" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 p-4 glass-card rounded-lg shadow-lg animate-fade-in" style={{ animationDelay: "0.8s" }}>
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-full bg-caramel-100 flex items-center justify-center">
                  <span className="text-caramel-700 text-xl font-medium">₹</span>
                </div>
                <div>
                  <p className="font-medium text-chocolate-800">Starting at</p>
                  <p className="text-2xl font-serif font-medium text-caramel-600">₹399<span className="text-sm font-sans text-chocolate-600">/500g</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
