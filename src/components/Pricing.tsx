
import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-scroll';

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Chocolate Cake",
      price: "₹399",
      unit: "per 500g",
      features: [
        "Rich chocolate flavor",
        "Smooth ganache frosting",
        "Customizable message",
        "Perfect for birthdays"
      ]
    },
    {
      title: "Photo Cake",
      price: "₹599",
      unit: "per 500g",
      features: [
        "Your photo printed on cake",
        "Premium quality edible ink",
        "Customizable design",
        "Ideal for celebrations"
      ],
      highlighted: true
    },
    {
      title: "Custom Design",
      price: "Variable",
      unit: "based on design",
      features: [
        "Personalized themes",
        "Multiple flavors available",
        "Special occasion designs",
        "Consultation available"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="section-title">Get the Best Price in Mumbai</h2>
          <p className="section-subtitle">Premium quality cakes at affordable prices</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md animate-scale-in ${
                option.highlighted ? 'border-2 border-accent' : 'border border-muted'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-6 ${option.highlighted ? 'bg-accent/10' : 'bg-white'}`}>
                <h3 className="font-serif text-xl font-medium text-chocolate-800 mb-2">{option.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-chocolate-800">{option.price}</span>
                  <span className="text-sm text-chocolate-600 ml-2">{option.unit}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                      <span className="text-chocolate-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                  className={`w-full inline-flex items-center justify-center py-3 rounded-lg font-medium transition-colors ${
                    option.highlighted 
                      ? 'bg-primary text-white hover:bg-primary/90' 
                      : 'bg-muted text-chocolate-700 hover:bg-muted/80'
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
