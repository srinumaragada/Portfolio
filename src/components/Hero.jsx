import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import myPhoto from "../assets/sreenu.jpg";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-white to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="mb-2">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-indigo-600 font-medium"
            >
              Hello, my name is
            </motion.span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="text-indigo-600">Srinu</span> Maragada
          </h1>
          
          <div className="text-2xl md:text-3xl font-semibold text-gray-700 h-12">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'React Specialist',
                2000,
                'Node.js Expert',
                2000,
                'UI/UX Enthusiast',
                2000
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 leading-relaxed max-w-xl"
          >
            I build exceptional digital experiences with modern technologies. 
            Passionate about creating scalable web applications with intuitive interfaces 
            and robust backend architectures.
          </motion.p>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.a
              href="/projects/Maragada Srinu Resume.pdf"
              download
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaFileDownload size={18} />
              Download CV
            </motion.a>
            
            <motion.a
              href="#contact"
              className="flex items-center gap-2 border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <HiOutlineMail size={18} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <motion.a
              href="https://github.com/srinumaragada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-indigo-600 transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/maragada-srinu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
           
          </motion.div>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-200 shadow-xl relative z-10">
              <img
                src={myPhoto}
                alt="Srinu Maragada"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 z-0"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;