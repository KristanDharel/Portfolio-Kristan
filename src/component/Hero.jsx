// import { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// // Custom hook for scroll animations (unchanged)
// const useScrollAnimation = (threshold = 0.1) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold }
//     );

//     const currentElement = elementRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [threshold]);

//   return [elementRef, isVisible];
// };

// // Animation wrapper component (unchanged)
// const AnimatedSection = ({
//   children,
//   className = "",
//   delay = 0,
//   direction = "up",
// }) => {
//   const [ref, isVisible] = useScrollAnimation();

//   const getTransform = () => {
//     switch (direction) {
//       case "left":
//         return "translateX(-50px)";
//       case "right":
//         return "translateX(50px)";
//       case "down":
//         return "translateY(-50px)";
//       default:
//         return "translateY(50px)";
//     }
//   };

//   return (
//     <div
//       ref={ref}
//       className={`transition-all duration-700 ease-out ${className}`}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transform: isVisible ? "translate(0)" : getTransform(),
//         transitionDelay: `${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// // Emoji Explosion Component
// const EmojiExplosion = ({ trigger }) => {
//   const [emojis, setEmojis] = useState([]);

//   useEffect(() => {
//     if (trigger) {
//       // Create 30 emojis at random positions
//       const newEmojis = Array.from({ length: 30 }, () => ({
//         id: Math.random().toString(36).substring(2, 9),
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         size: Math.random() * 20 + 10,
//         speed: Math.random() * 2 + 1,
//         rotation: Math.random() * 360,
//         emoji: ["👋", "😊", "👍", "🚀", "💻", "✨"][
//           Math.floor(Math.random() * 6)
//         ],
//       }));

//       setEmojis(newEmojis);

//       // Remove emojis after 2 seconds
//       const timer = setTimeout(() => {
//         setEmojis([]);
//       }, 2000);

//       return () => clearTimeout(timer);
//     }
//   }, [trigger]);

//   return (
//     <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
//       {emojis.map((emoji) => (
//         <div
//           key={emoji.id}
//           className="absolute animate-float"
//           style={{
//             left: `${emoji.x}px`,
//             top: `${emoji.y}px`,
//             fontSize: `${emoji.size}px`,
//             transform: `rotate(${emoji.rotation}deg)`,
//             animationDuration: `${emoji.speed}s`,
//           }}
//         >
//           {emoji.emoji}
//         </div>
//       ))}
//     </div>
//   );
// };

// // Hero Component with Emoji Interaction
// export const Hero = () => {
//   const [emojiTrigger, setEmojiTrigger] = useState(false);

//   const handleEmojiClick = () => {
//     setEmojiTrigger(true);
//     setTimeout(() => setEmojiTrigger(false), 100);
//   };

//   return (
//     <section id="home" className="relative py-20 md:py-32 overflow-hidden">
//       {/* Emoji explosion effect */}
//       <EmojiExplosion trigger={emojiTrigger} />

//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
//         <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-100 dark:bg-teal-900 opacity-30 blur-xl"></div>
//         <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-100 dark:bg-teal-900 opacity-30 blur-xl"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image on top for mobile, left for desktop */}
//           <div className="lg:w-1/2 order-2 lg:order-1">
//             <AnimatedSection direction="up" delay={300}>
//               <div className="relative">
//                 <div className="absolute -inset-4 bg-blue-600 dark:bg-teal-400 rounded-2xl rotate-6 opacity-30"></div>
//                 <div className="relative rounded-xl overflow-hidden border-4 border-blue-600 dark:border-teal-400 shadow-2xl transform hover:scale-[1.02] transition-transform">
//                   <img
//                     src="/dharel.png"
//                     alt="Kristan Dharel"
//                     className="w-full h-auto object-cover"
//                   />
//                 </div>
//                 <button
//                   onClick={handleEmojiClick}
//                   className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 dark:bg-teal-400 rounded-full flex items-center justify-center text-white font-bold text-lg cursor-pointer hover:scale-110 transition-transform focus:outline-none"
//                   aria-label="Wave hello"
//                 >
//                   <span className="transform rotate-12">👋</span>
//                 </button>
//               </div>
//             </AnimatedSection>
//           </div>

