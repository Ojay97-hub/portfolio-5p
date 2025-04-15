import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaArrowLeft, FaArrowRight, FaStar, FaHeart } from "react-icons/fa";

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
    longDescription: "A fully responsive multi-page website for a fictional English pub, built using HTML5 and CSS3. Features include a responsive navigation system, image gallery, menu section, and contact form with validation.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/Ojay97-hub/The-Winchester",
    liveUrl: "https://ojay97-hub.github.io/The-Winchester/",
    image: winchesterImg,
    rating: 5,
  },
  {
    name: "P2: Dinosaur Quiz",
    description: "An interactive JavaScript quiz game using event listeners and DOM manipulation.",
    longDescription: "An educational quiz application focused on dinosaurs, created using vanilla JavaScript with DOM manipulation. Features a timer, score tracking, randomized questions, and responsive design for all devices.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ojay97-hub/Dinosaur-Quiz-",
    liveUrl: "https://ojay97-hub.github.io/Dinosaur-Quiz-/",
    image: dinoQuizImg,
    rating: 5,
  },
  {
    name: "P3: Blackjack Game",
    description: "A Python-based Blackjack game using object-oriented programming.",
    longDescription: "A command-line implementation of the classic Blackjack card game built with Python. The game features object-oriented design with separate classes for cards, deck, dealer, and player. Includes betting functionality and rule variants.",
    tech: ["Python", "OOP", "CLI"],
    github: "https://github.com/Ojay97-hub/black-jack-game",
    liveUrl: "https://black-jack-lvl1-25fdd631e5ae.herokuapp.com/",
    image: blackjackImg,
    rating: 5,
  },
  {
    name: "P4: Event Scheduler",
    description: "A Django-powered event booking system allowing users to register for events.",
    longDescription: "A full-stack event management platform built with Django and PostgreSQL. Users can browse events, create accounts, book tickets, and manage their reservations. Features include user authentication, admin dashboard, and email notifications.",
    tech: ["Django", "Python", "PostgreSQL"],
    github: "https://github.com/Ojay97-hub/event-scheduler",
    liveUrl: "https://eventory-5d4c90f0ec37.herokuapp.com/",
    image: eventSchedulerImg,
    rating: 5,
  },
  {
    name: "P5: Jungle Peaks Brewing Co",
    description: "An e-commerce site for a brewery with Stripe payments and a Django backend.",
    longDescription: "A full-featured e-commerce platform for a craft brewery, built with Django and JavaScript. Features include product catalog, shopping cart, user accounts, order history, Stripe payment integration, and an admin dashboard for inventory management.",
    tech: ["Django", "JavaScript", "Bootstrap", "PostgreSQL"],
    github: "https://github.com/Ojay97-hub/Jungle-Peaks-Brewing-Co",
    liveUrl: "https://jungle-peaks-brewing-29d2cf7236c2.herokuapp.com/",
    image: junglePeaksImg,
    rating: 5,
  },
];

const ProjectCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [favorites, setFavorites] = useState({});
  
  // Required min distance traveled to be considered swipe
  const minSwipeDistance = 50;

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

  // Handle touch events for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Toggle favorite status for a project
  const toggleFavorite = (e, projectIndex) => {
    e.stopPropagation(); // Prevent triggering other click events
    setFavorites(prev => ({
      ...prev,
      [projectIndex]: !prev[projectIndex]
    }));
  };

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-28 lg:py-36 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-indigo-950 via-blue-900 to-sky-800 text-white relative">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 pt-4 sm:pt-6 md:pt-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400 text-center relative z-20"
        >
          My Projects
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed mt-2 px-4 mb-10 sm:mb-12 md:mb-16 text-center"
        >
          Over the course of my 12-month Full-Stack Development program at <span className="text-sky-400 font-semibold">Code Institute</span>, 
          I built a series of projects that showcase my growth as a developer. Each assignment challenged me to apply new technologies, 
          enhance user experiences, and develop real-world applications.
        </motion.p>

        <div 
          className="relative w-full max-w-5xl mx-auto px-4 sm:px-10 md:px-20 md:p-6 bg-gray-900/20 backdrop-blur-sm rounded-3xl md:shadow-xl" 
          onMouseEnter={() => setIsHovering(true)} 
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl shadow-2xl overflow-hidden md:m-4"
            >
              <div className="flex flex-col md:grid md:grid-cols-12 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 hover:border-sky-500 transition-all duration-300 rounded-2xl transform hover:scale-[1.02] md:hover:scale-[1.03] hover:shadow-[0_10px_50px_-12px_rgba(56,189,248,0.35)] md:min-h-[400px]">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 sm:h-64 md:h-full md:col-span-5">
                  <img
                    src={projects[index].image}
                    alt={projects[index].name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                  
                  {/* Heart icon button - now functional */}
                  <button 
                    className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center group transition-all hover:bg-gray-700/60"
                    onClick={(e) => toggleFavorite(e, index)}
                    aria-label={favorites[index] ? "Remove from favorites" : "Add to favorites"}
                  >
                    <FaHeart 
                      className="transition-all transform group-hover:scale-110" 
                      size={20} 
                      color={favorites[index] ? "#ef4444" : "#ffffff"}
                    />
                  </button>
                </div>
                
                {/* Project Info */}
                <div className="p-6 sm:p-8 flex flex-col md:col-span-7">
                  {/* Project Title & Rating */}
                  <div className="flex justify-between items-start mb-2 sm:mb-4">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {projects[index].name.split(":")[1].trim()}
                    </h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" size={16} />
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-2 mb-3 sm:mb-4">
                    {projects[index].tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 sm:px-4 sm:py-1.5 bg-gray-700/60 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium hover:bg-sky-500/70 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Description - Now using the longer description */}
                  <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base flex-grow leading-relaxed">
                    {projects[index].longDescription}
                  </p>

                  {/* Action Buttons - Now with Live Site & GitHub buttons side by side */}
                  <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3">
                    <a
                      href={projects[index].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center gap-2 py-2 sm:py-3 rounded-xl transition-all font-medium transform hover:translate-y-[-2px] hover:shadow-lg"
                    >
                      <span className="text-sm sm:text-base">Live Site</span>
                    </a>
                    <a
                      href={projects[index].github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent flex items-center justify-center gap-2 border border-sky-500 hover:bg-sky-500/20 text-white py-2 sm:py-3 rounded-xl transition-all font-medium group hover:border-sky-400 transform hover:translate-y-[-2px]"
                    >
                      <FaGithub className="group-hover:scale-110 transition-transform" /> 
                      <span className="text-sm sm:text-base">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Hidden on mobile, visible on md screens and above */}
          <button
            onClick={prevSlide}
            className="hidden md:block absolute md:-left-10 lg:-left-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 md:p-4 rounded-full hover:bg-sky-400 hover:text-white transition-all shadow-xl z-10"
            aria-label="Previous project"
          >
            <FaArrowLeft size={16} />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:block absolute md:-right-10 lg:-right-16 top-1/2 transform -translate-y-1/2 bg-white text-gray-900 p-3 md:p-4 rounded-full hover:bg-sky-400 hover:text-white transition-all shadow-xl z-10"
            aria-label="Next project"
          >
            <FaArrowRight size={16} />
          </button>
        </div>

        {/* Mobile swipe instruction - only visible on smaller screens */}
        <p className="text-center text-sm text-gray-300 italic mt-4 mb-2 md:hidden">
          Swipe left or right to view more projects
        </p>

        {/* Navigation dots - more visible and interactive now */}
        <div className="flex justify-center mt-6 md:mt-10 space-x-3 md:space-x-4">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                index === i 
                  ? "bg-sky-400 scale-110 shadow-md shadow-sky-500/50" 
                  : "bg-gray-400/40 hover:bg-gray-300/60"
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
