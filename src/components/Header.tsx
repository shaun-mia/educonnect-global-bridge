
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { GraduationCap, Globe, Book, Bell, User, Search, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("EN");
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <GraduationCap className="h-8 w-8 text-edu-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-edu-blue-800">EdFellow</h1>
              <p className="text-xs text-edu-gray-500 -mt-1">Global Education Network</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#programs" className="text-edu-gray-600 hover:text-edu-blue-600 transition-colors">Programs</a>
          <a href="#connect" className="text-edu-gray-600 hover:text-edu-blue-600 transition-colors">Connect</a>
          <a href="#mentorship" className="text-edu-gray-600 hover:text-edu-blue-600 transition-colors">Mentorship</a>
          <a href="#forums" className="text-edu-gray-600 hover:text-edu-blue-600 transition-colors">Forums</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Search - Desktop only */}
          <Button variant="ghost" size="sm" className="hidden lg:flex">
            <Search className="h-4 w-4" />
          </Button>

          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex items-center space-x-1">
                <Globe className="h-4 w-4" />
                <span className="text-sm">{language}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border shadow-lg">
              <DropdownMenuItem onClick={() => setLanguage("EN")}>English</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("ES")}>Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("FR")}>Français</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("DE")}>Deutsch</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="hidden sm:flex relative">
            <Bell className="h-4 w-4" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-edu-blue-500">3</Badge>
          </Button>

          {/* Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white border shadow-lg">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign Out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
