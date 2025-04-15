import { FaGithub, FaLinkedin, FaEnvelope, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";

const Sidebar = ({ onToggle }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Notify parent component when sidebar visibility changes
  useEffect(() => {
    if (onToggle) {
      onToggle(isVisible);
    }
  }, [isVisible, onToggle]);

  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Desktop Sidebar - only visible on desktop/laptop (lg screens) */}
      <aside className={`sidebar fixed left-0 top-0 pt-20 h-full w-64 bg-gray-800 text-white shadow-lg lg:flex flex-col items-center z-30 transition-all duration-300 ${isVisible ? 'lg:translate-x-0' : 'lg:translate-x-[-100%]'}`}>
        <SidebarContent isMobile={false} />
      </aside>

      {/* Toggle Sidebar Button - only visible when sidebar is hidden */}
      <button 
        onClick={toggleSidebar} 
        className={`fixed left-4 top-24 bg-sky-500 hover:bg-sky-400 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300 lg:flex items-center justify-center hidden ${isVisible ? 'lg:translate-x-[-100%] opacity-0' : 'lg:translate-x-0 opacity-100'}`}
        aria-label="Toggle sidebar"
      >
        <FaArrowLeft className={`transform ${!isVisible ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`} />
      </button>

      {/* Toggle Button that's attached to sidebar */}
      <button 
        onClick={toggleSidebar} 
        className={`fixed left-60 top-24 bg-sky-500 hover:bg-sky-400 text-white p-3 rounded-full shadow-lg z-40 transition-all duration-300 lg:flex items-center justify-center hidden ${!isVisible ? 'lg:translate-x-[-100%] opacity-0' : 'lg:translate-x-0 opacity-100'}`}
        aria-label="Toggle sidebar"
      >
        <FaArrowLeft />
      </button>
    </>
  );
};

// Separate component for sidebar content so it can be reused in the mobile view
export const SidebarContent = ({ isMobile }) => {
  // If isMobile is not explicitly passed, it'll be undefined and default rendering will apply
  return (
    <div className={`flex flex-col items-center w-full ${isMobile ? 'px-0' : 'px-8'}`}>
      {/* Profile Image */}
      <div className="relative">
        <img
          src="./src/images/linkedin-dp.jpeg"
          alt="Owen Cotter"
          className={`rounded-full border-4 border-sky-400 object-cover ${isMobile ? 'w-24 h-24' : 'w-32 h-32'}`}
        />
      </div>

      {/* Name & Role */}
      <h2 className="text-2xl font-bold mt-6 text-center">Owen Cotter</h2>
      <p className="text-sm text-gray-400 mb-2">Full-Stack Web Developer</p>
      <p className="text-xs text-gray-500 mb-6 text-center">Swansea, Wales, UK</p>

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

      {/* Skills Section - Only show on desktop */}
      {!isMobile && (
        <div className="w-full">
          <h3 className="text-xl font-bold mb-4">Skills</h3>
          <ul className="text-sm space-y-3">
            {["JavaScript", "Python", "Django", "React", "HTML/CSS", "PostgreSQL"].map((skill, index) => (
              <li key={index} className="bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg text-center">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
