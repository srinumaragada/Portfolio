import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaPython, FaJava, FaJs, 
  FaDatabase, FaServer, FaHtml5, FaCss3Alt,
  FaGitAlt, FaFire, FaBolt
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiGraphql, 
  SiRedux, SiMysql, SiJavascript, SiCplusplus
} from 'react-icons/si';
import { DiJqueryLogo } from 'react-icons/di';

const Skills = () => {
  const skills = [
    {
      category: "Programming Languages",
      icon: <FaJs className="text-yellow-400" />,
      items: [
        { name: "C", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Python", icon: <FaPython className="text-blue-600" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      ]
    },
    {
      category: "Frontend Development",
      icon: <FaReact className="text-blue-500" />,
      items: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "React.js", icon: <FaReact className="text-blue-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "jQuery", icon: <DiJqueryLogo className="text-blue-700" /> },
      ]
    },
    {
      category: "Backend Development",
      icon: <FaServer className="text-green-500" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-800" /> },
      ]
    },
    {
      category: "Database & APIs",
      icon: <FaDatabase className="text-purple-500" />,
      items: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Firebase", icon: <FaFire className="text-orange-500" /> },
        { name: "RESTful APIs", icon: <FaBolt className="text-yellow-500" /> },
        { name: "GraphQL", icon: <SiGraphql className="text-pink-600" /> },
        { name: "JWT", icon: <FaBolt className="text-yellow-600" /> },
        { name: "OAuth2", icon: <FaBolt className="text-blue-400" /> },
      ]
    },
    {
      category: "Development Tools",
      icon: <FaGitAlt className="text-red-500" />,
      items: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
      ]
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical <span className="text-indigo-600">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            My comprehensive technical toolkit for building modern applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              variants={fadeIn}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                  {skillCategory.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {skillCategory.category}
                </h3>
              </div>
              
              <div className="space-y-3">
              {skillCategory.items.map((skill, i) => (
  <motion.div 
    key={i}
    whileHover={{ x: 5 }}
    className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
  >
    <motion.div
      whileHover={{ scale: 1.2 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="text-2xl mr-3 transition-transform"
    >
      {skill.icon}
    </motion.div>
    <span className="text-gray-700 font-medium">{skill.name}</span>
  </motion.div>
))}

              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={fadeIn}
          className="bg-white mt-12 p-8 rounded-xl shadow-md border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Professional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem-Solving", "Collaboration", "Analytical Thinking",
              "Communication", "Team Leadership", "Time Management",
              "Adaptability", "Attention to Detail", "Mentoring",
              "Agile Methodology", "Code Review", "Technical Writing"
            ].map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;