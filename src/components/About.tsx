
import Section from "./Section";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <Section id="about" title="About Me" background="white">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-pastel-purple to-pastel-pink rounded-full blur-md opacity-70 scale-110"></div>
            <Avatar className="w-64 h-64 border-4 border-white relative">
              <AvatarImage src="/profile-img.png" alt="Sehr Abrar" />
              <AvatarFallback className="bg-white text-gray-400">
                <User size={64} />
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4 text-gray-700">
            Hi, I’m Sehr Abrar, a rising senior at Macaulay Honors College studying Computer Science at CUNYL The City College of New York at the Grove School of Engineering. I’m passionate about UI/UX, programming, AI/ML, cybersecurity, quantum computing, and iOS development.
          </p>

          <p className="text-lg mb-4 text-gray-700">
            As President of ACM @ CCNY and a Notion Campus Leader, I lead teams, organize events, and build communities that connect 500+ members. I also design full-stack apps using React, Django, and Figma.
          </p>

          <p className="text-lg mb-6 text-gray-700">
            Outside of tech, I love exploring new ideas and projects that challenge me to grow. Feel free to reach out—I’m always excited to collaborate or chat!
          </p>

          
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-pastel-purple/20 rounded-full text-sm font-medium">Creative</span>
            <span className="px-4 py-2 bg-pastel-green/20 rounded-full text-sm font-medium">Detail-oriented</span>
            <span className="px-4 py-2 bg-pastel-peach/20 rounded-full text-sm font-medium">Problem Solver</span>
            <span className="px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium">Team Player</span>
            <span className="px-4 py-2 bg-pastel-pink/20 rounded-full text-sm font-medium">Continuous Learner</span>
            <span className="px-4 py-2 bg-pastel-blue/20 rounded-full text-sm font-medium">Driven</span>
            <span className="px-4 py-2 bg-pastel-green/20 rounded-full text-sm font-medium">Adaptable</span>
            <span className="px-4 py-2 bg-pastel-purple/20 rounded-full text-sm font-medium">Passionate</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
