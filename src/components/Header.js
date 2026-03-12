import React from "react";
import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-apex-dark border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-apex-blue rounded-full flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              APEX DIGITAL SYSTEMS
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <button className="bg-apex-blue hover:bg-blue-400 text-white px-6 py-2 rounded-md font-medium transition-colors text-sm">
            Get a Free Quote
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
