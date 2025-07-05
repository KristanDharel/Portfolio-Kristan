// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// export const Projects = ({ projects }) => {
//   return (
//     <section
//       id="projects"
//       className="py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">My Projects</h2>
//           <div className="w-20 h-1 bg-blue-600 dark:bg-teal-400 mx-auto"></div>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
//             >
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
//                 />
//               </div>
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-600 dark:text-gray-300 mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {project.tech.map((tech, techIndex) => (
//                     <span
//                       key={techIndex}
//                       className="px-2 py-1 bg-blue-100 dark:bg-gray-600 text-blue-800 dark:text-teal-300 text-xs rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-4">
//                   {project.github && (
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
//                     >
//                       {/* <FaGithub className="mr-2" /> Code */}
//                     </a>
//                   )}
//                   {project.live && (
//                     <a
//                       href={project.live}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-teal-400 transition-colors"
//                     >
//                       {/* <FaExternalLinkAlt className="mr-2" /> Live Demo */}
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Projects = ({ projects }) => {
    const navigate = useNavigate();
  const handleProjectClick = (projectId) => {
    navigate(`/projects/${projectId}`);
  };
  return (
    <section
      id="projects"
      className="py-20 bg-black text-gray-300 relative overflow-hidden"
    >
      {/* Background elements matching Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-indigo-900 opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
                onClick={() => handleProjectClick(index)} 
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-2 group"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {project.title}
                </h3>
                <p className="mb-5 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800 text-blue-400 text-sm rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
