
import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-caramel-500 text-chocolate-800 relative">
      {/* Decorative dripping effect */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-8 -translate-y-99%">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 48" className="w-full h-auto fill-caramel-500 -mb-1">
          <path d="M0,0 C120,20 240,30 360,30 C480,30 600,20 720,20 C840,20 960,30 1080,30 C1200,30 1320,20 1440,0 L1440,50 L0,50 Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-4">
              Tasty <span className="text-white">Cakes</span>
            </h3>
            <p className="text-chocolate-800 mb-6 max-w-xs">
              Mumbai's favorite handcrafted cakes and desserts for all your special moments. 100% vegetarian and made with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-caramel-600 hover:bg-chocolate-100 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-caramel-600 hover:bg-chocolate-100 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-white flex items-center justify-center text-caramel-600 hover:bg-chocolate-100 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-chocolate-800">
                  123 Sweet Street, Jogeshwari West, Mumbai, Maharashtra 400102
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-chocolate-800">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <span className="text-chocolate-800">orders@tastycakes.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Business Hours</h4>
            <div className="space-y-2">
              {[
                { day: 'Monday - Friday', hours: '9:00 AM - 8:00 PM' },
                { day: 'Saturday', hours: '9:00 AM - 9:00 PM' },
                { day: 'Sunday', hours: '10:00 AM - 6:00 PM' }
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="font-medium">{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-chocolate-800/20 text-center">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Tasty Cakes. All rights reserved.
          </p>
          <p className="flex items-center justify-center text-sm">
            Express your love with our special one
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
