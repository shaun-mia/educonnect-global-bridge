
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, GraduationCap, Book, Building } from "lucide-react";

const profiles = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "student",
    major: "Computer Science",
    university: "MIT",
    country: "USA",
    year: "Junior",
    skills: ["Python", "React", "Machine Learning"],
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
    verified: true
  },
  {
    id: 2,
    name: "Dr. Alessandro Rossi",
    role: "professor",
    department: "Economics",
    university: "Bocconi University",
    country: "Italy",
    publications: 47,
    specializations: ["Behavioral Economics", "Game Theory"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    verified: true
  },
  {
    id: 3,
    name: "University of Tokyo",
    role: "university",
    type: "Public Research University",
    country: "Japan",
    ranking: "#23 Global",
    students: "28,000+",
    programs: ["Engineering", "Medicine", "Liberal Arts"],
    avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=150&h=150&fit=crop",
    verified: true
  },
  {
    id: 4,
    name: "Maria Gonzalez",
    role: "student",
    major: "Biomedical Engineering",
    university: "Universidad Politécnica de Madrid",
    country: "Spain",
    year: "Graduate",
    skills: ["MATLAB", "3D Modeling", "Research"],
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    verified: true
  }
];

const UserProfiles = () => {
  const getRoleIcon = (role: string) => {
    switch (role) {
      case "student":
        return <GraduationCap className="h-4 w-4" />;
      case "professor":
        return <Book className="h-4 w-4" />;
      case "university":
        return <Building className="h-4 w-4" />;
      default:
        return <GraduationCap className="h-4 w-4" />;
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "student":
        return "bg-green-100 text-green-800";
      case "professor":
        return "bg-blue-100 text-blue-800";
      case "university":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-16 bg-edu-gray-50" id="connect">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-edu-blue-900 mb-4">
            Connect with Our Community
          </h2>
          <p className="text-lg text-edu-gray-600 max-w-2xl mx-auto">
            Join students, professors, and universities from around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {profiles.map((profile) => (
            <Card key={profile.id} className="hover-scale bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-2">
                <div className="relative mx-auto mb-4">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto border-4 border-white shadow-lg"
                  />
                  {profile.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-edu-blue-600 text-white rounded-full p-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-edu-blue-900">{profile.name}</h3>
                  <Badge className={`${getRoleColor(profile.role)} text-xs`}>
                    {getRoleIcon(profile.role)}
                    <span className="ml-1 capitalize">{profile.role}</span>
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 text-sm">
                  {profile.role === "student" && (
                    <>
                      <div>
                        <p className="font-medium text-edu-blue-700">{profile.major}</p>
                        <p className="text-edu-gray-600">{profile.university}</p>
                        <p className="text-edu-gray-500">{profile.year}</p>
                      </div>
                      <div className="flex items-center gap-1 text-edu-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{profile.country}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {profile.skills?.slice(0, 2).map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {profile.skills && profile.skills.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{profile.skills.length - 2}
                          </Badge>
                        )}
                      </div>
                    </>
                  )}

                  {profile.role === "professor" && (
                    <>
                      <div>
                        <p className="font-medium text-edu-blue-700">{profile.department}</p>
                        <p className="text-edu-gray-600">{profile.university}</p>
                        <p className="text-edu-gray-500">{profile.publications} Publications</p>
                      </div>
                      <div className="flex items-center gap-1 text-edu-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{profile.country}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {profile.specializations?.slice(0, 1).map((spec) => (
                          <Badge key={spec} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                        {profile.specializations && profile.specializations.length > 1 && (
                          <Badge variant="outline" className="text-xs">
                            +{profile.specializations.length - 1}
                          </Badge>
                        )}
                      </div>
                    </>
                  )}

                  {profile.role === "university" && (
                    <>
                      <div>
                        <p className="font-medium text-edu-blue-700">{profile.type}</p>
                        <p className="text-edu-gray-600">{profile.ranking}</p>
                        <p className="text-edu-gray-500">{profile.students} Students</p>
                      </div>
                      <div className="flex items-center gap-1 text-edu-gray-500">
                        <MapPin className="h-3 w-3" />
                        <span>{profile.country}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {profile.programs?.slice(0, 2).map((program) => (
                          <Badge key={program} variant="outline" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                        {profile.programs && profile.programs.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{profile.programs.length - 2}
                          </Badge>
                        )}
                      </div>
                    </>
                  )}
                </div>

                <Button 
                  className="w-full mt-4 bg-edu-blue-600 hover:bg-edu-blue-700 text-white rounded-xl" 
                  size="sm"
                >
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="border-edu-blue-300 text-edu-blue-700 hover:bg-edu-blue-50 rounded-xl px-8">
            Discover More Profiles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserProfiles;
