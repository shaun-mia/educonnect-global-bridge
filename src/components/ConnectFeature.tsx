
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, GraduationCap, Sparkles } from "lucide-react";

const connections = [
  {
    id: 1,
    title: "Computer Science Students",
    members: 2847,
    university: "Global Network",
    description: "Connect with CS students worldwide, share projects, and collaborate on coding challenges.",
    tags: ["Programming", "AI/ML", "Web Dev", "Mobile Dev"],
    activity: "Very Active",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=150&fit=crop"
  },
  {
    id: 2,
    title: "Medical Students International",
    members: 1923,
    university: "Global Network",
    description: "Share experiences, study resources, and support each other through medical school.",
    tags: ["Medicine", "Research", "Clinical", "USMLE"],
    activity: "Active",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=150&fit=crop"
  },
  {
    id: 3,
    title: "Business & Economics Hub",
    members: 1564,
    university: "Global Network",
    description: "Network with future business leaders, discuss market trends, and share internship opportunities.",
    tags: ["Business", "Finance", "Economics", "Startups"],
    activity: "Active",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=150&fit=crop"
  }
];

const ConnectFeature = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-edu-blue-100 text-edu-blue-800">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Matching
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-edu-blue-900 mb-4">
            Connect by Your Major
          </h2>
          <p className="text-lg text-edu-gray-600 max-w-2xl mx-auto">
            Join subject-specific communities where students with similar academic interests connect, collaborate, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {connections.map((connection) => (
            <Card key={connection.id} className="hover-scale bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={connection.image} 
                  alt={connection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <Badge className="absolute top-3 right-3 bg-green-500 text-white">
                  {connection.activity}
                </Badge>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-edu-blue-900 mb-1">
                      {connection.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-edu-gray-500">
                      <Users className="h-4 w-4" />
                      <span>{connection.members.toLocaleString()} members</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-edu-gray-600 text-sm mb-4 line-clamp-2">
                  {connection.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {connection.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-edu-blue-200 text-edu-blue-600">
                      {tag}
                    </Badge>
                  ))}
                  {connection.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs border-edu-blue-200 text-edu-blue-600">
                      +{connection.tags.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-edu-blue-600 hover:bg-edu-blue-700 text-white rounded-xl" size="sm">
                    <GraduationCap className="h-4 w-4 mr-1" />
                    Join Group
                  </Button>
                  <Button variant="outline" size="sm" className="border-edu-blue-300 text-edu-blue-700 rounded-xl">
                    <MessageCircle className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recommended Connections */}
        <div className="bg-gradient-to-r from-edu-blue-50 to-edu-gray-50 rounded-2xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <Sparkles className="h-12 w-12 text-edu-blue-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-edu-blue-900 mb-4">
              Recommended Connections
            </h3>
            <p className="text-edu-gray-600 mb-8">
              Based on your academic profile, we've found students and groups that match your interests. 
              Join the conversation and expand your network!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-edu-blue-600 hover:bg-edu-blue-700 text-white rounded-xl px-8">
                View My Matches
              </Button>
              <Button variant="outline" className="border-edu-blue-300 text-edu-blue-700 hover:bg-edu-blue-50 rounded-xl px-8">
                Customize Preferences
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectFeature;
