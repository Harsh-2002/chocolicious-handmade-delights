
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
import ValueProposition from '../components/ValueProposition';
import ProductShowcase from '../components/ProductShowcase';
import DeliveryInfo from '../components/DeliveryInfo';
import Pricing from '../components/Pricing';

const Index = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <Products />
      <ProductShowcase />
      <About />
      <DeliveryInfo />
      <Services />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
