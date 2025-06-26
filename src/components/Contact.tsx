
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-blue-100 mb-6 transition-colors duration-300">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            I'm always interested in new opportunities and exciting projects. 
            Let's discuss how we can work together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 dark:bg-blue-600 rounded-lg">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 transition-colors duration-300">Email</h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">alex.smith@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 dark:bg-blue-600 rounded-lg">
                <Phone size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 transition-colors duration-300">Phone</h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-600 dark:bg-blue-600 rounded-lg">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2 transition-colors duration-300">Location</h3>
                <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">San Francisco, CA</p>
              </div>
            </div>

            <div className="mt-12 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl transition-colors duration-300">
              <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-4 transition-colors duration-300">Let's Connect</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 transition-colors duration-300">
                Whether you're looking to build something amazing or just want to chat about technology, 
                I'd love to hear from you.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                  GitHub
                </a>
                <a href="#" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-8 transition-colors duration-300">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                Send Message
                <Send size={20} className="ml-2" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700 text-center transition-colors duration-300">
          <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
            © 2024 Alex Smith. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
