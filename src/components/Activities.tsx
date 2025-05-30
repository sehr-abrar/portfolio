import Section from "./Section";
import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Activities = () => {
  // Sample activities data - replace with your actual information
  const activities = [
    {
      category: "Leadership",
      items: [
        {
          title: "Campus Leader",
          organization: "Notion",
          link: "https://www.notion.com/",
          date: "Aug 2024 - May 2025",
          description: "Promote Notion adoption at CCNY by leading workshops, events, and demos. Partner with student clubs to increase Notion’s use for project and event management on campus."
        },
        {
          title: "President",
          organization: "Association for Computing Machinery at CCNY",
          link: "https://beaverscode.club/",
          date: "May 2024 - May 2025",
          description: "Lead 20+ volunteers and coordinate workshops, speaker events, and projects with 40+ attendees. Organized AI/ML, programming, data science, web design, cybersecurity, and UI/UX opportunities for 500+ members. Fostered collaboration and growth through partnerships and inclusive community building."
        },
        {
          title: "Vice President",
          organization: "Association for Computing Machinery at CCNY",
          link: "https://beaverscode.club/",
          date: "Aug 2023 - May 2024",
          description: "Managed 10+ volunteers and logistics for CS workshops and events supporting 300+ members. Boosted membership and engagement through strategic outreach. Led a hands-on UI/UX design workshop to develop practical member skills."
        },
      ]
    },
    {
      category: "Volunteer",
      items: [
        {
          title: "Peer Mentor",
          organization: "CodePath",
          link: "https://www.codepath.org/",
          date: "May 2025 - Present",
          description: "Provides one-on-one support and regular check-ins to help students succeed in CodePath’s tech curriculums, offering personalized guidance and hosting personal development sessions."
        },
        {
          title: "CHiMP Mentor",
          organization: "City Honors Illustrious Mentor Program (CHiMP)",
          link: "https://www.instagram.com/ccnychimp/?locale=zh-TW&hl=am-et",
          date: "Aug 2023 - Present",
          description: "Mentors CCNY Macaulay and Honors students, providing academic guidance and personal support to help them succeed."
        },
        {
          title: "Academic Coach",
          organization: "UPchieve",
          link: "https://upchieve.org/",
          date: "Jun 2023 - Aug 2024",
          description: "Virtually coached high school students in algebra, geometry, reading, writing, and college applications. Provided personalized feedback to improve grades and essays, fostering academic and personal growth."
        }
      ]
    }
  ];

  return (
    <Section id="activities" title="Activities & Leadership" background="green">
      <Tabs defaultValue="Leadership" className="w-full">
        <TabsList className="w-full flex mb-8 bg-white/50 p-1 rounded-lg">
          {activities.map((category) => (
            <TabsTrigger 
              key={category.category} 
              value={category.category}
              className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              {category.category}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {activities.map((category) => (
          <TabsContent key={category.category} value={category.category} className="mt-0">
            <div className="space-y-6">
              {category.items.map((item, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Left Side - Date and Icon */}
                      <div className="w-full md:w-1/4 bg-pastel-green/30 p-6 flex flex-col justify-center items-center md:items-start">
                        <div className="mb-3 p-3 bg-white rounded-full">
                          <Award className="text-green-600" size={24} />
                        </div>
                        <span className="font-medium text-gray-700">{item.date}</span>
                        <a 
                          href={item.link || "#"} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-2 text-gray-600 no-underline hover:text-green-600 hover:font-medium transition-colors duration-200"
                        >
                          {item.organization}
                        </a>

                      </div>
                      
                      {/* Right Side - Details */}
                      <div className="w-full md:w-3/4 p-6">
                        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
};

export default Activities;
