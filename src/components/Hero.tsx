
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-900 mb-6">
            Hi, I'm{" "}
            <span className="text-blue-700">
              Alex Smith
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-8 h-12">
            <span className="border-r-2 border-blue-600 pr-1 animate-pulse">
              {text}
            </span>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications with modern technologies. 
            Passionate about creating seamless user experiences and writing clean, maintainable code.
          </p>

          <div className="flex justify-center space-x-6 mb-16">
            <a
              href="#"
              className="p-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} className="text-gray-700 hover:text-blue-900" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} className="text-gray-700 hover:text-blue-900" />
            </a>
            <a
              href="#"
              className="p-3 bg-gray-50 border border-gray-200 rounded-full hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} className="text-gray-700 hover:text-blue-900" />
            </a>
          </div>

          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-600 hover:text-blue-900 transition-colors duration-300"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
