import { useState, useEffect } from "react";
// import {
//   Header,
//   Hero,
//   About,
//   Services,
//   Projects,
//   Contact,
//   Footer,
// } from "./components";
import { projects, services, socialLinks } from "./constants";
import { Header } from "./component/Header";
import { Hero } from "./component/Hero";
import Services from "./component/Services";
import { Projects } from "./component/Projects";
import { About } from "./component/About";
import { Footer } from "./component/Footer";
import { Contact } from "./component/Contact";
import { Certifications } from "./component/Certification";
import ScrollToTop from "./component/ScrollTop";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "dark:bg-gray-900 dark:text-white"
          : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Services services={services} />
        <Projects projects={projects} />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />
      {/* <Footer socialLinks={socialLinks} /> */}
    </div>
  );
}

export default App;
