import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Ojay97-hub/repos")
      .then((response) => response.json())
      .then((data) => {
        const myRepos = [
          "The-Winchester",
          "Dinosaur-Quiz-",
          "black-jack-game",
          "event-scheduler",
          "Jungle-Peaks-Brewing-Co"
        ];
        const filteredRepos = data.filter(repo =>
          myRepos.some(myRepo => repo.name.toLowerCase().includes(myRepo.toLowerCase()))
        );
        setRepos(filteredRepos);
      })
      .catch(error => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <Navbar />

      {/* About Section */}
      <section id="about" className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-5xl font-extrabold mb-6 animate-fadeIn">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">
          I’m a passionate full-stack developer skilled in JavaScript, Python, and cloud-based technologies.
          I build modern, scalable web applications that enhance user experiences.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-gray-800 text-white">
        <h2 className="text-5xl font-extrabold text-center mb-12 animate-fadeIn">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {repos.map((repo) => (
            <div 
              key={repo.id} 
              className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-2">{repo.name.replace(/-/g, " ")}</h3>
              <p className="opacity-80">{repo.description || "No description available"}</p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 transition-all block mt-4 font-medium"
              >
                🔗 View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 text-center bg-gray-900 text-white">
        <h2 className="text-5xl font-extrabold mb-6 animate-fadeIn">Contact Me</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-80">Feel free to reach out for collaborations or job opportunities.</p>
        <a 
          href="mailto:your.email@example.com" 
          className="text-sky-400 text-lg mt-6 inline-block hover:text-sky-300 transition-all font-semibold"
        >
          📩 your.email@example.com
        </a>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
