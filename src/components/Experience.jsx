import { motion } from "framer-motion";
import { FaLaptopCode, FaRocket, FaChartLine, FaLightbulb } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      type: "Self-Directed Projects",
      period: "2022 - Present",
      icon: <FaLaptopCode className="text-indigo-600" />,
      achievements: [
        {
          title: "E-Commerce Platform",
          description: "Built a complete solution with 50+ products and admin dashboard",
          impact: "30% increase in user engagement, processed $5,000+ in sales",
          icon: <FaChartLine />
        },
        {
          title: "Event Management System",
          description: "Developed real-time booking platform with GraphQL API",
          impact: "Handled 1,000+ bookings in first month, 18% faster queries",
          icon: <FaRocket />
        },
        {
          title: "Performance Optimization",
          description: "Refactored backend architecture and database queries",
          impact: "20% faster page loads, 15% reduced backend response time",
          icon: <FaLightbulb />
        }
      ],
      technologies: ["React", "Node.js", "MongoDB", "GraphQL", "JWT", "Redux", "Firebase"]
    },
    {
      role: "Full Stack Developer Intern",
      type: "Bharat Intern",
      period: "1 Month | 2023",
      icon: <FaLaptopCode className="text-indigo-600" />,
      achievements: [
        {
          title: "Internship Project",
          description: "Developed full-stack application with authentication",
          impact: "Delivered complete solution ahead of deadline",
          icon: <FaRocket />
        }
      ],
      technologies: ["React", "Express", "MongoDB", "REST APIs"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Development Experience</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on projects delivering measurable results
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, expIdx) => (
            <motion.div 
              key={expIdx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: expIdx * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8 border-b border-gray-100">
                <div className="flex items-center">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{exp.role}</h3>
                    <p className="text-indigo-600">{exp.type} • {exp.period}</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-6">Key Achievements:</h4>
                <div className="space-y-8">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -3 }}
                      className="flex items-start"
                    >
                      <div className="p-2 bg-indigo-100 rounded-lg mr-4 mt-1">
                        {achievement.icon}
                      </div>
                      <div>
                        <h5 className="text-lg font-medium text-gray-800">{achievement.title}</h5>
                        <p className="text-gray-600 my-2">{achievement.description}</p>
                        <div className="flex items-center text-sm text-indigo-600 font-medium">
                          <FaChartLine className="mr-2" />
                          {achievement.impact}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Technologies Applied:</h4>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;