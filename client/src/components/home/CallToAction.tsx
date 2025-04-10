import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-[#F9A03F]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-6">Ready to Begin Your Dog Parent Journey?</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Join thousands of first-time dog owners who are confidently navigating the joys and challenges of dog parenthood with our comprehensive guides.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-[#F9A03F] hover:bg-opacity-90 font-['Nunito'] font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-center h-auto">
              <Link href="/get-started">Get Started Guide</Link>
            </Button>
            <Button className="bg-[#4D7EA8] text-white hover:bg-opacity-90 font-['Nunito'] font-bold py-3 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl text-center h-auto">
              <Link href="/contact">Join Community</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
