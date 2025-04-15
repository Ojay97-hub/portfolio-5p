import React, { useEffect, useState } from "react";

const Navbar = ({ sidebarVisible }) => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener to change navbar appearance on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 w-full z-50 px-4 pt-6">
      <div className={`max-w-6xl mx-auto transition-all duration-300 ${sidebarVisible ? 'lg:ml-32' : ''}`}>
        <nav className={`${scrolled ? 'bg-gray-900/90' : 'bg-gray-800/80'} backdrop-blur-sm text-white py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300`}>
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Owen Cotter</h1>
            <ul className="flex space-x-3 sm:space-x-5 mb-2 sm:mb-0 text-sm sm:text-base">
              <li>
                <a href="#hero" className="relative px-2 py-1 group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Home</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="relative px-2 py-1 group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Projects</span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative px-2 py-1 group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="relative px-2 py-1 group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Skills</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="relative px-2 py-1 group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Experience</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="relative px-2 py-1 group">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
  