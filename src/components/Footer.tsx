
import React from 'react';
import { Link } from 'react-scroll';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chocolate-800 text-white relative">
      {/* Wavy top border */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120">
          <path fill="#55392D" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path fill="#55392D" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path fill="#55392D" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-serif font-bold">
              Tasty <span className="text-caramel-300">Cakes</span>
            </h2>
            <p className="text-sm mt-2 text-chocolate-200 max-w-xs">
              Handcrafted with love in Mumbai, delivering smiles through delicious cakes since 2015.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://instagram.com" className="text-white hover:text-caramel-300 transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://facebook.com" className="text-white hover:text-caramel-300 transition-colors" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-caramel-300 transition-colors" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-chocolate-700 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-chocolate-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Tasty Cakes. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-chocolate-300">
              <Link to="home" className="hover:text-white transition-colors cursor-pointer" smooth={true} offset={-80} duration={800}>Home</Link>
              <Link to="products" className="hover:text-white transition-colors cursor-pointer" smooth={true} offset={-80} duration={800}>Products</Link>
              <Link to="about" className="hover:text-white transition-colors cursor-pointer" smooth={true} offset={-80} duration={800}>About</Link>
              <Link to="contact" className="hover:text-white transition-colors cursor-pointer" smooth={true} offset={-80} duration={800}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
