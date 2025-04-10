// Common interfaces for static data

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  tags: string[];
}

export interface FeedingTip {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface DogFoodType {
  id: number;
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  bestFor: string[];
  imageUrl: string;
}

export interface TrainingCommand {
  id: number;
  name: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  description: string;
  steps: string[];
  tips: string[];
  imageUrl: string;
}

export interface TrainingPhase {
  id: number;
  title: string;
  ageRange: string;
  description: string;
  keyFocus: string[];
  icon: string;
}

export interface CommonIllness {
  id: number;
  name: string;
  symptoms: string[];
  whenToVisitVet: string;
  prevention: string[];
  icon: string;
}

export interface VaccinationInfo {
  id: number;
  name: string;
  when: string;
  description: string;
  isCore: boolean;
}

export interface ExpenseItem {
  id: number;
  name: string;
  category: "one-time" | "monthly" | "annual" | "emergency";
  estimatedCostLow: number;
  estimatedCostHigh: number;
  description: string;
  isEssential: boolean;
}

// Feeding page data
export const feedingTips: FeedingTip[] = [
  {
    id: 1,
    title: "Feed Appropriate Portions",
    description: "Measure food carefully to avoid overfeeding. Follow packaging guidelines but adjust based on your dog's activity level and weight.",
    icon: "fa-balance-scale"
  },
  {
    id: 2,
    title: "Consistent Feeding Times",
    description: "Keep meals on a regular schedule. Most adult dogs do well with two meals a day, while puppies need more frequent feeding.",
    icon: "fa-clock"
  },
  {
    id: 3,
    title: "Transition Food Gradually",
    description: "When switching foods, do it slowly over 7-10 days to avoid digestive upset. Start with 75% old food, 25% new, and gradually increase the new food.",
    icon: "fa-exchange-alt"
  },
  {
    id: 4,
    title: "Fresh Water Always",
    description: "Keep clean, fresh water available at all times, and wash water bowls daily to prevent bacteria growth.",
    icon: "fa-tint"
  },
  {
    id: 5,
    title: "Limit Treats",
    description: "Treats should make up no more than 10% of your dog's daily caloric intake to maintain a balanced diet.",
    icon: "fa-cookie"
  },
  {
    id: 6,
    title: "Know Toxic Foods",
    description: "Many human foods are dangerous for dogs, including chocolate, grapes, onions, and xylitol (in sugar-free products).",
    icon: "fa-skull-crossbones"
  }
];

export const dogFoodTypes: DogFoodType[] = [
  {
    id: 1,
    name: "Dry Kibble",
    description: "Convenient and cost-effective with a long shelf life. Available in various formulations for different life stages and health conditions.",
    pros: ["Convenient", "Cost-effective", "Good dental benefits", "Long shelf life"],
    cons: ["Lower moisture content", "May contain more fillers", "Some brands use low-quality ingredients"],
    bestFor: ["Most adult dogs", "Budget-conscious owners", "Dogs who need dental help"],
    imageUrl: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Wet/Canned Food",
    description: "Higher moisture content makes it beneficial for hydration. Good option for dogs with dental issues or those who need more water intake.",
    pros: ["High moisture content", "Palatable", "Easier to eat for seniors or dogs with dental issues"],
    cons: ["More expensive", "Shorter shelf life once opened", "Can promote plaque if used exclusively"],
    bestFor: ["Senior dogs", "Dogs with dental problems", "Picky eaters"],
    imageUrl: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Raw Diet",
    description: "Consists of uncooked meat, bones, fruits, and vegetables. Mimics a dog's ancestral diet but requires careful handling and balancing.",
    pros: ["Minimally processed", "High protein", "Can improve coat and energy levels"],
    cons: ["Risk of bacteria", "Expensive", "Requires careful nutritional balancing"],
    bestFor: ["Dogs with specific allergies", "Owners committed to research", "Dogs with certain digestive issues"],
    imageUrl: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Home-Cooked Meals",
    description: "Custom-prepared meals allow control over ingredients but must be nutritionally balanced with proper supplements.",
    pros: ["Control over ingredients", "Good for dogs with multiple allergies", "Highly palatable"],
    cons: ["Time-consuming", "Risk of nutritional imbalance", "Expensive"],
    bestFor: ["Dogs with multiple food sensitivities", "Owners who can consult with a veterinary nutritionist"],
    imageUrl: "https://images.unsplash.com/photo-1548946526-f69e2424cf45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const toxicFoods = [
  { name: "Chocolate", description: "Contains theobromine, which dogs cannot metabolize effectively. Can cause vomiting, diarrhea, heart problems, seizures, and even death." },
  { name: "Grapes & Raisins", description: "Can cause kidney failure in dogs. Even small amounts can be toxic." },
  { name: "Onions & Garlic", description: "Contain compounds that can damage red blood cells and cause anemia." },
  { name: "Xylitol", description: "Found in sugar-free products. Can cause insulin release, leading to liver failure and hypoglycemia." },
  { name: "Alcohol", description: "Even small amounts can cause intoxication, vomiting, diarrhea, central nervous system depression, and even death." },
  { name: "Caffeine", description: "Found in coffee, tea, and some sodas. Can cause restlessness, rapid breathing, heart palpitations, muscle tremors, and bleeding." },
  { name: "Macadamia Nuts", description: "Can cause weakness, hyperthermia, vomiting, and inability to walk." },
  { name: "Avocado", description: "Contains persin, which can cause vomiting and diarrhea in dogs." }
];

// Training page data
export const trainingPhases: TrainingPhase[] = [
  {
    id: 1,
    title: "Puppy Basics (8-16 weeks)",
    ageRange: "8-16 weeks",
    description: "Focus on socialization, basic commands, and positive reinforcement. This critical period shapes your puppy's future behavior.",
    keyFocus: ["Name recognition", "Potty training", "Socialization", "Gentle handling"],
    icon: "fa-baby"
  },
  {
    id: 2,
    title: "Foundation Building (4-6 months)",
    ageRange: "4-6 months",
    description: "Build on basics while addressing adolescent behavior. Consistency is key as your puppy tests boundaries.",
    keyFocus: ["Basic commands (sit, stay, come)", "Leash training", "Preventing jumping", "Crate training"],
    icon: "fa-school"
  },
  {
    id: 3,
    title: "Adolescent Training (6-12 months)",
    ageRange: "6-12 months",
    description: "Reinforce rules and expand training as your dog enters the teenage phase. Patience is essential during this challenging period.",
    keyFocus: ["Reinforcing basic obedience", "Impulse control", "Loose leash walking", "Leave it command"],
    icon: "fa-graduation-cap"
  },
  {
    id: 4,
    title: "Advanced Skills (1+ years)",
    ageRange: "1+ years",
    description: "Focus on advanced commands and off-leash reliability. Build on your strong foundation with more complex skills.",
    keyFocus: ["Off-leash reliability", "Distance commands", "Advanced tricks", "Proofing in distracting environments"],
    icon: "fa-award"
  }
];

export const trainingCommands: TrainingCommand[] = [
  {
    id: 1,
    name: "Sit",
    difficulty: "beginner",
    description: "One of the first commands to teach. It's a fundamental control position and useful in many situations.",
    steps: [
      "Hold a treat close to your dog's nose",
      "Move your hand up, causing their head to follow and bottom to lower",
      "Once they're in sitting position, say 'sit,' give the treat, and praise",
      "Repeat several times daily until they respond to just the verbal command"
    ],
    tips: [
      "Keep training sessions short (5-10 minutes)",
      "Practice in different locations to generalize the command",
      "Never physically force your dog into position"
    ],
    imageUrl: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Stay",
    difficulty: "beginner",
    description: "Teaches impulse control and can be a lifesaver in dangerous situations.",
    steps: [
      "Ask your dog to sit",
      "Open your palm in front of their face and say 'stay'",
      "Take a step back, then return and reward if they stayed",
      "Gradually increase distance, duration, and distractions"
    ],
    tips: [
      "Use a release word like 'okay' or 'free' to end the stay",
      "Build duration before distance or distractions",
      "Set your dog up for success with gradual increases in difficulty"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551887373-3c5bd224f6e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Come",
    difficulty: "intermediate",
    description: "Recall is crucial for safety and off-leash activities. It should be reinforced consistently throughout your dog's life.",
    steps: [
      "Start in a quiet area with minimal distractions",
      "Say your dog's name followed by 'come' in an upbeat tone",
      "When they come to you, reward generously with praise and a high-value treat",
      "Practice on a long line before attempting off-leash recall"
    ],
    tips: [
      "Never call your dog to you for something they dislike",
      "Make coming to you the best thing ever with excellent rewards",
      "Practice recalls randomly throughout the day"
    ],
    imageUrl: "https://images.unsplash.com/photo-1562176566-e9afd27531d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Leave It",
    difficulty: "intermediate",
    description: "Teaches your dog to ignore something they want to investigate or eat. Critical for preventing ingestion of harmful items.",
    steps: [
      "Place a treat in your closed fist and present it to your dog",
      "When they stop trying to get it and pull away, say 'leave it' and reward with a DIFFERENT treat",
      "Progress to placing treats on the floor, covered by your hand",
      "Finally, place treats on the floor uncovered but correct with 'leave it' if they go for it"
    ],
    tips: [
      "Always reward with a different treat than the one they're leaving",
      "Gradually increase the value of the item they must leave",
      "Practice with different items, not just food"
    ],
    imageUrl: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

// Health page data
export const commonIllnesses: CommonIllness[] = [
  {
    id: 1,
    name: "Kennel Cough",
    symptoms: ["Persistent dry cough", "Retching or gagging", "Nasal discharge", "Lethargy", "Decreased appetite"],
    whenToVisitVet: "If coughing persists more than a few days, if your dog has difficulty breathing, or if they show signs of lethargy or loss of appetite.",
    prevention: ["Vaccination", "Avoid contact with infected dogs", "Clean water and food bowls regularly"],
    icon: "fa-lungs"
  },
  {
    id: 2,
    name: "Ear Infections",
    symptoms: ["Head shaking", "Scratching at ears", "Redness or swelling", "Discharge or odor", "Pain when ears are touched"],
    whenToVisitVet: "If you notice any of these symptoms, as ear infections rarely clear up without treatment and can become very painful.",
    prevention: ["Regular ear cleaning for prone breeds", "Dry ears thoroughly after swimming", "Address underlying allergies"],
    icon: "fa-deaf"
  },
  {
    id: 3,
    name: "Gastroenteritis",
    symptoms: ["Vomiting", "Diarrhea", "Lethargy", "Decreased appetite", "Abdominal pain"],
    whenToVisitVet: "If symptoms last more than 24 hours, if there's blood in vomit or stool, or if your dog is very young, old, or has other health issues.",
    prevention: ["Prevent access to trash and non-food items", "Avoid sudden diet changes", "Maintain regular parasite prevention"],
    icon: "fa-stomach"
  },
  {
    id: 4,
    name: "Dental Disease",
    symptoms: ["Bad breath", "Yellow or brown tartar on teeth", "Red, swollen gums", "Difficulty eating", "Loose teeth"],
    whenToVisitVet: "If you notice significant tartar buildup, very red gums, or your dog has difficulty eating.",
    prevention: ["Regular tooth brushing", "Dental chews", "Annual dental checkups", "Professional cleanings as recommended"],
    icon: "fa-tooth"
  },
  {
    id: 5,
    name: "Parvovirus",
    symptoms: ["Severe, often bloody diarrhea", "Vomiting", "High fever", "Extreme lethargy", "Dehydration"],
    whenToVisitVet: "IMMEDIATELY - this is a life-threatening emergency, especially for puppies.",
    prevention: ["Complete puppy vaccination series", "Avoid unvaccinated dogs until fully vaccinated", "Clean contaminated areas with bleach solution"],
    icon: "fa-virus"
  }
];

export const vaccinationInfo: VaccinationInfo[] = [
  {
    id: 1,
    name: "Rabies",
    when: "First at 12-16 weeks, then 1 year later, then every 1-3 years depending on local laws",
    description: "Protects against rabies virus, which is fatal and can be transmitted to humans. Required by law in most areas.",
    isCore: true
  },
  {
    id: 2,
    name: "DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus)",
    when: "Series starting at 6-8 weeks, given every 2-4 weeks until 16 weeks, then booster at 1 year and every 1-3 years after",
    description: "Protects against several serious and potentially fatal diseases. Considered essential for all dogs.",
    isCore: true
  },
  {
    id: 3,
    name: "Bordetella (Kennel Cough)",
    when: "As early as 8 weeks, with boosters every 6-12 months depending on risk factors",
    description: "Prevents most common cause of kennel cough. Often required for boarding, grooming, and doggy daycare.",
    isCore: false
  },
  {
    id: 4,
    name: "Leptospirosis",
    when: "Initial vaccination, then booster 2-4 weeks later, then annually",
    description: "Protects against bacterial infection that affects kidneys and liver. Recommended for dogs with outdoor exposure, especially to wildlife or standing water.",
    isCore: false
  },
  {
    id: 5,
    name: "Lyme Disease",
    when: "Initial vaccination, then booster 2-4 weeks later, then annually",
    description: "Recommended in areas with high tick populations and Lyme disease prevalence.",
    isCore: false
  },
  {
    id: 6,
    name: "Canine Influenza",
    when: "Two initial vaccinations 2-4 weeks apart, then annual boosters",
    description: "Recommended for highly social dogs or those in areas with outbreaks.",
    isCore: false
  }
];

// Budget page data
export const expenseItems: ExpenseItem[] = [
  // One-time costs
  {
    id: 1,
    name: "Adoption/Purchase Fee",
    category: "one-time",
    estimatedCostLow: 50,
    estimatedCostHigh: 3000,
    description: "Varies widely depending on source—shelters are least expensive, while purebred puppies from breeders cost more.",
    isEssential: true
  },
  {
    id: 2,
    name: "Initial Vaccinations",
    category: "one-time",
    estimatedCostLow: 75,
    estimatedCostHigh: 200,
    description: "Puppy vaccine series including rabies, DHPP, and others depending on your location and lifestyle.",
    isEssential: true
  },
  {
    id: 3,
    name: "Spay/Neuter",
    category: "one-time",
    estimatedCostLow: 50,
    estimatedCostHigh: 500,
    description: "Cost varies based on location, facility, and dog's size. Many shelters offer discounted options.",
    isEssential: true
  },
  {
    id: 4,
    name: "Microchipping",
    category: "one-time",
    estimatedCostLow: 25,
    estimatedCostHigh: 60,
    description: "One-time insertion fee (may include registration).",
    isEssential: true
  },
  {
    id: 5,
    name: "Initial Supplies",
    category: "one-time",
    estimatedCostLow: 150,
    estimatedCostHigh: 500,
    description: "Includes bed, crate, collar, leash, food bowls, toys, etc.",
    isEssential: true
  },
  {
    id: 6,
    name: "Training Classes",
    category: "one-time",
    estimatedCostLow: 100,
    estimatedCostHigh: 600,
    description: "Group or individual training sessions, typically sold in packages.",
    isEssential: false
  },
  
  // Monthly costs
  {
    id: 7,
    name: "Food",
    category: "monthly",
    estimatedCostLow: 20,
    estimatedCostHigh: 100,
    description: "Depends on dog size and food quality. Larger dogs and premium foods cost more.",
    isEssential: true
  },
  {
    id: 8,
    name: "Treats and Chews",
    category: "monthly",
    estimatedCostLow: 10,
    estimatedCostHigh: 50,
    description: "Includes training treats, dental chews, and recreational chews.",
    isEssential: true
  },
  {
    id: 9,
    name: "Preventative Medications",
    category: "monthly",
    estimatedCostLow: 25,
    estimatedCostHigh: 50,
    description: "Flea, tick, and heartworm prevention.",
    isEssential: true
  },
  {
    id: 10,
    name: "Pet Insurance",
    category: "monthly",
    estimatedCostLow: 25,
    estimatedCostHigh: 100,
    description: "Varies based on coverage level, dog's age, breed, and location.",
    isEssential: false
  },
  {
    id: 11,
    name: "Grooming",
    category: "monthly",
    estimatedCostLow: 0,
    estimatedCostHigh: 100,
    description: "Depends on breed. Some dogs need professional grooming every 4-8 weeks.",
    isEssential: true
  },
  
  // Annual costs
  {
    id: 12,
    name: "Veterinary Check-ups",
    category: "annual",
    estimatedCostLow: 100,
    estimatedCostHigh: 300,
    description: "Annual wellness exam, may include some vaccines and lab tests.",
    isEssential: true
  },
  {
    id: 13,
    name: "Vaccines",
    category: "annual",
    estimatedCostLow: 75,
    estimatedCostHigh: 250,
    description: "Annual boosters for rabies, DHPP, and non-core vaccines as recommended.",
    isEssential: true
  },
  {
    id: 14,
    name: "License/Registration",
    category: "annual",
    estimatedCostLow: 10,
    estimatedCostHigh: 30,
    description: "Required in most municipalities, usually cheaper for spayed/neutered pets.",
    isEssential: true
  },
  {
    id: 15,
    name: "Toys and Replacements",
    category: "annual",
    estimatedCostLow: 50,
    estimatedCostHigh: 200,
    description: "Replacing worn items including beds, toys, leashes, etc.",
    isEssential: true
  },
  
  // Emergency costs
  {
    id: 16,
    name: "Emergency Veterinary Care",
    category: "emergency",
    estimatedCostLow: 250,
    estimatedCostHigh: 5000,
    description: "Treatment for accidents, sudden illness, or emergency surgery. Costs vary widely based on condition.",
    isEssential: true
  },
  {
    id: 17,
    name: "Boarding/Pet Sitting",
    category: "emergency",
    estimatedCostLow: 25,
    estimatedCostHigh: 75,
    description: "Daily rate for care when you're away. Higher during holidays.",
    isEssential: false
  },
  {
    id: 18,
    name: "Specialized Treatments",
    category: "emergency",
    estimatedCostLow: 100,
    estimatedCostHigh: 3000,
    description: "For chronic conditions, allergies, or specialized care.",
    isEssential: false
  }
];

// Blog page data
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "5 Essential Tips for the First Week With Your New Puppy",
    excerpt: "Bringing home a new puppy is exciting but can be overwhelming. Here's how to make the transition smooth for both of you.",
    content: "Bringing home a new puppy is one of life's most exciting moments, but it can also be overwhelming for both you and your new furry family member. The first week sets the foundation for your relationship and establishes important routines. Here are five essential tips to help you navigate this critical period...",
    author: "Dr. Jessica Martinez, DVM",
    date: "April 15, 2023",
    category: "Puppies",
    imageUrl: "https://images.unsplash.com/photo-1591160690555-5debfba289f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Puppies", "New Dog", "Training", "First Week"]
  },
  {
    id: 2,
    title: "Understanding Your Dog's Body Language: What They're Really Telling You",
    excerpt: "Dogs communicate primarily through body language. Learn to decode these signals to better understand your pet's needs.",
    content: "While dogs can't speak our language, they're constantly communicating with us through body posture, facial expressions, tail position, and vocalizations. Learning to read these cues can help you respond appropriately to your dog's needs and prevent potential issues...",
    author: "Alex Thompson, Canine Behaviorist",
    date: "March 8, 2023",
    category: "Behavior",
    imageUrl: "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Behavior", "Communication", "Body Language"]
  },
  {
    id: 3,
    title: "The Truth About Grain-Free Diets: What Dog Owners Should Know",
    excerpt: "Grain-free dog foods have become popular, but are they actually beneficial? Get the facts before making dietary decisions.",
    content: "In recent years, grain-free dog foods have surged in popularity, marketed as more natural and healthier options. However, veterinary cardiologists have noticed a potential link between grain-free diets and dilated cardiomyopathy (DCM), a serious heart condition, in dogs not typically predisposed to it...",
    author: "Dr. Michael Reynolds, Veterinary Nutritionist",
    date: "February 22, 2023",
    category: "Nutrition",
    imageUrl: "https://images.unsplash.com/photo-1585846868832-2feb28d83ed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Nutrition", "Health", "Food"]
  },
  {
    id: 4,
    title: "How to Safely Socialize Your Puppy During a Pandemic",
    excerpt: "Socialization is crucial for puppies, but how do you do it safely with social distancing? Here are creative solutions.",
    content: "Proper socialization between 3-14 weeks of age is critical for a puppy's behavioral development, but pandemic restrictions have made traditional socialization challenging. The good news is that there are safe, creative ways to expose your puppy to new experiences while maintaining social distance...",
    author: "Samantha Wong, CPDT-KA",
    date: "January 12, 2023",
    category: "Training",
    imageUrl: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Socialization", "Puppies", "Training"]
  },
  {
    id: 5,
    title: "Senior Dog Care: Making Their Golden Years Comfortable",
    excerpt: "As dogs age, their needs change. Learn how to adjust care routines to keep your senior dog healthy and comfortable.",
    content: "Just like humans, dogs face unique challenges as they enter their senior years. With proper care and attention to their changing needs, you can help your aging companion maintain good quality of life and comfort. From dietary adjustments to exercise modifications, here's how to care for your senior dog...",
    author: "Dr. Patricia Lee, Geriatric Veterinary Specialist",
    date: "December 5, 2022",
    category: "Senior Care",
    imageUrl: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Senior Dogs", "Health", "Wellness"]
  },
  {
    id: 6,
    title: "DIY Dog Toys: Enrichment Activities on a Budget",
    excerpt: "Keep your dog mentally stimulated with these easy-to-make toys using items you already have at home.",
    content: "Mental stimulation is just as important as physical exercise for dogs. Enrichment activities prevent boredom, reduce destructive behaviors, and improve overall well-being. You don't need to spend a fortune on fancy toys – here are simple, effective DIY options using household items...",
    author: "Jamie Rodriguez, Canine Enrichment Specialist",
    date: "November 17, 2022",
    category: "Activities",
    imageUrl: "https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Enrichment", "Activities", "DIY", "Budget"]
  }
];
