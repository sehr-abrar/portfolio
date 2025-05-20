
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-pastel-blue/30 blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-pastel-pink/20 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full bg-pastel-purple/20 blur-3xl"></div>
      
      {/* Content */}
      <div className="text-center relative z-10 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hi, I'm Sehr
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-8 text-gray-700">
          <TypewriterText texts={["Software Developer", "UI/UX Designer", "Creative Thinker", "AI Enthusiast", "Cybersecurity Curious"]} />
        </p>
        
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-600">
          A curious coder and creative thinker passionate about tech, design, and growth
        </p>
        
        <Button 
          onClick={scrollToAbout}
          className="mx-auto rounded-full px-8 py-6 bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-md flex items-center gap-2 group"
        >
          <span>Explore My Work</span>
          <ArrowDown className="transition-transform group-hover:translate-y-1" size={18} />
        </Button>
      </div>
      

    </div>
  );
};

// Typewriter Effect Component
const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 150;
    const text = texts[currentTextIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
        
        // If we've typed the full text, start deleting after a pause
        if (currentText.length === text.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
        
        // If we've deleted everything, move to next text
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts]);
  
  return (
    <span className="relative">
      {currentText}
      <span className={cn(
        "inline-block w-0.5 h-6 bg-gray-700 ml-1 relative -top-0.5",
        "animate-[blink_1s_step-end_infinite]"
      )}></span>
    </span>
  );
};

export default Hero;
