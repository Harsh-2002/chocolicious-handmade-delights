
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-caramel-500 text-white relative">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-caramel-500 h-12 w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl font-medium mb-6 text-white">
              Tasty <span className="text-chocolate-800">Cakes</span>
            </h3>
            <p className="text-white/80 mb-6">
              Express your love with our special one.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-chocolate-800 transition-colors">Facebook</a>
              <a href="#" className="text-white hover:text-chocolate-800 transition-colors">Instagram</a>
              <a href="#" className="text-white hover:text-chocolate-800 transition-colors">Twitter</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Location</h4>
            <p className="text-white/80">
              123 Sweet Street, Jogeshwari West,<br />
              Mumbai, Maharashtra 400102
            </p>
            <p className="text-white/80 mt-4">
              <span className="block">orders@tastycakes.com</span>
              <span className="block">+91 98765 43210</span>
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white">Opening Hours</h4>
            <ul className="text-white/80">
              <li>Monday - Friday: 9am - 8pm</li>
              <li>Saturday: 9am - 9pm</li>
              <li>Sunday: 10am - 6pm</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/20 text-center text-white/80">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Tasty Cakes. All rights reserved.
          </p>
          <p className="flex items-center justify-center text-sm">
            Made with <Heart size={14} className="mx-1 text-white" /> in Mumbai
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