//           {/* Content */}
//           <div className="lg:w-1/2 order-1 lg:order-2">
//             <AnimatedSection delay={200}>
//               <div className="inline-block px-4 py-2 mb-4 bg-blue-100 dark:bg-teal-900 rounded-full text-blue-600 dark:text-teal-400 font-medium">
//                 Hello World!
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={300}>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
//                 I'm{" "}
//                 <span className="text-blue-600 dark:text-teal-400">
//                   Kristan Dharel
//                 </span>
//               </h1>
//             </AnimatedSection>

//             <AnimatedSection delay={400}>
//               <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6 relative inline-block">
//                 <span className="relative z-10">Full Stack Developer</span>
//                 <span className="absolute bottom-1 left-0 w-full h-2 bg-blue-100 dark:bg-teal-900 opacity-60 -z-0"></span>
//               </h2>
//             </AnimatedSection>

//             <AnimatedSection delay={500}>
//               <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg relative pl-6 border-l-4 border-blue-600 dark:border-teal-400">
//                 Building seamless full stack solutions with MERN, AWS, Angular &
//                 .NET.
//               </p>
//             </AnimatedSection>

//             <AnimatedSection delay={600}>
//               <div className="flex flex-wrap gap-4 mb-8">
//                 <a
//                   href="#projects"
//                   className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 dark:bg-teal-600 dark:hover:bg-teal-700 dark:hover:shadow-teal-500/30"
//                 >
//                   View My Work
//                 </a>
//                 <a
//                   href="/KristanDharel-Resume.pdf"
//                   download
//                   className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-all transform hover:scale-105 dark:border-teal-400 dark:text-teal-400 dark:hover:bg-gray-800"
//                 >
//                   Download Resume
//                 </a>
//               </div>
//             </AnimatedSection>

//             <AnimatedSection delay={700}>
//               <div className="flex items-center space-x-6">
//                 <span className="text-gray-600 dark:text-gray-300">
//                   Connect:
//                 </span>
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
//                   aria-label="GitHub"
//                 >
//                   <FaGithub className="w-6 h-6" />
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-teal-400 transition-all transform hover:scale-110"
//                   aria-label="LinkedIn"
//                 >
//                   <FaLinkedin className="w-6 h-6" />
//                 </a>
//                 <div className="w-20 h-px bg-gray-300 dark:bg-gray-600"></div>
//                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                   Available for work
//                 </span>
//               </div>
//             </AnimatedSection>
//           </div>
//         </div>
//       </div>

//       {/* Add this to your global CSS */}
//       <style jsx global>{`
//         @keyframes float {
//           0% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100px) rotate(20deg);
//             opacity: 0;
//           }
//         }
//         .animate-float {
//           animation: float linear forwards;
//         }
//       `}</style>
//     </section>
//   );
// };
// import { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const useScrollAnimation = (threshold = 0.1) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold }
//     );

//     const currentElement = elementRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [threshold]);

//   return [elementRef, isVisible];
// };

