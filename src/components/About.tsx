
import { Code, Database, Palette, Smartphone } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-blue-700 to-blue-900"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research, Prototyping",
      color: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software developer with 5+ years of experience building 
            scalable web applications. I love turning complex problems into simple, 
            beautiful solutions that users enjoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                <skill.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-blue-900 mb-3 group-hover:text-blue-700 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white border border-gray-200 rounded-xl">
            <p className="text-2xl text-gray-700 mb-4">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-blue-600 font-semibold">- Cory House</p>
          </div>
        </div>
      </div>
    </section>
  );
};
