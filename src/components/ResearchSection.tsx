import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ResearchSection = () => {
  const projects = [
    {
      title: "AI-Powered Threat Detection",
      description: "Developing machine learning algorithms to identify and prevent cyber threats in real-time network traffic.",
      tags: ["Machine Learning", "Network Security", "AI"],
      status: "Active"
    },
    {
      title: "Post-Quantum Cryptography",
      description: "Research on cryptographic systems resistant to attacks by quantum computers.",
      tags: ["Cryptography", "Quantum Computing"],
      status: "Active"
    },
    {
      title: "IoT Security Framework",
      description: "Creating secure protocols for Internet of Things devices in smart environments.",
      tags: ["IoT", "Security Protocols"],
      status: "In Progress"
    }
  ];
  
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Research</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge projects addressing the most pressing challenges in cybersecurity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={project.status === "Active" ? "default" : "secondary"}>
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <Badge key={tagIdx} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;