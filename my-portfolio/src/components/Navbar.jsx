import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-6xl mx-auto transition-all duration-300">
        <nav className={`${scrolled ? 'bg-gray-900/90' : 'bg-gray-800/80'} backdrop-blur-sm text-white py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300`}>
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6">
            <div className="flex justify-between w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">Owen Cotter</h1>
              {/* Mobile menu button */}
              <button 
                className="sm:hidden flex items-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>

            {/* Mobile dropdown menu - only render when open, only on mobile */}
            {mobileMenuOpen && (
              <div className="absolute right-4 top-16 w-64 bg-gray-900/90 rounded-xl shadow-xl z-50 py-4 animate-fade-in sm:hidden">
                <div className="flex items-center gap-3 px-6 pb-4 border-b border-gray-700">
                  <img src="/src/images/linkedin-dp.jpeg" alt="Owen Cotter" className="w-10 h-10 rounded-full border-2 border-sky-400 object-cover" />
                  <span className="text-lg font-bold">Owen Cotter</span>
                </div>
                <ul className="flex flex-col space-y-2 px-6 pt-4">
                  {[{ label: 'Home', href: '#hero', icon: '🏠' },{ label: 'Projects', href: '#projects', icon: '💻' },{ label: 'About', href: '#about', icon: '👤' },{ label: 'Skills', href: '#skills', icon: '🛠️' },{ label: 'Experience', href: '#experience', icon: '📖' },{ label: 'Contact', href: '#contact', icon: '✉️' },].map((item, idx) => (
                    <li key={item.href} className="transition-transform duration-300 transform hover:scale-105">
                      <a
                        href={item.href}
                        className="flex items-center gap-3 py-2 text-lg font-semibold hover:text-sky-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                        style={{ transitionDelay: `${idx * 60}ms` }}
                      >
                        <span className="text-xl">{item.icon}</span> {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Desktop nav links - only on sm and up */}
            <ul className="hidden sm:flex flex-col sm:flex-row sm:space-x-3 md:space-x-5 space-y-2 sm:space-y-0 w-full sm:w-auto items-center mb-2 sm:mb-0 text-sm sm:text-base mt-4 sm:mt-0">
              <li>
                <a href="#hero" className="relative px-2 py-1 group block text-center">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Home</span>
                </a>
              </li>
              <li>
                <a href="#projects" className="relative px-2 py-1 group block text-center">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Projects</span>
                </a>
              </li>
              <li>
                <a href="#about" className="relative px-2 py-1 group block text-center">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">About</span>
                </a>
              </li>
              <li>
                <a href="#skills" className="relative px-2 py-1 group block text-center">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Skills</span>
                </a>
              </li>
              <li>
                <a href="#experience" className="relative px-2 py-1 group block text-center">
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-sky-500 group-hover:bg-sky-400 opacity-0 group-hover:opacity-20 rounded-lg"></span>
                  <span className="relative transition-colors duration-300 group-hover:text-sky-400">Experience</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="relative px-2 py-1 group block text-center">
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