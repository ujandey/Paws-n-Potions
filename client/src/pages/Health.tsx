import React from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { commonIllnesses, vaccinationInfo } from "@/lib/data";

const Health: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dog Health & Wellness - PawParents</title>
        <meta name="description" content="Keep your dog healthy with our guides on preventative care, vaccinations, common illnesses, and when to visit the vet." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Dog Health & Wellness</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            Comprehensive health information to help you keep your dog happy and healthy throughout their life.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="preventative" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="preventative">Preventative Care</TabsTrigger>
            <TabsTrigger value="vaccinations">Vaccinations</TabsTrigger>
            <TabsTrigger value="illnesses">Common Illnesses</TabsTrigger>
            <TabsTrigger value="emergency">Emergency Care</TabsTrigger>
          </TabsList>
          
          {/* Preventative Care Tab */}
          <TabsContent value="preventative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Preventative Health Care</CardTitle>
                    <CardDescription>Keeping your dog healthy starts with regular preventative care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Regular Veterinary Check-ups</h3>
                        <p className="text-gray-600 mb-3">
                          Even when your dog seems healthy, regular examinations help detect issues early, when they're most treatable.
                        </p>
                        <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                          <h4 className="font-['Nunito'] font-semibold mb-2">Recommended Schedule:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li><strong>Puppies:</strong> Every 3-4 weeks until 16 weeks old for vaccines and development checks</li>
                            <li><strong>Adult dogs (1-7 years):</strong> Annual wellness exams</li>
                            <li><strong>Senior dogs (7+ years):</strong> Bi-annual exams to monitor age-related conditions</li>
                            <li>Additional visits any time you notice changes in behavior, appetite, or energy levels</li>
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Dental Care</h3>
                        <p className="text-gray-600 mb-3">
                          Dental disease affects most dogs by age three and can lead to serious health problems if left untreated.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                            <h4 className="font-['Nunito'] font-semibold mb-2">At-Home Care:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Brush teeth daily with dog-specific toothpaste</li>
                              <li>Provide dental chews and toys</li>
                              <li>Consider water additives or dental wipes</li>
                            </ul>
                          </div>
                          <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg">
                            <h4 className="font-['Nunito'] font-semibold mb-2">Professional Care:</h4>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600">
                              <li>Annual dental exams by your vet</li>
                              <li>Professional cleaning when recommended</li>
                              <li>Address broken or damaged teeth promptly</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Parasite Prevention</h3>
                        <p className="text-gray-600 mb-3">
                          Year-round prevention is essential to protect your dog from harmful parasites and the diseases they carry.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Internal Parasites</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Monthly heartworm prevention</li>
                                <li>Regular deworming as recommended by your vet</li>
                                <li>Fecal testing 1-2 times per year</li>
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">External Parasites</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Flea and tick prevention year-round</li>
                                <li>Regular grooming and coat inspection</li>
                                <li>Environmental treatment if infestation occurs</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Nutrition & Weight Management</h3>
                        <p className="text-gray-600 mb-3">
                          Proper nutrition and maintaining a healthy weight are foundational aspects of preventative care.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          <li>Feed a high-quality, balanced diet appropriate for your dog's age, size, and activity level</li>
                          <li>Maintain proper body condition (you should be able to feel but not see ribs)</li>
                          <li>Adjust portions based on activity level and life stage</li>
                          <li>Monitor weight regularly and address changes promptly</li>
                          <li>Limit treats to less than 10% of daily calories</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Essential Health Practices</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-[#F9A03F] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold text-[#F9A03F] mb-2">Regular Exercise</h4>
                        <p className="text-gray-600 text-sm">
                          Daily exercise maintains healthy weight, strengthens muscles, and provides mental stimulation.
                        </p>
                      </div>
                      
                      <div className="bg-[#F9A03F] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold text-[#F9A03F] mb-2">Coat & Skin Care</h4>
                        <p className="text-gray-600 text-sm">
                          Regular grooming helps detect skin issues, reduces shedding, and prevents matting.
                        </p>
                      </div>
                      
                      <div className="bg-[#F9A03F] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold text-[#F9A03F] mb-2">Nail Trimming</h4>
                        <p className="text-gray-600 text-sm">
                          Keep nails trimmed to prevent discomfort, posture issues, and torn nails.
                        </p>
                      </div>
                      
                      <div className="bg-[#F9A03F] bg-opacity-10 p-4 rounded-lg">
                        <h4 className="font-['Nunito'] font-semibold text-[#F9A03F] mb-2">Ear Cleaning</h4>
                        <p className="text-gray-600 text-sm">
                          Regular cleaning prevents infections, especially in floppy-eared breeds.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Health Record Keeping</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Maintain a comprehensive health record for your dog including:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-syringe text-[#4D7EA8] mr-3"></i>
                        <span className="text-gray-700">Vaccination records</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-pills text-[#4D7EA8] mr-3"></i>
                        <span className="text-gray-700">Medication history</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-stethoscope text-[#4D7EA8] mr-3"></i>
                        <span className="text-gray-700">Vet visit notes</span>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-weight text-[#4D7EA8] mr-3"></i>
                        <span className="text-gray-700">Weight tracking</span>
                      </li>
                      <li className="flex items-center py-1">
                        <i className="fas fa-allergies text-[#4D7EA8] mr-3"></i>
                        <span className="text-gray-700">Allergies or reactions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Vaccinations Tab */}
          <TabsContent value="vaccinations">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Vaccination Schedule</CardTitle>
                <CardDescription>Protecting your dog against preventable diseases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Badge className="bg-[#4D7EA8]">Core Vaccines</Badge>
                    <span className="text-gray-600">Essential for all dogs regardless of lifestyle</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Non-Core Vaccines</Badge>
                    <span className="text-gray-600">Recommended based on risk factors and lifestyle</span>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-[#4D7EA8] bg-opacity-10">
                        <th className="p-3 text-left font-['Nunito'] font-semibold text-[#4D7EA8]">Vaccine</th>
                        <th className="p-3 text-left font-['Nunito'] font-semibold text-[#4D7EA8]">When</th>
                        <th className="p-3 text-left font-['Nunito'] font-semibold text-[#4D7EA8]">Description</th>
                        <th className="p-3 text-center font-['Nunito'] font-semibold text-[#4D7EA8]">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vaccinationInfo.map((vaccine) => (
                        <tr key={vaccine.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="p-3 font-['Nunito'] font-semibold">{vaccine.name}</td>
                          <td className="p-3 text-gray-600">{vaccine.when}</td>
                          <td className="p-3 text-gray-600">{vaccine.description}</td>
                          <td className="p-3 text-center">
                            {vaccine.isCore ? (
                              <Badge className="bg-[#4D7EA8]">Core</Badge>
                            ) : (
                              <Badge variant="outline">Non-Core</Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6">
                  <Alert className="bg-amber-50 border-amber-200">
                    <div className="flex items-center">
                      <i className="fas fa-exclamation-circle text-amber-500 mr-2"></i>
                      <AlertTitle className="text-amber-800">Important Note</AlertTitle>
                    </div>
                    <AlertDescription className="text-amber-700 mt-2">
                      <p>Vaccination schedules may vary based on your location, your dog's age, health status, and risk factors. Always consult with your veterinarian to create a customized vaccination plan for your dog.</p>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Vaccination FAQs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-['Nunito'] font-semibold mb-2">Are vaccines safe for my dog?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, vaccines are generally very safe. Serious adverse reactions are rare. The risk of disease without vaccination is much greater than the risk of vaccine side effects.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-['Nunito'] font-semibold mb-2">What if my dog misses a booster?</h4>
                    <p className="text-gray-600 text-sm">
                      Contact your vet for guidance. Depending on how much time has passed, they may recommend restarting the series or simply administering the missed dose.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-['Nunito'] font-semibold mb-2">Can my dog get vaccinated if they're sick?</h4>
                    <p className="text-gray-600 text-sm">
                      It's best to wait until your dog is healthy before vaccination. If your dog is sick, reschedule the appointment.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-['Nunito'] font-semibold mb-2">What are possible side effects?</h4>
                    <p className="text-gray-600 text-sm">
                      Mild lethargy, reduced appetite, or slight discomfort at the injection site for 1-2 days is normal. Contact your vet if symptoms persist or if you notice severe reactions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Vaccine Titers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Titer testing measures antibody levels to determine if your dog has adequate immunity from previous vaccinations.
                  </p>
                  
                  <div className="bg-[#4D7EA8] bg-opacity-5 p-4 rounded-lg mb-4">
                    <h4 className="font-['Nunito'] font-semibold mb-2">Benefits of Titer Testing:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>May reduce unnecessary vaccines</li>
                      <li>Useful for dogs with previous vaccine reactions</li>
                      <li>Helps determine if boosters are needed</li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-600 text-sm">
                    Discuss with your veterinarian if titer testing might be appropriate for your dog as an alternative to automatic revaccination.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Common Illnesses Tab */}
          <TabsContent value="illnesses">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-3">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Common Canine Health Issues</CardTitle>
                    <CardDescription>Recognizing symptoms and knowing when to seek veterinary care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {commonIllnesses.map((illness) => (
                        <Card key={illness.id} className="border border-gray-200">
                          <CardHeader className="pb-2">
                            <div className="flex items-center mb-2">
                              <div className="bg-[#4D7EA8] bg-opacity-10 p-2 rounded-full mr-3">
                                <i className={`fas ${illness.icon} text-[#4D7EA8]`}></i>
                              </div>
                              <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">{illness.name}</CardTitle>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-3">
                              <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Symptoms</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                {illness.symptoms.map((symptom, idx) => (
                                  <li key={idx}>{symptom}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="mb-3">
                              <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">When to Visit Your Vet</h4>
                              <p className="text-gray-600">{illness.whenToVisitVet}</p>
                            </div>
                            
                            <div>
                              <h4 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-2">Prevention</h4>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                {illness.prevention.map((tip, idx) => (
                                  <li key={idx}>{tip}</li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">When to Call the Vet</CardTitle>
                    <CardDescription>Recognizing emergency situations that require immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card className="bg-red-50 border-red-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="font-['Nunito'] text-red-700 text-lg">
                            <i className="fas fa-exclamation-triangle mr-2 text-red-600"></i> 
                            Immediate Emergency
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Difficulty breathing/choking</li>
                            <li>Seizures</li>
                            <li>Severe bleeding</li>
                            <li>Collapse or inability to stand</li>
                            <li>Suspected poisoning</li>
                            <li>Severe trauma/injury</li>
                            <li>Bloated, hard abdomen</li>
                            <li>Unable to urinate</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-amber-50 border-amber-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="font-['Nunito'] text-amber-700 text-lg">
                            <i className="fas fa-clock mr-2 text-amber-600"></i> 
                            Same-Day Visit
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Vomiting (multiple episodes)</li>
                            <li>Diarrhea with lethargy</li>
                            <li>Not eating for 24+ hours</li>
                            <li>Limping/inability to bear weight</li>
                            <li>Eye injuries or sudden changes</li>
                            <li>Excessive scratching/licking</li>
                            <li>Ingestion of foreign objects</li>
                            <li>Significant behavior changes</li>
                          </ul>
                        </CardContent>
                      </Card>
                      
                      <Card className="bg-blue-50 border-blue-200">
                        <CardHeader className="pb-2">
                          <CardTitle className="font-['Nunito'] text-blue-700 text-lg">
                            <i className="fas fa-calendar-alt mr-2 text-blue-600"></i> 
                            Schedule Appointment
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-1 text-gray-700">
                            <li>Minor digestive upset</li>
                            <li>Occasional coughing</li>
                            <li>Mild itching</li>
                            <li>Slightly reduced appetite</li>
                            <li>Small skin irritations</li>
                            <li>Bad breath</li>
                            <li>Scooting/dragging bottom</li>
                            <li>Weight changes</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Emergency Care Tab */}
          <TabsContent value="emergency">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Emergency Preparedness</CardTitle>
                <CardDescription>Being ready for unexpected health situations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Pet First Aid Kit</h3>
                    <Card className="border border-gray-200">
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Basic Supplies</h4>
                            <ul className="grid grid-cols-2 gap-2">
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Digital thermometer</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Gauze pads & rolls</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Adhesive tape</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Antiseptic wipes</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Hydrogen peroxide</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Tweezers</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Scissors (blunt tip)</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Disposable gloves</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Saline solution</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Ice pack</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Blanket</span>
                              </li>
                              <li className="flex items-center">
                                <i className="fas fa-check text-green-500 mr-2"></i>
                                <span className="text-gray-600 text-sm">Muzzle</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-['Nunito'] font-semibold mb-2">Medications</h4>
                            <p className="text-gray-600 text-sm mb-2">
                              (Always consult your vet before administering)
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-600 text-sm">
                              <li>Antibiotic ointment</li>
                              <li>Diphenhydramine (Benadryl) - check dosage with vet</li>
                              <li>Activated charcoal (for poisoning, use only as directed by vet)</li>
                              <li>Any medications your dog regularly takes</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Emergency Information</h3>
                    <Card className="border border-gray-200 mb-6">
                      <CardContent className="pt-6">
                        <p className="text-gray-600 mb-4">
                          Keep this information accessible in your phone and posted in your home:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-user-md text-[#4D7EA8] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Regular Veterinarian</p>
                              <p className="text-sm text-gray-600">Name, phone, address, hours</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-hospital text-[#4D7EA8] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Emergency Vet Clinic</p>
                              <p className="text-sm text-gray-600">Nearest 24/7 facility with contact info</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1 border-b border-gray-100">
                            <i className="fas fa-phone text-[#4D7EA8] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Pet Poison Helpline</p>
                              <p className="text-sm text-gray-600">(855) 764-7661 (fee may apply)</p>
                            </div>
                          </li>
                          <li className="flex items-center py-1">
                            <i className="fas fa-notes-medical text-[#4D7EA8] mr-3"></i>
                            <div>
                              <p className="font-semibold text-gray-700">Medical Records</p>
                              <p className="text-sm text-gray-600">Digital or printed copies of vaccination history, medical conditions, and medications</p>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                      <h4 className="font-['Nunito'] font-semibold text-red-700 mb-2">Finding Emergency Care When Traveling</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Research emergency vets at your destination before traveling</li>
                        <li>Ask your regular vet for recommendations</li>
                        <li>Use the AAHA (American Animal Hospital Association) hospital locator</li>
                        <li>Look for veterinary schools in the area, which often have 24/7 emergency services</li>
                        <li>Many hotel concierges can provide information on local emergency vet services</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Basic First Aid Procedures</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Bleeding</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                          <li>Apply direct pressure with clean gauze or cloth</li>
                          <li>Elevate the wound if possible</li>
                          <li>Apply pressure for at least 5-10 minutes</li>
                          <li>Secure bandage in place if bleeding stops</li>
                          <li>Seek veterinary care</li>
                        </ol>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Choking</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                          <li>Look inside mouth and remove object if visible</li>
                          <li>If dog is conscious, place hands on both sides of ribs</li>
                          <li>Apply quick, firm pressure inward and upward</li>
                          <li>Repeat 4-5 times if needed</li>
                          <li>Seek immediate veterinary care</li>
                        </ol>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Seizures</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                          <li>Keep hands away from mouth</li>
                          <li>Clear area of furniture or objects that could cause injury</li>
                          <li>Time the seizure</li>
                          <li>Keep dog cool and quiet after seizure ends</li>
                          <li>Seek veterinary care immediately</li>
                        </ol>
                      </CardContent>
                    </Card>
                    <Card className="shadow-sm">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Heatstroke</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                          <li>Move to cool, shaded area immediately</li>
                          <li>Apply cool (not cold) water to body</li>
                          <li>Place cool, wet towels on head, neck, chest, abdomen</li>
                          <li>Offer small amounts of water to drink</li>
                          <li>Transport to vet while cooling continues</li>
                        </ol>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Alert className="mt-8 bg-amber-50 border-amber-200">
                  <div className="flex items-center">
                    <i className="fas fa-exclamation-circle text-amber-500 mr-2"></i>
                    <AlertTitle className="text-amber-800">Important Safety Warning</AlertTitle>
                  </div>
                  <AlertDescription className="text-amber-700 mt-2">
                    <p>First aid is not a substitute for veterinary care. These procedures are meant to stabilize your dog until professional help can be obtained. Always contact your veterinarian or emergency animal hospital as quickly as possible in an emergency situation.</p>
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Health;