// const AnimatedText = ({ children, delay = 0 }) => {
//   const [ref, isVisible] = useScrollAnimation();
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (isVisible) {
//       const interval = setInterval(() => {
//         if (currentIndex < children.length) {
//           setDisplayText((prev) => prev + children[currentIndex]);
//           setCurrentIndex((prev) => prev + 1);
//         } else {
//           clearInterval(interval);
//         }
//       }, 100);

//       return () => clearInterval(interval);
//     }
//   }, [isVisible, currentIndex, children]);

//   return (
//     <span
//       ref={ref}
//       className="inline-block"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transition: `opacity 0.5s ease ${delay}ms`,
//       }}
//     >
//       {displayText}
//       <span className="animate-pulse">|</span>
//     </span>
//   );
// };

// export const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-black text-gray-100"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           {/* Animated greeting */}
//           <div className="mb-6 overflow-hidden">
//             <AnimatedText delay={200}>Hello, I'm</AnimatedText>
//           </div>

//           {/* Name reveal */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6">
//             <div className="overflow-hidden">
//               <AnimatedText delay={400}>Kristan</AnimatedText>
//             </div>
//             <div className="overflow-hidden">
//               <AnimatedText delay={800}>Dharel</AnimatedText>
//             </div>
//           </h1>

//           {/* Title */}
//           <div className="mb-8 overflow-hidden">
//             <AnimatedText delay={1200}>
//               <span className="text-xl md:text-2xl font-light text-gray-400">
//                 Full Stack Developer
//               </span>
//             </AnimatedText>
//           </div>

//           {/* Description */}
//           <div className="max-w-2xl mx-auto mb-12 overflow-hidden">
//             <AnimatedText delay={1600}>
//               <p className="text-gray-400">
//                 Building seamless full stack solutions with MERN, AWS, Angular &
//                 .NET.
//               </p>
//             </AnimatedText>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 mb-16">
//             <div className="overflow-hidden">
//               <a
//                 href="#projects"
//                 className="inline-block px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300"
//                 style={{
//                   opacity: 0,
//                   animation: "fadeIn 0.5s ease 2000ms forwards",
//                 }}
//               >
//                 View Work
//               </a>
//             </div>
//             <div className="overflow-hidden">
//               <a
//                 href="/KristanDharel-Resume.pdf"
//                 download
//                 className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white transition-all duration-300"
//                 style={{
//                   opacity: 0,
//                   animation: "fadeIn 0.5s ease 2200ms forwards",
//                 }}
//               >
//                 Download CV
//               </a>
//             </div>
//           </div>

//           {/* Social links */}
//           <div className="flex justify-center gap-6">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition-all"
//               style={{
//                 opacity: 0,
//                 animation: "fadeIn 0.5s ease 2400ms forwards",
//               }}
//               aria-label="GitHub"
//             >
//               <FaGithub className="w-6 h-6" />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition-all"
//               style={{
//                 opacity: 0,
//                 animation: "fadeIn 0.5s ease 2600ms forwards",
//               }}
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin className="w-6 h-6" />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Global styles */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };
//selected
// import { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";

// const useScrollAnimation = (threshold = 0.1) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold }
//     );

//     const currentElement = elementRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [threshold]);

//   return [elementRef, isVisible];
// };

// const CinematicText = ({ children, delay = 0, duration = 1000 }) => {
//   const [ref, isVisible] = useScrollAnimation();
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const intervalDuration = duration / children.length;

//   useEffect(() => {
//     if (isVisible) {
//       const interval = setInterval(() => {
//         if (currentIndex < children.length) {
//           setDisplayText((prev) => prev + children[currentIndex]);
//           setCurrentIndex((prev) => prev + 1);
//         } else {
//           clearInterval(interval);
//         }
//       }, intervalDuration);

//       return () => clearInterval(interval);
//     }
//   }, [isVisible, currentIndex, children, intervalDuration]);

//   return (
//     <span
//       ref={ref}
//       className="inline-block"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transition: `opacity 0.5s ease ${delay}ms`,
//       }}
//     >
//       {displayText}
//       {/* <span className="animate-pulse">|</span> */}
//     </span>
//   );
// };

// const GlitchText = ({ children, delay = 0 }) => {
//   const [ref, isVisible] = useScrollAnimation();

