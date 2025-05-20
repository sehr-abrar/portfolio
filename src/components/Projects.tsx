
import Section from "./Section";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Folder, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  // Sample project data - replace with your actual information
  const projects = [
    {
      title: "GlobeTrail",
      description: "Designed GlobeTrail, a travel app prototype for personalized and collaborative trip planning, with a partner in a 40-hour UI/UX Designathon.",
      image: "globetrail.png",
      tags: ["Figma", "UI/UX Research"],
      liveLink: "https://devpost.com/software/globetrail",
      githubLink: "https://www.figma.com/proto/PjkFaG71qglHS5jjvfq1S0/Catalyst-2025---GlobeTrail?node-id=72-919&p=f&t=YTT58lx7QDo7gb0V-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=72%3A919&show-proto-sidebar=1"
    },
    {
      title: "CNN Website Redesign",
      description: "Worked with 3 teammates on CNN site redesign for accessibility in CodePath x AmazonNext, creating Figma mockups to improve inclusivity.",
      image: "cnn.png",
      tags: ["Figma", "UI/UX Research"],
      liveLink: "https://www.figma.com/proto/VVHWuTWgRzlcptOV8LOoE0/CNN-Website-Redesign?node-id=54-132&p=f&t=WrGWcGGMBnggWiua-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      githubLink: ""
    },
    {
      title: "SmartBid",
      description: "Mini e-bidding platform using JavaScript, Supabase, and Django. Designed UI/UX in Figma and built frontend with HTML and CSS.",
      image: "smartbid.png",
      tags: ["JavaScript", "Python", "Django", "Figma"],
      liveLink: "",
      githubLink: "https://github.com/saanavig/SmartBid"
    },
    {
      title: "5-Day UI Challenge",
      description: "Completed the first 5 Daily UI Design Challenge prompts by creating unique and creative UI designs based on each prompt.",
      image: "dayui.png",
      tags: ["Figma", "UI/UX Research"],
      liveLink: "https://www.figma.com/proto/DKiohnCbL6fcYVNMajrxoR/5-Day-UI-Challenge?node-id=1-3&p=f&t=yTWzRcZhQIhWxAlA-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
      githubLink: ""
    },
    {
      title: "Rock Paper Scissors Lizard Spock",
      description: "Graphical Java Swing version of the classic game featuring AI opponent, leaderboard comparisons, and image-based move display.",
      image: "rpsls.png",
      tags: ["Java", "Java Swing", "GUI Development", "Eclipse"],
      liveLink: "",
      githubLink: "https://github.com/sehr-abrar/RockPaperScissorsLizardSpock"
    },
    {
      title: "PigeonBot",
      description: "Co-developed PigeonBot, a NYC navigation chatbot built in a 3-day hackathon; designed and coded the HTML/CSS UI for a smooth user experience.",
      image: "pigeon-bot.png",
      tags: ["Figma", "HTML", "CSS"],
      liveLink: "https://devpost.com/software/pigeonbot",
      githubLink: ""
    }
  ];

  return (
    <Section id="projects" title="Projects" background="blue">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 group bg-white/80 backdrop-blur-sm hover:scale-[1.02]">
            <div className="h-48 bg-gradient-to-br from-pastel-blue to-pastel-purple flex items-center justify-center">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <Folder size={64} className="text-white/60" />
              )}
            </div>
            
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-pastel-blue/30 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            
            <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
            {project.liveLink && (
              <Button asChild variant="outline" size="sm">
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </Button>
            )}

            {project.githubLink && (
              <Button asChild variant="outline" size="sm">
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={16} />
                  <span>Source</span>
                </a>
              </Button>
            )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
