
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Video, MessageSquare, Calendar, Award } from "lucide-react";

const mentors = [
  {
    id: 1,
    name: "Dr. Emily Watson",
    title: "Professor of Computer Science",
    university: "Stanford University",
    rating: 4.9,
    reviews: 127,
    price: "$75/hour",
    specialties: ["Machine Learning", "Data Science", "Research Methods"],
    availability: "Available Today",
    sessions: 847,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    verified: true
  },
  {
    id: 2,
    name: "Prof. Marco Benedetti",
    title: "Economics Department Head",
    university: "London School of Economics",
    rating: 4.8,
    reviews: 89,
    price: "$65/hour",
    specialties: ["Econometrics", "Policy Analysis", "Career Guidance"],
    availability: "Next Available: Tomorrow",
    sessions: 623,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    verified: true
  },
  {
    id: 3,
    name: "Dr. Sarah Kim",
    title: "Biomedical Engineering Professor",
    university: "MIT",
    rating: 4.9,
    reviews: 156,
    price: "$80/hour",
    specialties: ["Biomechanics", "Medical Devices", "PhD Guidance"],
    availability: "Available Today",
    sessions: 921,
    avatar: "https://images.unsplash.com/photo-1559757175-4702e0c8bdc7?w=150&h=150&fit=crop&crop=face",
    verified: true
  }
];

const MentorshipSection = () => {
  return (
    <section className="py-16 bg-edu-gray-50" id="mentorship">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-amber-100 text-amber-800">
            <Award className="h-4 w-4 mr-2" />
            Premium Mentorship
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-edu-blue-900 mb-4">
            Learn from the Best Professors
          </h2>
          <p className="text-lg text-edu-gray-600 max-w-2xl mx-auto">
            Book one-on-one mentorship sessions with world-class professors. Get personalized guidance for your academic and career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover-scale bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto mb-4">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                  {mentor.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-1">
                      <Award className="w-4 h-4" />
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-bold text-edu-blue-900 text-lg">{mentor.name}</h3>
                  <p className="text-edu-blue-700 font-medium">{mentor.title}</p>
                  <p className="text-edu-gray-600 text-sm">{mentor.university}</p>
                </div>

                <div className="flex items-center justify-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-sm">{mentor.rating}</span>
                    <span className="text-edu-gray-500 text-sm">({mentor.reviews})</span>
                  </div>
                  <div className="text-2xl font-bold text-edu-blue-600">
                    {mentor.price}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Specialties */}
                  <div>
                    <p className="text-sm font-medium text-edu-gray-700 mb-2">Specialties</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.specialties.slice(0, 2).map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs border-edu-blue-200 text-edu-blue-600">
                          {specialty}
                        </Badge>
                      ))}
                      {mentor.specialties.length > 2 && (
                        <Badge variant="outline" className="text-xs border-edu-blue-200 text-edu-blue-600">
                          +{mentor.specialties.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-edu-gray-600">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{mentor.sessions} sessions</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs ${
                      mentor.availability.includes("Today") 
                        ? "bg-green-100 text-green-700" 
                        : "bg-amber-100 text-amber-700"
                    }`}>
                      {mentor.availability}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button className="flex-1 bg-edu-blue-600 hover:bg-edu-blue-700 text-white rounded-xl" size="sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book Session
                    </Button>
                    <Button variant="outline" size="sm" className="border-edu-blue-300 text-edu-blue-700 rounded-xl">
                      <MessageSquare className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="border-edu-blue-300 text-edu-blue-700 rounded-xl">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How it Works */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-edu-blue-900 text-center mb-8">
            How Mentorship Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-edu-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-edu-blue-600" />
              </div>
              <h4 className="font-semibold text-edu-blue-900 mb-2">1. Book a Session</h4>
              <p className="text-edu-gray-600 text-sm">Choose your mentor and schedule a convenient time for your session.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-edu-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Video className="h-8 w-8 text-edu-blue-600" />
              </div>
              <h4 className="font-semibold text-edu-blue-900 mb-2">2. Meet Online</h4>
              <p className="text-edu-gray-600 text-sm">Connect via video call for personalized guidance and advice.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-edu-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-edu-blue-600" />
              </div>
              <h4 className="font-semibold text-edu-blue-900 mb-2">3. Grow & Succeed</h4>
              <p className="text-edu-gray-600 text-sm">Apply insights to accelerate your academic and professional growth.</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-edu-blue-300 text-edu-blue-700 hover:bg-edu-blue-50 rounded-xl px-8">
            View All Mentors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
