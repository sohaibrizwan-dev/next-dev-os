import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent animate-pulse-slow" />
      
      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary-glow rounded-full animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/20 mb-8 animate-scale-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
          <span className="block mb-2">Hey, I'm</span>
          <span className="text-gradient glow">Sohaib Rizwan</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          I build interfaces that <span className="text-primary font-semibold">think</span> and{" "}
          <span className="text-accent font-semibold">perform</span>
        </p>

        <p className="text-lg text-muted-foreground mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          Frontend Architect • WordPress Pro • AI Workflow Builder
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-lg px-8"
            onClick={() => scrollToSection("projects")}
          >
            Explore Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 text-lg px-8"
            onClick={() => scrollToSection("contact")}
          >
            Let's Collaborate
          </Button>
        </div>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-6 justify-center items-center text-muted-foreground animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
            <span className="text-sm font-medium">TypeScript</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors">
            <span className="text-sm font-medium">Node.js</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors">
            <span className="text-sm font-medium">WordPress</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-colors">
            <span className="text-sm font-medium">AI Automation</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center mt-12 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-glow-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
