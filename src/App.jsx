// import { Header } from "./component/Header";
// import { Hero } from "./component/Hero";
// import Services from "./component/Services";
// import { Projects } from "./component/Projects";
// import { About } from "./component/About";
// import { Footer } from "./component/Footer";
// import { Contact } from "./component/Contact";
// import { Certifications } from "./component/Certification";
// import ScrollToTop from "./component/ScrollTop";
// import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
// import { projects, services } from "./constants";

// function App() {
//   const socialLinks = [
//     { name: "GitHub", url: "https://github.com/KristanDharel", icon: FaGithub },
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/in/kristan-dharel-298607252/",
//       icon: FaLinkedin,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Premium Floating Profile Card */}
//       <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
//         <div className="p-5 rounded-xl shadow-xl bg-gray-800/90 border-2 border-gray-700 w-60 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] group">
//           <div className="flex flex-col items-center">
//             <p className="font-bold text-center text-lg mb-1 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//               Kristan Dharel
//             </p>
//             <p className="text-sm text-center text-gray-300 mb-5">
//               Web Developer
//             </p>

//             {/* Contact Info */}
//             <div className="w-full space-y-3 mb-5">
//               <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
//                 <FaPhone className="text-blue-400 flex-shrink-0" />
//                 <a
//                   href="tel:+9779841213703"
//                   className="text-sm hover:text-blue-400 transition-colors"
//                 >
//                   +977 9841213703
//                 </a>
//               </div>
//               <div className="flex items-center space-x-3 p-2 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
//                 <FaEnvelope className="text-blue-400 flex-shrink-0" />
//                 <a
//                   href="mailto:kristandharel@example.com"
//                   className="text-sm hover:text-blue-400 transition-colors break-all"
//                 >
//                   kristandharel@example.com
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-4">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors hover:scale-110"
//                   aria-label={link.name}
//                 >
//                   <link.icon className="w-5 h-5 text-blue-400" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Header />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Hero />
//         <About />
//         <Services services={services} />
//         <Projects projects={projects} />
//         <Certifications />
//         <Contact />
//       </main>
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;
// import { Header } from "./component/Header";
// import { Hero } from "./component/Hero";
// import Services from "./component/Services";
// import { Projects } from "./component/Projects";
// import { About } from "./component/About";
// import { Footer } from "./component/Footer";
// import { Contact } from "./component/Contact";
// import { Certifications } from "./component/Certification";
// import ScrollToTop from "./component/ScrollTop";
// import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
// import { projects, services } from "./constants";

// function App() {
//   const socialLinks = [
//     { name: "GitHub", url: "https://github.com/KristanDharel", icon: FaGithub },
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/in/kristan-dharel-298607252/",
//       icon: FaLinkedin,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       {/* Sleek Floating Profile Card */}
//       <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
//         <div className="p-4 rounded-lg shadow-lg bg-gray-900 border border-gray-800 w-56 transition-all duration-300 group">
//           <div className="flex flex-col items-center">
//             <p className="font-bold text-center text-lg mb-1 text-teal-400">
//               Kristan Dharel
//             </p>
//             <p className="text-xs text-center text-gray-400 mb-4 tracking-wider">
//               WEB DEVELOPER
//             </p>

//             {/* Contact Info */}
//             <div className="w-full space-y-2 mb-4">
//               <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
//                 <FaPhone className="text-teal-400 text-xs flex-shrink-0" />
//                 <a
//                   href="tel:+9779841213703"
//                   className="text-xs hover:text-teal-400 transition-colors"
//                 >
//                   +977 9841213703
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
//                 <FaEnvelope className="text-teal-400 text-xs flex-shrink-0" />
//                 <a
//                   href="mailto:kristandharel@example.com"
//                   className="text-xs hover:text-teal-400 transition-colors break-all"
//                 >
//                   kristandharel@example.com
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-3">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
//                   aria-label={link.name}
//                 >
//                   <link.icon className="w-4 h-4 text-teal-400" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <Header />
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Hero />
//         <About />
//         <Services services={services} />
//         <Projects projects={projects} />
//         <Certifications />
//         <Contact />
//       </main>
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;
import { Header } from "./component/Header";
import { GateReveal, Hero } from "./component/Hero";
import Services from "./component/Services";
import { Projects } from "./component/Projects";
import { About } from "./component/About";
import { Footer } from "./component/Footer";
import { Contact } from "./component/Contact";
import { Certifications } from "./component/Certification";
import ScrollToTop from "./component/ScrollTop";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { projects, services } from "./constants";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// function App() {
//   const socialLinks = [
//     { name: "GitHub", url: "https://github.com/KristanDharel", icon: FaGithub },
//     {
//       name: "LinkedIn",
//       url: "https://www.linkedin.com/in/kristan-dharel-298607252/",
//       icon: FaLinkedin,
//     },
//   ];
//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       {/* Sleek Floating Profile Card */}
//       <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
//         <div className="p-4 rounded-lg shadow-lg bg-gray-900 border border-gray-800 w-56 transition-all duration-300 group">
//           <div className="flex flex-col items-center">
//             <p className="font-bold text-center text-lg mb-1 text-teal-400">
//               Kristan Dharel
//             </p>
//             <p className="text-xs text-center text-gray-400 mb-4 tracking-wider">
//               WEB DEVELOPER
//             </p>