//   return (
//     <div
//       ref={ref}
//       className={`glitch ${isVisible ? "active" : ""}`}
//       data-text={children}
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transition: `opacity 0.5s ease ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// export const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center bg-black text-gray-100 relative overflow-hidden"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-3xl animate-float1"></div>
//         <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl animate-float2"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-indigo-900 opacity-20 blur-3xl animate-float3"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center">
//           {/* Animated greeting */}

//           {/* Name reveal with cinematic effect */}
//           <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tighter">
//             <div className="overflow-hidden">
//               <div className="relative inline-block">
//                 <CinematicText delay={400} duration={1200}>
//                   Kristan Dharel
//                 </CinematicText>
//                 <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>
//               </div>
//             </div>
//           </h1>

//           {/* Title with glitch effect */}
//           <div className="mb-8 overflow-hidden">
//             <span className="text-xl md:text-2xl font-light text-gray-400">
//               Software Engineering • Development/Testing • Deployment
//             </span>
//           </div>

//           {/* Description */}
//           <div className="max-w-2xl mx-auto mb-12 overflow-hidden">
//             <CinematicText delay={1600}>
//               <p className="text-gray-400">
//                 Building seamless full stack solutions with MERN, AWS, Angular &
//                 .NET.
//               </p>
//             </CinematicText>
//           </div>

//           {/* Buttons */}
//           <div className="flex justify-center gap-4 mb-16">
//             <div className="overflow-hidden">
//               <a
//                 href="#projects"
//                 className="inline-block px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300 relative group"
//                 style={{
//                   opacity: 0,
//                   animation: "fadeIn 0.5s ease 2000ms forwards",
//                 }}
//               >
//                 <span className="relative z-10">View Work</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               </a>
//             </div>
//             <div className="overflow-hidden">
//               <a
//                 href="/KristanDharel-Resume.pdf"
//                 download
//                 className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 relative group"
//                 style={{
//                   opacity: 0,
//                   animation: "fadeIn 0.5s ease 2200ms forwards",
//                 }}
//               >
//                 <span className="relative z-10">Download CV</span>
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//               </a>
//             </div>
//           </div>

//           {/* Social links */}
//           <div className="flex justify-center gap-6">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition-all relative group"
//               style={{
//                 opacity: 0,
//                 animation: "fadeIn 0.5s ease 2400ms forwards",
//               }}
//               aria-label="GitHub"
//             >
//               <FaGithub className="w-6 h-6" />
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-white transition-all relative group"
//               style={{
//                 opacity: 0,
//                 animation: "fadeIn 0.5s ease 2600ms forwards",
//               }}
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin className="w-6 h-6" />
//               <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Global styles */}
//       <style jsx global>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//           }
//           to {
//             opacity: 1;
//           }
//         }

//         @keyframes float1 {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(-10px, -10px);
//           }
//         }

//         @keyframes float2 {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(15px, 10px);
//           }
//         }

//         @keyframes float3 {
//           0%,
//           100% {
//             transform: translate(0, 0);
//           }
//           50% {
//             transform: translate(5px, 15px);
//           }
//         }

//         .animate-float1 {
//           animation: float1 8s ease-in-out infinite;
//         }

//         .animate-float2 {
//           animation: float2 10s ease-in-out infinite;
//         }

//         .animate-float3 {
//           animation: float3 12s ease-in-out infinite;
//         }

//         /* Glitch effect */
//         .glitch {
//           position: relative;
//         }

//         .glitch::before,
//         .glitch::after {
//           content: attr(data-text);
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           opacity: 0;
//         }

//         .glitch::before {
//           color: #0ff;
//           z-index: -1;
//           transform: translate(-2px, -2px);
//         }

//         .glitch::after {
//           color: #f0f;
//           z-index: -2;
//           transform: translate(2px, 2px);
//         }

//         .glitch.active::before,
//         .glitch.active::after {
//           opacity: 0.8;
//         }

//         .glitch.active {
//           animation: glitch-anim 1s linear 2;
//         }

//         @keyframes glitch-anim {
//           0% {
//             transform: translate(0);
//           }
//           20% {
//             transform: translate(-2px, 2px);
//           }
//           40% {
//             transform: translate(-2px, -2px);
//           }
//           60% {
//             transform: translate(2px, 2px);
//           }
//           80% {
//             transform: translate(2px, -2px);
//           }
//           100% {
//             transform: translate(0);
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// import { useEffect, useRef, useState } from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { About } from "./About";
// import Services from "./Services";
// import { projects, services } from "../constants";
// import { Projects } from "./Projects";
// const useScrollAnimation = (threshold = 0.1) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const elementRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold }
//     );

//     const currentElement = elementRef.current;
//     if (currentElement) {
//       observer.observe(currentElement);
//     }

//     return () => {
//       if (currentElement) {
//         observer.unobserve(currentElement);
//       }
//     };
//   }, [threshold]);

//   return [elementRef, isVisible];
// };
// const CinematicText = ({ children, delay = 0, duration = 1000 }) => {
//   const [ref, isVisible] = useScrollAnimation();
//   const [displayText, setDisplayText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const intervalDuration = duration / children.length;

//   useEffect(() => {
//     if (isVisible) {
//       const interval = setInterval(() => {
//         if (currentIndex < children.length) {
//           setDisplayText((prev) => prev + children[currentIndex]);
//           setCurrentIndex((prev) => prev + 1);
//         } else {
//           clearInterval(interval);
//         }
//       }, intervalDuration);

//       return () => clearInterval(interval);
//     }
//   }, [isVisible, currentIndex, children, intervalDuration]);

//   return (
//     <span
//       ref={ref}
//       className="inline-block"
//       style={{
//         opacity: isVisible ? 1 : 0,
//         transition: `opacity 0.5s ease ${delay}ms`,
//       }}
//     >
//       {displayText}
//       {/* <span className="animate-pulse">|</span> */}
//     </span>
//   );
// };

// const GateReveal = ({ children }) => {
//   const [ref, isVisible] = useScrollAnimation();
//   const [animationStage, setAnimationStage] = useState(0); // 0: initial, 1: lines appear, 2: gates open, 3: content revealed

//   useEffect(() => {
//     if (!isVisible) return;

//     const sequence = [
//       () => setAnimationStage(1), // Show lines
//       () => setTimeout(() => setAnimationStage(2), 800), // Open gates
//       () => setTimeout(() => setAnimationStage(3), 1600), // Show content
//     ];

//     sequence.forEach((step, i) => setTimeout(step, i * 800));
//   }, [isVisible]);

//   return (
//     <div ref={ref} className="relative w-full overflow-hidden">
//       {/* Left gate line */}
//       <div
//         className={`fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
//           animationStage >= 1 ? "opacity-100" : "opacity-0"
//         } ${
//           animationStage >= 2
//             ? "-translate-x-[50vw]" // Move left to cover half the viewport width
//             : "-translate-x-1/2"
//         }`}
//         style={{
//           boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
//           zIndex: 40,
//         }}
//       />

