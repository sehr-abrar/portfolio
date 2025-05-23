
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
            <div className="w-65 h-auto relative z-10 border-4 border-white rounded-2xl overflow-hidden">
              <img
                src="/profile-img.png"
                alt="Sehr Abrar"
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>
        
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4 text-gray-700">
            Hi, I’m Sehr Abrar, a rising senior at <strong>Macaulay Honors College</strong> studying Computer Science at CUNY: The City College of New York at the Grove School of Engineering. I'm drawn to the intersection of <strong>user experience design</strong>, <strong>artificial intelligence</strong>, <strong>machine learning</strong>, and <strong>cybersecurity</strong>; fields where <strong>creativity meets complexity</strong>. I love crafting thoughtful, impactful solutions that not only look great but also solve real-world problems that turn abstract ideas into <strong>intuitive, human-centered experiences</strong>.
          </p>

          <p className="text-lg mb-4 text-gray-700">
            As the former <strong>President of ACM @ CCNY</strong> and a <strong>Notion Campus Leader</strong>, I led teams, organized events, and cultivated communities that connect <strong>500+ members</strong>. I’m passionate about building spaces where people in tech feel <strong>seen, supported, and inspired</strong> — because at its best, tech should bring people closer together.
          </p>


          <p className="text-lg mb-6 text-gray-700">
            Feel free to reach out — I’m always up for a good conversation, new ideas, or building something meaningful together.
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
