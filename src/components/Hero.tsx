import { Button } from "@/components/ui/button";
import { Shield, Lock, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-glow to-accent text-primary-foreground">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Advancing Digital Security Research</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Fisk University Cybersecurity Research Lab
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Pioneering research in network security, cryptography, and cyber defense to protect tomorrow's digital infrastructure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/research">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Explore Research
              </Button>
            </Link>
            <Link to="/team">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white/20 hover:bg-white/20 text-primary-foreground">
                Meet the Team
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            { icon: Shield, title: "Network Security", desc: "Advanced threat detection" },
            { icon: Lock, title: "Cryptography", desc: "Encryption & protocols" },
            { icon: Search, title: "Cyber Forensics", desc: "Digital investigation" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <item.icon className="w-8 h-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-primary-foreground/80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;