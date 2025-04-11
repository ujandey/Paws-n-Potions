import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  setupAuth(app);
  
  // API Routes - prefix all with /api
  
  // Get all breeds
  app.get("/api/breeds", async (req, res) => {
    try {
      const breeds = await storage.getAllBreeds();
      res.json(breeds);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch breeds" });
    }
  });

  // Get breed by ID
  app.get("/api/breeds/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid breed ID" });
      }
      
      const breed = await storage.getBreedById(id);
      if (!breed) {
        return res.status(404).json({ message: "Breed not found" });
      }
      
      res.json(breed);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch breed" });
    }
  });

  // Get breed recommendations based on criteria
  app.post("/api/breeds/recommend", async (req, res) => {
    try {
      const schema = z.object({
        livingSpace: z.string(),
        activityLevel: z.string(),
        experience: z.string(),
      });

      const result = schema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ message: "Invalid input criteria" });
      }

      const { livingSpace, activityLevel, experience } = result.data;
      const recommendedBreeds = await storage.getRecommendedBreeds(livingSpace, activityLevel, experience);
      
      res.json(recommendedBreeds);
    } catch (error) {
      res.status(500).json({ message: "Failed to get breed recommendations" });
    }
  });

  // Get all guides
  app.get("/api/guides", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const guides = await storage.getAllGuides(category);
      res.json(guides);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch guides" });
    }
  });

  // Get guide by ID
  app.get("/api/guides/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ message: "Invalid guide ID" });
      }
      
      const guide = await storage.getGuideById(id);
      if (!guide) {
        return res.status(404).json({ message: "Guide not found" });
      }
      
      res.json(guide);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch guide" });
    }
  });

  // Get featured guides
  app.get("/api/guides/featured", async (req, res) => {
    try {
      const featuredGuides = await storage.getFeaturedGuides();
      res.json(featuredGuides);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured guides" });
    }
  });

  // Get all testimonials
  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getAllTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSubmissionSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid contact form data", 
          errors: result.error.errors 
        });
      }
      
      const newSubmission = await storage.createContactSubmission(result.data);
      res.status(201).json(newSubmission);
    } catch (error) {
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
