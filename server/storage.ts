import {
  users, 
  breeds, 
  guides, 
  testimonials, 
  contactSubmissions,
  type User, 
  type InsertUser,
  type Breed,
  type InsertBreed,
  type Guide,
  type InsertGuide,
  type Testimonial,
  type InsertTestimonial,
  type ContactSubmission,
  type InsertContactSubmission
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Breed methods
  getAllBreeds(): Promise<Breed[]>;
  getBreedById(id: number): Promise<Breed | undefined>;
  getRecommendedBreeds(livingSpace: string, activityLevel: string, experience: string): Promise<Breed[]>;
  
  // Guide methods
  getAllGuides(category?: string): Promise<Guide[]>;
  getGuideById(id: number): Promise<Guide | undefined>;
  getFeaturedGuides(): Promise<Guide[]>;
  
  // Testimonial methods
  getAllTestimonials(): Promise<Testimonial[]>;
  
  // Contact methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private breeds: Map<number, Breed>;
  private guides: Map<number, Guide>;
  private testimonials: Map<number, Testimonial>;
  private contactSubmissions: Map<number, ContactSubmission>;
  
  private userCurrentId: number;
  private breedCurrentId: number;
  private guideCurrentId: number;
  private testimonialCurrentId: number;
  private contactSubmissionCurrentId: number;

  constructor() {
    this.users = new Map();
    this.breeds = new Map();
    this.guides = new Map();
    this.testimonials = new Map();
    this.contactSubmissions = new Map();
    
    this.userCurrentId = 1;
    this.breedCurrentId = 1;
    this.guideCurrentId = 1;
    this.testimonialCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    
    // Initialize with default data
    this.initializeData();
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const createdAt = new Date();
    const user: User = { ...insertUser, id, createdAt };
    this.users.set(id, user);
    return user;
  }
  
  // Breed methods
  async getAllBreeds(): Promise<Breed[]> {
    return Array.from(this.breeds.values());
  }
  
  async getBreedById(id: number): Promise<Breed | undefined> {
    return this.breeds.get(id);
  }
  
  async getRecommendedBreeds(livingSpace: string, activityLevel: string, experience: string): Promise<Breed[]> {
    // Filter breeds based on parameters
    const allBreeds = Array.from(this.breeds.values());
    
    // Living space consideration
    let sizeFilter: string[] = [];
    if (livingSpace === 'apartment') {
      sizeFilter = ['small', 'medium'];
    } else if (livingSpace === 'house-small-yard') {
      sizeFilter = ['small', 'medium', 'large'];
    } else {
      // For larger spaces, any size is fine
      sizeFilter = ['small', 'medium', 'large'];
    }
    
    // Activity level consideration
    let energyFilter: string[] = [];
    if (activityLevel === 'sedentary') {
      energyFilter = ['low'];
    } else if (activityLevel === 'moderately-active') {
      energyFilter = ['low', 'medium'];
    } else if (activityLevel === 'active') {
      energyFilter = ['medium', 'high'];
    } else {
      energyFilter = ['high'];
    }
    
    // Experience level consideration
    let trainabilityFilter: string[] = [];
    if (experience === 'first-time') {
      trainabilityFilter = ['easy'];
    } else if (experience === 'some-experience') {
      trainabilityFilter = ['easy', 'moderate'];
    } else {
      trainabilityFilter = ['easy', 'moderate', 'difficult'];
    }
    
    // Apply filters
    const filteredBreeds = allBreeds.filter(breed => {
      return (
        sizeFilter.includes(breed.size) &&
        energyFilter.includes(breed.energyLevel) &&
        trainabilityFilter.includes(breed.trainability)
      );
    });
    
    // Return top matches (limit to 5)
    return filteredBreeds.slice(0, 5);
  }
  
  // Guide methods
  async getAllGuides(category?: string): Promise<Guide[]> {
    const allGuides = Array.from(this.guides.values());
    if (category) {
      return allGuides.filter(guide => guide.category === category);
    }
    return allGuides;
  }
  
  async getGuideById(id: number): Promise<Guide | undefined> {
    return this.guides.get(id);
  }
  
  async getFeaturedGuides(): Promise<Guide[]> {
    // Get a few guides to feature (for simplicity, just get the first 3)
    return Array.from(this.guides.values()).slice(0, 3);
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  // Contact methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const createdAt = new Date();
    const newSubmission: ContactSubmission = { ...submission, id, createdAt };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }
  
  // Initialize with sample data
  private initializeData(): void {
    // Add breeds
    const breedsData: InsertBreed[] = [
      {
        name: "Golden Retriever",
        description: "Friendly, intelligent, and devoted family dogs that are patient with children and eager to please.",
        size: "large",
        energyLevel: "medium",
        trainability: "easy",
        goodWithChildren: true,
        goodWithOtherDogs: true,
        shedding: "high",
        exerciseNeeds: "medium",
        imageUrl: "https://images.unsplash.com/photo-1558236714-d8f3f5f6d-bytes-7da8f3ca2e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Friendly", "Active", "Good for Families"],
        characteristics: ["Friendly", "Intelligent", "Loyal", "Good with children", "Playful"],
      },
      {
        name: "Labrador Retriever",
        description: "Outgoing, even-tempered, and athletic dogs that adapt well to many living situations.",
        size: "large",
        energyLevel: "high",
        trainability: "easy",
        goodWithChildren: true,
        goodWithOtherDogs: true,
        shedding: "medium",
        exerciseNeeds: "high",
        imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Adaptable", "Energetic", "Good for Beginners"],
        characteristics: ["Friendly", "Active", "Outgoing", "Gentle", "Intelligent"],
      },
      {
        name: "French Bulldog",
        description: "Playful, smart, adaptable, and completely irresistible companion dogs.",
        size: "small",
        energyLevel: "low",
        trainability: "moderate",
        goodWithChildren: true,
        goodWithOtherDogs: true,
        shedding: "low",
        exerciseNeeds: "low",
        imageUrl: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Apartment Friendly", "Low Energy", "Affectionate"],
        characteristics: ["Playful", "Alert", "Bright", "Easygoing", "Patient"],
      },
      {
        name: "Border Collie",
        description: "Highly intelligent, extremely energetic, acrobatic, and athletic working dogs.",
        size: "medium",
        energyLevel: "high",
        trainability: "easy",
        goodWithChildren: true,
        goodWithOtherDogs: true,
        shedding: "high",
        exerciseNeeds: "high",
        imageUrl: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Intelligent", "Working Dog", "Highly Active"],
        characteristics: ["Intelligent", "Tenacious", "Athletic", "Energetic", "Alert"],
      },
      {
        name: "Beagle",
        description: "Friendly, curious, and merry little hounds with big brown eyes and a gentle disposition.",
        size: "small",
        energyLevel: "medium",
        trainability: "moderate",
        goodWithChildren: true,
        goodWithOtherDogs: true,
        shedding: "medium",
        exerciseNeeds: "medium",
        imageUrl: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Family Friendly", "Good with Kids", "Curious"],
        characteristics: ["Merry", "Friendly", "Curious", "Companionable", "Determined"],
      },
      {
        name: "Cavalier King Charles Spaniel",
        description: "Affectionate, gentle, and graceful companion dogs that thrive on human contact.",
        size: "small",
        energyLevel: "low",
        trainability: "easy",
        goodWithChildren: true,
        goodWithOtherDogs: true,
        shedding: "medium",
        exerciseNeeds: "low",
        imageUrl: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        tags: ["Affectionate", "Gentle", "Lap Dog"],
        characteristics: ["Affectionate", "Gentle", "Graceful", "Sociable", "Adaptable"],
      }
    ];

    breedsData.forEach(breed => {
      const id = this.breedCurrentId++;
      this.breeds.set(id, { ...breed, id });
    });

    // Add guides
    const guidesData: InsertGuide[] = [
      {
        title: "Complete Feeding Guide",
        category: "feeding",
        content: "This comprehensive guide covers everything you need to know about feeding your dog, from puppyhood to adulthood, including what foods to avoid...",
        summary: "Everything you need to know about feeding your dog, from puppyhood to adulthood, including what foods to avoid.",
        imageUrl: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "First Month Training Plan",
        category: "training",
        content: "A step-by-step training guide for your first month together, focusing on essential commands and house training...",
        summary: "A step-by-step training guide for your first month together, focusing on essential commands and house training.",
        imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Healthcare Essentials",
        category: "health",
        content: "Critical health information every new dog owner needs, from vaccinations to recognizing symptoms of illness...",
        summary: "Critical health information every new dog owner needs, from vaccinations to recognizing symptoms of illness.",
        imageUrl: "https://images.unsplash.com/photo-1602306834394-6c8b7ea0d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Dog Ownership Budget Guide",
        category: "budget",
        content: "Plan ahead with our comprehensive breakdown of one-time and ongoing expenses of dog ownership...",
        summary: "Plan ahead with our comprehensive breakdown of one-time and ongoing expenses of dog ownership.",
        imageUrl: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Bonding With Your New Puppy",
        category: "bonding",
        content: "Build a strong relationship with your dog through quality time, play, and understanding their emotional needs...",
        summary: "Build a strong relationship with your dog through quality time, play, and understanding their emotional needs.",
        imageUrl: "https://images.unsplash.com/photo-1544464116-22a3dcd3d4cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Problem Behaviors and Solutions",
        category: "training",
        content: "How to address common behavioral issues like barking, chewing, jumping, and more...",
        summary: "How to address common behavioral issues like barking, chewing, jumping, and more.",
        imageUrl: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      }
    ];

    guidesData.forEach(guide => {
      const id = this.guideCurrentId++;
      const createdAt = new Date();
      this.guides.set(id, { ...guide, id, createdAt });
    });

    // Add testimonials
    const testimonialsData: InsertTestimonial[] = [
      {
        name: "Sarah M.",
        role: "First-time dog parent",
        content: "The breed chooser tool was spot on! We found our perfect match in a Cavalier King Charles Spaniel. The training guides helped us establish good habits from day one.",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/women/32.jpg",
      },
      {
        name: "Michael T.",
        role: "New pup parent",
        content: "As someone who had never owned a dog before, the budget calculator was a game-changer. It helped me prepare financially for all the expenses I didn't know about.",
        rating: 5,
        imageUrl: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        name: "Jamie K.",
        role: "Dog mom to Baxter",
        content: "The health guide saved us a late-night emergency vet visit. We were able to determine what was normal behavior for our new puppy and what needed professional attention.",
        rating: 4,
        imageUrl: "https://randomuser.me/api/portraits/women/68.jpg",
      }
    ];

    testimonialsData.forEach(testimonial => {
      const id = this.testimonialCurrentId++;
      this.testimonials.set(id, { ...testimonial, id });
    });
  }
}

export const storage = new MemStorage();
