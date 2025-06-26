
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Alex Smith
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 mb-8 h-12">
            <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
              {text}
            </span>
          </div>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications with modern technologies. 
            Passionate about creating seamless user experiences and writing clean, maintainable code.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="#"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-700/50 hover:border-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-700/50 hover:border-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-gray-300 hover:text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:bg-slate-700/50 hover:border-purple-400 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-gray-300 hover:text-white" />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-white transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
