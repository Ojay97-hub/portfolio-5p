import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Import Images
import blackjackImg from "../assets/images/black-jack-game.jpeg";
import dinoQuizImg from "../assets/images/dinosaurs.jpg";
import eventSchedulerImg from "../assets/images/event-scheduler.jpeg";
import junglePeaksImg from "../assets/images/jungle-peaks.webp";
import winchesterImg from "../assets/images/winchester.jpg";

const projects = [
{
    name: "P1: The Winchester",
    description: "A responsive static website built for a pub.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Ojay97-hub/The-Winchester",
    image: winchesterImg,
    },
    {
    name: "P2: Dinosaur Quiz",
    description: "An interactive JavaScript quiz game using event listeners and DOM manipulation.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ojay97-hub/Dinosaur-Quiz-",
    image: dinoQuizImg,
 },
  {
    name: "P3: Blackjack Game",
    description: "A Python-based Blackjack game using object-oriented programming.",
    tech: ["Python", "OOP", "CLI"],
    github: "https://github.com/Ojay97-hub/black-jack-game",
    image: blackjackImg,
  },
  {
    name: "P4: Event Scheduler",
    description: "A Django-powered event booking system allowing users to register for events.",
    tech: ["Django", "Python", "PostgreSQL"],
    github: "https://github.com/Ojay97-hub/event-scheduler",
    image: eventSchedulerImg,
  },
  {
    name: "P5: Jungle Peaks Brewing Co",
    description: "An e-commerce site for a brewery with Stripe payments and a Django backend.",
    tech: ["Django", "JavaScript", "Bootstrap", "PostgreSQL"],
    github: "https://github.com/Ojay97-hub/Jungle-Peaks-Brewing-Co",
    image: junglePeaksImg,
  },

];

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center">
      <h2 className="text-5xl font-extrabold mb-12 tracking-wide text-sky-400">
        My Projects
      </h2>
      <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed mt-2 px-4 mb-8">
        Over the course of my 12-month Full-Stack Development program at <span className="text-sky-400 font-semibold">Code Institute</span>, 
        I built a series of projects that showcase my growth as a developer. Each assignment challenged me to apply new technologies, 
        enhance user experiences, and develop real-world applications. From interactive front-end designs to full-stack applications with 
        databases and authentication, these projects represent my journey into modern web development.  
        </p>


      <div className="relative w-full max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col items-center border border-gray-700 hover:border-sky-500 transition-all relative"
          >
            {/* Project Image */}
            <img
              src={projects[index].image}
              alt={projects[index].name}
              className="w-full h-56 object-cover rounded-lg mb-6 shadow-lg"
            />

            {/* Project Title */}
            <h3 className="text-3xl font-bold text-sky-400">
              {projects[index].name}
            </h3>

            {/* Project Description */}
            <p className="opacity-80 mt-3 text-lg">{projects[index].description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {projects[index].tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-gray-700 rounded-full text-sm hover:bg-sky-500 transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={projects[index].github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-sky-400 hover:text-sky-300 transition-all font-semibold flex items-center gap-1 text-lg"
            >
              <FaGithub /> View on GitHub
            </a>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons - Positioned Outside the Card */}
        <button
          onClick={prevSlide}
          className="absolute -left-17 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full hover:bg-sky-500 transition-all shadow-md"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-17 top-1/2 transform -translate-y-1/2 bg-gray-700 p-4 rounded-full hover:bg-sky-500 transition-all shadow-md"
        >
          <FaArrowRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default ProjectCarousel;
