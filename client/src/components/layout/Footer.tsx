import React, { FormEvent, useState } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

// Dog silhouette SVG component
const DogSilhouette: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M256,120c0-55.2,29.6-103.2,73.6-129.6C367.2,4,411.2,16,448,40l0,0c5.6,3.6,10.4,8.4,14.4,13.6c10.4,13.2,6.4,32.4-8,42c-4,3.2-8.8,5.2-14,6c-22.4,2.4-46.8,15.6-69.6,42c-34,40-82.4,40-119.2,38.8c-38-1.6-62,16.8-65.2,41.6c-1.6,13.2,2.8,22,7.6,29.6l0,0C220.8,241.6,256,284,256,342.4c0,20.8,4,41.6,12,60.8c9.6,22.8,15.2,46.4,15.2,70.8c0,17.6-14.4,30.4-31.2,30.4c-12.4,0-23.2-7.2-28.4-17.6c-13.2-26.4-44-43.6-77.2-43.6c-13.6,0-25.2-11.6-25.2-25.2c0-12.8,8.8-22.8,21.2-25.2c77.6-12.8,88-89.2,90.4-150.8c1.6-36.8-55.2-45.2-88.8-59.6c-35.6-15.2-34-27.2-29.6-32c4.4-5.2,10.8-8.4,18.4-8.4c6.8,0,14,2.8,22.8,8.4c25.2,15.6,53.2,15.6,80.4,12c37.2-4.8,63.6-4.8,90,20"/>
  </svg>
);

// Paw print component
const PawPrint: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM411.6 198.6c18.9-32.4 54.1-47.4 78.5-33.3s29.1 51.7 10.2 84.1s-54.1 47.4-78.5 33.3s-29.1-51.7-10.2-84.1zm65.1-105.7c32.3 10.6 46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5s-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5z"/>
  </svg>
);

// Potion bottle SVG component
const PotionBottle: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 448 512" className={className} fill="currentColor">
    <path d="M288 0H160 128c0 17.7 14.3 32 32 32V96c-17.7 0-32 14.3-32 32s14.3 32 32 32h32 64 32c17.7 0 32-14.3 32-32s-14.3-32-32-32V32c17.7 0 32-14.3 32-32h-32zM176 96V32h96V96h-96zM319.5 336.3L296 256H152l-23.5 80.3c-4.8 16.4-7.2 33.3-7.2 50.4l0 1.2c0 55.6 45.1 100.6 100.7 100c55.1-.6 99.4-45.5 99.1-100.7l-.2-4.9c-.3-14.7-2.4-29.4-6.4-43.7z"/>
  </svg>
);