//       {/* Right gate line */}
//       <div
//         className={`fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
//           animationStage >= 1 ? "opacity-100" : "opacity-0"
//         } ${
//           animationStage >= 2
//             ? "translate-x-[50vw]" // Move right to cover half the viewport width
//             : "-translate-x-1/2"
//         }`}
//         style={{
//           boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
//           zIndex: 40,
//         }}
//       />

//       {/* Sparkle effects when gates open */}
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

// export const Hero = () => {
//   return (
//     <div>
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center bg-black text-gray-100 relative overflow-hidden"
//       >
//         {/* Animated background elements */}
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-3xl animate-float1"></div>
//           <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl animate-float2"></div>
//           <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-indigo-900 opacity-20 blur-3xl animate-float3"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           {/* Entire content wrapped in GateReveal */}
//           <GateReveal>
//             <div className="text-center">
//               <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8">
//                 <CinematicText delay={0} duration={1200}>
//                   Kristan Dharel
//                 </CinematicText>
//               </h1>

//               <div className="text-xl md:text-2xl font-light text-gray-400 mb-8">
//                 Software Engineering • Development/Testing • Deployment
//               </div>

//               <div className="max-w-2xl mx-auto mb-12">
//                 <p className="text-gray-400">
//                   Building seamless full stack solutions with MERN, AWS, Angular
//                   & .NET.
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="flex justify-center gap-4 mb-16">
//                 <a
//                   href="#projects"
//                   className="inline-block px-6 py-3 border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white transition-all duration-300 relative group"
//                 >
//                   <span className="relative z-10">View Work</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                 </a>
//                 <a
//                   href="/KristanDharel-Resume.pdf"
//                   download
//                   className="inline-block px-6 py-3 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white transition-all duration-300 relative group"
//                 >
//                   <span className="relative z-10">Download CV</span>
//                   <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
//                 </a>
//               </div>

