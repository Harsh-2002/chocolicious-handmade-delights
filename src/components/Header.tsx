
import React, { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Products", to: "products" },
    { name: "About", to: "about" },
    { name: "Services", to: "services" },
    { name: "Testimonials", to: "testimonials" },
    { name: "FAQ", to: "faq" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-white/60 backdrop-blur-md border-b border-white/20 shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="text-2xl font-serif font-bold text-chocolate-800"
          >
            Tasty <span className="text-caramel-500">Cakes</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="px-3 py-2 text-sm font-medium text-chocolate-700 hover:text-caramel-600 cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={800}
            className="ml-4 btn-primary flex items-center text-sm"
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 rounded-md text-chocolate-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/80 backdrop-blur-md shadow-lg transform transition-all duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="px-4 py-3 text-chocolate-700 hover:bg-cream-50 rounded-md font-medium cursor-pointer"
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={800}
              className="btn-primary mt-4 flex items-center justify-center"
              onClick={closeMenu}
            >
              <ShoppingBag className="mr-2 h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
