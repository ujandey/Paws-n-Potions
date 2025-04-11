import React from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Guide } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

const GuidePreview: React.FC = () => {
  const { data: guides, isLoading } = useQuery<Guide[]>({
    queryKey: ['/api/guides'],
  });

  // Get the first 3 guides for the preview
  const featuredGuides = guides?.slice(0, 3);

  const renderGuideItem = (guide: Guide) => (
    <div key={guide.id} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img 
        src={guide.imageUrl || "https://via.placeholder.com/800x450"} 
        alt={guide.title} 
        className="w-full h-48 object-cover" 
        width="800" 
        height="450"
      />
      <div className="p-6 bg-white">
        <div className="flex items-center mb-4">
          <div className="bg-[#F9A03F] bg-opacity-10 p-2 rounded-full mr-3">
            <i className={`fas ${getCategoryIcon(guide.category)} text-[#F9A03F]`}></i>
          </div>
          <h3 className="font-['Nunito'] font-bold text-xl">{guide.title}</h3>
        </div>
        <p className="text-gray-600 mb-4">
          {guide.summary}
        </p>
        <ul className="space-y-2 mb-6">
          {generateBulletPoints(guide.category).map((point, idx) => (
            <li key={idx} className="flex items-start">
              <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
              <span className="text-gray-600">{point}</span>
            </li>
          ))}
        </ul>
        <Link href={`/${guide.category}/${guide.id}`} className="inline-block bg-[#4D7EA8] hover:bg-opacity-90 text-white font-['Nunito'] font-semibold py-2 px-4 rounded-lg transition-colors">
          Read Full Guide
        </Link>
      </div>
    </div>
  );

  const renderSkeletonItem = () => (
    <div className="rounded-lg overflow-hidden shadow-md">
      <Skeleton className="w-full h-48" />
      <div className="p-6 bg-white">
        <div className="flex items-center mb-4">
          <Skeleton className="h-10 w-10 rounded-full mr-3" />
          <Skeleton className="h-6 w-48" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-4" />
        <div className="space-y-2 mb-6">
          <div className="flex items-start">
            <Skeleton className="h-4 w-4 mr-2 mt-1" />
            <Skeleton className="h-4 w-3/4" />
          </div>
          <div className="flex items-start">
            <Skeleton className="h-4 w-4 mr-2 mt-1" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="flex items-start">
            <Skeleton className="h-4 w-4 mr-2 mt-1" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>
        <Skeleton className="h-10 w-32" />
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#4D7EA8] mb-4">Essential Guides for New Dog Parents</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Browse our most popular guides to help you navigate the first weeks and months with your new best friend.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading
            ? Array(3).fill(0).map((_, idx) => <div key={`skeleton-${idx}`}>{renderSkeletonItem()}</div>)
            : featuredGuides?.map(guide => <div key={`guide-${guide.id}`}>{renderGuideItem(guide)}</div>)}
        </div>

        <div className="text-center mt-10">
          <Link href="/guides" className="inline-block bg-white border-2 border-[#4D7EA8] text-[#4D7EA8] hover:bg-[#4D7EA8] hover:text-white font-['Nunito'] font-semibold py-3 px-6 rounded-lg transition-colors">
            View All Guides
          </Link>
        </div>
      </div>
    </section>
  );
};

// Helper functions
function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    "feeding": "fa-utensils",
    "training": "fa-graduation-cap",
    "health": "fa-heartbeat",
    "budget": "fa-dollar-sign",
    "bonding": "fa-heart",
    "grooming": "fa-shower"
  };
  
  return icons[category] || "fa-paw";
}

function generateBulletPoints(category: string): string[] {
  const bulletPoints: Record<string, string[]> = {
    "feeding": [
      "Age-appropriate feeding schedules",
      "Dry vs. wet food considerations",
      "Toxic foods checklist"
    ],
    "training": [
      "Potty training techniques",
      "Basic commands (sit, stay, come)",
      "Stopping destructive behaviors"
    ],
    "health": [
      "Vaccination schedule",
      "When to call the vet",
      "Preventative care tips"
    ],
    "budget": [
      "One-time startup costs",
      "Monthly expense estimates",
      "Emergency fund planning"
    ],
    "bonding": [
      "Understanding dog body language",
      "Building trust with your new dog",
      "Playtime activities for bonding"
    ],
    "grooming": [
      "Breed-specific grooming needs",
      "Bathing frequency guidelines",
      "Tools you'll need for home grooming"
    ]
  };
  
  return bulletPoints[category] || [
    "Comprehensive information",
    "Expert-backed advice",
    "Practical tips and guidance"
  ];
}

export default GuidePreview;
