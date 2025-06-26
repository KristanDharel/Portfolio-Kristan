import { FaReact, FaNodeJs, FaAws, FaAngular } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiExpress, SiDocker } from "react-icons/si";

export const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="w-8 h-8 text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-8 h-8 text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
    {
      name: "Express",
      icon: <SiExpress className="w-8 h-8 text-gray-800 dark:text-gray-200" />,
    },
    { name: "AWS", icon: <FaAws className="w-8 h-8 text-yellow-500" /> },
    { name: "Angular", icon: <FaAngular className="w-8 h-8 text-red-500" /> },
    { name: ".NET", icon: <SiDotnet className="w-8 h-8 text-purple-500" /> },
    { name: "Docker", icon: <SiDocker className="w-8 h-8 text-blue-400" /> },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a passionate Full Stack Developer with 2+ years of experience
              building web applications using modern technologies. I specialize
              in the MERN stack but also have extensive experience with cloud
              services, Angular, and .NET development.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My approach combines technical expertise with a keen eye for user
              experience, ensuring that the applications I build are not only
              functional but also intuitive and engaging.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, you can find me contributing to open-source
              projects, writing technical blogs, or exploring new technologies
              in the ever-evolving world of web development.
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  {skill.icon}
                  <span className="mt-2 font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-3">Additional Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "REST APIs",
                  "WebSocket",
                  "SQL",
                  "NoSQL",
                  "Git",
                  "CI/CD",
                  "Microservices",
                  "Serverless",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
