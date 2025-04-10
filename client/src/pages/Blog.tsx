import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { blogPosts } from "@/lib/data";

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Get unique categories from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter posts based on search term and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  return (
    <>
      <Helmet>
        <title>Dog Care Blog - PawParents</title>
        <meta name="description" content="Read our latest articles on dog care, training tips, health advice, and stories from fellow dog parents." />
      </Helmet>

      <div className="bg-[#4D7EA8] py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-['Nunito'] font-bold text-3xl md:text-4xl text-white mb-4 text-center">Dog Care Blog</h1>
          <p className="text-white text-lg max-w-3xl mx-auto text-center opacity-90">
            Insights, advice, and stories to help you on your journey as a dog parent.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Search & Filter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">Search Posts</label>
                    <Input
                      id="search"
                      type="text"
                      placeholder="Search by keyword..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
                    <div className="space-y-2">
                      <Button 
                        variant={selectedCategory === null ? "default" : "outline"}
                        className={selectedCategory === null ? "bg-[#4D7EA8] w-full justify-start" : "w-full justify-start"}
                        onClick={() => setSelectedCategory(null)}
                      >
                        All Categories
                      </Button>
                      {categories.map(category => (
                        <Button 
                          key={category} 
                          variant={selectedCategory === category ? "default" : "outline"}
                          className={selectedCategory === category ? "bg-[#4D7EA8] w-full justify-start" : "w-full justify-start"}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 10).map(tag => (
                        <Badge 
                          key={tag} 
                          variant="outline" 
                          className="cursor-pointer hover:bg-[#4D7EA8] hover:text-white transition-colors"
                          onClick={() => setSearchTerm(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="font-['Nunito'] text-[#4D7EA8] text-xl">Subscribe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Get our latest articles, tips, and resources delivered to your inbox.
                </p>
                <div className="space-y-4">
                  <Input placeholder="Your email address" type="email" />
                  <Button className="w-full bg-[#F9A03F] hover:bg-[#F9A03F]/90">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            {filteredPosts.length > 0 && !searchTerm && !selectedCategory && (
              <Card className="mb-8 overflow-hidden">
                <div className="relative h-80 w-full">
                  <img 
                    src={filteredPosts[0].imageUrl} 
                    alt={filteredPosts[0].title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 p-6">
                      <Badge className="bg-[#F9A03F] mb-2">
                        {filteredPosts[0].category.charAt(0).toUpperCase() + filteredPosts[0].category.slice(1)}
                      </Badge>
                      <h2 className="font-['Nunito'] font-bold text-2xl md:text-3xl text-white mb-2">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-white text-opacity-90 mb-4 max-w-3xl">
                        {filteredPosts[0].excerpt}
                      </p>
                      <div className="flex items-center text-white text-opacity-80 text-sm">
                        <span className="mr-4">By {filteredPosts[0].author}</span>
                        <span>{formatDate(filteredPosts[0].date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="bg-white p-4">
                  <Button className="bg-[#4D7EA8] hover:bg-[#4D7EA8]/90">Read Full Article</Button>
                </CardFooter>
              </Card>
            )}
            
            {/* Post Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.slice(searchTerm || selectedCategory ? 0 : 1).map(post => (
                <Card key={post.id} className="overflow-hidden h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge className="bg-[#4D7EA8] bg-opacity-10 text-[#4D7EA8]">
                        {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                      </Badge>
                      <span className="text-gray-500 text-sm">{formatDate(post.date)}</span>
                    </div>
                    <CardTitle className="font-['Nunito'] text-lg text-[#4D7EA8]">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600 text-sm">
                      {post.excerpt}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center pt-0">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                      ))}
                      {post.tags.length > 2 && <Badge variant="outline" className="text-xs">+{post.tags.length - 2}</Badge>}
                    </div>
                    <Button size="sm" variant="link" className="text-[#F9A03F]">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <Card className="p-8 text-center">
                <div className="text-4xl mb-4">🔍</div>
                <CardTitle className="font-['Nunito'] text-xl mb-2">No Posts Found</CardTitle>
                <CardDescription>
                  Try adjusting your search terms or filters to find what you're looking for.
                </CardDescription>
                <Button 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                  className="mt-4 bg-[#4D7EA8]"
                >
                  Clear All Filters
                </Button>
              </Card>
            )}
            
            {filteredPosts.length > 0 && (
              <div className="mt-8 flex justify-center">
                <Button variant="outline" size="lg">Load More Articles</Button>
              </div>
            )}
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="mt-16 bg-[#4D7EA8] bg-opacity-5 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Nunito'] font-bold text-2xl text-[#4D7EA8] mb-3">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay up-to-date with the latest dog care tips, product reviews, and special offers. We promise not to spam your inbox!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input placeholder="Your email address" className="flex-grow" />
              <Button className="bg-[#F9A03F] hover:bg-[#F9A03F]/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;