
import React from 'react';
import { Heart, Star, Leaf, Clock } from 'lucide-react';

const ValueProposition = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Baked With Care",
      description: "Every cake is handcrafted with attention to detail and love"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Signature Smoothness",
      description: "Experience our uniquely smooth texture that melts in your mouth"
    },
    {
      icon: <Leaf className="w-8 h-8 text-primary" />,
      title: "100% Veg",
      description: "All our products are completely vegetarian without compromising on taste"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Freshly Baked",
      description: "We bake our cakes fresh for every order, never frozen or pre-made"
    }
  ];

  return (
    <section id="value-proposition" className="py-16 md:py-24 bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title mb-4">
            <span className="font-bold">Like You Mean It.</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Whether it's a birthday, anniversary, or just because - our cakes make every moment special. 
            The perfect sweet gesture to show someone you care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-cream-50 rounded-xl p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-chocolate-800 mb-2">{feature.title}</h3>
                <p className="text-chocolate-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
