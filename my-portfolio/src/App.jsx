/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProjectCarousel from "./components/ProjectCarousel";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Ojay97-hub/repos")
      .then((response) => response.json())
      .then((data) => {
        const myRepos = [
          "Jungle-Peaks-Brewing-Co",
          "event-scheduler",
          "black-jack-game",
          "Dinosaur-Quiz-",
          "The-Winchester",
        ];
        const filteredRepos = data.filter(repo =>
          myRepos.some(myRepo => repo.name.toLowerCase().includes(myRepo.toLowerCase()))
        );
        setRepos(filteredRepos);
      })
      .catch(error => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="min-h-screen font-sans bg-gray-900 text-white">      
      {/* Navbar - only visible on mobile */}
      <div className="lg:hidden">
        <Navbar />
      </div>

      {/* Main layout */}
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area - adjust with left padding on large screens to accommodate sidebar */}
        <main className="flex-grow lg:pl-64 overflow-x-hidden">
          {/* Hero Section */}
          <section id="hero" className="py-32 px-8 md:px-16 bg-gray-900 mt-16 lg:mt-0 min-h-screen flex items-center">
            <motion.div 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-extrabold">
                Hi, I'm <span className="text-sky-400">Owen<br />James</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-80 mt-6 leading-relaxed">
                A passionate full-stack developer skilled in JavaScript, Python, and cloud technologies.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="inline-block bg-sky-500 hover:bg-sky-400 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                >
                  View My Work
                </a>
                <a 
                  href="#contact" 
                  className="inline-block bg-transparent border-2 border-white hover:border-sky-400 hover:text-sky-400 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:translate-y-[-2px]"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-32 px-8 md:px-16 bg-gray-800">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Tech Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                  <div className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center transform hover:scale-105">
                    <span className="text-lg font-medium">JavaScript</span>
                  </div>
                  <div className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center transform hover:scale-105">
                    <span className="text-lg font-medium">React</span>
                  </div>
                  <div className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center transform hover:scale-105">
                    <span className="text-lg font-medium">Python</span>
                  </div>
                  <div className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center transform hover:scale-105">
                    <span className="text-lg font-medium">Django</span>
                  </div>
                  <div className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center transform hover:scale-105">
                    <span className="text-lg font-medium">Tailwind CSS</span>
                  </div>
                  <div className="bg-gray-700 hover:bg-gray-600 transition-all p-6 rounded-xl text-center transform hover:scale-105">
                    <span className="text-lg font-medium">Azure</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <ProjectCarousel />

          {/* Contact Section */}
          <section id="contact" className="py-32 px-8 md:px-16 bg-gray-800">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-6xl font-extrabold mb-10 text-center">Contact Me</h2>
              <p className="text-xl text-center opacity-80 mb-12">Feel free to reach out for collaborations or job opportunities.</p>
              
              <div className="bg-gray-700 rounded-2xl p-8 shadow-xl transform hover:scale-[1.01] transition-all">
                <div className="flex flex-col items-center">
                  <a 
                    href="mailto:owenjames97@outlook.com" 
                    className="text-sky-400 text-2xl hover:text-sky-300 transition-all font-semibold flex items-center gap-3 group"
                  >
                    <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center group-hover:bg-sky-400 transition-all">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    owenjames97@outlook.com 
                  </a>
                  
                  <div className="mt-10 w-full flex justify-center space-x-6">
                    <a href="https://github.com/Ojay97-hub" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-all">
                      <FaGithub className="text-xl" />
                    </a>
                    <a href="https://www.linkedin.com/in/junior-software-dev-owen-cotter" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-all">
                      <FaLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
