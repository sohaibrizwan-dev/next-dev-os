import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 bg-card">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Sohaib Rizwan</h3>
            <p className="text-muted-foreground text-sm">
              Building the future, one line of code at a time
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@sohaibrizwan.dev"
              className="p-3 rounded-full bg-background border border-border hover:border-accent hover:bg-accent/10 transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sohaib Rizwan
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 right-8 p-4 rounded-full bg-gradient-primary hover:opacity-90 transition-all shadow-lg shadow-primary/30 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;
