
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Activities from "../components/Activities";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Sehr Abrar - Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <main>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Activities />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
