const Navbar = () => {
    return (
      <nav className="bg-gray-800 text-white py-4 fixed w-full top-0 shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-sky-400 transition-all">About</a></li>
            <li><a href="#projects" className="hover:text-sky-400 transition-all">Projects</a></li>
            <li><a href="#contact" className="hover:text-sky-400 transition-all">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  