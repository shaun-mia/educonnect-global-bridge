
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Clock, TrendingUp, Pin } from "lucide-react";

const forums = [
  {
    id: 1,
    title: "Engineering & Technology",
    description: "Discuss the latest in engineering, share projects, and collaborate on technical challenges.",
    members: 15420,
    posts: 45672,
    color: "blue",
    trending: true,
    lastActivity: "2 minutes ago",
    subcategories: ["Computer Science", "Mechanical", "Electrical", "Civil"],
    activeDiscussions: [
      { title: "Best practices for machine learning projects", replies: 23, lastReply: "5m ago" },
      { title: "Sustainable engineering solutions", replies: 15, lastReply: "12m ago" }
    ]
  },
  {
    id: 2,
    title: "Medical & Health Sciences",
    description: "Medical students and professionals sharing knowledge, experiences, and study resources.",
    members: 8934,
    posts: 29183,
    color: "red",
    trending: false,
    lastActivity: "8 minutes ago",
    subcategories: ["Medicine", "Nursing", "Pharmacy", "Public Health"],
    activeDiscussions: [
      { title: "USMLE Step 1 preparation strategies", replies: 45, lastReply: "3m ago" },
      { title: "Clinical rotation experiences", replies: 18, lastReply: "8m ago" }
    ]
  },
  {
    id: 3,
    title: "Business & Economics",
    description: "Future business leaders discussing market trends, case studies, and career opportunities.",
    members: 12756,
    posts: 38924,
    color: "green",
    trending: true,
    lastActivity: "1 minute ago",
    subcategories: ["Finance", "Marketing", "Management", "Economics"],
    activeDiscussions: [
      { title: "Startup funding strategies in 2024", replies: 32, lastReply: "1m ago" },
      { title: "International market analysis", replies: 27, lastReply: "15m ago" }
    ]
  },
  {
    id: 4,
    title: "Liberal Arts & Humanities",
    description: "Explore literature, philosophy, history, and cultural studies with fellow humanities students.",
    members: 6789,
    posts: 21456,
    color: "purple",
    trending: false,
    lastActivity: "15 minutes ago",
    subcategories: ["Literature", "Philosophy", "History", "Languages"],
    activeDiscussions: [
      { title: "Modern poetry analysis techniques", replies: 12, lastReply: "10m ago" },
      { title: "Historical research methodologies", replies: 8, lastReply: "15m ago" }
    ]
  }
];

const ForumsSection = () => {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", border: "border-blue-200" },
      red: { bg: "bg-red-100", text: "text-red-800", border: "border-red-200" },
      green: { bg: "bg-green-100", text: "text-green-800", border: "border-green-200" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", border: "border-purple-200" }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-16 bg-white" id="forums">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-edu-blue-100 text-edu-blue-800">
            <MessageCircle className="h-4 w-4 mr-2" />
            Active Communities
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-edu-blue-900 mb-4">
            Academic Forums & Discussion Groups
          </h2>
          <p className="text-lg text-edu-gray-600 max-w-2xl mx-auto">
            Join field-specific discussions, share knowledge, and learn from peers in your area of study.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {forums.map((forum) => {
            const colorClasses = getColorClasses(forum.color);
            return (
              <Card key={forum.id} className="hover-scale bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-edu-blue-900">{forum.title}</h3>
                        {forum.trending && (
                          <Badge className="bg-amber-100 text-amber-800">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <p className="text-edu-gray-600 text-sm mb-3">{forum.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-edu-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{forum.members.toLocaleString()} members</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="h-4 w-4" />
                      <span>{forum.posts.toLocaleString()} posts</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{forum.lastActivity}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {forum.subcategories.map((category) => (
                      <Badge 
                        key={category} 
                        variant="outline" 
                        className={`text-xs ${colorClasses.border} ${colorClasses.text}`}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Pin className="h-4 w-4 text-edu-gray-400" />
                      <span className="text-sm font-medium text-edu-gray-700">Active Discussions</span>
                    </div>
                    {forum.activeDiscussions.map((discussion, index) => (
                      <div key={index} className="bg-edu-gray-50 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-edu-blue-900 mb-1 line-clamp-1">
                          {discussion.title}
                        </h4>
                        <div className="flex items-center gap-3 text-xs text-edu-gray-500">
                          <span>{discussion.replies} replies</span>
                          <span>•</span>
                          <span>Last reply {discussion.lastReply}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      className={`flex-1 ${colorClasses.bg} hover:${colorClasses.bg}/80 ${colorClasses.text} border-0 rounded-xl`}
                      size="sm"
                    >
                      Join Forum
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`${colorClasses.border} ${colorClasses.text} rounded-xl`}
                    >
                      <MessageCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-edu-blue-50 to-edu-gray-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-edu-blue-600 mb-2">50K+</div>
              <div className="text-edu-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-edu-blue-600 mb-2">150K+</div>
              <div className="text-edu-gray-600">Total Posts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-edu-blue-600 mb-2">25+</div>
              <div className="text-edu-gray-600">Subject Areas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-edu-blue-600 mb-2">95%</div>
              <div className="text-edu-gray-600">Response Rate</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" className="border-edu-blue-300 text-edu-blue-700 hover:bg-edu-blue-50 rounded-xl px-8">
            Explore All Forums
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForumsSection;
