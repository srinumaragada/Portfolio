import { motion } from "framer-motion";
import { education } from "../constants";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaAward } from "react-icons/fa";

const Education = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Education</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-indigo-100 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                variants={fadeIn}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-8`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 w-6 h-6 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10">
                  <FaGraduationCap className="text-white text-xs" />
                </div>

                {/* Education card */}
                <div className={`bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow ${index % 2 === 0 ? 'md:w-5/12 md:mr-auto' : 'md:w-5/12 md:ml-auto'}`}>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                      <FaUniversity className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{edu.degree}</h3>
                      <p className="text-indigo-600 font-medium">{edu.institution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-gray-400 mr-2" />
                      <span className="text-gray-600">{edu.year}</span>
                    </div>
                    <div className="flex items-center">
                      <FaAward className="text-gray-400 mr-2" />
                      <span className="text-gray-600">{edu.grade}</span>
                    </div>
                  </div>

                  {edu.achievements && (
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <h4 className="font-medium text-gray-800 mb-2">Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="flex-shrink-0 mt-1 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;