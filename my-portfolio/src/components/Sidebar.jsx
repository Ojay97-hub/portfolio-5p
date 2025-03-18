import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg flex flex-col items-center py-10">
      {/* Profile Image */}
      <img
        src="./src/images/linkedin-dp.jpeg"
        alt="Owen James"
        className="w-24 h-24 rounded-full border-4 border-sky-400 mt-15"
      />

      {/* Name & Role */}
      <h2 className="text-2xl font-bold mt-4">Owen James</h2>
      <p className="text-sm text-gray-400">Full-Stack Developer</p>

      {/* Social Links */}
      <div className="flex space-x-4 mt-4">
        <a href="https://github.com/Ojay97-hub" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub className="text-2xl hover:text-sky-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/junior-software-dev-owen-cotter" target="_blank" aria-label="LinkedIn Profile">
          <FaLinkedin className="text-2xl hover:text-sky-400 transition" />
        </a>
        <a href="mailto:your.email@example.com" aria-label="Send Email">
          <FaEnvelope className="text-2xl hover:text-sky-400 transition" />
        </a>
      </div>

      {/* Skills Section */}
      <div className="mt-6 w-full px-6">
        <h3 className="text-xl font-bold mb-2">Skills</h3>
        <ul className="text-sm space-y-2">
          {["JavaScript", "React", "Python", "Django", "Tailwind CSS"].map((skill, index) => (
            <li key={index} className="bg-gray-700 px-4 py-2 rounded-full text-center">
              {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Download CV */}
      <a
        href="/cv.pdf"
        className="mt-6 bg-sky-500 hover:bg-sky-400 text-white px-4 py-2 rounded-lg font-bold transition-all"
        download
      >
        Download CV
      </a>
    </aside>
  );
};

export default Sidebar;
