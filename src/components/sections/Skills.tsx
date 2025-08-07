import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend Development",
      skills: [
        { name: "Python", level: 95 },
        { name: "Flask", level: 90 },
        { name: "SQLAlchemy", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "Automation & Scraping",
      skills: [
        { name: "Selenium", level: 90 },
        { name: "BeautifulSoup", level: 95 },
        { name: "Scrapy", level: 85 },
        { name: "Celery", level: 80 },
        { name: "Pandas", level: 85 }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "JavaScript", level: 75 },
        { name: "React", level: 70 },
        { name: "HTML/CSS", level: 80 },
        { name: "TypeScript", level: 65 },
        { name: "Tailwind CSS", level: 75 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Postman", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>
          
          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="glass rounded-xl p-8 border border-glass-border animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-8 text-gradient-secondary">
                  {category.title}
                </h3>
                
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-lg font-medium group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/50"
                        />
                        {/* Custom gradient overlay */}
                        <div 
                          className="absolute inset-y-0 left-0 bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="glass rounded-lg p-8 border border-glass-border max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                Always Learning
              </h3>
              <p className="text-muted-foreground">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                frameworks, and methodologies to stay at the forefront of web development. 
                Currently diving deeper into modern React patterns and cloud technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;