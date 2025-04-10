import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Breed } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type QuestionStep = 1 | 2 | 3;

interface QuizState {
  livingSpace: string;
  activityLevel: string;
  experience: string;
}

const BreedChooser: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<QuestionStep>(1);
  const [showResults, setShowResults] = useState(false);
  const [quizState, setQuizState] = useState<QuizState>({
    livingSpace: "",
    activityLevel: "",
    experience: "",
  });

  const { data: breedRecommendations, isLoading: isLoadingRecommendations } = useQuery({
    queryKey: ['/api/breeds/recommend'],
    enabled: showResults && !!quizState.livingSpace && !!quizState.activityLevel && !!quizState.experience,
    queryFn: async () => {
      const res = await apiRequest('POST', '/api/breeds/recommend', quizState);
      return res.json() as Promise<Breed[]>;
    }
  });

  const handleOptionSelect = (option: string) => {
    if (currentQuestion === 1) {
      setQuizState(prev => ({ ...prev, livingSpace: option }));
    } else if (currentQuestion === 2) {
      setQuizState(prev => ({ ...prev, activityLevel: option }));
    } else if (currentQuestion === 3) {
      setQuizState(prev => ({ ...prev, experience: option }));
    }

    // Auto advance after a short delay
    setTimeout(() => {
      if (currentQuestion < 3) {
        setCurrentQuestion(prev => (prev + 1) as QuestionStep);
      } else {
        setShowResults(true);
      }
    }, 500);
  };

  const handleNext = () => {
    if (currentQuestion < 3) {
      setCurrentQuestion(prev => (prev + 1) as QuestionStep);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => (prev - 1) as QuestionStep);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(1);
    setShowResults(false);
    setQuizState({
      livingSpace: "",
      activityLevel: "",
      experience: "",
    });
  };

  return (
    <section id="breed-chooser" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-[#4D7EA8] mb-4">Find Your Perfect Match</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Answer a few questions about your lifestyle and preferences to discover dog breeds that might be perfect for you.
          </p>
        </div>
        
        <Card className="p-6 md:p-8 max-w-4xl mx-auto">
          <CardContent className="p-0 space-y-8">
            {!showResults ? (
              <>
                {/* Question 1 */}
                <div className={currentQuestion === 1 ? "block" : "hidden"}>
                  <h3 className="font-['Nunito'] font-bold text-xl text-[#4D7EA8] mb-4">What's your living situation?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleOptionSelect("apartment")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.livingSpace === "apartment" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Apartment</div>
                        <div className="text-sm">Small to medium space with no yard</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("house-small-yard")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.livingSpace === "house-small-yard" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">House with small yard</div>
                        <div className="text-sm">Some outdoor space, but limited</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("house-large-yard")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.livingSpace === "house-large-yard" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">House with large yard</div>
                        <div className="text-sm">Plenty of outdoor space for play</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("rural")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.livingSpace === "rural" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Rural property</div>
                        <div className="text-sm">Lots of open space to explore</div>
                      </div>
                    </Button>
                  </div>
                </div>
                
                {/* Question 2 */}
                <div className={currentQuestion === 2 ? "block" : "hidden"}>
                  <h3 className="font-['Nunito'] font-bold text-xl text-[#4D7EA8] mb-4">How active is your lifestyle?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleOptionSelect("sedentary")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.activityLevel === "sedentary" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Mostly sedentary</div>
                        <div className="text-sm">Short daily walks, lots of indoor time</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("moderately-active")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.activityLevel === "moderately-active" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Moderately active</div>
                        <div className="text-sm">Daily walks and some play time</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("active")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.activityLevel === "active" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Active</div>
                        <div className="text-sm">Long walks, hikes, or jogs regularly</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("very-active")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.activityLevel === "very-active" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Very active</div>
                        <div className="text-sm">Running, hiking, or outdoor adventures daily</div>
                      </div>
                    </Button>
                  </div>
                </div>
                
                {/* Question 3 */}
                <div className={currentQuestion === 3 ? "block" : "hidden"}>
                  <h3 className="font-['Nunito'] font-bold text-xl text-[#4D7EA8] mb-4">What's your experience level with dogs?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Button
                      onClick={() => handleOptionSelect("first-time")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.experience === "first-time" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">First-time owner</div>
                        <div className="text-sm">I've never owned a dog before</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("some-experience")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.experience === "some-experience" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Some experience</div>
                        <div className="text-sm">I've had a dog before or helped care for one</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("experienced")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.experience === "experienced" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Experienced</div>
                        <div className="text-sm">I've owned several dogs</div>
                      </div>
                    </Button>
                    <Button
                      onClick={() => handleOptionSelect("professional")}
                      variant="outline"
                      className={`p-4 h-auto justify-start text-left ${quizState.experience === "professional" ? "bg-[#4D7EA8] text-white" : "bg-gray-100 hover:bg-[#4D7EA8] hover:text-white"}`}
                    >
                      <div>
                        <div className="font-['Nunito'] font-semibold mb-1">Professional</div>
                        <div className="text-sm">I work with dogs or have extensive experience</div>
                      </div>
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              // Results
              <div>
                <h3 className="font-['Nunito'] font-bold text-xl text-[#4D7EA8] mb-4">Your Potential Matches</h3>
                <p className="mb-6 text-gray-600">Based on your responses, these breeds might be a good fit for you:</p>
                
                {isLoadingRecommendations ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[1, 2].map(idx => (
                      <div key={idx} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                        <Skeleton className="h-48 w-full" />
                        <div className="p-4">
                          <Skeleton className="h-6 w-3/4 mb-2" />
                          <Skeleton className="h-4 w-full mb-3" />
                          <Skeleton className="h-4 w-full mb-3" />
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-6 w-16" />
                            <Skeleton className="h-6 w-28" />
                          </div>
                          <Skeleton className="h-4 w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {breedRecommendations?.map((breed) => (
                      <div key={breed.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                        <img 
                          src={breed.imageUrl} 
                          alt={breed.name} 
                          className="h-48 w-full object-cover" 
                          width="800" 
                          height="450"
                        />
                        <div className="p-4">
                          <h4 className="font-['Nunito'] font-bold text-lg mb-2">{breed.name}</h4>
                          <p className="text-sm text-gray-600 mb-3">{breed.description}</p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {breed.tags?.map((tag, idx) => (
                              <span key={idx} className="bg-[#4D7EA8] bg-opacity-10 text-[#4D7EA8] text-xs font-semibold px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a href="#" className="text-[#F9A03F] font-semibold hover:text-[#4D7EA8] transition-colors text-sm">
                            Learn more about {breed.name}s
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="mt-8 text-center">
                  <p className="mb-4 text-gray-600">Want to explore more breed options?</p>
                  <Button 
                    onClick={restartQuiz}
                    className="bg-[#F9A03F] hover:bg-opacity-90 text-white font-['Nunito'] font-semibold shadow hover:shadow-md"
                  >
                    Start Over
                  </Button>
                  <a href="#" className="block mt-4 text-[#4D7EA8] hover:text-[#F9A03F] transition-colors">
                    View complete breed guide
                  </a>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            {!showResults && (
              <div className="flex justify-between mt-8">
                <Button
                  onClick={handlePrevious}
                  variant="outline"
                  className={`${currentQuestion === 1 ? 'invisible' : 'visible'} bg-gray-200 hover:bg-gray-300 text-gray-700 font-['Nunito'] font-semibold`}
                >
                  <i className="fas fa-arrow-left mr-2"></i> Previous
                </Button>
                <Button
                  onClick={handleNext}
                  className="ml-auto bg-[#4D7EA8] hover:bg-opacity-90 text-white font-['Nunito'] font-semibold shadow hover:shadow-md"
                >
                  {currentQuestion === 3 ? (
                    <>See Results <i className="fas fa-paw ml-2"></i></>
                  ) : (
                    <>Next <i className="fas fa-arrow-right ml-2"></i></>
                  )}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BreedChooser;
