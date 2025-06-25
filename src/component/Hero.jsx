import React, { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaAngular,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaCode,
  FaMobile,
  FaCloud,
} from "react-icons/fa";
import { SiDotnet, SiMongodb, SiExpress, SiDocker } from "react-icons/si";

// Custom hook for scroll animations
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
export const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <AnimatedSection delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I'm{" "}
                <span className="text-blue-600 dark:text-teal-400">
                  Kristan Dharel
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
                Full Stack Developer
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                Building seamless full stack solutions with MERN, AWS, Angular &
                .NET.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 dark:bg-teal-600 dark:hover:bg-teal-700"
                >
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all transform hover:scale-105 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
                >
                  Download Resume
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={1000}>
              <div className="mt-8 flex space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
                >
                  <FaGithub className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <AnimatedSection direction="right" delay={300}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-teal-400 shadow-xl transform hover:scale-105 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Kristan Dharel"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
