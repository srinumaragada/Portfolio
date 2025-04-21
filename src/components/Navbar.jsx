import { motion } from "framer-motion";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  
  return (
    <nav className="fixed w-full bg-white/10 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold text-indigo-600">SM</h1>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    active === link.name
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                  onClick={() => setActive(link.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;