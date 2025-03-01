
import React from 'react';
import { Zap, UserRun } from 'lucide-react';
import { Link } from 'react-scroll';

const DeliveryInfo = () => {
  return (
    <section id="delivery-info" className="py-12 md:py-16 bg-muted/30">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium text-chocolate-800 mb-3">Fast Delivery ⚡</h3>
              <p className="text-chocolate-600">
                We offer quick delivery within 3km of our bakery in Jogeshwari, Mumbai. 
                Your cake will arrive fresh and in perfect condition.
              </p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="mt-4 inline-flex items-center justify-center btn-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="bg-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-all animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="flex flex-col items-center text-center">
              <UserRun className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium text-chocolate-800 mb-3">Pickup Available 🏃</h3>
              <p className="text-chocolate-600">
                Prefer to pick up your order? Visit our bakery in Jogeshwari 
                and collect your freshly baked treats at your convenience.
              </p>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="mt-4 inline-flex items-center justify-center btn-primary"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryInfo;
