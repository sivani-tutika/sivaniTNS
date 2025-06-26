
import { Code, Database, Palette, Smartphone } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-400 to-blue-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research, Prototyping",
      color: "from-pink-400 to-red-400"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with 5+ years of experience building 
            scalable web applications. I love turning complex problems into simple, 
            beautiful solutions that users enjoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative p-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                <skill.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl">
            <p className="text-2xl text-gray-300 mb-4">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-purple-400 font-semibold">- Cory House</p>
          </div>
        </div>
      </div>
    </section>
  );
};
