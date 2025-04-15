import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.sidebar')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar fixed lg:left-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg flex flex-col items-center py-10 transition-all duration-300 z-40 ${
        isOpen ? "left-0" : "-left-64"
      } lg:translate-x-0`}>
        <div className="flex flex-col items-center w-full px-8">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="./src/images/linkedin-dp.jpeg"
              alt="Owen James"
              className="w-32 h-32 rounded-full border-4 border-sky-400 object-cover"
            />
          </div>

          {/* Name & Role */}
          <h2 className="text-2xl font-bold mt-6 text-center">Owen James</h2>
          <p className="text-sm text-gray-400 mb-6">Full-Stack Developer</p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mt-2 mb-8 w-full">
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

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 my-4"></div>

          {/* Skills Section */}
          <div className="w-full">
            <h3 className="text-xl font-bold mb-4">Skills</h3>
            <ul className="text-sm space-y-3">
              {["JavaScript", "React", "Python", "Django", "Tailwind CSS"].map((skill, index) => (
                <li key={index} className="bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg text-center">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-700 my-6"></div>

          {/* Navigation Links */}
          <nav className="w-full mb-6">
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors">Home</a>
              </li>
              <li>
                <a href="#skills" className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors">Skills</a>
              </li>
              <li>
                <a href="#projects" className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors">Contact</a>
              </li>
            </ul>
          </nav>

          {/* Download CV */}
          <a
            href="/cv.pdf"
            className="w-full bg-sky-500 hover:bg-sky-400 text-white px-4 py-3 rounded-lg font-bold transition-all text-center mt-auto"
            download
          >
            Download CV
          </a>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
