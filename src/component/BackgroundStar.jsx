// export const GateReveal = ({ children, delay = 0 }) => {
//   const [ref, isVisible] = useScrollAnimation(0.2); // Lower threshold for better triggering
//   const [animationStage, setAnimationStage] = useState(0);

//   useEffect(() => {
//     if (!isVisible) return;

//     const sequence = [
//       () => setAnimationStage(1),
//       () => setTimeout(() => setAnimationStage(2), 800),
//       () => setTimeout(() => setAnimationStage(3), 1600),
//     ];

//     sequence.forEach((step, i) => setTimeout(step, i * 800 + delay));
//   }, [isVisible, delay]);

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
//           animationStage >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//         }`}
//         style={{ zIndex: 30 }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };