// import { FaAws, FaCode, FaLinkedin } from "react-icons/fa";

// export const Certifications = () => {
//   const certifications = [
//     {
//       title: "Full Stack Web Development - MERN STACK",
//       issuer: "Deerwalk Training Center",
//       date: "June 16 to September 12 2023",
//       icon: <FaCode className="w-6 h-6 text-yellow-500" />,
//       image: "/deerwalk.png", // Path in public folder
//     },
//     {
//       title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Sep 21, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/cloudfoundation.png", // Path in public folder
//     },
//     {
//       title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Oct 19, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/mlf.png",
//     },
//     {
//       title:
//         "AWS Academy Graduate - AWS Academy Machine Learning for Natural Language Processing",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Nov 20, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/ml.png",
//     },
//     {
//       title: "AWS Academy Graduate - AWS Academy Data Engineering",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Nov 30, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/de.png",
//     },
//     {
//       title: "Figma For UX design",
//       issuer: "LinkedIn Learning",
//       date: "Aug 3, 2023",
//       icon: <FaLinkedin className="w-6 h-6 text-yellow-500" />,
//       image: "/figma.png",
//     },
//   ];

//   return (
//     <section
//       id="certifications"
//       className="py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Certifications</h2>
//           <div className="w-20 h-1 bg-blue-600 dark:bg-teal-400 mx-auto"></div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="flex flex-col p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="flex items-start">
//                 <div className="mr-4 mt-1">{cert.icon}</div>
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
//                   <p className="text-gray-600 dark:text-gray-300 mb-1">
//                     {cert.issuer}
//                   </p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">
//                     Issued {cert.date}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
//                 <img
//                   src={cert.image}
//                   alt={`${cert.title} certificate`}
//                   className="w-full h-auto rounded border border-gray-200 dark:border-gray-600"
//                   loading="lazy"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// import { FaAws, FaCode, FaLinkedin } from "react-icons/fa";

// export const Certifications = () => {
//   const certifications = [
//     {
//       title: "Full Stack Web Development - MERN STACK",
//       issuer: "Deerwalk Training Center",
//       date: "June 16 to September 12 2023",
//       icon: <FaCode className="w-6 h-6 text-yellow-500" />,
//       image: "/deerwalk.png", // Path in public folder
//     },
//     {
//       title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Sep 21, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/cloudfoundation.png", // Path in public folder
//     },
//     {
//       title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Oct 19, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/mlf.png",
//     },
//     {
//       title:
//         "AWS Academy Graduate - AWS Academy Machine Learning for Natural Language Processing",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Nov 20, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/ml.png",
//     },
//     {
//       title: "AWS Academy Graduate - AWS Academy Data Engineering",
//       issuer: "Amazon Web Services Training and Certification",
//       date: "Nov 30, 2023",
//       icon: <FaAws className="w-6 h-6 text-yellow-500" />,
//       image: "/de.png",
//     },
//     {
//       title: "Figma For UX design",
//       issuer: "LinkedIn Learning",
//       date: "Aug 3, 2023",
//       icon: <FaLinkedin className="w-6 h-6 text-yellow-500" />,
//       image: "/figma.png",
//     },
//   ];

//   return (
//     <section
//       id="certifications"
//       className="py-20 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
//     >
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold mb-4">Certifications</h2>
//           <div className="w-20 h-1 bg-blue-600 dark:bg-teal-400 mx-auto"></div>
//         </div>
//         <div className="relative">
//           <div className="flex overflow-x-auto pb-6 space-x-6 scrollbar-hide">
//             {certifications.map((cert, index) => (
//               <div
//                 key={index}
//                 className="flex-shrink-0 w-80 p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="flex items-start">
//                   <div className="mr-4 mt-1">{cert.icon}</div>
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-300 mb-1">
//                       {cert.issuer}
//                     </p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       Issued {cert.date}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
//                   <img
//                     src={cert.image}
//                     alt={`${cert.title} certificate`}
//                     className="w-full h-auto rounded border border-gray-200 dark:border-gray-600"
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { FaAws, FaCode, FaLinkedin } from "react-icons/fa";

export const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development - MERN STACK",
      issuer: "Deerwalk Training Center",
      date: "June 16 to September 12 2023",
      icon: <FaCode className="w-6 h-6 text-blue-400" />,
      image: "/deerwalk.png",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "Sep 21, 2023",
      icon: <FaAws className="w-6 h-6 text-amber-400" />,
      image: "/cloudfoundation.png",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Machine Learning Foundations",
      issuer: "Amazon Web Services Training and Certification",
      date: "Oct 19, 2023",
      icon: <FaAws className="w-6 h-6 text-amber-400" />,
      image: "/mlf.png",
    },
    {
      title:
        "AWS Academy Graduate - AWS Academy Machine Learning for Natural Language Processing",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 20, 2023",
      icon: <FaAws className="w-6 h-6 text-amber-400" />,
      image: "/ml.png",
    },
    {
      title: "AWS Academy Graduate - AWS Academy Data Engineering",
      issuer: "Amazon Web Services Training and Certification",
      date: "Nov 30, 2023",
      icon: <FaAws className="w-6 h-6 text-amber-400" />,
      image: "/de.png",
    },
    {
      title: "Figma For UX design",
      issuer: "LinkedIn Learning",
      date: "Aug 3, 2023",
      icon: <FaLinkedin className="w-6 h-6 text-blue-500" />,
      image: "/figma.png",
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications
          </h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-all hover:-translate-y-2"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{cert.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {cert.title}
                    </h3>
                    <p className="mb-1">{cert.issuer}</p>
                    <p className="text-sm text-gray-400">Issued {cert.date}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    className="w-full h-auto rounded border border-gray-700 hover:border-gray-600 transition-colors"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
