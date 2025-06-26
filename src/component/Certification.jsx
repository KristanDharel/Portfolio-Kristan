import { FaAws, FaCode, FaLinkedin } from "react-icons/fa";

export const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development - MERN STACK",
      issuer: "Deerwalk Training Center",
      date: "June 16 to September 12 2023",
      icon: <FaCode className="w-6 h-6 text-yellow-500" />,
      image: "/deerwalk.png", // Path in public folder
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "Sep 21, 2023",
      icon: <FaAws className="w-6 h-6 text-yellow-500" />,
      image: "/cloudfoundation.png", // Path in public folder
    },
    {
      title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "Oct 19, 2023",
      icon: <FaAws className="w-6 h-6 text-yellow-500" />,
      image: "/mlf.png",
    },
    {
      title:
        "AWS Academy Graduate - AWS Academy Machine Learning for Natural Language Processing",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 20, 2023",
      icon: <FaAws className="w-6 h-6 text-yellow-500" />,
      image: "/ml.png",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Data Engineering",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 30, 2023",
      icon: <FaAws className="w-6 h-6 text-yellow-500" />,
      image: "/de.png",
    },
    {
      title: "Figma For UX design",
      issuer: "LinkedIn Learning",
      date: "Aug 3, 2023",
      icon: <FaLinkedin className="w-6 h-6 text-yellow-500" />,
      image: "/figma.png",
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-teal-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">{cert.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Issued {cert.date}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <img
                  src={cert.image}
                  alt={`${cert.title} certificate`}
                  className="w-full h-auto rounded border border-gray-200 dark:border-gray-600"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
