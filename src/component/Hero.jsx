import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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

// Animation wrapper component
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const getTransform = () => {
    switch (direction) {
      case "left":
        return "translateX(-50px)";
      case "right":
        return "translateX(50px)";
      case "down":
        return "translateY(-50px)";
      default:
        return "translateY(50px)";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : getTransform(),
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// Hero Component with animations
// export const Hero = () => {
//   return (
//     <section id="home" className="py-20 md:py-32">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="md:w-1/2">
//             <AnimatedSection delay={200}>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//                 Hi, I'm{" "}
//                 <span className="text-blue-600 dark:text-teal-400">
//                   Kristan Dharel
//                 </span>
//               </h1>
//             </AnimatedSection>

//             <AnimatedSection delay={400}>
//               <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
//                 Full Stack Developer
//               </h2>
//             </AnimatedSection>

//             <AnimatedSection delay={600}>
//               <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
//                 Building seamless full stack solutions with MERN, AWS, Angular &
//                 .NET.
//               </p>
//             </AnimatedSection>

//             <AnimatedSection delay={800}>
//               <div className="flex flex-wrap gap-4">
//                 <a
//                   href="#projects"
//                   className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 dark:bg-teal-600 dark:hover:bg-teal-700"
//                 >
//                   View My Work
//                 </a>
//                 <a
//                   href="/KristanDharel-Resume.pdf"
//                   download
//                   className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all transform hover:scale-105 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
//                 >
//                   Download Resume
//                 </a>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={1000}>
//               <div className="mt-8 flex space-x-4">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
//                 >
//                   <FaGithub className="w-6 h-6" />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
//                 >
//                   <FaLinkedin className="w-6 h-6" />
//                 </a>
//               </div>
//             </AnimatedSection>
//           </div>

//           <div className="md:w-1/2 flex justify-center">
//             <AnimatedSection direction="right" delay={300}>
//               <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-teal-400 shadow-xl transform hover:scale-105 transition-transform">
//                 <img
//                   src="/dharel.png"
//                   alt="Kristan Dharel"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
export const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100 dark:bg-teal-900 opacity-30 blur-xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-100 dark:bg-teal-900 opacity-30 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image on top for mobile, left for desktop */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <AnimatedSection direction="up" delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 bg-blue-600 dark:bg-teal-400 rounded-2xl rotate-6 opacity-30"></div>
                <div className="relative rounded-xl overflow-hidden border-4 border-blue-600 dark:border-teal-400 shadow-2xl transform hover:scale-[1.02] transition-transform">
                  <img
                    src="/dharel.png"
                    alt="Kristan Dharel"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 dark:bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  <span className="transform rotate-12">👋</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <AnimatedSection delay={200}>
              <div className="inline-block px-4 py-2 mb-4 bg-blue-100 dark:bg-teal-900 rounded-full text-blue-600 dark:text-teal-400 font-medium">
                Hello World!
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                I'm <span className="text-blue-600 dark:text-teal-400">Kristan Dharel</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 relative inline-block">
                <span className="relative z-10">Full Stack Developer</span>
                <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 dark:bg-teal-900 opacity-60 -z-0"></span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg relative pl-6 border-l-4 border-blue-600 dark:border-teal-400">
                Building seamless full stack solutions with MERN, AWS, Angular & .NET.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 dark:bg-teal-600 dark:hover:bg-teal-700 dark:hover:shadow-teal-500/30"
                >
                  View My Work
                </a>
                <a
                  href="/KristanDharel-Resume.pdf"
                  download
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all transform hover:scale-105 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
                >
                  Download Resume
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="flex items-center space-x-6">
                <span className="text-gray-600 dark:text-gray-300">Connect:</span>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
                <div className="w-20 h-px bg-gray-300 dark:bg-gray-600"></div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Available for work
                </span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};