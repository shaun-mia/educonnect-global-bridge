
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Users } from "lucide-react";
import { useState } from "react";

const programs = [
  {
    id: 1,
    title: "Master of Computer Science",
    university: "Stanford University",
    country: "USA",
    duration: "2 years",
    students: 2500,
    rating: 4.9,
    price: "$58,000/year",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop",
    featured: true,
    category: "Technology"
  },
  {
    id: 2,
    title: "International Business MBA",
    university: "London Business School",
    country: "UK",
    duration: "18 months",
    students: 1800,
    rating: 4.8,
    price: "£92,000/year",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop",
    featured: true,
    category: "Business"
  },
  {
    id: 3,
    title: "Biomedical Engineering",
    university: "ETH Zurich",
    country: "Switzerland",
    duration: "2 years",
    students: 890,
    rating: 4.7,
    price: "CHF 1,300/year",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=200&fit=crop",
    featured: false,
    category: "Engineering"
  },
  {
    id: 4,
    title: "Global Health Policy",
    university: "University of Oxford",
    country: "UK",
    duration: "1 year",
    students: 450,
    rating: 4.9,
    price: "£28,000/year",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop",
    featured: false,
    category: "Health"
  }
];

const TrendingPrograms = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextProgram = () => {
    setCurrentIndex((prev) => (prev + 1) % programs.length);
  };
  
  const prevProgram = () => {
    setCurrentIndex((prev) => (prev - 1 + programs.length) % programs.length);
  };

  return (
    <section className="py-16 bg-white" id="programs">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-edu-blue-900 mb-4">
            Trending University Programs
          </h2>
          <p className="text-lg text-edu-gray-600 max-w-2xl mx-auto">
            Discover world-class programs from top universities around the globe
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {programs.map((program) => (
            <Card key={program.id} className="hover-scale overflow-hidden border-0 shadow-lg bg-white rounded-2xl">
              {program.featured && (
                <Badge className="absolute top-4 left-4 z-10 bg-edu-blue-600 text-white">
                  Featured
                </Badge>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-edu-blue-900 mb-1">
                      {program.title}
                    </h3>
                    <p className="text-edu-gray-600 font-medium">{program.university}</p>
                  </div>
                  <Badge variant="outline" className="text-edu-blue-600 border-edu-blue-200">
                    {program.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex items-center gap-4 text-sm text-edu-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {program.country}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {program.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {program.students.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="font-medium">{program.rating}</span>
                    </div>
                    <span className="text-xl font-bold text-edu-blue-600">{program.price}</span>
                  </div>
                  <Button className="bg-edu-blue-600 hover:bg-edu-blue-700 text-white rounded-xl">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Card className="hover-scale overflow-hidden border-0 shadow-lg bg-white rounded-2xl mb-4">
            {programs[currentIndex].featured && (
              <Badge className="absolute top-4 left-4 z-10 bg-edu-blue-600 text-white">
                Featured
              </Badge>
            )}
            
            <div className="relative h-48 overflow-hidden">
              <img 
                src={programs[currentIndex].image} 
                alt={programs[currentIndex].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-edu-blue-900 mb-1">
                    {programs[currentIndex].title}
                  </h3>
                  <p className="text-edu-gray-600 font-medium">{programs[currentIndex].university}</p>
                </div>
                <Badge variant="outline" className="text-edu-blue-600 border-edu-blue-200">
                  {programs[currentIndex].category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="flex items-center gap-4 text-sm text-edu-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {programs[currentIndex].country}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {programs[currentIndex].duration}
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{programs[currentIndex].rating}</span>
                  </div>
                  <span className="text-xl font-bold text-edu-blue-600">{programs[currentIndex].price}</span>
                </div>
                <Button className="bg-edu-blue-600 hover:bg-edu-blue-700 text-white rounded-xl">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4">
            <Button onClick={prevProgram} variant="outline" className="rounded-xl">
              Previous
            </Button>
            <Button onClick={nextProgram} variant="outline" className="rounded-xl">
              Next
            </Button>
          </div>
        </div>
        
        <div className="text-center">
          <Button variant="outline" className="border-edu-blue-300 text-edu-blue-700 hover:bg-edu-blue-50 rounded-xl px-8">
            View All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingPrograms;
