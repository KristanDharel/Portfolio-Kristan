import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import Services from "./component/Services";
import { Projects } from "./component/Projects";
import { About } from "./component/About";
import { Footer } from "./component/Footer";
import { Contact } from "./component/Contact";
import { Certifications } from "./component/Certification";
import ScrollToTop from "./component/ScrollTop";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { projects, services } from "./constants";

function App() {
  const socialLinks = [
    { name: "GitHub", url: "https://github.com/KristanDharel", icon: FaGithub },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/kristan-dharel-298607252/",
      icon: FaLinkedin,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Premium Floating Profile Card */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
        <div className="p-5 rounded-xl shadow-xl bg-gray-800/90 border-2 border-gray-700 w-60 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
          <div className="flex flex-col items-center">
            <p className="font-bold text-center text-lg mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Kristan Dharel
            </p>
            <p className="text-sm text-center text-gray-300 mb-5">
              Web Developer
            </p>

            {/* Contact Info */}
            <div className="w-full space-y-3 mb-5">
              <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <FaPhone className="text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+9779841213703"
                  className="text-sm hover:text-blue-400 transition-colors"
                >
                  +977 9841213703
                </a>
              </div>
              <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                <FaEnvelope className="text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:kristandharel@example.com"
                  className="text-sm hover:text-blue-400 transition-colors break-all"
                >
                  kristandharel@example.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors hover:scale-110"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5 text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services services={services} />
        <Projects projects={projects} />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}

export default App;
