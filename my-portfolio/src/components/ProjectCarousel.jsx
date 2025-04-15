import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

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
    rating: 4,
  },
  {
    name: "P2: Dinosaur Quiz",
    description: "An interactive JavaScript quiz game using event listeners and DOM manipulation.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ojay97-hub/Dinosaur-Quiz-",
    image: dinoQuizImg,
    rating: 4,
  },
  {
    name: "P3: Blackjack Game",
    description: "A Python-based Blackjack game using object-oriented programming.",
    tech: ["Python", "OOP", "CLI"],
    github: "https://github.com/Ojay97-hub/black-jack-game",
    image: blackjackImg,
    rating: 4,
  },
  {
    name: "P4: Event Scheduler",
    description: "A Django-powered event booking system allowing users to register for events.",
    tech: ["Django", "Python", "PostgreSQL"],
    github: "https://github.com/Ojay97-hub/event-scheduler",
    image: eventSchedulerImg,
    rating: 5,
  },
  {
    name: "P5: Jungle Peaks Brewing Co",
    description: "An e-commerce site for a brewery with Stripe payments and a Django backend.",
    tech: ["Django", "JavaScript", "Bootstrap", "PostgreSQL"],
    github: "https://github.com/Ojay97-hub/Jungle-Peaks-Brewing-Co",
    image: junglePeaksImg,
    rating: 5,
  },
];

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-slide every 5 seconds if not hovering
  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, isHovering]);

  const nextSlide = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-gradient-to-br from-indigo-950 via-blue-900 to-sky-800 text-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 text-center relative z-20"
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed mt-2 px-4 mb-16 text-center"
        >
          Over the course of my 12-month Full-Stack Development program at <span className="text-sky-400 font-semibold">Code Institute</span>, 
          I built a series of projects that showcase my growth as a developer. Each assignment challenged me to apply new technologies, 
          enhance user experiences, and develop real-world applications.
        </motion.p>

        <div className="relative w-full max-w-5xl mx-auto px-14 md:px-20" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-sky-500 transition-all duration-300 rounded-2xl">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={projects[index].image}
                    alt={projects[index].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  
                  {/* Heart icon button */}
                  <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-pink-100/30 backdrop-blur-sm flex items-center justify-center group transition-all hover:bg-pink-500/50">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="#FFFFFF" className="group-hover:fill-pink-500 transition-colors" />
                    </svg>
                  </button>
                </div>
                
                {/* Project Info */}
                <div className="p-8 flex flex-col">
                  {/* Project Title & Rating */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-3xl font-bold text-white">
                      {projects[index].name.split(":")[1]}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < projects[index].rating ? "text-yellow-400" : "text-gray-600"} />
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-4">
                    {projects[index].tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-gray-700/60 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-sky-500/70 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-300 mt-4 text-lg flex-grow">
                    {projects[index].description}
                  </p>

                  {/* GitHub Link */}
                  <a
                    href={projects[index].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 bg-transparent flex items-center justify-center gap-2 border border-sky-500 hover:bg-sky-500/20 text-white py-3 px-6 rounded-xl transition-all font-medium group"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform" /> 
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Moved further out */}
          <button
            onClick={prevSlide}
            className="absolute -left-10 md:-left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 md:p-4 rounded-full hover:bg-sky-400 hover:text-white transition-all shadow-xl z-10"
            aria-label="Previous project"
          >
            <FaArrowLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-10 md:-right-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 md:p-4 rounded-full hover:bg-sky-400 hover:text-white transition-all shadow-xl z-10"
            aria-label="Next project"
          >
            <FaArrowRight size={18} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === index ? "bg-sky-400 w-8" : "bg-gray-500 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectCarousel;
