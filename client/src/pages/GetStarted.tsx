import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet";
import BreedChooser from "@/components/home/BreedChooser";

const GetStarted: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Get Started Guide - PawParents</title>
        <meta name="description" content="Start your dog ownership journey right with our complete guide for new dog parents." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Get Started Guide</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            Everything you need to know to prepare for your new dog and make the transition smooth for both of you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="prepare" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="prepare">Prepare</TabsTrigger>
            <TabsTrigger value="first-week">First Week</TabsTrigger>
            <TabsTrigger value="essentials">Essential Supplies</TabsTrigger>
          </TabsList>
          
          <TabsContent value="prepare">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8]">Before Your Dog Arrives</CardTitle>
                  <CardDescription>Important preparations to make before bringing your new dog home</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Dog-proof your home</h3>
                        <p className="text-gray-600 text-sm">Remove hazards like toxic plants, secure loose wires, and install baby gates if needed.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Find a veterinarian</h3>
                        <p className="text-gray-600 text-sm">Research and choose a vet before you bring your dog home. Schedule an initial check-up.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Research local laws</h3>
                        <p className="text-gray-600 text-sm">Check licensing requirements, leash laws, and other pet regulations in your area.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Establish house rules</h3>
                        <p className="text-gray-600 text-sm">Decide with your family which furniture is off-limits, feeding routines, and who handles which responsibilities.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8]">Setting Up Your Home</CardTitle>
                  <CardDescription>Create a welcoming environment for your new family member</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Create a safe space</h3>
                        <p className="text-gray-600 text-sm">Set up a crate or dog bed in a quiet area where your dog can retreat when feeling overwhelmed.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Designate potty area</h3>
                        <p className="text-gray-600 text-sm">Choose a specific outdoor spot for bathroom breaks to help establish a routine.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Secure your yard</h3>
                        <p className="text-gray-600 text-sm">Check fences for gaps, ensure gates latch properly, and remove toxic plants from your yard.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#8BC34A] mt-1 mr-3 text-lg"></i>
                      <div>
                        <h3 className="font-['Nunito'] font-semibold mb-1">Set up feeding station</h3>
                        <p className="text-gray-600 text-sm">Choose a quiet area away from high-traffic parts of your home for food and water bowls.</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="first-week">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8]">First Week Schedule</CardTitle>
                <CardDescription>A day-by-day guide to help you and your dog adjust</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8] mb-2">Day 1: Arrival Day</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Keep things calm and quiet</li>
                      <li>Introduce your dog to their safe space</li>
                      <li>Take frequent potty breaks</li>
                      <li>Begin establishing a feeding routine</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8] mb-2">Days 2-3: Setting Routines</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Establish consistent feeding times</li>
                      <li>Start regular potty break schedule</li>
                      <li>Begin basic training with simple commands</li>
                      <li>Gradually introduce your dog to different rooms</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8] mb-2">Days 4-5: Building Comfort</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Continue reinforcing routines</li>
                      <li>Introduce your dog to nearby outdoor environments</li>
                      <li>Schedule veterinary check-up if not done already</li>
                      <li>Begin introducing to family friends slowly</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8] mb-2">Days 6-7: Expanding Horizons</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>Take slightly longer walks</li>
                      <li>Introduce to more family members/friends</li>
                      <li>Evaluate what's working and what needs adjustment</li>
                      <li>Celebrate your first week together!</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="essentials">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8]">
                    <i className="fas fa-bone mr-2 text-[#F9A03F]"></i> Basics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Collar with ID tag</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Leash (6ft standard)</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Food and water bowls</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Age-appropriate food</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dog bed</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Crate (right size)</span>
                      <span className="text-[#4D7EA8] font-semibold">Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Poop bags</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8]">
                    <i className="fas fa-paw mr-2 text-[#F9A03F]"></i> Comfort & Play
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Chew toys</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Interactive toys</span>
                      <span className="text-[#4D7EA8] font-semibold">Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Comfort toy/blanket</span>
                      <span className="text-[#4D7EA8] font-semibold">Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dog-safe puzzle toys</span>
                      <span className="text-[#4D7EA8] font-semibold">Optional</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Fetch toys</span>
                      <span className="text-[#4D7EA8] font-semibold">Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kong or treat dispenser</span>
                      <span className="text-[#4D7EA8] font-semibold">Highly Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Training treats</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8]">
                    <i className="fas fa-heartbeat mr-2 text-[#F9A03F]"></i> Health & Grooming
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Dog brush (breed appropriate)</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dog-safe shampoo</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Nail clippers</span>
                      <span className="text-[#4D7EA8] font-semibold">Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Toothbrush & dog toothpaste</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>First aid kit</span>
                      <span className="text-[#4D7EA8] font-semibold">Recommended</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Stain & odor remover</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Flea & tick prevention</span>
                      <span className="text-[#4D7EA8] font-semibold">Essential</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <BreedChooser />
    </>
  );
};

export default GetStarted;
