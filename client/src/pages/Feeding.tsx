import React from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { feedingTips, dogFoodTypes, toxicFoods } from "@/lib/data";

const Feeding: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Feeding Guide - PawParents</title>
        <meta name="description" content="Complete feeding guide for dogs. Learn what to feed your dog, portion sizes, feeding schedules, and foods to avoid." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Dog Feeding Guide</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            Everything you need to know about providing balanced nutrition for your dog, from puppyhood through their senior years.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="basics">Feeding Basics</TabsTrigger>
            <TabsTrigger value="food-types">Types of Food</TabsTrigger>
            <TabsTrigger value="schedule">Feeding Schedule</TabsTrigger>
            <TabsTrigger value="toxic">Foods to Avoid</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basics">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Feeding Basics</CardTitle>
                    <CardDescription>Essential tips for feeding your dog properly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {feedingTips.map(tip => (
                        <div key={tip.id} className="flex space-x-4">
                          <div className="bg-[#4D7EA8] bg-opacity-10 p-3 h-12 w-12 flex items-center justify-center rounded-full flex-shrink-0">
                            <i className={`fas ${tip.icon} text-[#4D7EA8]`}></i>
                          </div>
                          <div>
                            <h3 className="font-['Nunito'] font-semibold text-lg mb-1">{tip.title}</h3>
                            <p className="text-gray-600 text-sm">{tip.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Adjusting Diet By Life Stage</CardTitle>
                    <CardDescription>Dogs have different nutritional needs as they grow</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-2">Puppies (0-12 months)</h3>
                        <p className="text-gray-600 mb-3">
                          Puppies need more calories, protein, and essential nutrients to support their rapid growth and development.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Feed 3-4 times daily until 6 months, then 2-3 times daily</li>
                          <li>Choose food labeled specifically for puppies</li>
                          <li>Large breed puppies need special formulations to prevent too-rapid growth</li>
                          <li>Follow package guidelines but adjust based on growth and body condition</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-2">Adult Dogs (1-7 years)</h3>
                        <p className="text-gray-600 mb-3">
                          Adult dogs require balanced nutrition to maintain health, energy, and ideal body condition.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Feed 1-2 times daily on a consistent schedule</li>
                          <li>Maintain consistent portions to prevent weight gain</li>
                          <li>Adjust amounts based on activity level and body condition</li>
                          <li>Consider breed-specific formulas for dogs with special needs</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-2">Senior Dogs (7+ years)</h3>
                        <p className="text-gray-600 mb-3">
                          Older dogs typically need fewer calories but higher quality nutrients to support aging bodies.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Consider senior-specific formulations with joint support</li>
                          <li>Reduce calories to prevent age-related weight gain</li>
                          <li>Smaller, more frequent meals may be easier to digest</li>
                          <li>Monitor weight closely and adjust portions accordingly</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">How to Evaluate Your Dog's Weight</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        You should be able to feel (but not see) your dog's ribs, and they should have a visible waist when viewed from above.
                      </p>
                      
                      <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Body Condition Score</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Rate your dog on a scale of 1-9:
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li><strong>1-3:</strong> Underweight - Ribs, spine, and hip bones highly visible</li>
                          <li><strong>4-5:</strong> Ideal - Ribs easily felt with slight fat covering, visible waist</li>
                          <li><strong>6-9:</strong> Overweight to obese - Ribs difficult to feel, no waist definition</li>
                        </ul>
                      </div>
                      
                      <Alert variant="warning" className="bg-amber-50">
                        <AlertTriangle className="h-4 w-4 text-amber-600" />
                        <AlertTitle className="text-amber-800">Weight Matters</AlertTitle>
                        <AlertDescription className="text-amber-700">
                          Obesity can reduce your dog's lifespan by up to 2.5 years and lead to many health problems.
                        </AlertDescription>
                      </Alert>
                      
                      <div className="mt-4">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Signs of Proper Nutrition</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li className="flex items-start">
                            <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                            <span>Healthy coat with minimal shedding</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                            <span>Good energy levels</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                            <span>Proper digestion (regular, firm stools)</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                            <span>Healthy skin without excessive itching</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                            <span>Maintaining ideal weight</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Quick Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-utensils text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Measure food precisely rather than eyeballing</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-clock text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Feed at the same times each day</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-thermometer-half text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Serve food at room temperature</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-hand-paper text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Limit treats to 10% of daily calories</span>
                      </li>
                      <li className="flex items-center py-1">
                        <i className="fas fa-sync-alt text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Change foods gradually over 7-10 days</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="food-types">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Types of Dog Food</CardTitle>
                    <CardDescription>Understanding your options and what might work best for your dog</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {dogFoodTypes.map(type => (
                        <Card key={type.id} className="border border-gray-200">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={type.imageUrl} 
                              alt={type.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle className="font-['Nunito'] text-[#4D7EA8]">{type.name}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">{type.description}</p>
                            
                            <div className="mb-3">
                              <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Pros</h4>
                              <ul className="space-y-1">
                                {type.pros.map((pro, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                                    <span className="text-gray-600 text-sm">{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="mb-3">
                              <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Cons</h4>
                              <ul className="space-y-1">
                                {type.cons.map((con, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <i className="fas fa-times text-red-500 mt-1 mr-2"></i>
                                    <span className="text-gray-600 text-sm">{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Best For</h4>
                              <div className="flex flex-wrap gap-2">
                                {type.bestFor.map((item, idx) => (
                                  <span key={idx} className="bg-[#4D7EA8] bg-opacity-10 text-[#4D7EA8] text-xs font-semibold px-2 py-1 rounded-full">
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">How to Choose the Right Food</CardTitle>
                    <CardDescription>Factors to consider when selecting food for your dog</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Life Stage</h3>
                        <p className="text-gray-600 mb-2">
                          Select food specifically formulated for your dog's life stage:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>Puppy/growth formulas</li>
                          <li>Adult maintenance</li>
                          <li>Senior/mature formulas</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Size and Breed</h3>
                        <p className="text-gray-600 mb-2">
                          Consider size-specific formulations:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>Small breed formulas (smaller kibble, higher energy density)</li>
                          <li>Large breed formulas (controlled growth, joint support)</li>
                          <li>Breed-specific formulas for certain genetic needs</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Health Considerations</h3>
                        <p className="text-gray-600 mb-2">
                          Special formulations for health concerns:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>Weight control</li>
                          <li>Joint support</li>
                          <li>Sensitive digestion</li>
                          <li>Food sensitivities/allergies</li>
                          <li>Dental health</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Quality Indicators</h3>
                        <p className="text-gray-600 mb-2">
                          Look for these quality signals on packaging:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>AAFCO statement (complete & balanced)</li>
                          <li>Named protein sources (e.g., "chicken" vs "meat")</li>
                          <li>No artificial preservatives, colors, or flavors</li>
                          <li>Appropriate fat-to-protein ratio</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Lifestyle & Activity</h3>
                        <p className="text-gray-600 mb-2">
                          Match caloric density to activity level:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>High-protein for very active dogs</li>
                          <li>Moderate calories for typical pets</li>
                          <li>Lower calorie for less active dogs</li>
                          <li>Performance formulas for working dogs</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gray-50 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Budget Considerations</h3>
                        <p className="text-gray-600 mb-2">
                          Finding the right balance:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                          <li>Higher quality often means higher cost</li>
                          <li>Consider price per day, not just bag cost</li>
                          <li>Better nutrition may reduce vet costs later</li>
                          <li>Ask your vet for recommendations within your budget</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <Alert className="bg-blue-50 border-blue-100">
                        <div className="flex items-center">
                          <i className="fas fa-info-circle text-blue-500 mr-2 text-lg"></i>
                          <AlertTitle className="text-blue-800 font-['Nunito'] font-semibold">Always Consult Your Veterinarian</AlertTitle>
                        </div>
                        <AlertDescription className="text-blue-700 mt-2">
                          Your veterinarian can provide personalized recommendations based on your dog's specific health needs, age, breed, and activity level. This is especially important if your dog has any health conditions or dietary sensitivities.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="schedule">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Feeding Schedules by Age</CardTitle>
                    <CardDescription>How often and how much to feed at different life stages</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-['Nunito'] font-bold text-lg text-[#4D7EA8] mb-3">Puppies (8-12 weeks)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Feeding Frequency</h4>
                            <p className="text-gray-600 mb-3">4 meals per day, evenly spaced</p>
                            
                            <h4 className="font-['Nunito'] font-semibold mb-2">Typical Schedule</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>7:00 AM - Breakfast</li>
                              <li>12:00 PM - Lunch</li>
                              <li>5:00 PM - Dinner</li>
                              <li>10:00 PM - Evening meal</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Amount Guidelines</h4>
                            <p className="text-gray-600 mb-2">
                              Follow package recommendations based on expected adult weight.
                            </p>
                            <p className="text-gray-600">
                              For a medium-sized breed puppy (expected adult weight 30-50 lbs):
                              <strong> 1/3 to 1/2 cup per meal</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-['Nunito'] font-bold text-lg text-[#4D7EA8] mb-3">Puppies (3-6 months)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Feeding Frequency</h4>
                            <p className="text-gray-600 mb-3">3 meals per day, evenly spaced</p>
                            
                            <h4 className="font-['Nunito'] font-semibold mb-2">Typical Schedule</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>7:00 AM - Breakfast</li>
                              <li>1:00 PM - Lunch</li>
                              <li>7:00 PM - Dinner</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Amount Guidelines</h4>
                            <p className="text-gray-600 mb-2">
                              Increase portions as puppy grows.
                            </p>
                            <p className="text-gray-600">
                              For a medium-sized breed puppy:
                              <strong> 2/3 to 1 cup per meal</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-['Nunito'] font-bold text-lg text-[#4D7EA8] mb-3">Puppies (6-12 months)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Feeding Frequency</h4>
                            <p className="text-gray-600 mb-3">2 meals per day</p>
                            
                            <h4 className="font-['Nunito'] font-semibold mb-2">Typical Schedule</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>7:00 AM - Breakfast</li>
                              <li>6:00 PM - Dinner</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Amount Guidelines</h4>
                            <p className="text-gray-600 mb-2">
                              Small breeds may be at adult weight; large breeds still growing.
                            </p>
                            <p className="text-gray-600">
                              For a medium-sized breed puppy:
                              <strong> 1 to 1.5 cups per meal</strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="font-['Nunito'] font-bold text-lg text-[#4D7EA8] mb-3">Adult Dogs (1+ years)</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Feeding Frequency</h4>
                            <p className="text-gray-600 mb-3">1-2 meals per day (2 recommended)</p>
                            
                            <h4 className="font-['Nunito'] font-semibold mb-2">Typical Schedule</h4>
                            <ul className="space-y-1 text-gray-600">
                              <li>7:00 AM - Breakfast</li>
                              <li>6:00 PM - Dinner</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Amount Guidelines</h4>
                            <p className="text-gray-600 mb-2">
                              Based on weight, activity level, and metabolism.
                            </p>
                            <p className="text-gray-600 mb-1">
                              <strong>Small dog (10-20 lbs):</strong> 1/2 to 1 cup daily
                            </p>
                            <p className="text-gray-600 mb-1">
                              <strong>Medium dog (30-50 lbs):</strong> 1.5 to 2.5 cups daily
                            </p>
                            <p className="text-gray-600">
                              <strong>Large dog (60-90 lbs):</strong> 3 to 4.5 cups daily
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Free Feeding vs. Scheduled Meals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Free Feeding</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Leaving food available at all times for your dog to eat when hungry.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <i className="fas fa-plus text-[#8BC34A] mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Convenient for owners</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-plus text-[#8BC34A] mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">May work for grazers who self-regulate</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-minus text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Can lead to obesity</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-minus text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Difficult to monitor food intake</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-minus text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Wet food spoils quickly</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Scheduled Feeding</h4>
                        <p className="text-sm text-gray-600 mb-3">
                          Providing meals at specific times each day.
                        </p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <i className="fas fa-plus text-[#8BC34A] mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Better weight control</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-plus text-[#8BC34A] mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Easier to monitor appetite changes</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-plus text-[#8BC34A] mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Helps establish bathroom routines</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-minus text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Requires consistent schedule</span>
                          </div>
                          <div className="flex items-start">
                            <i className="fas fa-minus text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">May not work for all lifestyles</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Recommendation</h4>
                        <p className="text-gray-600">
                          <strong>Most veterinarians recommend scheduled feeding</strong> for better weight management and health monitoring, especially for puppies, senior dogs, and breeds prone to obesity or bloat.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Water Considerations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Unlike food, clean fresh water should be available to your dog at all times.
                      </p>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold mb-2 text-blue-800">Daily Water Needs</h4>
                        <p className="text-sm text-gray-600 mb-2">
                          Dogs need approximately 1 ounce of water per pound of body weight per day.
                        </p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li><strong>20 lb dog:</strong> About 2.5 cups of water daily</li>
                          <li><strong>50 lb dog:</strong> About 6 cups of water daily</li>
                          <li><strong>75 lb dog:</strong> About 9 cups of water daily</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-['Nunito'] font-semibold mb-2">Water Tips</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <i className="fas fa-tint text-blue-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Clean and refill water bowl daily</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-tint text-blue-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Use stainless steel or ceramic bowls</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-tint text-blue-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Consider water fountains for reluctant drinkers</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-tint text-blue-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Bring water when traveling or exercising</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-tint text-blue-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Monitor water intake for changes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="toxic">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Foods Toxic to Dogs</CardTitle>
                <CardDescription>These foods can be dangerous or even fatal if consumed by your dog</CardDescription>
              </CardHeader>
              <CardContent>
                <Alert variant="destructive" className="mb-6">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertTitle>Emergency Information</AlertTitle>
                  <AlertDescription>
                    If you suspect your dog has ingested something toxic, contact your veterinarian or the ASPCA Animal Poison Control Center immediately at (888) 426-4435.
                  </AlertDescription>
                </Alert>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {toxicFoods.map((food, index) => (
                    <div key={index} className="border border-red-200 rounded-lg p-4 bg-red-50">
                      <div className="flex items-center mb-2">
                        <i className="fas fa-exclamation-triangle text-red-500 mr-2"></i>
                        <h3 className="font-['Nunito'] font-semibold text-lg text-red-800">{food.name}</h3>
                      </div>
                      <p className="text-gray-700 text-sm">{food.description}</p>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-8" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Signs of Poisoning in Dogs</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Vomiting or diarrhea</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Drooling or excessive salivation</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Loss of appetite</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Lethargy or weakness</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Pale or yellowish gums</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Rapid breathing or panting</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Seizures or tremors</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-exclamation-circle text-red-500 mt-1 mr-2"></i>
                        <span className="text-gray-700">Collapse or unconsciousness</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Steps to Take</h3>
                    <ol className="space-y-4">
                      <li className="bg-blue-50 p-3 rounded">
                        <div className="flex">
                          <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</span>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold text-blue-800">Remove access to the toxin</h4>
                            <p className="text-sm text-gray-700">Safely move your dog away from the toxin or remove the toxin from their reach.</p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="bg-blue-50 p-3 rounded">
                        <div className="flex">
                          <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</span>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold text-blue-800">Check vital signs</h4>
                            <p className="text-sm text-gray-700">Check if your dog is breathing normally and is conscious. Note any symptoms to report.</p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="bg-blue-50 p-3 rounded">
                        <div className="flex">
                          <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</span>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold text-blue-800">Call veterinarian or poison control</h4>
                            <p className="text-sm text-gray-700">Contact your vet or ASPCA Poison Control (888-426-4435) immediately. Have information about what and how much was consumed.</p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="bg-blue-50 p-3 rounded">
                        <div className="flex">
                          <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">4</span>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold text-blue-800">Follow professional advice</h4>
                            <p className="text-sm text-gray-700">Do not induce vomiting or administer any treatments unless specifically directed by a professional.</p>
                          </div>
                        </div>
                      </li>
                      
                      <li className="bg-blue-50 p-3 rounded">
                        <div className="flex">
                          <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0">5</span>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold text-blue-800">Transport safely</h4>
                            <p className="text-sm text-gray-700">If advised to seek immediate care, transport your dog calmly and safely to the veterinary clinic.</p>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
                
                <div className="mt-8 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <i className="fas fa-lightbulb text-yellow-600 mr-2 text-xl"></i>
                    <h3 className="font-['Nunito'] font-semibold text-lg">Prevention Tips</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Store human food securely out of reach</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Secure trash cans with locking lids</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Inform guests not to feed your dog table scraps</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Be cautious with purses/bags containing gum or medications</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Keep counter surfaces clear of food</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                      <span className="text-gray-700 text-sm">Train "leave it" command for dropped items</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Feeding;
