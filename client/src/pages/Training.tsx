import React from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { trainingPhases, trainingCommands } from "@/lib/data";

const Training: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dog Training Guide - PawParents</title>
        <meta name="description" content="Learn essential dog training techniques for all life stages. From basic commands to potty training and behavior problem solving." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Dog Training Guide</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            Establish good behavior from day one with our proven techniques, from basic commands to solving common issues.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="basics">Training Basics</TabsTrigger>
            <TabsTrigger value="commands">Essential Commands</TabsTrigger>
            <TabsTrigger value="phases">Training By Age</TabsTrigger>
            <TabsTrigger value="problems">Problem Behaviors</TabsTrigger>
          </TabsList>
          
          {/* Training Basics Tab */}
          <TabsContent value="basics">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Training Principles</CardTitle>
                    <CardDescription>Understanding the fundamentals of effective dog training</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Positive Reinforcement</h3>
                        <p className="text-gray-600 mb-3">
                          Reward behaviors you want to see more of with treats, praise, or play. This creates a positive association and makes your dog more likely to repeat the behavior.
                        </p>
                        <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                          <h4 className="font-['Nunito'] font-semibold mb-2">Key Points:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Rewards should be given immediately after the desired behavior</li>
                            <li>Use high-value treats for new or difficult behaviors</li>
                            <li>Gradually phase out food rewards as behaviors become established</li>
                            <li>Verbal praise and petting can eventually replace treats</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Consistency is Key</h3>
                        <p className="text-gray-600 mb-3">
                          Use the same cues, rewards, and boundaries consistently. All family members should follow the same rules to avoid confusing your dog.
                        </p>
                        <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                          <h4 className="font-['Nunito'] font-semibold mb-2">Tips for Consistency:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Create a "house rules" list for all family members to follow</li>
                            <li>Use the exact same words for commands (e.g., "off" vs. "down")</li>
                            <li>Establish regular training times</li>
                            <li>Be consistent with permitted behaviors (e.g., furniture access)</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Timing Matters</h3>
                        <p className="text-gray-600 mb-3">
                          Dogs associate rewards or corrections with what they're doing at that exact moment. Timing your response within 1-2 seconds is crucial for effective training.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-['Nunito'] font-semibold text-green-800 mb-2">Good Timing Example</h4>
                            <p className="text-gray-600 text-sm">
                              Your dog sits when asked → You immediately say "Good!" and give a treat → Dog understands sitting on command earns rewards
                            </p>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-['Nunito'] font-semibold text-red-800 mb-2">Poor Timing Example</h4>
                            <p className="text-gray-600 text-sm">
                              Your dog sits when asked → You get the treat from another room → Dog has already stood up when rewarded → Dog is confused about what behavior earned the reward
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Keep Sessions Short</h3>
                        <p className="text-gray-600 mb-3">
                          Dogs have limited attention spans. Multiple 5-10 minute training sessions throughout the day are more effective than one long session.
                        </p>
                        <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                          <h4 className="font-['Nunito'] font-semibold mb-2">Recommended Session Lengths:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li><strong>Puppies:</strong> 5 minutes per session, 2-3 times daily</li>
                            <li><strong>Adult dogs:</strong> 10-15 minutes per session, 1-2 times daily</li>
                            <li>End on a positive note with a behavior they know well</li>
                            <li>Take a break if either of you gets frustrated</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Potty Training Guide</CardTitle>
                    <CardDescription>A step-by-step approach to successful house training</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-[#F9A03F] bg-opacity-10 p-5 rounded-lg">
                        <h3 className="font-['Nunito'] font-semibold text-lg text-[#F9A03F] mb-3">The Basics of Potty Training</h3>
                        <p className="text-gray-600 mb-3">
                          Successful potty training relies on consistency, positive reinforcement, and preventing accidents. Most puppies can be reliably house trained by 4-6 months of age.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-['Nunito'] font-semibold text-lg mb-3">Potty Training Schedule</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">1</div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Take your puppy out frequently:</p>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600 mt-1">
                                <li>First thing in the morning</li>
                                <li>Last thing at night</li>
                                <li>After meals</li>
                                <li>After naps</li>
                                <li>After playtime</li>
                                <li>Every 1-2 hours while awake (for young puppies)</li>
                              </ul>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">2</div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Pick a designated potty spot:</p>
                              <p className="text-gray-600 mt-1">
                                Always take your dog to the same area to eliminate. Their scent will prompt them to go again in that location.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">3</div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Use a consistent command:</p>
                              <p className="text-gray-600 mt-1">
                                Say "go potty" or another specific phrase each time. This will eventually become a cue for them to eliminate.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">4</div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Reward success immediately:</p>
                              <p className="text-gray-600 mt-1">
                                Praise enthusiastically and offer a small treat as soon as your dog finishes eliminating outdoors.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] w-7 h-7 rounded-full flex items-center justify-center text-white font-semibold mr-3 flex-shrink-0">5</div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Supervise or confine indoors:</p>
                              <p className="text-gray-600 mt-1">
                                When you can't watch your puppy, use a crate or pen to prevent accidents. Most dogs won't soil their sleeping area.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <Alert className="bg-amber-50 border-amber-200">
                        <div className="flex items-center">
                          <i className="fas fa-exclamation-circle text-amber-500 mr-2"></i>
                          <AlertTitle className="text-amber-800">Handling Accidents</AlertTitle>
                        </div>
                        <AlertDescription className="text-amber-700 mt-2">
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Never punish accidents - this can create fear and make training harder</li>
                            <li>If you catch your dog in the act, calmly interrupt and take them outside</li>
                            <li>Clean accidents thoroughly with an enzymatic cleaner to remove odors</li>
                            <li>If accidents increase, consult your vet to rule out medical issues</li>
                          </ul>
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Training Equipment</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-['Nunito'] font-semibold mb-2">Essential Training Tools</h4>
                        <ul className="space-y-3">
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-cookie text-[#F9A03F] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">High-Value Treats</p>
                              <p className="text-sm text-gray-600">Small, soft, and smelly treats work best for training.</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-leash text-[#F9A03F] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Training Leash</p>
                              <p className="text-sm text-gray-600">A 6ft leash for everyday training and a long 15-30ft line for recall practice.</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-cut text-[#F9A03F] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Treat Pouch</p>
                              <p className="text-sm text-gray-600">Keeps treats accessible for quick rewards.</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-home text-[#F9A03F] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Crate & Baby Gates</p>
                              <p className="text-sm text-gray-600">For management and preventing unwanted behaviors.</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1">
                            <i className="fas fa-bell text-[#F9A03F] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Clicker</p>
                              <p className="text-sm text-gray-600">Optional but useful for marking desired behaviors.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-6 bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Equipment to Avoid</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Shock collars or e-collars</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Choke or prong collars</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Citronella or spray collars</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-times-circle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">Devices that emit loud noises to startle dogs</span>
                          </li>
                        </ul>
                        <p className="text-sm text-gray-600 mt-3">
                          Modern dog training emphasizes positive reinforcement rather than punishment-based methods, which can damage your relationship with your dog and cause fear.
                        </p>
                      </div>

                      <div className="mt-6">
                        <h4 className="font-['Nunito'] font-semibold mb-3">Clicker Training Basics</h4>
                        <div className="bg-[#F9A03F] bg-opacity-10 p-4 rounded-lg">
                          <ol className="space-y-2">
                            <li className="flex items-start">
                              <span className="bg-[#F9A03F] text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs">1</span>
                              <span className="text-gray-600 text-sm">Click the clicker at the exact moment your dog performs the desired behavior</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-[#F9A03F] text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs">2</span>
                              <span className="text-gray-600 text-sm">Follow the click immediately with a treat</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-[#F9A03F] text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs">3</span>
                              <span className="text-gray-600 text-sm">The click marks the exact behavior that earned the reward</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-[#F9A03F] text-white w-5 h-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0 text-xs">4</span>
                              <span className="text-gray-600 text-sm">Dogs quickly learn that the click sound means "that's right!"</span>
                            </li>
                          </ol>
                        </div>
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
                        <i className="fas fa-heart text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Be patient - dogs learn at different paces</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-paw text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Use clear, consistent commands</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-clock text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Train in short, engaging sessions</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-volume-down text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Gradually add distractions</span>
                      </li>
                      <li className="flex items-center py-1">
                        <i className="fas fa-smile text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Keep training fun and positive</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Essential Commands Tab */}
          <TabsContent value="commands">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trainingCommands.map(command => (
                <Card key={command.id}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={command.imageUrl} 
                      alt={`Training a dog to ${command.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle className="font-['Nunito'] text-[#4D7EA8]">{command.name}</CardTitle>
                      <Badge className={`
                        ${command.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
                        command.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`
                      }>
                        {command.difficulty}
                      </Badge>
                    </div>
                    <CardDescription>{command.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Training Steps</h4>
                      <ol className="space-y-2 list-decimal pl-5">
                        {command.steps.map((step, idx) => (
                          <li key={idx} className="text-gray-600">{step}</li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Pro Tips</h4>
                      <ul className="space-y-1">
                        {command.tips.map((tip, idx) => (
                          <li key={idx} className="flex items-start">
                            <i className="fas fa-lightbulb text-[#F9A03F] mt-1 mr-2"></i>
                            <span className="text-gray-600 text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Advanced Command Training</CardTitle>
                <CardDescription>Once your dog has mastered the basics, you can move on to these more advanced skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                        <i className="fas fa-hand-paper text-[#4D7EA8]"></i>
                      </div>
                      <h3 className="font-['Nunito'] font-semibold">Wait at Doors</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Teaches your dog to pause at thresholds until given permission to pass through. Excellent for safety and impulse control.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                        <i className="fas fa-bed text-[#4D7EA8]"></i>
                      </div>
                      <h3 className="font-['Nunito'] font-semibold">Go to Your Place</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Trains your dog to go to a designated spot (usually a bed or mat) and stay there until released. Useful for when guests visit.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                        <i className="fas fa-volume-mute text-[#4D7EA8]"></i>
                      </div>
                      <h3 className="font-['Nunito'] font-semibold">Quiet</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Teaches your dog to stop barking on command. Start by thanking them for alerting you, then give the quiet cue and reward silence.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                        <i className="fas fa-walking text-[#4D7EA8]"></i>
                      </div>
                      <h3 className="font-['Nunito'] font-semibold">Heel</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Advanced loose-leash walking where your dog stays precisely by your side. Begin with short distances and lots of rewards.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                        <i className="fas fa-search text-[#4D7EA8]"></i>
                      </div>
                      <h3 className="font-['Nunito'] font-semibold">Find It</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Teaches your dog to search for specific items using scent. Great mental exercise and can be practical for finding keys or other items.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <div className="flex items-center mb-2">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                        <i className="fas fa-paw text-[#4D7EA8]"></i>
                      </div>
                      <h3 className="font-['Nunito'] font-semibold">Shake/High Five</h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Fun tricks that impress guests and strengthen your bond. Capture the natural pawing motion or gently guide your dog's paw.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Training By Age Tab */}
          <TabsContent value="phases">
            <div className="grid grid-cols-1 gap-8">
              {trainingPhases.map(phase => (
                <Card key={phase.id}>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-3 rounded-full mr-4">
                        <i className={`fas ${phase.icon} text-[#4D7EA8] text-xl`}></i>
                      </div>
                      <div>
                        <CardTitle className="font-['Nunito'] text-[#4D7EA8]">{phase.title}</CardTitle>
                        <CardDescription>{phase.ageRange}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{phase.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-3">Key Focus Areas</h4>
                        <ul className="space-y-2">
                          {phase.keyFocus.map((focus, idx) => (
                            <li key={idx} className="flex items-start">
                              <i className="fas fa-check text-[#8BC34A] mt-1 mr-2"></i>
                              <span className="text-gray-600">{focus}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold mb-3">Training Tips for This Stage</h4>
                        {phase.id === 1 ? (
                          // Puppy Basics tips
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Keep sessions under 5 minutes - puppies have short attention spans</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Focus on positive exposure to different people, animals, environments, and surfaces</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Establish a routine for potty breaks, meals, and sleep</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Use gentle handling exercises to get them comfortable with being touched all over</span>
                            </li>
                          </ul>
                        ) : phase.id === 2 ? (
                          // Foundation Building tips
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Gradually increase distractions during training sessions</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Practice commands in different rooms and environments</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Begin to phase out constant treats, using intermittent rewards</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Work on impulse control exercises like "leave it" and "wait"</span>
                            </li>
                          </ul>
                        ) : phase.id === 3 ? (
                          // Adolescent Training tips
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Be consistent with rules - adolescent dogs will test boundaries</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Increase physical and mental exercise to manage energy levels</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Continue socialization with controlled greetings and playdates</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Practice recall in more challenging environments with a long line</span>
                            </li>
                          </ul>
                        ) : (
                          // Advanced Skills tips
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Train in environments with high distractions</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Add duration, distance, and distraction to known commands</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Consider advanced training classes or dog sports for mental stimulation</span>
                            </li>
                            <li className="flex items-start">
                              <i className="fas fa-star text-[#F9A03F] mt-1 mr-2"></i>
                              <span>Continue to maintain and practice basic obedience regularly</span>
                            </li>
                          </ul>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          {/* Problem Behaviors Tab */}
          <TabsContent value="problems">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Common Behavior Problems</CardTitle>
                    <CardDescription>Address these issues with consistent training and management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3 flex items-center">
                          <i className="fas fa-couch text-[#F9A03F] mr-2"></i>
                          Chewing Inappropriate Items
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Why Dogs Do This:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Teething (puppies)</li>
                              <li>Boredom and excess energy</li>
                              <li>Anxiety or stress</li>
                              <li>Attention-seeking behavior</li>
                              <li>Natural exploring behavior</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Solutions:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Provide appropriate chew toys</li>
                              <li>Use deterrent sprays on forbidden items</li>
                              <li>Increase exercise and mental stimulation</li>
                              <li>Supervise and redirect to appropriate toys</li>
                              <li>Store valuable items out of reach</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3 flex items-center">
                          <i className="fas fa-volume-up text-[#F9A03F] mr-2"></i>
                          Excessive Barking
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Why Dogs Do This:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Territorial/protective behavior</li>
                              <li>Alarm/fear response</li>
                              <li>Boredom or loneliness</li>
                              <li>Seeking attention</li>
                              <li>Separation anxiety</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Solutions:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Identify and address the specific trigger</li>
                              <li>Teach "quiet" command with positive reinforcement</li>
                              <li>Provide more exercise and mental stimulation</li>
                              <li>Maintain a calm demeanor when responding</li>
                              <li>For severe cases, consult a professional trainer</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3 flex items-center">
                          <i className="fas fa-running text-[#F9A03F] mr-2"></i>
                          Jumping on People
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Why Dogs Do This:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Excitement and greeting behavior</li>
                              <li>Seeking attention</li>
                              <li>Previously reinforced behavior</li>
                              <li>Lack of alternative greeting skills</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Solutions:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Ignore jumping - turn away and withhold attention</li>
                              <li>Reward "four on the floor" with attention</li>
                              <li>Teach an alternative greeting behavior (sit)</li>
                              <li>Have guests help with consistent training</li>
                              <li>Use a leash for management during greetings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3 flex items-center">
                          <i className="fas fa-tooth text-[#F9A03F] mr-2"></i>
                          Nipping/Mouthing
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Why Dogs Do This:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Teething discomfort (puppies)</li>
                              <li>Play behavior</li>
                              <li>Overstimulation or excitement</li>
                              <li>Lack of bite inhibition training</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Solutions:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>"Yelp" and withdraw attention when mouthed</li>
                              <li>Redirect to appropriate chew toys</li>
                              <li>Teach "gentle" or controlled mouth pressure</li>
                              <li>Ensure adequate exercise and playtime</li>
                              <li>Provide frozen toys for teething puppies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3 flex items-center">
                          <i className="fas fa-sad-tear text-[#F9A03F] mr-2"></i>
                          Separation Anxiety
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Why Dogs Do This:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Fear of being alone</li>
                              <li>Past trauma or abandonment</li>
                              <li>Over-attachment to owner</li>
                              <li>Lack of independence training</li>
                              <li>Change in routine or environment</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Solutions:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Gradual departure training</li>
                              <li>Create positive associations with alone time</li>
                              <li>Use enrichment toys when leaving</li>
                              <li>Keep departures and returns low-key</li>
                              <li>For severe cases, consult with a veterinary behaviorist</li>
                            </ul>
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
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">When to Seek Professional Help</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600">
                        While many behavior issues can be addressed with consistent training at home, some situations warrant professional help:
                      </p>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold text-red-800 mb-2">Warning Signs</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-700 text-sm">Aggression toward people or other animals</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-700 text-sm">Extreme fear or phobias</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-700 text-sm">Self-injurious behaviors</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-700 text-sm">Severe separation anxiety</span>
                          </li>
                          <li className="flex items-start">
                            <i className="fas fa-exclamation-triangle text-red-500 mt-1 mr-2"></i>
                            <span className="text-gray-700 text-sm">Compulsive or repetitive behaviors</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-['Nunito'] font-semibold mb-2">Types of Professionals</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                              <i className="fas fa-user-md text-[#4D7EA8]"></i>
                            </div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Veterinary Behaviorist</p>
                              <p className="text-sm text-gray-600">Veterinarians with specialized training in behavior, can prescribe medication if needed.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                              <i className="fas fa-graduation-cap text-[#4D7EA8]"></i>
                            </div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Certified Applied Animal Behaviorist</p>
                              <p className="text-sm text-gray-600">Advanced degree in animal behavior, works with complex behavior problems.</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3 flex-shrink-0">
                              <i className="fas fa-certificate text-[#4D7EA8]"></i>
                            </div>
                            <div>
                              <p className="font-['Nunito'] font-semibold">Certified Professional Dog Trainer</p>
                              <p className="text-sm text-gray-600">Experienced trainers who have passed certification exams, best for general training needs.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <Alert className="mt-4 bg-blue-50 border-blue-100">
                        <div className="flex items-center">
                          <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                          <AlertTitle className="text-blue-800">Important Note</AlertTitle>
                        </div>
                        <AlertDescription className="text-blue-700 mt-2">
                          Always look for trainers and behaviorists who use positive reinforcement methods. Avoid those who rely on punishment, dominance theory, or aversive techniques.
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Prevention Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      It's easier to prevent problem behaviors than to fix them. Follow these guidelines:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-brain text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Provide mental and physical exercise daily</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-calendar-alt text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Maintain consistent routines and rules</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-users text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Socialize early and continuously</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-graduation-cap text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Train basic obedience and impulse control</span>
                      </li>
                      <li className="flex items-center py-1">
                        <i className="fas fa-paw text-[#F9A03F] mr-3"></i>
                        <span className="text-gray-700">Provide appropriate outlets for natural behaviors</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Training;
