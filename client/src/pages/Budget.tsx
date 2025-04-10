import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { expenseItems } from "@/lib/data";

const Budget: React.FC = () => {
  const [calculatedTotal, setCalculatedTotal] = useState({
    oneTime: { low: 0, high: 0 },
    monthly: { low: 0, high: 0 },
    annual: { low: 0, high: 0 },
    emergency: { low: 0, high: 0 }
  });

  const oneTimeExpenses = expenseItems.filter(item => item.category === "one-time");
  const monthlyExpenses = expenseItems.filter(item => item.category === "monthly");
  const annualExpenses = expenseItems.filter(item => item.category === "annual");
  const emergencyExpenses = expenseItems.filter(item => item.category === "emergency");

  // Calculate totals for each category
  const calculateCategoryTotal = (items: typeof expenseItems) => {
    return items.reduce(
      (acc, item) => {
        return {
          low: acc.low + item.estimatedCostLow,
          high: acc.high + item.estimatedCostHigh
        };
      },
      { low: 0, high: 0 }
    );
  };

  // Calculate yearly total from monthly expenses
  const calculateYearlyFromMonthly = (monthlyTotal: { low: number; high: number }) => {
    return {
      low: monthlyTotal.low * 12,
      high: monthlyTotal.high * 12
    };
  };

  // Calculate first-year total (one-time + monthly*12 + annual)
  const calculateFirstYearTotal = () => {
    const oneTimeTotal = calculateCategoryTotal(oneTimeExpenses);
    const monthlyTotal = calculateCategoryTotal(monthlyExpenses);
    const annualTotal = calculateCategoryTotal(annualExpenses);
    const yearlyFromMonthly = calculateYearlyFromMonthly(monthlyTotal);
    
    return {
      low: oneTimeTotal.low + yearlyFromMonthly.low + annualTotal.low,
      high: oneTimeTotal.high + yearlyFromMonthly.high + annualTotal.high
    };
  };

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const renderExpenseItem = (item: typeof expenseItems[0], index: number) => (
    <div key={item.id} className={`py-3 ${index !== expenseItems.length - 1 ? 'border-b border-gray-200' : ''}`}>
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <span className="font-['Nunito'] font-semibold text-gray-800">{item.name}</span>
          {item.isEssential && (
            <Badge className="ml-2 bg-[#4D7EA8]">Essential</Badge>
          )}
        </div>
        <div className="text-gray-700">
          {item.estimatedCostLow === item.estimatedCostHigh 
            ? formatCurrency(item.estimatedCostLow)
            : `${formatCurrency(item.estimatedCostLow)} - ${formatCurrency(item.estimatedCostHigh)}`
          }
        </div>
      </div>
      <p className="text-gray-600 text-sm">{item.description}</p>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Dog Ownership Budget - PawParents</title>
        <meta name="description" content="Plan your finances for dog ownership with our comprehensive budget guide covering one-time costs, monthly expenses, and emergency funds." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Dog Ownership Budget</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            Plan ahead for the financial responsibilities of dog ownership with our comprehensive cost breakdown.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Budget Overview</TabsTrigger>
            <TabsTrigger value="startup">Startup Costs</TabsTrigger>
            <TabsTrigger value="ongoing">Ongoing Expenses</TabsTrigger>
            <TabsTrigger value="calculator">Budget Calculator</TabsTrigger>
          </TabsList>
          
          {/* Budget Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">The Cost of Dog Ownership</CardTitle>
                    <CardDescription>Understanding the financial commitment of bringing a dog into your family</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">First Year Costs</h3>
                        <p className="text-gray-600 mb-4">
                          The first year of dog ownership typically has the highest expenses due to one-time startup costs combined with regular expenses.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <Card className="shadow-sm border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">Startup Costs</CardTitle>
                              <CardDescription>One-time expenses</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Adoption/purchase fee</li>
                                <li>Initial vaccinations</li>
                                <li>Spay/neuter procedure</li>
                                <li>Microchipping</li>
                                <li>Initial supplies (crate, bed, bowls, etc.)</li>
                                <li>Training classes</li>
                              </ul>
                              <div className="mt-3 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Typical range:</span>
                                <span className="font-semibold text-[#4D7EA8]">$500 - $2,500+</span>
                              </div>
                            </CardContent>
                          </Card>
                          <Card className="shadow-sm border border-gray-200">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-lg">First Year Recurring</CardTitle>
                              <CardDescription>Monthly & annual expenses</CardDescription>
                            </CardHeader>
                            <CardContent>
                              <ul className="list-disc pl-5 space-y-1 text-gray-600">
                                <li>Food</li>
                                <li>Routine veterinary care</li>
                                <li>Preventative medications</li>
                                <li>Grooming</li>
                                <li>Toys & treats</li>
                                <li>Dog walker/daycare (if needed)</li>
                              </ul>
                              <div className="mt-3 flex justify-between items-center">
                                <span className="text-sm text-gray-500">Typical range:</span>
                                <span className="font-semibold text-[#4D7EA8]">$1,000 - $3,500</span>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Ongoing Annual Costs</h3>
                        <p className="text-gray-600 mb-4">
                          After the first year, your expenses stabilize but still require a significant budget commitment.
                        </p>
                        <Card className="shadow-sm border border-gray-200">
                          <CardContent className="pt-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                              <div className="text-center">
                                <div className="bg-[#4D7EA8] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
                                  <i className="fas fa-bone text-[#4D7EA8] text-2xl"></i>
                                </div>
                                <h4 className="font-['Nunito'] font-semibold mb-1">Food</h4>
                                <p className="text-sm text-gray-600">$250 - $700</p>
                              </div>
                              <div className="text-center">
                                <div className="bg-[#4D7EA8] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
                                  <i className="fas fa-stethoscope text-[#4D7EA8] text-2xl"></i>
                                </div>
                                <h4 className="font-['Nunito'] font-semibold mb-1">Vet Care</h4>
                                <p className="text-sm text-gray-600">$200 - $800</p>
                              </div>
                              <div className="text-center">
                                <div className="bg-[#4D7EA8] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
                                  <i className="fas fa-pills text-[#4D7EA8] text-2xl"></i>
                                </div>
                                <h4 className="font-['Nunito'] font-semibold mb-1">Preventatives</h4>
                                <p className="text-sm text-gray-600">$100 - $300</p>
                              </div>
                              <div className="text-center">
                                <div className="bg-[#4D7EA8] bg-opacity-10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-2">
                                  <i className="fas fa-shower text-[#4D7EA8] text-2xl"></i>
                                </div>
                                <h4 className="font-['Nunito'] font-semibold mb-1">Grooming</h4>
                                <p className="text-sm text-gray-600">$0 - $600</p>
                              </div>
                            </div>
                            <div className="mt-6 text-center">
                              <div className="p-2 bg-[#F9A03F] bg-opacity-10 rounded-lg inline-block">
                                <span className="font-['Nunito'] font-semibold text-[#F9A03F]">
                                  Average Annual Cost: $1,000 - $2,000+
                                </span>
                              </div>
                              <p className="text-gray-600 text-sm mt-2">
                                Costs vary significantly based on size, breed, health, and lifestyle
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      <div>
                        <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3">Lifetime Commitment</h3>
                        <p className="text-gray-600 mb-4">
                          Dogs typically live 10-15 years, making the total lifetime cost a significant investment.
                        </p>
                        <div className="bg-[#4D7EA8] bg-opacity-5 p-5 rounded-lg">
                          <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="md:mr-6 text-center md:text-left mb-4 md:mb-0">
                              <h4 className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">$15,000 - $30,000+</h4>
                              <p className="text-gray-600">Average lifetime cost for a healthy dog</p>
                            </div>
                            <div className="flex-1">
                              <div className="h-3 w-full bg-gray-200 rounded-full mb-2">
                                <div className="h-3 bg-gradient-to-r from-[#4D7EA8] to-[#F9A03F] rounded-full" style={{ width: "70%" }}></div>
                              </div>
                              <div className="flex justify-between text-xs text-gray-500">
                                <span>10 years</span>
                                <span>15 years</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mt-4 text-sm">
                            This estimate includes routine care only. Medical emergencies or chronic health conditions can add thousands to the total cost.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Ways to Save</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-['Nunito'] font-semibold mb-2">Adoption vs. Purchase</h4>
                        <p className="text-gray-600 text-sm">
                          Adopting from a shelter ($50-$300) is significantly less expensive than purchasing from a breeder ($500-$3,000+).
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-['Nunito'] font-semibold mb-2">Preventative Care</h4>
                        <p className="text-gray-600 text-sm">
                          Regular preventative care reduces expensive emergency treatment costs. Don't skip vaccinations, parasite prevention, or dental care.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-['Nunito'] font-semibold mb-2">Pet Insurance</h4>
                        <p className="text-gray-600 text-sm">
                          Consider pet insurance for unexpected medical costs. Monthly premiums ($30-$70) can prevent thousands in emergency expenses.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-['Nunito'] font-semibold mb-2">DIY When Possible</h4>
                        <p className="text-gray-600 text-sm">
                          Learn to provide basic grooming, nail trims, and dental care at home to save on professional services.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Hidden Costs</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-home text-[#F9A03F] mr-3"></i>
                        <div>
                          <p className="font-semibold text-gray-700">Higher Housing Costs</p>
                          <p className="text-sm text-gray-600">Pet deposits, fees, or limited housing options</p>
                        </div>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-couch text-[#F9A03F] mr-3"></i>
                        <div>
                          <p className="font-semibold text-gray-700">Property Damage</p>
                          <p className="text-sm text-gray-600">Furniture, carpets, doors, yards</p>
                        </div>
                      </li>
                      <li className="flex items-center py-1 border-b border-gray-100">
                        <i className="fas fa-plane text-[#F9A03F] mr-3"></i>
                        <div>
                          <p className="font-semibold text-gray-700">Travel Expenses</p>
                          <p className="text-sm text-gray-600">Pet sitters, boarding, or pet-friendly accommodations</p>
                        </div>
                      </li>
                      <li className="flex items-center py-1">
                        <i className="fas fa-clock text-[#F9A03F] mr-3"></i>
                        <div>
                          <p className="font-semibold text-gray-700">Time Commitment</p>
                          <p className="text-sm text-gray-600">Potentially fewer work hours or overtime opportunities</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Startup Costs Tab */}
          <TabsContent value="startup">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">One-Time Startup Costs</CardTitle>
                <CardDescription>Initial investments when welcoming a new dog</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="border-2 border-[#F9A03F]">
                      <CardHeader className="bg-[#F9A03F] text-white pb-2">
                        <CardTitle>Acquisition</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {oneTimeExpenses
                            .filter(item => ['Adoption/Purchase Fee', 'Initial Vaccinations', 'Spay/Neuter', 'Microchipping'].includes(item.name))
                            .map((item, index, filteredArray) => renderExpenseItem(item, index === filteredArray.length - 1 ? 999 : index))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-[#4D7EA8]">
                      <CardHeader className="bg-[#4D7EA8] text-white pb-2">
                        <CardTitle>Equipment</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {oneTimeExpenses
                            .filter(item => ['Collar/Harness & Leash', 'Crate/Bed', 'Food & Water Bowls', 'Toys & Starter Supplies'].includes(item.name))
                            .map((item, index, filteredArray) => renderExpenseItem(item, index === filteredArray.length - 1 ? 999 : index))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-2 border-[#4D7EA8]">
                      <CardHeader className="bg-[#4D7EA8] text-white pb-2">
                        <CardTitle>Training & Setup</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {oneTimeExpenses
                            .filter(item => ['Training Classes', 'Baby Gates/Pet Barriers', 'Dog-Proofing Supplies'].includes(item.name))
                            .map((item, index, filteredArray) => renderExpenseItem(item, index === filteredArray.length - 1 ? 999 : index))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="bg-[#4D7EA8] bg-opacity-5 p-6 rounded-lg">
                    <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-3 text-center">Total Initial Investment</h3>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-gray-600 mb-2">Basic Necessities (Low End)</p>
                        <h4 className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">$500 - $800</h4>
                      </div>
                      <div className="h-8 border-r border-gray-300 mx-6 hidden md:block"></div>
                      <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-gray-600 mb-2">Average Investment</p>
                        <h4 className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">$1,000 - $1,500</h4>
                      </div>
                      <div className="h-8 border-r border-gray-300 mx-6 hidden md:block"></div>
                      <div className="text-center md:text-right">
                        <p className="text-gray-600 mb-2">Premium Setup (High End)</p>
                        <h4 className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">$2,000 - $3,000+</h4>
                      </div>
                    </div>
                  </div>

                  <Alert className="bg-amber-50 border-amber-200">
                    <div className="flex items-center">
                      <i className="fas fa-lightbulb text-amber-500 mr-2"></i>
                      <AlertTitle className="text-amber-800">Money-Saving Tips</AlertTitle>
                    </div>
                    <AlertDescription className="text-amber-700 mt-2">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Look for adoption specials at shelters (often include vaccinations and spay/neuter)</li>
                        <li>Check for low-cost spay/neuter clinics in your area</li>
                        <li>Shop secondhand for crates, beds, and other durable supplies</li>
                        <li>Many pet stores offer "new pet" discount packages</li>
                        <li>Ask friends with dogs if they have extra supplies they no longer need</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Ongoing Expenses Tab */}
          <TabsContent value="ongoing">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Monthly Expenses</CardTitle>
                    <CardDescription>Regular costs of dog ownership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {monthlyExpenses.map((item, index) => renderExpenseItem(item, index))}
                    </div>
                    
                    <div className="mt-8 bg-[#4D7EA8] bg-opacity-5 p-5 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8]">Monthly Total</h4>
                        <div className="font-semibold">
                          {formatCurrency(calculateCategoryTotal(monthlyExpenses).low)} - {formatCurrency(calculateCategoryTotal(monthlyExpenses).high)}
                        </div>
                      </div>
                      <Progress value={65} className="h-2 mb-2" />
                      <p className="text-gray-600 text-sm">
                        This amounts to {formatCurrency(calculateCategoryTotal(monthlyExpenses).low * 12)} - {formatCurrency(calculateCategoryTotal(monthlyExpenses).high * 12)} annually.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Annual Expenses</CardTitle>
                    <CardDescription>Yearly costs beyond monthly expenses</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {annualExpenses.map((item, index) => renderExpenseItem(item, index))}
                    </div>
                    
                    <div className="mt-8 bg-[#4D7EA8] bg-opacity-5 p-5 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8]">Annual Total</h4>
                        <div className="font-semibold">
                          {formatCurrency(calculateCategoryTotal(annualExpenses).low)} - {formatCurrency(calculateCategoryTotal(annualExpenses).high)}
                        </div>
                      </div>
                      <Progress value={40} className="h-2 mb-2" />
                      <p className="text-gray-600 text-sm">
                        This averages to {formatCurrency(calculateCategoryTotal(annualExpenses).low / 12)} - {formatCurrency(calculateCategoryTotal(annualExpenses).high / 12)} per month.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Emergency Fund</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Every dog owner should maintain an emergency fund for unexpected veterinary expenses.
                    </p>
                    
                    <div className="bg-red-50 border border-red-200 p-5 rounded-lg mb-6">
                      <h4 className="font-['Nunito'] font-semibold text-red-700 mb-3">Common Emergency Costs</h4>
                      <div className="space-y-3">
                        {emergencyExpenses.map((item, index) => (
                          <div key={item.id} className={`py-2 ${index !== emergencyExpenses.length - 1 ? 'border-b border-red-100' : ''}`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-['Nunito'] font-semibold text-red-800">{item.name}</span>
                              <span className="text-red-800">{formatCurrency(item.estimatedCostLow)} - {formatCurrency(item.estimatedCostHigh)}</span>
                            </div>
                            <p className="text-red-700 text-sm">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h4 className="font-['Nunito'] font-semibold text-lg text-[#4D7EA8] mb-2">Recommended Emergency Fund</h4>
                      <div className="bg-[#4D7EA8] bg-opacity-10 p-3 rounded-lg inline-block mb-2">
                        <span className="font-['Nunito'] font-bold text-xl text-[#4D7EA8]">$1,000 - $2,000</span>
                      </div>
                      <p className="text-gray-600 text-sm">
                        For serious emergencies or chronic conditions, costs could reach $3,000 - $10,000+
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Pet Insurance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Consider pet insurance as an alternative or supplement to a large emergency fund.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-[#4D7EA8] bg-opacity-5 p-3 rounded-lg text-center">
                        <h5 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-1">Monthly Premium</h5>
                        <p className="text-gray-700">$30 - $70</p>
                      </div>
                      <div className="bg-[#4D7EA8] bg-opacity-5 p-3 rounded-lg text-center">
                        <h5 className="font-['Nunito'] font-semibold text-[#4D7EA8] mb-1">Deductible</h5>
                        <p className="text-gray-700">$100 - $1,000</p>
                      </div>
                    </div>
                    
                    <h5 className="font-['Nunito'] font-semibold mb-2">Typical Coverage</h5>
                    <ul className="space-y-1 mb-4">
                      <li className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span className="text-gray-600 text-sm">Accidents & injuries</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span className="text-gray-600 text-sm">Illnesses & diseases</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-check text-green-500 mr-2"></i>
                        <span className="text-gray-600 text-sm">Surgery & hospitalization</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-times text-red-500 mr-2"></i>
                        <span className="text-gray-600 text-sm">Pre-existing conditions</span>
                      </li>
                      <li className="flex items-center">
                        <i className="fas fa-times text-red-500 mr-2"></i>
                        <span className="text-gray-600 text-sm">Routine/preventative care (unless added)</span>
                      </li>
                    </ul>
                    
                    <Alert className="bg-blue-50 border-blue-200">
                      <div className="flex items-center">
                        <i className="fas fa-info-circle text-blue-500 mr-2"></i>
                        <AlertTitle className="text-blue-800">Insurance Tip</AlertTitle>
                      </div>
                      <AlertDescription className="text-blue-700 mt-2">
                        The best time to get pet insurance is when your dog is young and healthy, before any pre-existing conditions develop.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          {/* Budget Calculator Tab */}
          <TabsContent value="calculator">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Dog Ownership Cost Calculator</CardTitle>
                <CardDescription>Customize to see your estimated expenses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="bg-[#4D7EA8] bg-opacity-5 p-6 rounded-lg">
                    <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4 text-center">Cost Estimate Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-['Nunito'] font-semibold text-center mb-2">First Year</h4>
                        <div className="text-center">
                          <span className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">
                            {formatCurrency(calculateFirstYearTotal().low)} - {formatCurrency(calculateFirstYearTotal().high)}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-['Nunito'] font-semibold text-center mb-2">Monthly Average</h4>
                        <div className="text-center">
                          <span className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">
                            {formatCurrency(calculateCategoryTotal(monthlyExpenses).low)} - {formatCurrency(calculateCategoryTotal(monthlyExpenses).high)}
                          </span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-['Nunito'] font-semibold text-center mb-2">Annual After Year 1</h4>
                        <div className="text-center">
                          <span className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8]">
                            {formatCurrency(calculateCategoryTotal(monthlyExpenses).low * 12 + calculateCategoryTotal(annualExpenses).low)} - {formatCurrency(calculateCategoryTotal(monthlyExpenses).high * 12 + calculateCategoryTotal(annualExpenses).high)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Cost Factors That Affect Your Budget</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Nunito'] font-semibold mb-2">Dog Size</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Small (under 20 lbs)</span>
                              <Badge variant="outline">Lower Cost</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Medium (20-60 lbs)</span>
                              <Badge variant="outline">Medium Cost</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Large (60+ lbs)</span>
                              <Badge variant="outline">Higher Cost</Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-2">
                            Larger dogs need more food, larger supplies, higher medication doses, and often incur higher vet and grooming fees.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Nunito'] font-semibold mb-2">Breed Type</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Mixed breed</span>
                              <Badge variant="outline">Lower Health Costs</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Purebred (generally healthy lines)</span>
                              <Badge variant="outline">Medium Health Costs</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Breeds with known health issues</span>
                              <Badge variant="outline">Higher Health Costs</Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-2">
                            Some breeds are prone to specific health conditions that may require ongoing treatment.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Nunito'] font-semibold mb-2">Coat Type</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Short, smooth coat</span>
                              <Badge variant="outline">Minimal Grooming</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Medium coat with some shedding</span>
                              <Badge variant="outline">Moderate Grooming</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Long, non-shedding, or double coat</span>
                              <Badge variant="outline">Extensive Grooming</Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-2">
                            Professional grooming for high-maintenance coats can add $500-$1,000+ annually.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-['Nunito'] font-semibold text-xl text-[#4D7EA8] mb-4">Lifestyle Considerations</h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-['Nunito'] font-semibold mb-2">Work Schedule</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Work from home</span>
                              <span className="text-green-600 font-semibold">$0</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Part-time away (dog walker 2-3x weekly)</span>
                              <span className="text-[#4D7EA8] font-semibold">$200-$300/month</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Full-time away (daily walker or daycare)</span>
                              <span className="text-[#F9A03F] font-semibold">$400-$800/month</span>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-['Nunito'] font-semibold mb-2">Travel Frequency</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Rarely travel without dog</span>
                              <span className="text-green-600 font-semibold">Minimal cost</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Occasional trips (1-3 annually)</span>
                              <span className="text-[#4D7EA8] font-semibold">$150-$450 annually</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Frequent traveler</span>
                              <span className="text-[#F9A03F] font-semibold">$600-$3,000 annually</span>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-2">
                            Boarding costs $40-$80 per night, pet sitters $25-$75 per day.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-['Nunito'] font-semibold mb-2">Quality of Care</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Basic necessities</span>
                              <Badge variant="outline">Minimum Budget</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Standard care with some extras</span>
                              <Badge variant="outline">Average Budget</Badge>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-gray-600">Premium food, supplies, and services</span>
                              <Badge variant="outline">Premium Budget</Badge>
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mt-2">
                            Premium options can increase your budget by 50-100%.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <Alert className="bg-[#4D7EA8] bg-opacity-10 border-[#4D7EA8]">
                    <div className="flex items-center">
                      <i className="fas fa-calculator text-[#4D7EA8] mr-2"></i>
                      <AlertTitle className="text-[#4D7EA8]">Budget Planning Advice</AlertTitle>
                    </div>
                    <AlertDescription className="text-gray-700 mt-2">
                      <p className="mb-2">We recommend budgeting slightly more than your expected costs to create a cushion for unexpected expenses. A good rule of thumb:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Budget based on the higher end of cost ranges</li>
                        <li>Add 10-15% extra for unexpected expenses</li>
                        <li>Build your emergency fund before getting a dog</li>
                        <li>Consider pet insurance for major medical expenses</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Budget;