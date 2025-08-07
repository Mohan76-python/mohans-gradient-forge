import { Heart, Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-glass-border">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 font-mono">
              <span className="text-gradient">Mohan</span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Building APIs with precision, exploring frontends with passion. 
              Let's create something amazing together.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Projects
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Contact
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-glass-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Mohan. All rights reserved.
              </p>
              
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-destructive animate-pulse" />
                <span>and</span>
                <Code className="w-4 h-4 text-primary" />
                <span>by Mohan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;