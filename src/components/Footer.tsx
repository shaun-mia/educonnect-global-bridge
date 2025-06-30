
import { GraduationCap, Globe, Book, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-edu-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-edu-blue-300" />
              <div>
                <h3 className="text-xl font-bold">EdFellow</h3>
                <p className="text-edu-blue-300 text-sm">Global Education Network</p>
              </div>
            </div>
            <p className="text-edu-blue-200 text-sm">
              Connecting students, professors, and universities worldwide through education.
            </p>
            <p className="text-edu-blue-300 text-sm italic">
              "a place where education connects"
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Platform</h4>
            <ul className="space-y-2 text-edu-blue-200">
              <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
              <li><a href="#connect" className="hover:text-white transition-colors">Connect</a></li>
              <li><a href="#mentorship" className="hover:text-white transition-colors">Mentorship</a></li>
              <li><a href="#forums" className="hover:text-white transition-colors">Forums</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Community</h4>
            <ul className="space-y-2 text-edu-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Students</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Universities</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alumni Network</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Support</h4>
            <ul className="space-y-2 text-edu-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-edu-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-edu-blue-200 text-sm">
              © 2024 EdFellow. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-edu-blue-200 text-sm">
                <Globe className="h-4 w-4" />
                <span>50+ Countries Connected</span>
              </div>
              <div className="flex items-center gap-2 text-edu-blue-200 text-sm">
                <Book className="h-4 w-4" />
                <span>1000+ Programs</span>
              </div>
              <div className="flex items-center gap-2 text-edu-blue-200 text-sm">
                <MessageCircle className="h-4 w-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
