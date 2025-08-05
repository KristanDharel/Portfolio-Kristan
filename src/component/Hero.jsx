

import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Header } from "./Header";

const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return [elementRef, isVisible];
};

const CinematicText = ({ children, delay = 0, duration = 1000 }) => {
  const [ref, isVisible] = useScrollAnimation();
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalDuration = duration / children.length;

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        if (currentIndex < children.length) {
          setDisplayText((prev) => prev + children[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
        }
      }, intervalDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible, currentIndex, children, intervalDuration]);

  return (
    <span
      ref={ref}
      className="inline-block"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 0.5s ease ${delay}ms`,
      }}
    >
      {displayText}
    </span>
  );
};

// export const GateReveal = ({ children }) => {
//   const [ref, isVisible] = useScrollAnimation();
//   const [animationStage, setAnimationStage] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     const sequence = [
//       () => setAnimationStage(1),
//       () => setTimeout(() => setAnimationStage(2), 800),
//       () => setTimeout(() => setAnimationStage(3), 1600),
//     ];

//     sequence.forEach((step, i) => setTimeout(step, i * 800));
//   }, [isVisible]);

//   return (
//     <div ref={ref} className="relative w-full overflow-hidden">
//       {/* Left gate line */}
//       <div
//         className={`fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
//           animationStage >= 1 ? "opacity-100" : "opacity-0"
//         } ${animationStage >= 2 ? "-translate-x-[50vw]" : "-translate-x-1/2"}`}
//         style={{
//           boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
//           zIndex: 40,
//         }}
//       />

//       {/* Right gate line */}
//       <div
//         className={`fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
//           animationStage >= 1 ? "opacity-100" : "opacity-0"
//         } ${animationStage >= 2 ? "translate-x-[50vw]" : "-translate-x-1/2"}`}
//         style={{
//           boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
//           zIndex: 40,
//         }}
//       />

//       {/* Sparkle effects */}
//       {animationStage >= 2 && (
//         <>
//           <div
//             className="fixed top-1/2 left-1/2 w-4 h-4 bg-white rounded-full opacity-0 animate-sparkle-1"
//             style={{ zIndex: 50 }}
//           />
//           <div
//             className="fixed top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-0 animate-sparkle-2"
//             style={{ zIndex: 50 }}
//           />
//           <div
//             className="fixed top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 animate-sparkle-3"
//             style={{ zIndex: 50 }}
//           />
//         </>
//       )}

//       {/* Content */}
//       <div
//         className={`relative transition-all duration-700 ${
//           animationStage >= 3 ? "opacity-100" : "opacity-0"
//         }`}
//         style={{ zIndex: 30 }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };
export const GateReveal = ({ children }) => {
  const [ref, isVisible] = useScrollAnimation();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Skip complex animations on mobile/small screens
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        setAnimationComplete(true);
      } else {
        const timer = setTimeout(() => {
          setAnimationComplete(true);
        }, 2000);
        return () => clearTimeout(timer);
      }
    }
  }, [isVisible]);

  return (
    <div ref={ref} className="relative w-full">
      {/* Only show gate animation on larger screens */}
      {!animationComplete && window.innerWidth >= 768 && (
        <>
          <div
            className="fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-out z-40"
            style={{
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
              transform: isVisible ? "translateX(-50vw)" : "translateX(-50%)",
            }}
          />
          <div
            className="fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-out z-40"
            style={{
              boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
              transform: isVisible ? "translateX(50vw)" : "translateX(-50%)",
            }}
          />
        </>
      )}

      {/* Content - always visible on mobile */}
      <div
        className={`relative transition-all duration-700 ${
          animationComplete || window.innerWidth < 768 ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 30 }}
      >
        {children}
      </div>
    </div>
  );
};
export const Hero = () => {
  const heroRef = useRef(null);

  return (
    <div ref={heroRef} id="home">
      <section className="min-h-screen flex flex-col items-center justify-center bg-black text-gray-100 relative overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-3xl animate-float1"></div>
          <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl animate-float2"></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-indigo-900 opacity-20 blur-3xl animate-float3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 justify-center items-center flex flex-col text-center">
          {/* <Header heroRef={heroRef} /> */}
            <Header heroRef={heroRef} />

            <div className="text-center mt-8">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
                <CinematicText delay={0} duration={1200}>
                  Kristan Dharel
                </CinematicText>
              </h1>

              <div className="text-xl md:text-2xl font-light text-gray-400 mb-8">
                Full Stack Developer • Testing • Deployment
              </div>

              <div className="max-w-2xl mx-auto mb-12">
                <p className="text-gray-400">
                  Building seamless full stack solutions with MERN, AWS, Angular
                  & .NET.
                </p>
              </div>

              {/* <div className="flex justify-center gap-4 mb-16">
                <a
                  href="#projects"
                  className="inline-block px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  <span className="relative z-10">View Work</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </a>
                <a
                  href="/KristanDharel-Resume.pdf"
                  download
                  className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  <span className="relative z-10">Download CV</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </a>
              </div> */}
              <div className="flex justify-center gap-4 mb-16">
                <a
                  href="#projects"
                  className="inline-block px-6 py-3 border border-gray-700 hover:border-white text-gray-300 hover:text-black transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">View Work</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
                <a
                  href="/KristanDharel-Resume.pdf"
                  download
                  className="inline-block px-6 py-3 bg-gray-900 hover:bg-white text-gray-300 hover:text-black transition-all duration-300 relative group overflow-hidden"
                >
                  <span className="relative z-10">Download CV</span>
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </a>
              </div>

              {/* Social links */}
              <div className="flex justify-center gap-6">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all relative group"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-all relative group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
            </div>
        </div>

        {/* Global styles */}
       
      </section>
    </div>
  );
};
