
import React from 'react';
import { Check } from 'lucide-react';

const About = () => {
  const features = [
    {
      id: 1,
      title: '100% Vegetarian',
      description: 'All our products are completely egg-free and vegetarian without compromising on taste or texture.'
    },
    {
      id: 2,
      title: 'Handcrafted with Care',
      description: 'Each cake is carefully handmade by our skilled bakers with attention to every detail.'
    },
    {
      id: 3,
      title: 'Premium Ingredients',
      description: 'We use only the finest quality ingredients to ensure exceptional taste and texture.'
    },
    {
      id: 4,
      title: 'Fresh Baked Daily',
      description: 'Our cakes are freshly baked daily, never frozen, to maintain optimal freshness.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block bg-cream-100 text-caramel-700 px-4 py-1.5 rounded-full text-sm font-medium">
                Our Story
              </span>
              <h2 className="section-title text-left">Handmade With Passion Since 2015</h2>
              <p className="text-chocolate-700 text-lg leading-relaxed">
                Tasty Cakes began with a simple mission: to create delicious, handcrafted cakes that bring joy to every celebration. Based in Jogeshwari, Mumbai, our family-owned bakery specializes in custom chocolate cakes made with love and the finest ingredients.
              </p>
              <p className="text-chocolate-700 text-lg leading-relaxed">
                What sets us apart is our commitment to 100% vegetarian recipes that never compromise on taste or texture. Every cake is freshly baked to order, ensuring you receive the perfect centerpiece for your special moments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="bg-white rounded-lg p-5 shadow-sm animate-slide-right"
                  style={{ animationDelay: `${feature.id * 0.1}s` }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="rounded-full p-1.5 bg-caramel-100 text-caramel-700 mt-0.5">
                      <Check size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-chocolate-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-chocolate-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3" 
                alt="Baker preparing a custom cake" 
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-900/30 to-transparent mix-blend-multiply"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 p-6 bg-white rounded-xl shadow-xl max-w-[280px] animate-slide-left">
              <div className="font-serif italic text-chocolate-800 text-lg">
                "We believe every cake should taste as good as it looks, and bring joy to those who share it."
              </div>
              <div className="mt-4 flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-caramel-100 flex items-center justify-center text-caramel-700 font-serif text-xl">R</div>
                <div>
                  <p className="font-medium text-chocolate-800">Riya Sharma</p>
                  <p className="text-sm text-chocolate-600">Founder & Head Baker</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-8 -left-8 flex items-center space-x-3 bg-white rounded-lg shadow-lg p-4 animate-slide-right">
              <div className="text-caramel-600 font-serif text-5xl leading-none">7+</div>
              <div className="font-medium text-chocolate-700">Years of Baking Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