//               {/* Social links */}
//               <div className="flex justify-center gap-6">
//                 <a
//                   href="https://github.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-all relative group"
//                   aria-label="GitHub"
//                 >
//                   <FaGithub className="w-6 h-6" />
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//                 <a
//                   href="https://linkedin.com"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-gray-400 hover:text-white transition-all relative group"
//                   aria-label="LinkedIn"
//                 >
//                   <FaLinkedin className="w-6 h-6" />
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
//                 </a>
//               </div>
//             </div>
//           </GateReveal>
//         </div>

//         {/* Global styles */}
//         <style jsx global>{`
//           @keyframes float1 {
//             0%,
//             100% {
//               transform: translate(0, 0);
//             }
//             50% {
//               transform: translate(-10px, -10px);
//             }
//           }
//           @keyframes float2 {
//             0%,
//             100% {
//               transform: translate(0, 0);
//             }
//             50% {
//               transform: translate(15px, 10px);
//             }
//           }
//           @keyframes float3 {
//             0%,
//             100% {
//               transform: translate(0, 0);
//             }
//             50% {
//               transform: translate(5px, 15px);
//             }
//           }
//           .animate-float1 {
//             animation: float1 8s ease-in-out infinite;
//           }
//           .animate-float2 {
//             animation: float2 10s ease-in-out infinite;
//           }
//           .animate-float3 {
//             animation: float3 12s ease-in-out infinite;
//           }

//           /* Sparkle animations */
//           @keyframes sparkle-1 {
//             0% {
//               transform: translate(0, 0) scale(0);
//               opacity: 0;
//             }
//             20% {
//               transform: translate(-10px, -10px) scale(1);
//               opacity: 0.8;
//             }
//             40% {
//               transform: translate(5px, 15px) scale(0.5);
//               opacity: 0.5;
//             }
//             60% {
//               transform: translate(15px, -5px) scale(0.3);
//               opacity: 0.3;
//             }
//             100% {
//               transform: translate(0, 0) scale(0);
//               opacity: 0;
//             }
//           }
//           @keyframes sparkle-2 {
//             0% {
//               transform: translate(0, 0) scale(0);
//               opacity: 0;
//             }
//             20% {
//               transform: translate(10px, -5px) scale(1);
//               opacity: 0.6;
//             }
//             40% {
//               transform: translate(-5px, 10px) scale(0.7);
//               opacity: 0.4;
//             }
//             60% {
//               transform: translate(-10px, -10px) scale(0.3);
//               opacity: 0.2;
//             }
//             100% {
//               transform: translate(0, 0) scale(0);
//               opacity: 0;
//             }
//           }
//           @keyframes sparkle-3 {
//             0% {
//               transform: translate(0, 0) scale(0);
//               opacity: 0;
//             }
//             20% {
//               transform: translate(-5px, 5px) scale(1);
//               opacity: 0.7;
//             }
//             40% {
//               transform: translate(10px, 5px) scale(0.5);
//               opacity: 0.4;
//             }
//             60% {
//               transform: translate(-15px, 10px) scale(0.2);
//               opacity: 0.1;
//             }
//             100% {
//               transform: translate(0, 0) scale(0);
//               opacity: 0;
//             }
//           }
//           .animate-sparkle-1 {
//             animation: sparkle-1 1.5s ease-out;
//           }
//           .animate-sparkle-2 {
//             animation: sparkle-2 1.5s ease-out 0.2s;
//           }
//           .animate-sparkle-3 {
//             animation: sparkle-3 1.5s ease-out 0.4s;
//           }
//         `}</style>
//       </section>
//     </div>
//   );
// };

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

