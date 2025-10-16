import Navigation from "@/components/Navigation";
import ResearchSection from "@/components/ResearchSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Research = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Research Areas</h1>
        
        <Tabs defaultValue="areas" className="mb-12">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="areas">Focus Areas</TabsTrigger>
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
          </TabsList>
          
          <TabsContent value="areas" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Network Security",
                  desc: "Advanced threat detection, intrusion prevention, and secure network architectures."
                },
                {
                  title: "Cryptography",
                  desc: "Encryption algorithms, secure protocols, and post-quantum cryptography."
                },
                {
                  title: "Cyber Forensics",
                  desc: "Digital investigation, incident response, and evidence analysis."
                },
                {
                  title: "IoT Security",
                  desc: "Securing Internet of Things devices and smart infrastructure."
                }
              ].map((area, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription className="text-base">{area.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="projects" className="mt-6">
            <ResearchSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Research;