// Flower SVG component
const Flower: React.FC<{className?: string}> = ({ className }) => (
  <svg viewBox="0 0 512 512" className={className} fill="currentColor">
    <path d="M306.6 148.6c-18.4-35.7-90.1-35.6-108.4 0-3.8 7.7-31.9 65.3-41.5 85.3h191.4c-9.7-20-37.7-77.6-41.5-85.3zm-46.6-43.7l1.3-3c3.8-8.8 16.7-8.8 20.5 0l1.3 3c3.5 7.9 13 11.3 21.3 8.5l2.9-1c8.4-2.7 17.4 3.9 16.7 12.2l-.3 3.1c-.7 8.1 5.2 15.7 13.3 17.2l3 .6c8.8 1.7 13.6 11.2 9.8 19.2l-1.4 3c-3.2 6.9.2 15.2 7.5 18.8l2.6 1.3c8.6 4.4 11.2 15.2 5.6 23l-2 2.7c-4.7 6.4-3.5 15.2 2.6 20.2l2.2 1.8c7.6 6.1 7.7 17.2.3 23.4l-2.5 2.1c-6.1 5.1-7.2 14-2.4 20.4l1.7 2.3c6.2 8.2 3.5 19.1-5.3 23.3l-3.2 1.5c-7.3 3.5-10.4 11.8-7.1 18.7l1.2 2.5c4.2 8.9-.1 19.3-9.1 21.8l-3.2 .9c-7.9 2.3-12.4 10.3-10 17.8l.9 2.7c3 9.2-2.5 18.9-11.5 20.2l-3.3 .5c-8.3 1.2-13.9 8.8-12.6 16.5l.5 2.8c1.7 9.2-4.9 18-13.4 18l-3.1 0c-8 0-14.7 6.5-14.7 14.3v2.5c-.1 9-7.5 16.1-15.8 15.1l-2.9-.3c-7.9-.6-14.9 4.8-15.6 12.4l-.3 2.4c-1.2 8.7-9.9 14-18.4 11.7l-3-.8c-7.3-1.9-14.8 1.8-17.5 8.6l-.9 2.2c-3.2 8.2-12.2 12.2-19.9 8.8l-2.7-1.2c-6.5-2.8-14.3-.9-18.1 4.4l-1.4 1.9c-5.2 7.5-14.1 9.5-20.8 4.5l-2.3-1.7c-6-3.5-13.5 0-16.9 7.5L89 401.1c-2.8 6.6-8.9 10.8-15.4 10.8c-14.5 0-23.2-12.2-18.9-27.2c50.2-179.2 44.6-134.2 47.1-143.1c24.4-49.9 73.1-77.6 122.1-77.6c48.6 0 97.6 27.7 122 77.5c2.6 9 .3-25.9 47.1 143c6.3 18.3-9.7 36.6-28.9 36.6c-14 0-20.4-11.7-15.5-23.8l4.6-11.4c2.6-6.4 1.2-13.9-3.5-18.2l-1.7-1.5c-6.6-5.8-16.1-4.3-21.3 3l-2 2.7c-2.3 3.2-5.8 5.3-9.7 5.7l-1.2 .2c-19 2.6-27.1-22.3-10.4-32.6c23.1 0-14.6 .3 72.4-67.4c19.8-17.1 42.2 7.9 29.8 33.7z"/>
  </svg>
);

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
    
    setEmail("");
  };

  return (
    <footer className="bg-[#4D7EA8] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <i className="fas fa-paw text-2xl text-[#F9A03F]"></i>
              <span className="font-['Nunito'] font-bold text-xl">PawParents</span>
            </div>
            <p className="text-white text-opacity-80 mb-4">
              Comprehensive resources for first-time dog owners, helping you navigate the joys and challenges of dog parenthood.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#F9A03F] transition-colors" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[#F9A03F] transition-colors" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[#F9A03F] transition-colors" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-[#F9A03F] transition-colors" aria-label="Pinterest">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Nunito'] font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Home</Link></li>
              <li><Link href="/get-started" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Get Started Guide</Link></li>
              <li><Link href="/get-started" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Dog Breed Finder</Link></li>
              <li><Link href="/feeding" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Feeding Guidelines</Link></li>
              <li><Link href="/training" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Training Resources</Link></li>
              <li><Link href="/health" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Health & Wellness</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Nunito'] font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/budget" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Budget Calculator</Link></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Emergency Vet Locator</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Dog Food Reviews</a></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Community Forum</a></li>
              <li><Link href="/blog" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Blog</Link></li>
              <li><a href="#" className="text-white text-opacity-80 hover:text-[#F9A03F] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-['Nunito'] font-semibold text-lg mb-4">Subscribe</h4>
            <p className="text-white text-opacity-80 mb-4">
              Join our newsletter for the latest guides, tips, and resources for dog parents.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <Input
                type="email"
                placeholder="Your email address"
                className="rounded-r-none focus:ring-2 focus:ring-[#F9A03F] text-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit" 
                className="bg-[#F9A03F] text-white rounded-l-none hover:bg-opacity-90"
                aria-label="Subscribe"
              >
                <i className="fas fa-paper-plane"></i>
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-opacity-60 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} PawParents. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white text-opacity-60 hover:text-[#F9A03F] text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white text-opacity-60 hover:text-[#F9A03F] text-sm transition-colors">Terms of Service</a>
              <Link href="/contact" className="text-white text-opacity-60 hover:text-[#F9A03F] text-sm transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
