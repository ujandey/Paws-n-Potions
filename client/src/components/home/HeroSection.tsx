import React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";

// Dog paw prints for decoration
const PawPrint: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM411.6 198.6c18.9-32.4 54.1-47.4 78.5-33.3s29.1 51.7 10.2 84.1s-54.1 47.4-78.5 33.3s-29.1-51.7-10.2-84.1zm65.1-105.7c32.3 10.6 46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5s-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5z"/>
  </svg>
);

// Floating potion bottle SVG component
const PotionBottle: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M288 0H160 128c0 17.7 14.3 32 32 32V96c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V32c17.7 0 32-14.3 32-32h-32zM176 96V32h96V96h-96zM319.5 336.3L296 256H152l-23.5 80.3c-4.8 16.4-7.2 33.3-7.2 50.4l0 1.2c0 55.6 45.1 100.6 100.7 100c55.1-.6 99.4-45.5 99.1-100.7l-.2-4.9c-.3-14.7-2.4-29.4-6.4-43.7z"/>
  </svg>
);

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 via-fuchsia-600 to-pink-500 text-white py-16 md:py-24">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated paw prints */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`paw-${i}`}
            className="absolute"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `${5 + (i * 12)}%`,
              opacity: 0.15,
              rotate: `${i * 45}deg`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + (i * 0.5),
              ease: "easeInOut",
              delay: i * 0.3
            }}
          >
            <PawPrint className={`w-${6 + (i % 3) * 2} h-${6 + (i % 3) * 2} text-white`} />
          </motion.div>
        ))}
        
        {/* Animated potion bottles */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`potion-${i}`}
            className="absolute"
            style={{
              bottom: `${10 + (i * 15)}%`,
              right: `${10 + (i * 8)}%`,
              opacity: 0.2
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, i % 2 === 0 ? 10 : -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + (i * 0.5),
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            <PotionBottle className={`w-${8 + (i % 3) * 2} h-${8 + (i % 3) * 2} text-pink-200`} />
          </motion.div>
        ))}
        
        {/* Background sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute bg-white rounded-full z-0"
            style={{
              width: `${2 + (i % 4)}px`,
              height: `${2 + (i % 4)}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2 + (Math.random() * 3),
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-['Nunito'] font-bold text-4xl md:text-5xl mb-6 leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Embark on a Magical Journey with 
              <motion.span 
                className="bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Paws n Potions
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 leading-relaxed text-purple-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Everything you need to care for your new furry companion, from choosing the perfect breed to creating a magical home filled with love and joy.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Link href="/get-started">
                <motion.button 
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-['Nunito'] font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Guide
                </motion.button>
              </Link>
              <a href="#breed-chooser">
                <motion.button
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-['Nunito'] font-bold py-3 px-6 rounded-full transition-all shadow-lg hover:shadow-xl text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Find Your Perfect Dog
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main image with floating effect */}
            <motion.div
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <img 
                src="https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Happy person with dog" 
                className="rounded-2xl" 
                width="800" 
                height="600"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-transparent"></div>
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-pink-400 rounded-full w-20 h-20 z-0 opacity-30"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            />
            <motion.div 
              className="absolute -bottom-10 -right-6 bg-purple-500 rounded-full w-28 h-28 z-0 opacity-20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          className="relative block w-full h-16" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none"
        >
          <path 
            fill="#fff" 
            d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,59C960,43,1056,21,1152,16C1248,11,1344,21,1392,26.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
