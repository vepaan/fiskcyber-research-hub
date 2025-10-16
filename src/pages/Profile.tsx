import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Briefcase, GraduationCap, LogOut } from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "John Doe",
    title: "Lab Assistant",
    department: "Cybersecurity Research",
    bio: "Passionate about network security and threat detection. Currently working on AI-powered security solutions.",
    expertise: ["Network Security", "Python", "Machine Learning"],
    email: ""
  });
  
  useEffect(() => {
    const mockUser = sessionStorage.getItem("mockUser");
    if (!mockUser) {
      navigate("/login");
    } else {
      const userData = JSON.parse(mockUser);
      setUser(userData);
      setFormData(prev => ({ ...prev, email: userData.email }));
    }
  }, [navigate]);
  
  const handleLogout = () => {
    sessionStorage.removeItem("mockUser");
    toast({
      title: "Logged out",
      description: "See you next time!",
    });
    navigate("/");
  };
  
  const handleSave = () => {
    setEditing(false);
    toast({
      title: "Profile updated",
      description: "Your changes have been saved",
    });
  };
  
  if (!user) return null;
  
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">My Profile</h1>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          
          <Card className="mb-6">
            <CardHeader className="flex flex-row items-center gap-6">
              <Avatar className="w-24 h-24">
                <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                  {formData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2">{formData.name}</CardTitle>
                <p className="text-muted-foreground">{formData.title}</p>
                <Badge variant="secondary" className="mt-2">{formData.department}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              {editing ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSave}>Save Changes</Button>
                    <Button variant="outline" onClick={() => setEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <User className="w-4 h-4" />
                      About
                    </h3>
                    <p className="text-muted-foreground">{formData.bio}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </h3>
                    <p className="text-muted-foreground">{formData.email}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Expertise
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {formData.expertise.map((skill, idx) => (
                        <Badge key={idx} variant="outline">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button onClick={() => setEditing(true)}>Edit Profile</Button>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Contributed to AI Threat Detection project</span>
                  <span className="text-muted-foreground">2 days ago</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span>Published research paper on IoT Security</span>
                  <span className="text-muted-foreground">1 week ago</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Attended Cybersecurity Conference</span>
                  <span className="text-muted-foreground">2 weeks ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;