//             {/* Contact Info */}
//             <div className="w-full space-y-2 mb-4">
//               <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
//                 <FaPhone className="text-teal-400 text-xs flex-shrink-0" />
//                 <a
//                   href="tel:+9779841213703"
//                   className="text-xs hover:text-teal-400 transition-colors"
//                 >
//                   +977 9841213703
//                 </a>
//               </div>
//               <div className="flex items-center space-x-2 p-2 bg-gray-800 rounded hover:bg-gray-700 transition-colors">
//                 <FaEnvelope className="text-teal-400 text-xs flex-shrink-0" />
//                 <a
//                   href="mailto:kristandharel@example.com"
//                   className="text-xs hover:text-teal-400 transition-colors break-all"
//                 >
//                   kristandharel@example.com
//                 </a>
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="flex space-x-3">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded bg-gray-800 hover:bg-gray-700 transition-colors"
//                   aria-label={link.name}
//                 >
//                   <link.icon className="w-4 h-4 text-teal-400" />
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <Hero />
//         <About />
//         <Services services={services} />
//         <Projects projects={projects} />
//         <Certifications />
//         <Contact />
//       </main>
//       <ScrollToTop />
//     </div>
//   );
// }
// function App() {
//   const heroRef = useRef(null);
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       {/* Header at top level with initial transparent state */}
//       <div className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? 'bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm'
//           : 'bg-transparent'
//       }`}>
//         <Header heroRef={heroRef} isScrolled={isScrolled} />
//       </div>

//       {/* Rest of your content */}
//       <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div ref={heroRef}>
//           <Hero />
//         </div>
//         <About />
//         <Services services={services} />
//         <Projects projects={projects} />
//         <Certifications />
//         <Contact />
//       </main>
//       <ScrollToTop />
//     </div>
//   );
// }
// function App() {
//   const heroRef = useRef(null);
//   const [showHeader, setShowHeader] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!heroRef.current) return;

//       const heroHeight = heroRef.current.offsetHeight;
//       setShowHeader(window.scrollY > heroHeight * 0.8); // Show header after scrolling 80% of hero height
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className="min-h-screen bg-black text-gray-100">
//       <GateReveal>
//         {/* Sticky header that only appears after scrolling */}
//         {showHeader && (
//           <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm">
//             <Header />
//           </div>
//         )}

//         {/* Rest of your content */}
//         <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div ref={heroRef}>
//             <Hero />
//           </div>
//           <About />
//           <Services services={services} />
//           <Projects projects={projects} />
//           <Certifications />
//           <Contact />
//         </main>
//         <ScrollToTop />
//       </GateReveal>
//     </div>
//   );
// }
// export default App;
function App() {
  const heroRef = useRef(null);
  const [showHeader, setShowHeader] = useState(false);
  const [stars, setStars] = useState([]);

  // Generate random stars
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 50; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const heroHeight = heroRef.current.offsetHeight;
      setShowHeader(window.scrollY > heroHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse move for star interaction
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const stars = document.querySelectorAll(".star");

    stars.forEach((star) => {
      const starX = star.getBoundingClientRect().left + star.offsetWidth / 2;
      const starY = star.getBoundingClientRect().top + star.offsetHeight / 2;

      const distance = Math.sqrt(
        Math.pow(clientX - starX, 2) + Math.pow(clientY - starY, 2)
      );

      const maxDistance = 200;
      const scale =
        distance < maxDistance ? 1 + (1 - distance / maxDistance) * 0.5 : 1;

      star.style.transform = `scale(${scale})`;
      star.style.opacity =
        distance < maxDistance ? 0.8 : star.dataset.originalOpacity;
    });
  };

  return (
    <div
      className="min-h-screen bg-black text-gray-100 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <GateReveal>
      {/* Background stars */}
      <div className="fixed inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
            }}
            data-original-opacity={star.opacity}
            animate={{
              opacity: [star.opacity, star.opacity * 1.5, star.opacity],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Sticky header */}
      {showHeader && (
        <div className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-sm">
          <Header />
        </div>
      )}

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={heroRef}>
          <Hero />
        </div>
        <About />
        <Services services={services} />
        <Projects projects={projects} />
        <Certifications />
        <Contact />
      </main>

      <ScrollToTop />
      </GateReveal>
    </div>
  );
}

export default App;
