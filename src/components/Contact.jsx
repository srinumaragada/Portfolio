import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
  const contactItems = [
    {
      icon: <FaEnvelope className="text-indigo-600 text-xl" />,
      text: "srinumaragada@gmail.com",
      href: "mailto:srinumaragada@gmail.com",
      copyText: "srinumaragada@gmail.com",
      tooltip: "Click to email me"
    },
    {
      icon: <FaPhone className="text-indigo-600 text-xl" />,
      text: "+91 88976 50191",
      href: "tel:+918897650191",
      copyText: "+918897650191",
      tooltip: "Click to call me"
    },
    {
      icon: <FaGithub className="text-indigo-600 text-xl" />,
      text: "github.com/srinumaragada",
      href: "https://github.com/srinumaragada",
      copyText: "https://github.com/srinumaragada",
      tooltip: "Visit my GitHub",
      external: true
    },
    {
      icon: <FaLinkedin className="text-indigo-600 text-xl" />,
      text: "linkedin.com/in/maragada-srinu",
      href: "https://linkedin.com/in/maragada-srinu",
      copyText: "https://linkedin.com/in/maragada-srinu",
      tooltip: "Visit my LinkedIn",
      external: true
    }
  ];

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    // You could add toast notification here
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
            I'm always open to opportunities, collaborations, or a simple chat. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <a
                  href={item.href}
                  target={item.external ? "_blank" : "_self"}
                  rel={item.external ? "noopener noreferrer" : ""}
                  className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                >
                  {item.icon}
                  <span className="truncate">{item.text}</span>
                  {item.external && (
                    <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </a>
                <button
                  onClick={() => handleCopy(item.copyText)}
                  className="absolute right-0 top-0 text-xs text-gray-400 hover:text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-label="Copy to clipboard"
                >
                  Copy
                </button>
                {/* Tooltip would appear here if implemented */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;