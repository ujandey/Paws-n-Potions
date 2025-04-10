import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Testimonial } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialSection: React.FC = () => {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  const renderTestimonial = (testimonial: Testimonial) => (
    <Card key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <div className="text-[#F9A03F]">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={`fas ${i < testimonial.rating ? 'fa-star' : i + 0.5 === testimonial.rating ? 'fa-star-half-alt' : 'fa-star text-gray-300'}`}
              ></i>
            ))}
          </div>
        </div>
        <p className="text-gray-600 mb-6 italic">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <Avatar className="w-12 h-12 rounded-full mr-4">
            <AvatarImage src={testimonial.imageUrl} alt={testimonial.name} />
            <AvatarFallback className="bg-[#4D7EA8] text-white">
              {testimonial.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="font-['Nunito'] font-semibold">{testimonial.name}</div>
            <div className="text-sm text-gray-500">{testimonial.role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderSkeletonTestimonial = (idx: number) => (
    <Card key={idx} className="bg-white p-6 rounded-lg shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-3/4 mb-6" />
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full mr-4" />
          <div>
            <Skeleton className="h-5 w-24 mb-1" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-16 bg-[#4D7EA8] bg-opacity-5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#4D7EA8] mb-4">From Fellow Dog Parents</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hear from other first-time dog owners who found our resources helpful.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading
            ? Array(3).fill(0).map((_, idx) => renderSkeletonTestimonial(idx))
            : testimonials?.map(testimonial => renderTestimonial(testimonial))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
