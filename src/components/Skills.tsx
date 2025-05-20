import Section from "./Section";
import { Code } from "lucide-react";
import { cn } from "@/lib/utils";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code />,
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Next.js", level: 70 },
      ],
      color: "purple"
    },
    {
      title: "Backend Development",
      icon: <Code />,
      skills: [
        { name: "Python", level: 85 },
        { name: "Django", level: 75 },
        { name: "Flask", level: 65 },
        { name: "SQL (Postgres)", level: 65 },
      ],
      color: "blue"
    },
    {
      title: "Programming Languages",
      icon: <Code />,
      skills: [
        { name: "Java", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "Scheme", level: 65 },
        { name: "JavaScript", level: 85 },  // Added here to show your language strength explicitly
        { name: "HTML/CSS", level: 95 },   // Optional duplicate for emphasis; can be removed
      ],
      color: "pink"
    },
    {
      title: "Design & Tools",
      icon: <Code />,
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Adobe (XD/Canva)", level: 70 },
        { name: "Docker", level: 60 },
      ],
      color: "green"
    }
  ];

  const getBgColor = (color: string) => {
    switch (color) {
      case "purple": return "bg-pastel-purple/30";
      case "green": return "bg-pastel-green/30";
      case "blue": return "bg-pastel-blue/30";
      case "pink": return "bg-pastel-pink/30";
      default: return "bg-gray-100";
    }
  };

  return (
    <Section id="skills" title="Technical Skills" background="yellow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white/80 rounded-xl shadow-md p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <div className={cn("p-3 rounded-full mr-4", getBgColor(category.color))}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-6">
              {category.skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full rounded-full", 
                        `bg-pastel-${category.color}`,
                      )}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
