import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Principal Investigator",
      specialty: "Network Security",
      initials: "SJ",
      bio: "Expert in advanced threat detection and network defense systems."
    },
    {
      name: "Dr. Michael Chen",
      role: "Co-PI",
      specialty: "Cryptography",
      initials: "MC",
      bio: "Specializing in post-quantum cryptographic algorithms."
    },
    {
      name: "Dr. Aisha Williams",
      role: "Research Scientist",
      specialty: "IoT Security",
      initials: "AW",
      bio: "Focused on securing connected devices and smart systems."
    },
    {
      name: "James Martinez",
      role: "PhD Candidate",
      specialty: "Machine Learning",
      initials: "JM",
      bio: "Developing AI-powered security solutions."
    },
    {
      name: "Emily Thompson",
      role: "Lab Assistant",
      specialty: "Cyber Forensics",
      initials: "ET",
      bio: "Supporting digital investigation research."
    },
    {
      name: "David Lee",
      role: "Lab Assistant",
      specialty: "Security Analysis",
      initials: "DL",
      bio: "Assisting in penetration testing and vulnerability assessment."
    }
  ];
  
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World-class researchers and students advancing cybersecurity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="mt-2">
                    {member.role}
                  </Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm font-medium text-primary mb-2">{member.specialty}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;