import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import About from "./components/about";

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute("href");
        if (targetId === "#") return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth"
          });
        }
      });
    });
  }, []);

  return (
    <div className="font-sans text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;