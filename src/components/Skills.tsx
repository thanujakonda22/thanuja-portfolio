import { Code, Database, Layers, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Programming & Development",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "React", level: 80 },
        { name: "Flask", level: 75 }
      ]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      title: "Database & Backend",
      skills: [
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 75 },
        { name: "API Development", level: 70 },
        { name: "Server Management", level: 65 }
      ]
    },
    {
      icon: <Layers className="h-8 w-8 text-primary" />,
      title: "Full Stack Development",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "Frontend Integration", level: 85 },
        { name: "Backend Integration", level: 80 },
        { name: "Version Control (Git)", level: 75 }
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Teamwork", level: 90 },
        { name: "Adaptability", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-surface">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through hands-on experience in full-stack development and continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="hover-lift animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <div className="p-2 bg-surface rounded-lg">
                    {category.icon}
                  </div>
                  <span>{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 4 + skillIndex) * 0.1}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "JavaScript", "React", "Flask", "MySQL", "HTML5", "CSS3", 
              "Git", "Linux", "VS Code", "Responsive Design", "RESTful APIs"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;