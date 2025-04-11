import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });
  
  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - PawParents</title>
        <meta name="description" content="Get in touch with our team for dog care advice, website feedback, or partnership opportunities." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Contact Us</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            We'd love to hear from you! Whether you have questions, feedback, or just want to share your dog parenting journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email address" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What's this about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              className="min-h-32" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-[#4D7EA8] hover:bg-[#4D7EA8]/90 w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-[#4D7EA8] bg-opacity-10 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-[#4D7EA8]"></i>
                    </div>
                    <div>
                      <h3 className="font-['Nunito'] font-semibold mb-1">Email Us</h3>
                      <p className="text-gray-600">support@pawparents.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#4D7EA8] bg-opacity-10 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-[#4D7EA8]"></i>
                    </div>
                    <div>
                      <h3 className="font-['Nunito'] font-semibold mb-1">Call Us</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="text-gray-500 text-sm">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-[#4D7EA8] bg-opacity-10 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-[#4D7EA8]"></i>
                    </div>
                    <div>
                      <h3 className="font-['Nunito'] font-semibold mb-1">Location</h3>
                      <p className="text-gray-600">123 Paw Street</p>
                      <p className="text-gray-600">San Francisco, CA 94103</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Connect With Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Follow us on social media for daily tips, adorable photos, and community updates.
                </p>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <i className="fab fa-facebook-f text-[#4D7EA8]"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <i className="fab fa-instagram text-[#4D7EA8]"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <i className="fab fa-twitter text-[#4D7EA8]"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <i className="fab fa-youtube text-[#4D7EA8]"></i>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <i className="fab fa-pinterest text-[#4D7EA8]"></i>
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">FAQs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8]">How quickly will you respond?</h3>
                    <p className="text-gray-600 text-sm">We aim to respond to all inquiries within 24-48 hours during business days.</p>
                  </div>
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8]">Can I request specific content?</h3>
                    <p className="text-gray-600 text-sm">Yes! We welcome suggestions for blog posts, guides, or resources you'd like to see.</p>
                  </div>
                  <div>
                    <h3 className="font-['Nunito'] font-semibold text-[#4D7EA8]">Do you offer personalized advice?</h3>
                    <p className="text-gray-600 text-sm">While we provide general guidance, we recommend consulting with a veterinarian or professional trainer for specific issues.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-16">
          <Card className="bg-[#F9A03F] bg-opacity-10 border-[#F9A03F]">
            <CardContent className="p-8">
              <div className="text-center">
                <h2 className="font-['Nunito'] font-bold text-2xl text-[#F9A03F] mb-3">Join Our Community</h2>
                <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
                  Connect with fellow dog parents, share stories, get advice, and be part of a supportive community dedicated to raising happy, healthy dogs.
                </p>
                <Button className="bg-[#F9A03F] hover:bg-[#F9A03F]/90">
                  Join Community Forum
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact;