import { Github, Linkedin, Mail, ArrowUp, Heart, Code, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-background via-card/50 to-background overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3 hover:scale-105 transition-transform cursor-pointer">
              Sohaib Rizwan
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting digital experiences that blend innovation with elegance. Let's build something extraordinary together.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Code className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-muted-foreground">Built with</span>
              <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" style={{ animationDelay: "0.5s" }} />
              <span className="text-muted-foreground">and React</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-all hover:translate-x-2 inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all group-hover:w-full" />
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">Frontend Development</li>
              <li className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">WordPress Solutions</li>
              <li className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">AI Integration</li>
              <li className="text-muted-foreground hover:text-accent transition-colors cursor-pointer">UI/UX Design</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to start your next project? Let's talk!
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all shadow-lg hover:shadow-primary/30"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-primary/20 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all shadow-lg hover:shadow-primary/30"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@sohaibrizwan.dev"
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-accent/20 hover:border-accent hover:bg-accent/10 hover:scale-110 transition-all shadow-lg hover:shadow-accent/30"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sohaib Rizwan. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">Privacy Policy</button>
            <span className="text-primary/30">•</span>
            <button className="hover:text-primary transition-colors">Terms of Service</button>
            <span className="text-primary/30">•</span>
            <button className="hover:text-primary transition-colors">Sitemap</button>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 p-4 rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-2xl shadow-primary/50 group overflow-hidden"
        aria-label="Scroll to top"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <ArrowUp className="h-5 w-5 text-white relative z-10 group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