export const GateReveal = ({ children }) => {
  const [ref, isVisible] = useScrollAnimation();
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const sequence = [
      () => setAnimationStage(1),
      () => setTimeout(() => setAnimationStage(2), 800),
      () => setTimeout(() => setAnimationStage(3), 1600),
    ];

    sequence.forEach((step, i) => setTimeout(step, i * 800));
  }, [isVisible]);

  return (
    <div ref={ref} className="relative w-full overflow-hidden">
      {/* Left gate line */}
      <div
        className={`fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
          animationStage >= 1 ? "opacity-100" : "opacity-0"
        } ${animationStage >= 2 ? "-translate-x-[50vw]" : "-translate-x-1/2"}`}
        style={{
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
          zIndex: 40,
        }}
      />

      {/* Right gate line */}
      <div
        className={`fixed top-0 left-1/2 h-screen w-1 bg-gradient-to-b from-transparent via-white to-transparent transform transition-all duration-1000 ease-[cubic-bezier(0.68,-0.55,0.265,1.55)] ${
          animationStage >= 1 ? "opacity-100" : "opacity-0"
        } ${animationStage >= 2 ? "translate-x-[50vw]" : "-translate-x-1/2"}`}
        style={{
          boxShadow: "0 0 15px rgba(255, 255, 255, 0.7)",
          zIndex: 40,
        }}
      />

      {/* Sparkle effects */}
      {animationStage >= 2 && (
        <>
          <div
            className="fixed top-1/2 left-1/2 w-4 h-4 bg-white rounded-full opacity-0 animate-sparkle-1"
            style={{ zIndex: 50 }}
          />
          <div
            className="fixed top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full opacity-0 animate-sparkle-2"
            style={{ zIndex: 50 }}
          />
          <div
            className="fixed top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-0 animate-sparkle-3"
            style={{ zIndex: 50 }}
          />
        </>
      )}

      {/* Content */}
      <div
        className={`relative transition-all duration-700 ${
          animationStage >= 3 ? "opacity-100" : "opacity-0"
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
        <style jsx global>{`
          @keyframes float1 {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(-10px, -10px);
            }
          }
          @keyframes float2 {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(15px, 10px);
            }
          }
          @keyframes float3 {
            0%,
            100% {
              transform: translate(0, 0);
            }
            50% {
              transform: translate(5px, 15px);
            }
          }
          .animate-float1 {
            animation: float1 8s ease-in-out infinite;
          }
          .animate-float2 {
            animation: float2 10s ease-in-out infinite;
          }
          .animate-float3 {
            animation: float3 12s ease-in-out infinite;
          }

          @keyframes sparkle-1 {
            0% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
            20% {
              transform: translate(-10px, -10px) scale(1);
              opacity: 0.8;
            }
            40% {
              transform: translate(5px, 15px) scale(0.5);
              opacity: 0.5;
            }
            60% {
              transform: translate(15px, -5px) scale(0.3);
              opacity: 0.3;
            }
            100% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
          }
          @keyframes sparkle-2 {
            0% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
            20% {
              transform: translate(10px, -5px) scale(1);
              opacity: 0.6;
            }
            40% {
              transform: translate(-5px, 10px) scale(0.7);
              opacity: 0.4;
            }
            60% {
              transform: translate(-10px, -10px) scale(0.3);
              opacity: 0.2;
            }
            100% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
          }
          @keyframes sparkle-3 {
            0% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
            20% {
              transform: translate(-5px, 5px) scale(1);
              opacity: 0.7;
            }
            40% {
              transform: translate(10px, 5px) scale(0.5);
              opacity: 0.4;
            }
            60% {
              transform: translate(-15px, 10px) scale(0.2);
              opacity: 0.1;
            }
            100% {
              transform: translate(0, 0) scale(0);
              opacity: 0;
            }
          }
          .animate-sparkle-1 {
            animation: sparkle-1 1.5s ease-out;
          }
          .animate-sparkle-2 {
            animation: sparkle-2 1.5s ease-out 0.2s;
          }
          .animate-sparkle-3 {
            animation: sparkle-3 1.5s ease-out 0.4s;
          }
        `}</style>
      </section>
    </div>
  );
};
