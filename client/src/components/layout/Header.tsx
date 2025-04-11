import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

const PawPrint: React.FC<{className?: string}> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM411.6 198.6c18.9-32.4 54.1-47.4 78.5-33.3s29.1 51.7 10.2 84.1s-54.1 47.4-78.5 33.3s-29.1-51.7-10.2-84.1zm65.1-105.7c32.3 10.6 46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5s-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5z"/>
  </svg>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/">
            <motion.div 
              className="flex items-center space-x-2 cursor-pointer group"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Logo with animation */}
              <div className="relative">
                <motion.div 
                  className="text-purple-600 text-3xl"
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                >
                  <PawPrint className="h-8 w-8 text-purple-600" />
                </motion.div>
                <motion.div 
                  className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
              </div>
              <div>
                <h1 className="font-['Nunito'] font-bold text-2xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                  WoofFix
                </h1>
                <div className="text-xs text-pink-400 -mt-1 italic">your complete dog care solution</div>
              </div>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/get-started', label: 'Get Started' },
              { path: '/feeding', label: 'Feeding' },
              { path: '/training', label: 'Training' },
              { path: '/health', label: 'Health' },
              { path: '/budget', label: 'Budget' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' }
            ].map((item, index) => (
              <Link 
                key={item.path} 
                href={item.path} 
              >
                <motion.div
                  className={`font-['Nunito'] font-semibold px-3 py-2 rounded-full transition-colors ${
                    isActive(item.path) 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                      : 'text-gray-600 hover:bg-purple-100 hover:text-purple-600'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.label}
                </motion.div>
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button 
            onClick={toggleMenu}
            className="md:hidden text-purple-600 hover:text-pink-500"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-paw text-2xl"></i>
          </motion.button>
        </div>
        
        {/* Mobile Navigation */}
        <motion.div 
          className={`md:hidden pb-4 overflow-hidden`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { path: '/', label: 'Home' },
            { path: '/get-started', label: 'Get Started' },
            { path: '/feeding', label: 'Feeding' },
            { path: '/training', label: 'Training' },
            { path: '/health', label: 'Health' },
            { path: '/budget', label: 'Budget' },
            { path: '/blog', label: 'Blog' },
            { path: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`block py-2 px-4 rounded-md my-1 font-['Nunito'] font-semibold ${
                isActive(item.path) 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                  : 'text-gray-600 hover:bg-purple-100 hover:text-purple-600'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      </div>
      
      {/* Decorative paw prints at the bottom of header */}
      <div className="hidden md:flex justify-between px-6 py-1 bg-gradient-to-r from-purple-100 via-pink-50 to-purple-100">
        {[...Array(12)].map((_, i) => (
          <PawPrint 
            key={i} 
            className={`h-3 w-3 ${i % 2 === 0 ? 'text-purple-300' : 'text-pink-300'} transform ${i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rotate-12' : '-rotate-20'}`} 
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
