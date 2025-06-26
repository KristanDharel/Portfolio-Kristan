import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

 return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gold-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-12"
        >
          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gold-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gold-700/50 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-gray-900/50 text-gold-100 placeholder-gold-700 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gold-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gold-700/50 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-gray-900/50 text-gold-100 placeholder-gold-700 transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gold-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gold-700/50 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 bg-gray-900/50 text-gold-100 placeholder-gold-700 transition-all duration-300"
                  placeholder="Your message here..."
                ></textarea>
              </div>
             <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="w-full px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white-900 font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Send Message
        </motion.button>
            </form>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-8 rounded-xl shadow-2xl border border-gold-800/30 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-white bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-gold-900/20 rounded-lg text-gold-400">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-gold-100 font-medium">Balaju, Kathmandu</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 bg-gold-900/20 rounded-lg text-gold-400">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <a
                      href="tel:+1234567890"
                      className="text-gold-100 font-medium hover:text-gold-400 transition-colors duration-300"
                    >
                      +977 9841213702
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 bg-gold-900/20 rounded-lg text-gold-400">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <a
                      href="mailto:john@example.com"
                      className="text-gold-100 font-medium hover:text-gold-400 transition-colors duration-300"
                    >
                      dharelkristan@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gold-900/20 hover:bg-gold-800/40 rounded-lg text-gold-100 hover:text-gold-400 transition-all duration-300"
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -3 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gold-900/20 hover:bg-gold-800/40 rounded-lg text-gold-100 hover:text-gold-400 transition-all duration-300"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};