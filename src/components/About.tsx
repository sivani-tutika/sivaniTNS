
import { Code, Database, Palette, Smartphone } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, Next.js",
      color: "from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-blue-700 to-blue-900 dark:from-blue-500 dark:to-blue-700"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, Flutter, iOS, Android",
      color: "from-blue-500 to-blue-700 dark:from-blue-300 dark:to-blue-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Figma, Adobe XD, User Research, Prototyping",
      color: "from-blue-800 to-blue-900 dark:from-blue-600 dark:to-blue-800"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-6 transition-colors duration-300">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            I'm a passionate software developer with 5+ years of experience building 
            scalable web applications. I love turning complex problems into simple, 
            beautiful solutions that users enjoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group relative p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg dark:hover:shadow-blue-900/20"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} mb-4`}>
                <skill.icon size={24} className="text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">
                {skill.description}
              </p>

              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300">
            <p className="text-2xl text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
              "Code is like humor. When you have to explain it, it's bad."
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">- Cory House</p>
          </div>
        </div>
      </div>
    </section>
  );
};
