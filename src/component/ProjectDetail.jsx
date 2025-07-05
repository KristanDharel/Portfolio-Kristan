import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom';

export const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[parseInt(id)];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
        >
          ← Back to Projects
        </button>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="rounded-xl overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto object-cover"
            />
          </div>
          
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">{project.title}</h1>
            <p className="text-lg mb-8 leading-relaxed">{project.description}</p>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-white mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gray-800 text-blue-400 rounded-full border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex space-x-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="mr-2" size={20} />
                  View Code
                </a>
              )}
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <FaExternalLinkAlt className="mr-2" size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};