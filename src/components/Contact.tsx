
import Section from "./Section";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Instagram, Facebook, Mail } from "lucide-react";

const Contact = () => {
  // Social links - replace with your actual profiles
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sehr-abrar/",
      icon: <Linkedin size={20} />,
      color: "bg-[#0077B5] hover:bg-[#0077B5]/90"
    },
    {
      name: "GitHub",
      url: "https://github.com/sehr-abrar",
      icon: <Github size={20} />,
      color: "bg-[#333] hover:bg-[#333]/90"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sehr_abrar?igsh=MWtrODdoODRwcWh5bQ%3D%3D&utm_source=qr",
      icon: <Instagram size={20} />,
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:opacity-90"
    }
  ];

  return (
    <Section id="contact" title="Connect With Me" background="pink">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <p className="text-lg text-gray-700 mb-6">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <Button asChild size="lg" className="rounded-full px-6">
          <a href="mailto:sehr.abrar1@gmail.com" className="flex items-center gap-2">
            <Mail size={18} />
            <span>sehr.abrar1@gmail.com</span>
          </a>
        </Button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        {socialLinks.map((link) => (
          <Button 
            key={link.name} 
            asChild 
            variant="outline"
            size="lg" 
            className={`${link.color} text-white border-none rounded-full min-w-[160px]`}
          >
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              {link.icon}
              <span>{link.name}</span>
            </a>
          </Button>
        ))}
      </div>
      
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Sehr Abrar. All rights reserved.</p>
        <p className="mt-1">Designed & Built with ❤️</p>
      </div>
    </Section>
  );
};

export default Contact;
