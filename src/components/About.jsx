import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactItems = [
    { icon: <FaEnvelope className="text-indigo-600" />, text: "srinumaragada@gmail.com" },
    { icon: <FaPhone className="text-indigo-600" />, text: "+91 8897650191" },
    { icon: <FaMapMarkerAlt className="text-indigo-600" />, text: "Visakhapatnam, India" },
    { icon: <FaGithub className="text-indigo-600" />, text: "github.com/srinumaragada", url: "https://github.com/srinumaragada" },
    { icon: <FaLinkedin className="text-indigo-600" />, text: "linkedin.com/in/maragada-srinu", url: "https://linkedin.com/in/maragada-srinu" }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-indigo-600">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know the developer behind the code
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Summary */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Professional Summary</h3>
            </div>
            
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate Full Stack Developer specializing in building high-performance web applications with 
                React.js, Node.js, MongoDB, and Python. With a strong focus on creating scalable, user-centric solutions, 
                I deliver products that combine technical excellence with intuitive design.
              </p>
              
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-medium text-gray-800 mb-3">Key Strengths:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span>Expertise in full stack JavaScript development (MERN stack)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span>Proven ability to optimize system performance and reduce load times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span>Strong experience with RESTful APIs and GraphQL integrations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    <span>Passion for clean code and efficient development processes</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Personal Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeIn}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Personal Details</h3>
            </div>
            
            <div className="space-y-5">
              {contactItems.map((item, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center"
                >
                  <div className="p-2 bg-indigo-50 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <div>
                    {item.url ? (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-indigo-600 hover:underline"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="font-medium text-gray-800 mb-4">Education Highlights</h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  <span>
                    <strong>Master of Computer Applications</strong> - Dr. B.R. Ambedkar University (CGPA: 8.94/10)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  <span>
                    <strong>Bachelor of Science (Computer Science)</strong> - Dr. V.S. Krishna Govt Degree College (CGPA: 8.87/10)
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;