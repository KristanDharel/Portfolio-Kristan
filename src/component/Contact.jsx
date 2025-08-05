// import { useState } from "react";
// import {
//   FaEnvelope,
//   FaGithub,
//   FaLinkedin,
//   FaMapMarkerAlt,
//   FaPhone,
// } from "react-icons/fa";
// import { motion } from "framer-motion";

// export const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     alert("Thank you for your message! I will get back to you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: "easeOut",
//       },
//     },
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-black text-gray-300 relative overflow-hidden"
//     >
//       {/* Background elements matching Hero */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-purple-900 opacity-20 blur-3xl"></div>
//         <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-900 opacity-20 blur-3xl"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-36 h-36 rounded-full bg-indigo-900 opacity-20 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 max-w-6xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
//             Get In Touch
//           </h2>
//           <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//             Have a project in mind or want to collaborate? Feel free to reach
//             out!
//           </p>
//           <div className="w-24 h-1 bg-white mx-auto"></div>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="flex flex-col lg:flex-row gap-12"
//         >
//           <motion.div variants={itemVariants} className="lg:w-1/2">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-400 mb-2"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white placeholder-gray-500 transition-all duration-300"
//                   placeholder="Your name"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-400 mb-2"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white placeholder-gray-500 transition-all duration-300"
//                   placeholder="your.email@example.com"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-400 mb-2"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-900 text-white placeholder-gray-500 transition-all duration-300"
//                   placeholder="Your message here..."
//                 ></textarea>
//               </div>
//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 type="submit"
//                 className="w-full px-6 py-3 bg-gray-300 text-black font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
//               >
//                 Send Message
//               </motion.button>
//             </form>
//           </motion.div>

//           <motion.div variants={itemVariants} className="lg:w-1/2">
//             <div className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800">
//               <h3 className="text-2xl font-semibold mb-6 text-white">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg text-blue-400">
//                     <FaMapMarkerAlt className="w-5 h-5" />
//                   </div>
//                   <div className="ml-4">
//                     <p className="text-gray-300 font-medium">
//                       Balaju, Kathmandu
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg text-blue-400">
//                     <FaPhone className="w-5 h-5" />
//                   </div>
//                   <div className="ml-4">
//                     <a
//                       href="tel:+9779841213702"
//                       className="text-gray-300 font-medium hover:text-blue-400 transition-colors duration-300"
//                     >
//                       +977 9841213702
//                     </a>
//                   </div>
//                 </div>
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0 p-2 bg-gray-800 rounded-lg text-blue-400">
//                     <FaEnvelope className="w-5 h-5" />
//                   </div>
//                   <div className="ml-4">
//                     <a
//                       href="mailto:dharelkristan@gmail.com"
//                       className="text-gray-300 font-medium hover:text-blue-400 transition-colors duration-300"
//                     >
//                       dharelkristan@gmail.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-12">
//                 <h4 className="text-xl font-semibold mb-6 text-white">
//                   Connect With Me
//                 </h4>
//                 <div className="flex space-x-4">
//                   <motion.a
//                     whileHover={{ y: -3 }}
//                     href="https://github.com/KristanDharel"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
//                   >
//                     <FaGithub className="w-6 h-6" />
//                   </motion.a>
//                   <motion.a
//                     whileHover={{ y: -3 }}
//                     href="https://www.linkedin.com/in/kristan-dharel/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
//                   >
//                     <FaLinkedin className="w-6 h-6" />
//                   </motion.a>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaMapMarkerAlt, 
  FaPhone,
  FaGlobe
} from "react-icons/fa";

export const Contact = () => {
  const contactItems = [
    {
      icon: <FaMapMarkerAlt className="w-4 h-4" />,
      text: "Balaju, Kathmandu",
      link: null
    },
    {
      icon: <FaPhone className="w-4 h-4" />,
      text: "+977 9841213702",
      link: "tel:+9779841213702"
    },
    {
      icon: <FaEnvelope className="w-4 h-4" />,
      text: "dharelkristan@gmail.com",
      link: "mailto:dharelkristan@gmail.com"
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="w-5 h-5" />,
      url: "https://github.com/KristanDharel",
      name: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/kristan-dharel/",
      name: "LinkedIn"
    },
    {
      icon: <FaGlobe className="w-5 h-5" />,
      url: "#",
      name: "Portfolio"
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating cards in background */}
        <motion.div 
          initial={{ x: -100, y: -50, rotate: -5 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, type: 'spring' }}
          className="absolute top-1/4 left-1/4 w-48 h-48 border border-gray-800 rounded-lg opacity-20"
        ></motion.div>
        <motion.div 
          initial={{ x: 100, y: 100, rotate: 5 }}
          animate={{ x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.5, type: 'spring', delay: 0.2 }}
          className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-gray-800 rounded-lg opacity-20"
        ></motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-wider mb-6">
            LET'S CONNECT
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details - Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black p-10 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.03)]"
          >
            <h3 className="text-xl font-light mb-8 tracking-wider flex items-center">
              <span className="w-8 h-px bg-white mr-4"></span>
              CONTACT INFORMATION
            </h3>
            <ul className="space-y-6">
              {contactItems.map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start group"
                >
                  <span className="mr-4 mt-1 text-gray-400 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="font-light hover:text-gray-400 transition-colors duration-300"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="font-light">{item.text}</p>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links - Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-black p-10 border border-gray-800 rounded-xl hover:border-gray-600 transition-all duration-500 shadow-[0_25px_50px_-12px_rgba(255,255,255,0.03)]"
          >
            <h3 className="text-xl font-light mb-8 tracking-wider flex items-center">
              <span className="w-8 h-px bg-white mr-4"></span>
              SOCIAL NETWORKS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-5 border border-gray-800 hover:border-gray-600 transition-all duration-300 group"
                >
                  <span className="mr-3 text-gray-400 group-hover:text-white transition-colors duration-300">
                    {social.icon}
                  </span>
                  <span className="font-light">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24 text-gray-500 text-sm tracking-wider"
        >
          <p>© {new Date().getFullYear()} KRISTAN DHAREL — ALL RIGHTS RESERVED</p>
        </motion.div>
      </div>
    </section>
  );
};