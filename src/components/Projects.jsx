import { motion } from "framer-motion";
import { projects } from "../constants/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my featured projects with real-world impact
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-600 transition-colors"
                        aria-label="GitHub repository"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-indigo-600 transition-colors"
                        aria-label="Live demo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Project Details */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-2 pl-5 list-disc text-gray-600 text-sm">
                    {project.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project Metrics */}
                {project.metrics && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-700 mb-2">Impact:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="bg-gray-50 p-2 rounded-lg">
                          <p className="text-xs text-gray-500">{metric.label}</p>
                          <p className="font-medium text-gray-800">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;