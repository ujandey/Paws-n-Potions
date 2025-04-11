export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: number
          username: string
          password: string
          email: string | null
          created_at: string
        }
        Insert: {
          id?: number
          username: string
          password: string
          email?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          username?: string
          password?: string
          email?: string | null
          created_at?: string
        }
        Relationships: []
      }
      breeds: {
        Row: {
          id: number
          name: string
          size: string
          temperament: string
          exercise_needs: string
          grooming_needs: string
          trainability: string
          good_with: string | null
          lifespan: string | null
          description: string | null
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          size: string
          temperament: string
          exercise_needs: string
          grooming_needs: string
          trainability: string
          good_with?: string | null
          lifespan?: string | null
          description?: string | null
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          size?: string
          temperament?: string
          exercise_needs?: string
          grooming_needs?: string
          trainability?: string
          good_with?: string | null
          lifespan?: string | null
          description?: string | null
          image_url?: string | null
          created_at?: string
        }
        Relationships: []
      }
      guides: {
        Row: {
          id: number
          title: string
          content: string
          category: string
          summary: string | null
          is_featured: boolean
          image_url: string | null
          created_at: string
        }
        Insert: {
          id?: number
          title: string
          content: string
          category: string
          summary?: string | null
          is_featured?: boolean
          image_url?: string | null
          created_at?: string
        }
        Update: {
          id?: number
          title?: string
          content?: string
          category?: string
          summary?: string | null
          is_featured?: boolean
          image_url?: string | null
          created_at?: string
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          id: number
          name: string
          role: string
          content: string
          image_url: string | null
          rating: number | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          role: string
          content: string
          image_url?: string | null
          rating?: number | null
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          role?: string
          content?: string
          image_url?: string | null
          rating?: number | null
          created_at?: string
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          id: number
          name: string
          email: string
          subject: string | null
          message: string
          user_id: number | null
          created_at: string
        }
        Insert: {
          id?: number
          name: string
          email: string
          subject?: string | null
          message: string
          user_id?: number | null
          created_at?: string
        }
        Update: {
          id?: number
          name?: string
          email?: string
          subject?: string | null
          message?: string
          user_id?: number | null
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_submissions_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      saved_breeds: {
        Row: {
          id: number
          user_id: number
          breed_id: number
          created_at: string
        }
        Insert: {
          id?: number
          user_id: number
          breed_id: number
          created_at?: string
        }
        Update: {
          id?: number
          user_id?: number
          breed_id?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_breeds_breed_id_fkey"
            columns: ["breed_id"]
            referencedRelation: "breeds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_breeds_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      saved_guides: {
        Row: {
          id: number
          user_id: number
          guide_id: number
          created_at: string
        }
        Insert: {
          id?: number
          user_id: number
          guide_id: number
          created_at?: string
        }
        Update: {
          id?: number
          user_id?: number
          guide_id?: number
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "saved_guides_guide_id_fkey"
            columns: ["guide_id"]
            referencedRelation: "guides"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "saved_guides_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
    CompositeTypes: {}
  }
}