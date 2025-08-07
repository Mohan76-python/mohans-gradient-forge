import { HeroButton } from "@/components/ui/hero-button";
import { Github, Linkedin, Download, Code, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 border border-glass-border">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Full Stack Python Developer</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-mono">
            <span className="block">Hi, I'm</span>
            <span className="text-gradient animate-glow">Mohan</span>
          </h1>
          
          {/* Tagline */}
          <div className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            <span className="text-gradient-secondary font-semibold">
              Building APIs with Precision,
            </span>
            <br />
            <span className="text-muted-foreground">
              Exploring Frontends with Passion
            </span>
          </div>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Specialized in Flask APIs, automation, and web scraping. 
            Passionate about creating efficient backend solutions while exploring modern frontend technologies.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="/resume.pdf" 
              download="Mohan_Resume.pdf"
              className="inline-block"
            >
              <HeroButton variant="primary" size="lg" className="group">
                <Download className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Download Resume
              </HeroButton>
            </a>
            <HeroButton variant="secondary" size="lg" className="group">
              <Zap className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
              View Projects
            </HeroButton>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <HeroButton variant="ghost" size="icon" className="group">
                <Github className="w-6 h-6 transition-transform group-hover:scale-110" />
              </HeroButton>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <HeroButton variant="ghost" size="icon" className="group">
                <Linkedin className="w-6 h-6 transition-transform group-hover:scale-110" />
              </HeroButton>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-gradient-primary rounded-full mx-auto animate-float" />
        </div>
      </div>
    </section>
  );
};

export default Hero;