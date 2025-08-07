import { ExternalLink, Github, Code, Database, Bot } from "lucide-react";
import { HeroButton } from "@/components/ui/hero-button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce API Suite",
      description: "Complete REST API for e-commerce platform with user authentication, product management, order processing, and payment integration using Flask and PostgreSQL.",
      tech: ["Python", "Flask", "PostgreSQL", "Redis", "JWT"],
      icon: Database,
      gradient: "from-primary to-secondary"
    },
    {
      title: "Automated Data Pipeline",
      description: "Robust web scraping and data processing pipeline that collects, cleans, and analyzes market data from multiple sources with scheduled automation.",
      tech: ["Python", "Scrapy", "Celery", "Pandas", "MongoDB"],
      icon: Bot,
      gradient: "from-secondary to-accent"
    },
    {
      title: "Task Management System",
      description: "Full-stack task management application with real-time updates, user collaboration features, and comprehensive project tracking capabilities.",
      tech: ["Python", "Flask", "React", "WebSocket", "SQLAlchemy"],
      icon: Code,
      gradient: "from-accent to-primary"
    },
    {
      title: "Social Media Analytics Tool",
      description: "Advanced analytics platform that monitors social media trends, sentiment analysis, and generates actionable insights for businesses.",
      tech: ["Python", "Flask", "NLP", "Chart.js", "Docker"],
      icon: Database,
      gradient: "from-primary to-accent"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in backend development, automation, and full-stack applications
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group glass rounded-xl p-8 border border-glass-border hover:border-primary/30 transition-all duration-500 hover:transform hover:scale-[1.02] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Icon */}
                <div className="mb-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} shadow-lg`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Project Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Links */}
                <div className="flex gap-4">
                  <HeroButton variant="ghost" size="default" className="group">
                    <Github className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                    Code
                  </HeroButton>
                  <HeroButton variant="ghost" size="default" className="group">
                    <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                    Demo
                  </HeroButton>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="glass rounded-xl p-8 border border-glass-border max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Want to see more?
              </h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for more projects and contributions to open source communities.
              </p>
              <HeroButton variant="primary" size="lg" className="group">
                <Github className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                View All Projects
              </HeroButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;