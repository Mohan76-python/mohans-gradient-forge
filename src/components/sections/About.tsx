import { Code, Database, Bot, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Database,
      title: "Backend Expertise",
      description: "Flask APIs, Database Design, Server Architecture"
    },
    {
      icon: Bot,
      title: "Automation",
      description: "Process Automation, Task Scheduling, Workflow Optimization"
    },
    {
      icon: Globe,
      title: "Web Scraping",
      description: "Data Extraction, Web Crawling, API Integration"
    },
    {
      icon: Code,
      title: "Frontend Curiosity",
      description: "React, Modern Web Technologies, UI/UX Development"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="text-gradient">About Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate developer with a focus on backend excellence and growing frontend skills
            </p>
          </div>
          
          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="animate-slide-up">
              <p className="text-lg leading-relaxed mb-6">
                I'm a <span className="text-gradient font-semibold">Full Stack Python Developer</span> with 
                a strong foundation in backend development and a growing passion for frontend technologies. 
                My journey in software development has been driven by curiosity and a love for solving complex problems.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                My expertise lies in creating robust <span className="text-primary font-medium">Flask APIs</span>, 
                designing efficient automation solutions, and extracting valuable insights through web scraping. 
                I believe in writing clean, maintainable code that scales with business needs.
              </p>
              
              <p className="text-lg leading-relaxed">
                While my strength is in backend development, I'm actively exploring modern frontend frameworks 
                and technologies. I enjoy the creative aspect of building user interfaces and the challenge 
                of creating seamless user experiences.
              </p>
            </div>
            
            {/* Code Block Decoration */}
            <div className="glass rounded-lg p-6 font-mono text-sm border border-glass-border">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive"></div>
                <div className="w-3 h-3 rounded-full bg-accent"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span className="text-muted-foreground ml-2">mohan.py</span>
              </div>
              <div className="space-y-2">
                <div><span className="text-accent">class</span> <span className="text-primary">Developer</span>:</div>
                <div className="ml-4"><span className="text-secondary">def</span> <span className="text-accent">__init__</span>(self):</div>
                <div className="ml-8">self.name = <span className="text-primary">"Mohan"</span></div>
                <div className="ml-8">self.role = <span className="text-primary">"Full Stack Developer"</span></div>
                <div className="ml-8">self.languages = [<span className="text-primary">"Python"</span>, <span className="text-primary">"JavaScript"</span>]</div>
                <div className="ml-8">self.passion = <span className="text-primary">"Building & Learning"</span></div>
              </div>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="glass rounded-lg p-6 border border-glass-border hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <highlight.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-gradient transition-colors duration-300">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;