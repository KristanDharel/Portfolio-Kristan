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

  return (
    <section id="contact" className="py-20 bg-black text-gold-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-gold-400">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gold-500 mx-auto"></div>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gold-300 mb-1"
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
                  className="w-full px-4 py-2 border border-gold-700 rounded-md focus:ring-gold-500 focus:border-gold-500 bg-gray-900 text-gold-100"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gold-300 mb-1"
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
                  className="w-full px-4 py-2 border border-gold-700 rounded-md focus:ring-gold-500 focus:border-gold-500 bg-gray-900 text-gold-100"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gold-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gold-700 rounded-md focus:ring-gold-500 focus:border-gold-500 bg-gray-900 text-gold-100"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={hoverEffect}
                whileTap={tapEffect}
                className="px-6 py-3 bg-gold-600 hover:bg-gold-700 text-black font-medium rounded-lg transition-colors shadow-md shadow-gold-500/20"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gold-800">
              <h3 className="text-xl font-semibold mb-6 text-gold-400">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-gold-500 mt-1">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gold-100">123 Developer Street</p>
                    <p className="text-gold-100">Tech City, TC 10001</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-gold-500">
                    <FaPhone className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <a
                      href="tel:+1234567890"
                      className="text-gold-100 hover:text-gold-400 transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 text-gold-500">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div className="ml-3">
                    <a
                      href="mailto:john@example.com"
                      className="text-gold-100 hover:text-gold-400 transition-colors"
                    >
                      john@example.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gold-300">
                  Connect With Me
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={tapEffect}
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-100 hover:text-gold-400 transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={tapEffect}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-100 hover:text-gold-400 transition-colors"
                  >
                    <FaLinkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    whileTap={tapEffect}
                 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-100 hover:text-gold-400 transition-colors"
                  >
                
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
