import React, { useState } from "react";
import { Zap, Menu, X } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleQuoteClick = () => {
    const target = document.querySelector('#contact');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-apex-dark border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="">
            <div className="w-10 h-10 bg-apex-blue rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              APEX DIGITAL SYSTEMS
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, '#about')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleNavClick(e, '#portfolio')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <button 
            onClick={handleQuoteClick}
            className="hidden md:block bg-apex-blue hover:bg-blue-400 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm"
          >
            Get a Free Quote
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, '#services')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, '#about')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                About
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, '#portfolio')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                Contact
              </a>
              <button 
                onClick={handleQuoteClick}
                className="bg-apex-blue hover:bg-blue-400 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm w-full"
              >
                Get a Free Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
