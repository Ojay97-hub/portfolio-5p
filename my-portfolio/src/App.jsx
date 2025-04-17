/* eslint-disable no-unused-vars */
import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar, { SidebarContent } from "./components/Sidebar";
import ProjectCarousel from "./components/ProjectCarousel";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const App = () => {
  const [repos, setRepos] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  // Function to update sidebar visibility state
  const updateSidebarVisibility = (isVisible) => {
    setSidebarVisible(isVisible);
  };

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
    <div className="min-h-screen font-sans bg-gray-900 text-white overflow-x-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar - only visible on desktop/laptop (lg and up) */}
        <div className="hidden lg:block">
          <Sidebar onToggle={updateSidebarVisibility} />
        </div>
        <div className="flex-1 flex flex-col">
          {/* Navbar - visible on all screen sizes */}
          <Navbar sidebarVisible={sidebarVisible} />

          {/* Main content area */}
          <main className={`flex-grow w-full transition-all duration-300 ${sidebarVisible ? 'lg:pl-64' : 'lg:pl-0'} overflow-hidden`}>
            {/* Hero Section */}
            <section id="hero" className="py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-gray-900 mt-28 lg:mt-24 min-h-screen flex items-center">
              <motion.div 
                initial={{ opacity: 0, y: -50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="max-w-3xl mx-auto"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                  Hi, I&#39;m <span className="text-sky-400">Owen<br />Cotter</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl opacity-80 mt-4 sm:mt-6 leading-relaxed">
                  Full-Stack Web Developer Graduate based in Swansea, Wales
                </p>
                <p className="text-base sm:text-lg opacity-70 mt-2 leading-relaxed max-w-2xl">
                  Creative and committed junior full-stack web developer with a Diploma in Software Development from Code Institute and a background in Events Management.
                </p>
                <div className="mt-6 sm:mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4">
                  <a 
                    href="#projects" 
                    className="inline-block bg-sky-500 hover:bg-sky-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all transform hover:translate-y-[-2px] hover:shadow-lg"
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-block bg-transparent border-2 border-white hover:border-sky-400 hover:text-sky-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold transition-all transform hover:translate-y-[-2px]"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>
            </section>

            {/* Projects Section */}
            <ProjectCarousel />

            {/* About Me Section */}
            <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-800">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">About Me</h2>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Personal Profile Section */}
                    <div className="lg:col-span-2">
                      <div className="bg-gray-700/80 backdrop-blur-sm border border-gray-600 rounded-2xl p-6 sm:p-8 shadow-xl h-full">
                        <h3 className="text-2xl font-bold mb-8 text-sky-400">Personal Profile</h3>
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                          Hello there! 👋 I&#39;m a coding enthusiast and junior full-stack developer with a fresh Diploma from Code Institute and a rather unique background in Events Management.
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                          Over the past 6+ years, I&#39;ve refined my skills in keeping customers chuffed, building brilliant teams, and solving tricky problems straightaway. Now I&#39;ve added proper coding skills to my repertoire!
                        </p>
                        
                        <p className="text-gray-300 leading-relaxed text-lg">
                          I&#39;m absolutely keen on learning new tech and work best in collaborative environments where creativity is encouraged. Always fancy a coding challenge or a proper chat about tech! When I&#39;m not writing code, you&#39;ll likely find me rambling through the Welsh countryside or brewing the perfect cuppa. ☕ Quite happy to relocate for the right role!
                        </p>
                      </div>
                    </div>

                    {/* About Me Card with Profile Info */}
                    <div className="bg-gray-700/60 backdrop-blur-sm border border-gray-600 rounded-xl p-6 shadow-xl">
                      <div className="flex flex-col items-center w-full px-0">
                        {/* Larger Profile Image */}
                        <div className="relative">
                          <img
                            src="./src/images/linkedin-dp.jpeg"
                            alt="Owen Cotter"
                            className="rounded-full border-4 border-sky-400 object-cover w-40 h-40"
                          />
                        </div>

                        {/* Name & Role */}
                        <h2 className="text-2xl font-bold mt-6 text-center">Owen Cotter</h2>
                        <p className="text-sm text-gray-400 mb-2">Full-Stack Web Developer</p>
                        <p className="text-xs text-gray-500 mb-6 text-center">Swansea, Wales, UK</p>

                        {/* Social Links */}
                        <div className="flex justify-center space-x-6 mt-2 mb-4 w-full">
                          <a href="https://github.com/Ojay97-hub" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                            <FaGithub className="text-2xl hover:text-sky-400 transition" />
                          </a>
                          <a href="https://www.linkedin.com/in/junior-software-dev-owen-cotter" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110">
                            <FaLinkedin className="text-2xl hover:text-sky-400 transition" />
                          </a>
                          <a href="mailto:owenjames97@outlook.com" className="transition-transform hover:scale-110">
                            <FaEnvelope className="text-2xl hover:text-sky-400 transition" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-gray-800">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Tech Stack</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {/* Tech stack items with color coding for learning techs */}
                    {[
                      { label: "HTML/CSS" },
                      { label: "JavaScript" },
                      { label: "Python" },
                      { label: "Django" },
                      { label: "PostgreSQL" },
                      { label: "Bootstrap" },
                      { label: "Git/GitHub" },
                      { label: "React", learning: true },
                      { label: "Tailwind CSS", learning: true },
                      { label: "Stripe API" },
                      { label: "Azure", learning: true },
                      { label: "Agile" },
                    ].map((tech, idx) => (
                      <div
                        key={tech.label}
                        className={`transition-all p-4 md:p-6 rounded-xl text-center transform hover:scale-105 shadow-md cursor-pointer
                          ${tech.learning
                            ? "border-2 border-green-400 text-green-300 bg-green-900/60 animate-pulse hover:animate-none hover:bg-green-400/80 hover:text-gray-900"
                            : "bg-gray-700 hover:bg-sky-500/70 text-white hover:text-white"}
                        `}
                      >
                        <span className="text-md sm:text-lg font-medium">{tech.label}</span>
                        {tech.learning && (
                          <span className="block mt-2 text-xs font-semibold uppercase tracking-widest text-green-300">Learning</span>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Education</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-700/50 p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-sky-400">Diploma in Full-Stack Software Development</h4>
                        <p className="text-gray-300">Code Institute (Outstanding – Ofsted 2025) | 2024-2025</p>
                      </div>
                      <div className="bg-gray-700/50 p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-sky-400">MSc International Events Management - Merit</h4>
                        <p className="text-gray-300">Leeds Beckett University | 2022-2023</p>
                      </div>
                      <div className="bg-gray-700/50 p-6 rounded-xl">
                        <h4 className="text-xl font-bold text-sky-400">BA (Hons) Events Management - 1st Class</h4>
                        <p className="text-gray-300">Leeds Beckett University | 2017-2021</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section id="experience" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-gray-900">
              <div className="max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center">Work Experience</h2>
                  <div className="space-y-10">
                    {/* M&S Experience */}
                    <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="text-2xl font-bold text-sky-400">Customer & Operations Assistant</h3>
                        <div className="text-gray-400 text-lg mt-2 md:mt-0">2023 - Present</div>
                      </div>
                      <h4 className="text-xl mb-4">Marks & Spencer, Mumbles, Wales</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Applied problem-solving skills to efficiently resolve customer issues, analogous to debugging code and resolving user experience (UX) problems in web development.</li>
                        <li>Assumed keyholder and first aid responsibilities, demonstrating accountability and calm under pressure—qualities vital for handling critical deployments or emergency fixes in software development.</li>
                        <li>Maintained punctuality and consistency in early shifts, reflecting reliability and discipline crucial for Agile sprints and meeting project deadlines.</li>
                      </ul>
                    </div>

                    {/* Hilton Experience */}
                    <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="text-2xl font-bold text-sky-400">Events & Banquets Assistant</h3>
                        <div className="text-gray-400 text-lg mt-2 md:mt-0">2023</div>
                      </div>
                      <h4 className="text-xl mb-4">Hilton Perth, Australia</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Coordinated complex event logistics, demonstrating both creative problem-solving and structured planning—skills directly transferable to designing web application architecture.</li>
                        <li>Communicated and collaborated with cross-functional teams, reflecting Agile practices such as regular stand-up meetings and team retrospectives.</li>
                        <li>Adapted swiftly to unexpected challenges, similar to adjusting to evolving requirements or addressing edge cases during development.</li>
                      </ul>
                    </div>

                    {/* Cygnet Bay Experience */}
                    <div className="bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <h3 className="text-2xl font-bold text-sky-400">Front of House Team Member</h3>
                        <div className="text-gray-400 text-lg mt-2 md:mt-0">2023</div>
                      </div>
                      <h4 className="text-xl mb-4">Cygnet Bay Restaurant, Broome North, WA</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-300">
                        <li>Delivered high-quality service to a diverse clientele, honing user empathy—a skill essential for intuitive UI/UX design in web development.</li>
                        <li>Exercised quick problem-solving in a fast-paced environment, comparable to resolving live bugs or urgent production issues in software.</li>
                        <li>Balanced multiple tasks efficiently, demonstrating multitasking and time management skills.</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 bg-gray-800">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 sm:mb-8 md:mb-10 text-center">Contact Me</h2>
                
                <p className="text-base sm:text-lg md:text-xl text-center opacity-80 mb-8 sm:mb-10 md:mb-12">Located in Swansea, Wales, UK - Feel free to reach out for collaborations or job opportunities.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Contact Form */}
                  <div className="bg-gray-700/90 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-gray-700">
                    <h3 className="text-2xl font-bold mb-6 text-sky-400">Send a Message</h3>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-white transition-all duration-300 hover:border-sky-400"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Your Email</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-white transition-all duration-300 hover:border-sky-400"
                          placeholder="john@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                        <textarea 
                          id="message" 
                          rows="5" 
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent text-white resize-none transition-all duration-300 hover:border-sky-400"
                          placeholder="Hi Owen, I&#39;d like to discuss a project opportunity..."
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-sky-500 hover:bg-sky-400 text-white px-4 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                  
                  {/* Contact Information */}
                  <div className="bg-gray-700/90 rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-start transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 hover:bg-gray-700">
                    <h3 className="text-2xl font-bold text-sky-400 mb-6 sm:mb-8 text-center">Get In Touch</h3>
                    
                    <div className="flex flex-col items-center justify-center h-full space-y-8 sm:space-y-10">
                      <a 
                        href="mailto:owenjames97@outlook.com" 
                        className="text-sky-400 text-xl hover:text-sky-300 transition-all duration-300 font-semibold flex items-center gap-3 group w-full justify-center transform hover:scale-105"
                      >
                        <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center group-hover:bg-sky-400 transition-all duration-300 flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-sky-400/50">
                          <FaEnvelope className="text-white text-xl group-hover:text-white" />
                        </div>
                        <span className="break-all">owenjames97@outlook.com</span>
                      </a>
                      
                      <p className="flex items-center justify-center text-gray-300 text-xl gap-3 w-full hover:text-white transition-all duration-300 transform hover:scale-105">
                        <span className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-500 hover:scale-110 hover:shadow-md">📱</span> 
                        +44 07548 290644
                      </p>
                      
                      <div className="flex justify-center space-x-8 w-full mt-4 sm:mt-6">
                        <a 
                          href="https://github.com/Ojay97-hub" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-16 h-16 bg-gray-600 hover:bg-gray-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-gray-400/50"
                          aria-label="GitHub"
                        >
                          <FaGithub className="text-3xl transition-all duration-300 hover:text-white" />
                        </a>
                        <a 
                          href="https://www.linkedin.com/in/junior-software-dev-owen-cotter" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="w-16 h-16 bg-gray-600 hover:bg-sky-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50"
                          aria-label="LinkedIn"
                        >
                          <FaLinkedin className="text-3xl transition-all duration-300 hover:text-white" />
                        </a>
                      </div>
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
    </div>
  );
};

export default App;
