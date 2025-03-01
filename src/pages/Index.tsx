
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Services />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
