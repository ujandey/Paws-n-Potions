-- Users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Breeds table
CREATE TABLE IF NOT EXISTS breeds (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  size VARCHAR(50) NOT NULL, -- small, medium, large
  temperament TEXT NOT NULL,
  exercise_needs VARCHAR(50) NOT NULL, -- low, medium, high
  grooming_needs VARCHAR(50) NOT NULL, -- low, medium, high
  trainability VARCHAR(50) NOT NULL, -- easy, moderate, difficult
  good_with TEXT, -- can be JSON or comma-separated values
  lifespan VARCHAR(50),
  description TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Guides table
CREATE TABLE IF NOT EXISTS guides (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(50) NOT NULL,
  summary TEXT,
  is_featured BOOLEAN DEFAULT FALSE,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  image_url TEXT,
  rating INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Contact Submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255),
  message TEXT NOT NULL,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Saved breeds by users (many-to-many relationship)
CREATE TABLE IF NOT EXISTS saved_breeds (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  breed_id INTEGER NOT NULL REFERENCES breeds(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, breed_id)
);

-- Saved guides by users (many-to-many relationship)
CREATE TABLE IF NOT EXISTS saved_guides (
  id SERIAL PRIMARY KEY,
  user_id INTEGER NOT NULL REFERENCES users(id),
  guide_id INTEGER NOT NULL REFERENCES guides(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  UNIQUE(user_id, guide_id)
);

-- Insert some sample data for breeds
INSERT INTO breeds (name, size, temperament, exercise_needs, grooming_needs, trainability, good_with, lifespan, description, image_url)
VALUES
  ('Golden Retriever', 'large', 'Friendly, intelligent, and devoted', 'medium', 'high', 'easy', 'children, other dogs, strangers', '10-12 years', 'Friendly, intelligent, and devoted family dogs that are patient with children and eager to please.', 'https://images.unsplash.com/photo-1558236714-d8f3f5f6d-bytes-7da8f3ca2e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Labrador Retriever', 'large', 'Outgoing, even-tempered, and athletic', 'high', 'medium', 'easy', 'children, other dogs, strangers', '10-12 years', 'Outgoing, even-tempered, and athletic dogs that adapt well to many living situations.', 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('French Bulldog', 'small', 'Playful, smart, adaptable', 'low', 'low', 'moderate', 'children, other dogs, strangers', '10-12 years', 'Playful, smart, adaptable, and completely irresistible companion dogs.', 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Border Collie', 'medium', 'Highly intelligent, extremely energetic', 'high', 'high', 'easy', 'children, other dogs', '12-15 years', 'Highly intelligent, extremely energetic, acrobatic, and athletic working dogs.', 'https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Beagle', 'small', 'Friendly, curious, and merry', 'medium', 'medium', 'moderate', 'children, other dogs, strangers', '12-15 years', 'Friendly, curious, and merry little hounds with big brown eyes and a gentle disposition.', 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Cavalier King Charles Spaniel', 'small', 'Affectionate, gentle, and graceful', 'low', 'medium', 'easy', 'children, other dogs, strangers, older people', '9-14 years', 'Affectionate, gentle, and graceful companion dogs that thrive on human contact.', 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');

-- Insert some sample data for guides
INSERT INTO guides (title, category, content, summary, is_featured, image_url)
VALUES
  ('Complete Feeding Guide', 'feeding', 'This comprehensive guide covers everything you need to know about feeding your dog, from puppyhood to adulthood, including what foods to avoid...', 'Everything you need to know about feeding your dog, from puppyhood to adulthood, including what foods to avoid.', TRUE, 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('First Month Training Plan', 'training', 'A step-by-step training guide for your first month together, focusing on essential commands and house training...', 'A step-by-step training guide for your first month together, focusing on essential commands and house training.', TRUE, 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Healthcare Essentials', 'health', 'Critical health information every new dog owner needs, from vaccinations to recognizing symptoms of illness...', 'Critical health information every new dog owner needs, from vaccinations to recognizing symptoms of illness.', TRUE, 'https://images.unsplash.com/photo-1602306834394-6c8b7ea0d799?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Dog Ownership Budget Guide', 'budget', 'Plan ahead with our comprehensive breakdown of one-time and ongoing expenses of dog ownership...', 'Plan ahead with our comprehensive breakdown of one-time and ongoing expenses of dog ownership.', FALSE, 'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Bonding With Your New Puppy', 'bonding', 'Build a strong relationship with your dog through quality time, play, and understanding their emotional needs...', 'Build a strong relationship with your dog through quality time, play, and understanding their emotional needs.', FALSE, 'https://images.unsplash.com/photo-1544464116-22a3dcd3d4cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'),
  ('Problem Behaviors and Solutions', 'training', 'How to address common behavioral issues like barking, chewing, jumping, and more...', 'How to address common behavioral issues like barking, chewing, jumping, and more.', FALSE, 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80');

-- Insert some sample data for testimonials
INSERT INTO testimonials (name, role, content, rating, image_url)
VALUES
  ('Sarah M.', 'First-time dog parent', 'The breed chooser tool was spot on! We found our perfect match in a Cavalier King Charles Spaniel. The training guides helped us establish good habits from day one.', 5, 'https://randomuser.me/api/portraits/women/32.jpg'),
  ('Michael T.', 'New pup parent', 'As someone who had never owned a dog before, the budget calculator was a game-changer. It helped me prepare financially for all the expenses I didn''t know about.', 5, 'https://randomuser.me/api/portraits/men/45.jpg'),
  ('Jamie K.', 'Dog mom to Baxter', 'The health guide saved us a late-night emergency vet visit. We were able to determine what was normal behavior for our new puppy and what needed professional attention.', 4, 'https://randomuser.me/api/portraits/women/68.jpg');