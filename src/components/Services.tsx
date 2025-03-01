
import React from 'react';
import { Truck, Clock, Calendar, Cake } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: Truck,
      title: 'Local Delivery',
      description: 'Free delivery within 3km of Jogeshwari, Mumbai. Nominal charge for extended areas.'
    },
    {
      id: 2,
      icon: Clock,
      title: 'Order Timeline',
      description: 'Place your orders at least 24 hours in advance for regular cakes, 48 hours for custom designs.'
    },
    {
      id: 3,
      icon: Calendar,
      title: 'Special Occasions',
      description: 'Book early for holidays and peak seasons to ensure availability.'
    },
    {
      id: 4,
      icon: Cake,
      title: 'Cake Customization',
      description: 'Personalized designs, flavors, and messages available for all celebrations.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-cream-50">
      <div className="section-container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Making your cake experience seamless from order to delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-6 shadow-md border border-cream-100 hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${service.id * 0.1}s` }}
            >
              <div className="h-14 w-14 rounded-xl bg-caramel-100 flex items-center justify-center mb-6 text-caramel-600">
                <service.icon size={28} />
              </div>
              <h3 className="font-serif text-xl font-medium text-chocolate-800 mb-3">
                {service.title}
              </h3>
              <p className="text-chocolate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-chocolate-50 rounded-2xl p-8 md:p-12 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-chocolate-800 mb-4">
                Ordering Process
              </h3>
              <p className="text-chocolate-700 mb-6">
                We've made ordering your delicious cake as simple as possible. Follow these steps to get your hands on our scrumptious treats.
              </p>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    title: 'Choose Your Cake',
                    description: 'Browse our product catalog to select your perfect cake.'
                  },
                  {
                    step: 2,
                    title: 'Customize (Optional)',
                    description: 'Add personalized messages, photo prints, or custom designs.'
                  },
                  {
                    step: 3,
                    title: 'Place Your Order',
                    description: 'Submit your order through our contact form or phone call.'
                  },
                  {
                    step: 4,
                    title: 'Receive & Enjoy',
                    description: 'Your freshly baked cake will be delivered at your chosen time.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4">
                    <div className="h-8 w-8 rounded-full bg-caramel-100 flex items-center justify-center font-medium text-caramel-700 flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-medium text-chocolate-800 mb-1">{item.title}</h4>
                      <p className="text-sm text-chocolate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1464349095431-e9a21285b5c3?auto=format&fit=crop&q=80&w=1036&ixlib=rb-4.0.3"
                alt="Delivery service for cakes"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
