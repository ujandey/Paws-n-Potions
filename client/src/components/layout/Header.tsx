import React, { useState } from "react";
import { Link, useLocation } from "wouter";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <i className="fas fa-paw text-3xl text-[#F9A03F]"></i>
            <Link href="/" className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">
              PawParents
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className={`font-['Nunito'] font-semibold ${isActive('/') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Home
            </Link>
            <Link href="/get-started" className={`font-['Nunito'] font-semibold ${isActive('/get-started') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Get Started
            </Link>
            <Link href="/feeding" className={`font-['Nunito'] font-semibold ${isActive('/feeding') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Feeding
            </Link>
            <Link href="/training" className={`font-['Nunito'] font-semibold ${isActive('/training') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Training
            </Link>
            <Link href="/health" className={`font-['Nunito'] font-semibold ${isActive('/health') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Health
            </Link>
            <Link href="/budget" className={`font-['Nunito'] font-semibold ${isActive('/budget') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Budget
            </Link>
            <Link href="/blog" className={`font-['Nunito'] font-semibold ${isActive('/blog') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Blog
            </Link>
            <Link href="/contact" className={`font-['Nunito'] font-semibold ${isActive('/contact') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'} transition-colors`}>
              Contact
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-600 hover:text-[#4D7EA8]"
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <Link href="/" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Home
          </Link>
          <Link href="/get-started" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/get-started') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Get Started
          </Link>
          <Link href="/feeding" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/feeding') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Feeding
          </Link>
          <Link href="/training" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/training') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Training
          </Link>
          <Link href="/health" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/health') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Health
          </Link>
          <Link href="/budget" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/budget') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Budget
          </Link>
          <Link href="/blog" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/blog') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Blog
          </Link>
          <Link href="/contact" className={`block py-2 px-4 font-['Nunito'] font-semibold ${isActive('/contact') ? 'text-[#4D7EA8]' : 'text-gray-600 hover:text-[#F9A03F]'}`}>
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
