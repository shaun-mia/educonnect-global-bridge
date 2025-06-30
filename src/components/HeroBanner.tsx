
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Globe, Book } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative bg-gradient-to-br from-edu-blue-50 via-white to-edu-gray-50 py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-edu-blue-100 text-edu-blue-800 hover:bg-edu-blue-200">
            <Globe className="h-4 w-4 mr-2" />
            Connecting 50+ Countries
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-edu-blue-900 mb-6 leading-tight">
            Welcome to <span className="text-edu-blue-600">EdFellow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-edu-gray-600 mb-4">
            The Global Education Network
          </p>
          
          <p className="text-lg text-edu-gray-500 mb-8 italic">
            "a place where education connects"
          </p>
          
          <p className="text-lg text-edu-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with students, professors, and universities worldwide. 
            Discover programs, find mentors, and build your academic future.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-edu-blue-600 hover:bg-edu-blue-700 text-white px-8 py-3 rounded-xl">
              <GraduationCap className="h-5 w-5 mr-2" />
              Start Connecting
            </Button>
            <Button size="lg" variant="outline" className="border-edu-blue-300 text-edu-blue-700 hover:bg-edu-blue-50 px-8 py-3 rounded-xl">
              <Book className="h-5 w-5 mr-2" />
              Explore Programs
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-edu-blue-600">10K+</div>
            <div className="text-edu-gray-500">Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-edu-blue-600">2K+</div>
            <div className="text-edu-gray-500">Professors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-edu-blue-600">500+</div>
            <div className="text-edu-gray-500">Universities</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-edu-blue-600">50+</div>
            <div className="text-edu-gray-500">Countries</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
