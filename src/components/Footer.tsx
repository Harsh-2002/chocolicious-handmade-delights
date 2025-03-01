
import React from 'react';
import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate-800 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-6">
              Tasty <span className="text-caramel-400">Cakes</span>
            </h3>
            <p className="text-chocolate-100 mb-6">
              Mumbai's favorite handcrafted cakes and desserts for all your special moments. 100% vegetarian and made with love.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-chocolate-700 flex items-center justify-center text-white hover:bg-caramel-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-chocolate-700 flex items-center justify-center text-white hover:bg-caramel-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-chocolate-700 flex items-center justify-center text-white hover:bg-caramel-600 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Products', href: '#products' },
                { name: 'About Us', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Testimonials', href: '#testimonials' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-chocolate-100 hover:text-caramel-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Products</h4>
            <ul className="space-y-3">
              {[
                { name: 'Signature Cakes', href: '#products' },
                { name: 'Custom Designs', href: '#products' },
                { name: 'Photo Cakes', href: '#products' },
                { name: 'Brownies & Cookies', href: '#products' },
                { name: 'Cupcakes', href: '#products' },
                { name: 'Macarons', href: '#products' },
                { name: 'Wedding Cakes', href: '#products' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-chocolate-100 hover:text-caramel-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-caramel-400">Address:</span>
                <span className="text-chocolate-100">
                  123 Sweet Street, Jogeshwari West, Mumbai, Maharashtra 400102
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-caramel-400">Phone:</span>
                <span className="text-chocolate-100">+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-caramel-400">Email:</span>
                <span className="text-chocolate-100">orders@tastycakes.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-caramel-400">Hours:</span>
                <span className="text-chocolate-100">
                  Mon-Fri: 9am - 8pm<br />
                  Sat: 9am - 9pm<br />
                  Sun: 10am - 6pm
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-chocolate-700 text-center text-chocolate-100">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Tasty Cakes. All rights reserved.
          </p>
          <p className="flex items-center justify-center text-sm">
            Made with <Heart size={14} className="mx-1 text-caramel-400" /> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
