
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun size={16} className="text-gray-600 dark:text-gray-400" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-blue-600"
              />
              <Moon size={16} className="text-gray-600 dark:text-gray-400" />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-100 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-lg mb-4 border border-gray-200 dark:border-gray-700">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-900 dark:hover:text-blue-100 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all duration-200 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Sun size={16} className="text-gray-600 dark:text-gray-400" />
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <Moon size={16} className="text-gray-600 dark:text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
