import { db } from './db';
import { eq } from 'drizzle-orm';
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
import { IStorage } from './storage';

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.id, id));
      return result[0];
    } catch (error) {
      console.error('Error fetching user:', error);
      return undefined;
    }
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await db.select().from(users).where(eq(users.username, username));
      return result[0];
    } catch (error) {
      console.error('Error fetching user by username:', error);
      return undefined;
    }
  }

  async createUser(user: InsertUser): Promise<User> {
    try {
      const result = await db.insert(users).values(user).returning();
      return result[0];
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error(`Error creating user: ${error}`);
    }
  }
  
  // Breed methods
  async getAllBreeds(): Promise<Breed[]> {
    try {
      return await db.select().from(breeds);
    } catch (error) {
      console.error('Error fetching all breeds:', error);
      return [];
    }
  }
  
  async getBreedById(id: number): Promise<Breed | undefined> {
    try {
      const result = await db.select().from(breeds).where(eq(breeds.id, id));
      return result[0];
    } catch (error) {
      console.error('Error fetching breed by id:', error);
      return undefined;
    }
  }
  
  async getRecommendedBreeds(livingSpace: string, activityLevel: string, experience: string): Promise<Breed[]> {
    try {
      // Fetch all breeds and filter in-memory
      const allBreeds = await db.select().from(breeds);
      
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
    } catch (error) {
      console.error('Error getting recommended breeds:', error);
      return [];
    }
  }
  
  // Guide methods
  async getAllGuides(category?: string): Promise<Guide[]> {
    try {
      if (category) {
        return await db.select().from(guides).where(eq(guides.category, category));
      } else {
        return await db.select().from(guides);
      }
    } catch (error) {
      console.error('Error fetching guides:', error);
      return [];
    }
  }
  
  async getGuideById(id: number): Promise<Guide | undefined> {
    try {
      const result = await db.select().from(guides).where(eq(guides.id, id));
      return result[0];
    } catch (error) {
      console.error('Error fetching guide by id:', error);
      return undefined;
    }
  }
  
  async getFeaturedGuides(): Promise<Guide[]> {
    try {
      // Simply get 3 guides for now - we'll add more sophisticated criteria later
      const result = await db.select().from(guides).limit(3);
      return result;
    } catch (error) {
      console.error('Error fetching featured guides:', error);
      return [];
    }
  }
  
  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    try {
      return await db.select().from(testimonials);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      return [];
    }
  }
  
  // Contact methods
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    try {
      const result = await db.insert(contactSubmissions).values(submission).returning();
      return result[0];
    } catch (error) {
      console.error('Error creating contact submission:', error);
      throw new Error(`Error creating contact submission: ${error}`);
    }
  }
}
