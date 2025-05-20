
import Section from "./Section";
import { Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  // Sample experience data - replace with your actual information
  const experienceItems = [
    {
      "title": "iOS Engineer Fellow",
      "company": "CodePath",
      "date": "May 2025 - Present",
      "description": "Selected for a competitive iOS Engineering Fellowship focused on building mobile applications using Swift and Xcode. Collaborating with peers and mentors to develop polished, user-friendly iOS apps.",
      "achievements": [
        "Building iOS apps with modern design principles and best practices",
        "Participating in weekly code reviews and industry-led workshops",
        "Strengthening app development skills through hands-on projects"
      ],
      "technologies": ["Swift", "Xcode", "UIKit", "iOS Development"]
    },
    {
      "title": "Cybersecurity Fellow",
      "company": "CodePath",
      "date": "Feb 2024 - Apr 2025",
      "description": "Completed hands-on labs and real-world security challenges, gaining skills in encryption, malware analysis, and network security. Advanced to security event analysis, incident response, and threat intelligence using tools like Wireshark, Splunk, and SIEM.",
      "achievements": [
        "Collaborated on capstone projects applying real-world cybersecurity concepts",
        "Developed incident response strategies and performed threat analysis",
        "Gained practical experience with industry-standard security tools"
      ],
      "technologies": ["Wireshark", "Splunk", "SIEM", "Network Security", "Encryption"]
    },
    {
      title: "Lead UI/UX Designer & Beta Tester Intern",
      company: "Unadat",
      date: "Jul 2023 - Aug 2023",
      description: "Led UI/UX design efforts during a 6-week internship to improve Unadat’s website features.",
      achievements: [
        "Created 10+ high-fidelity mockups in Figma; several were implemented live.",
        "Coordinated with 8+ cross-functional members to refine and align designs",
        "Facilitated weekly brainstorming sessions to gather and apply user feedback.",
        "Built responsive layouts using HTML and CSS based on finalized mockups."
      ],
      technologies: ["Figma", "Canva", "HTML", "CSS"]
    }
  ];

  return (
    <Section id="experience" title="Experience" background="peach">
      <div className="space-y-6">
        {experienceItems.map((item, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Date and Icon */}
                <div className="w-full md:w-1/4 bg-pastel-peach/40 p-6 flex flex-col justify-center items-center md:items-start">
                  <div className="mb-3 p-3 bg-white rounded-full">
                    <Briefcase className="text-orange-500" size={24} />
                  </div>
                  <span className="font-medium text-gray-700">{item.date}</span>
                  <span className="text-gray-600 mt-2">{item.company}</span>
                </div>
                
                {/* Right Side - Details */}
                <div className="w-full md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium text-gray-700 mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-700 pl-2 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-pastel-peach/30 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
