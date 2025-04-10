import React, { FormEvent, useState } from "react";
import { Link } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

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
