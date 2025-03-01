
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleContactClick = () => {
    // Navigate to the contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

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
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm"
          : "py-3 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <a
            href="#"
            className="text-xl font-serif font-medium text-chocolate-800"
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
              onClick={link.name === "Contact" ? handleContactClick : undefined}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center p-2 rounded-md text-chocolate-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
