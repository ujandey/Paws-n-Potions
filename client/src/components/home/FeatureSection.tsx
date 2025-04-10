import React from "react";
import { Link } from "wouter";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "fa-search",
    title: "Choosing the Right Breed",
    description: "Find the perfect match for your lifestyle, living situation, and personality with our breed matcher tool."
  },
  {
    icon: "fa-utensils",
    title: "Feeding Guidelines",
    description: "Learn what to feed your dog (and what to avoid) for optimal health, plus feeding schedules by age and breed."
  },
  {
    icon: "fa-graduation-cap",
    title: "Training Basics",
    description: "Master essential commands and establish good behavior patterns from day one with our proven training methods."
  },
  {
    icon: "fa-heartbeat",
    title: "Health & Wellness",
    description: "Keep your pup healthy with vaccination schedules, common symptom guides, and preventative care tips."
  },
  {
    icon: "fa-dollar-sign",
    title: "Budgeting & Costs",
    description: "Plan ahead with our comprehensive breakdown of one-time and ongoing expenses of dog ownership."
  },
  {
    icon: "fa-heart",
    title: "Bonding & Emotional Care",
    description: "Build a strong relationship with your dog through quality time, play, and understanding their emotional needs."
  }
];

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#4D7EA8] mb-4">What You'll Learn</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our comprehensive guides cover everything you need to know about caring for your new four-legged family member.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-[#4D7EA8] bg-opacity-10 p-3 rounded-full mr-4">
                  <i className={`fas ${feature.icon} text-[#4D7EA8] text-xl`}></i>
                </div>
                <h3 className="font-['Nunito'] font-bold text-xl text-[#4D7EA8]">{feature.title}</h3>
              </div>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <Link href={`/${feature.title.toLowerCase().replace(/\s+&\s+|\s+/g, '-')}`} className="inline-block mt-4 text-[#F9A03F] font-semibold hover:text-[#4D7EA8] transition-colors">
                Learn more <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
