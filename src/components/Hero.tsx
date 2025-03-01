
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-chocolate-900/70 z-0"></div>

      <div className="section-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight mb-6">
            Handmade Cakes,<br />Made for You...
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            We bake custom cakes for your special moments. 100% vegetarian and made with love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
              className="btn-outline text-white border-white hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
