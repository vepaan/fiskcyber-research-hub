import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Advanced Machine Learning Approaches for Network Intrusion Detection",
      authors: "Johnson, S., Chen, M., Williams, A.",
      journal: "IEEE Transactions on Information Forensics and Security",
      year: 2024,
      type: "Journal"
    },
    {
      title: "Post-Quantum Cryptographic Protocols for Secure Communication",
      authors: "Chen, M., Johnson, S.",
      journal: "ACM Conference on Computer and Communications Security",
      year: 2023,
      type: "Conference"
    },
    {
      title: "IoT Security Framework: A Comprehensive Approach",
      authors: "Williams, A., Martinez, J.",
      journal: "Journal of Cybersecurity Research",
      year: 2023,
      type: "Journal"
    },
    {
      title: "AI-Driven Threat Intelligence for Enterprise Networks",
      authors: "Johnson, S., Martinez, J., Thompson, E.",
      journal: "International Conference on Cyber Security",
      year: 2023,
      type: "Conference"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Publications</h1>
          <p className="text-lg text-muted-foreground">
            Peer-reviewed research papers and conference proceedings from our lab
          </p>
        </div>
        
        <div className="space-y-6">
          {publications.map((pub, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={pub.type === "Journal" ? "default" : "secondary"}>
                    {pub.type}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{pub.year}</span>
                </div>
                <CardTitle className="text-xl flex items-start gap-2">
                  {pub.title}
                  <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                <p className="text-sm font-medium text-primary">{pub.journal}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications;