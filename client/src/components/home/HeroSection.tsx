import React from "react";
import { Link } from "wouter";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#4D7EA8] text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h1 className="font-['Nunito'] font-bold text-4xl md:text-5xl mb-4 leading-tight">
              Welcome to Your Journey as a <span className="text-[#F9A03F]">Dog Parent</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Everything you need to know about caring for your new furry family member, from choosing the right breed to creating a happy, healthy home.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/get-started" className="bg-[#F9A03F] hover:bg-opacity-90 text-white font-['Nunito'] font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-center">
                Get Started Guide
              </Link>
              <a href="#breed-chooser" className="bg-white hover:bg-opacity-90 text-[#4D7EA8] font-['Nunito'] font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-center">
                Find Your Perfect Dog
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Happy person with dog" 
              className="rounded-lg shadow-xl" 
              width="800" 
              height="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
