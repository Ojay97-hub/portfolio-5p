/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";

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
    <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">      
      {/* Navbar */}
      <Navbar />

      {/* Sidebar */}
      <Sidebar />

      {/* Hero Section */}
      <section id="hero" className="py-24 px-6 text-center bg-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl font-extrabold">
            Hi, I'm <span className="text-sky-400">Owen James</span>
          </h1>
          <p className="text-lg opacity-80 mt-4">
            A passionate full-stack developer skilled in JavaScript, Python, and cloud technologies.
          </p>
          <a 
            href="#projects" 
            className="mt-6 inline-block bg-sky-500 hover:bg-sky-400 px-6 py-3 rounded-lg text-lg font-bold transition-all"
          >
            View My Work
          </a>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-8">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <span className="px-4 py-2 bg-gray-700 rounded-full">JavaScript</span>
          <span className="px-4 py-2 bg-gray-700 rounded-full">React</span>
          <span className="px-4 py-2 bg-gray-700 rounded-full">Python</span>
          <span className="px-4 py-2 bg-gray-700 rounded-full">Django</span>
          <span className="px-4 py-2 bg-gray-700 rounded-full">Tailwind CSS</span>
          <span className="px-4 py-2 bg-gray-700 rounded-full">Azure</span>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-900 text-white">
        <h2 className="text-5xl font-extrabold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {repos.map((repo) => (
            <motion.div 
              key={repo.id} 
              whileHover={{ scale: 1.05 }} 
              className="bg-gray-800 p-6 rounded-xl shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold mb-2">{repo.name.replace(/-/g, " ")}</h3>
              <p className="opacity-80">{repo.description || "No description available"}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-all block mt-4 font-medium"
              >
                🔗 View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center bg-gray-800">
        <h2 className="text-5xl font-extrabold mb-6">Contact Me</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">Feel free to reach out for collaborations or job opportunities.</p>
        <a 
          href="mailto:your.email@example.com" 
          className="text-sky-400 text-lg mt-6 inline-block hover:text-sky-300 transition-all font-semibold"
        >
          📩 owenjames97@outlook.com 
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
