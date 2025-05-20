
import Section from "./Section";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  const educationItems = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Macaulay Honors College @ CUNY: The City College of New York",
      date: "2022 - 2026",
      description: "Data Structures, Algorithms, Software Engineering, Computer Security, Theoretical Computer Science, Operating Systems, Computer Organization",
      achievements: ["Macaulay Honors Merit Scholarship", "Dean's List (All Semesters)", "Peter F. Vallone Scholar"]
    }
  ];

  return (
    <Section id="education" title="Education" background="purple">
      <div className="space-y-6">
        {educationItems.map((item, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                {/* Left Side - Date and Icon */}
                <div className="w-full md:w-1/4 bg-pastel-purple/30 p-6 flex flex-col justify-center items-center md:items-start">
                  <div className="mb-3 p-3 bg-white rounded-full">
                    <GraduationCap className="text-purple-500" size={24} />
                  </div>
                  <span className="font-medium text-gray-700">{item.date}</span>
                </div>
                
                {/* Right Side - Details */}
                <div className="w-full md:w-3/4 p-6">
                  <h3 className="text-xl font-semibold mb-1">{item.degree}</h3>
                  <h4 className="text-lg text-gray-600 mb-3">{item.institution}</h4>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  
                  <div className="space-y-1">
                    <h5 className="font-medium text-gray-700">Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-700 pl-2">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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

export default Education;
