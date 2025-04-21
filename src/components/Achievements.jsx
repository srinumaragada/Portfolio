import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaCode, FaLightbulb } from "react-icons/fa";

const Achievements = () => {
  const achievements = {
    coding: [
      "Completed 300+ challenges on HackerRank and LeetCode",
      "Ranked in top 10% in national coding competition",
      "Developed 5+ full-stack applications with modern tech stacks",
      "Optimized algorithms reducing runtime by 40% in personal projects"
    ],
    leadership: [
      "Mentored 10+ peers through successful project completions",
      "Led algorithm-focused study groups improving team efficiency",
      "Class Representative for 50+ students and faculty coordination",
      "Organized college tech fest with 200+ participants"
    ]
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-indigo-600">Achievements</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Highlights of my technical and leadership accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Coding Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                <FaCode className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Technical Milestones</h3>
            </div>
            
            <ul className="space-y-5">
              {achievements.coding.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start pl-2"
                >
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Leadership Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                <FaUsers className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Leadership & Impact</h3>
            </div>
            
            <ul className="space-y-5">
              {achievements.leadership.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start pl-2"
                >
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-indigo-100">Coding Challenges</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-indigo-100">Projects Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-indigo-100">Peers Represented</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-indigo-100">Full-stack Apps</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;