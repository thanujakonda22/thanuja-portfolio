import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Learning Website",
      description: "A comprehensive full-stack web application for online learning featuring user registration, course browsing, and content management system. Built with modern web technologies to provide an intuitive learning experience.",
      technologies: ["React", "Python", "Flask", "MySQL", "HTML/CSS", "JavaScript"],
      features: [
        "User authentication and registration",
        "Course catalog and browsing",
        "Content management system",
        "Responsive design",
        "Interactive learning modules"
      ],
      github: "https://github.com/thanujakonda22",
      live: "#",
      status: "Completed"
    },
    {
      title: "Community Water Quality Research",
      description: "Led a comprehensive research project on water quality and accessibility, conducting surveys and providing actionable recommendations for community improvement. This project demonstrates problem-solving and analytical skills.",
      technologies: ["Research", "Data Analysis", "Survey Design", "Community Engagement"],
      features: [
        "Community survey design and execution",
        "Water quality assessment",
        "Data collection and analysis",
        "Recommendation development",
        "Community presentation"
      ],
      github: "#",
      live: "#",
      status: "Published"
    },
    {
      title: "Python Full Stack Projects",
      description: "Collection of small-scale web applications and backend functionalities developed during internship, showcasing integration between frontend and backend systems with database management.",
      technologies: ["Python", "Flask", "MySQL", "HTML/CSS", "JavaScript", "API Development"],
      features: [
        "RESTful API development",
        "Database integration",
        "Frontend-backend communication",
        "User interface development",
        "Data validation and processing"
      ],
      github: "https://github.com/thanujakonda22",
      live: "#",
      status: "In Progress"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-surface">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects that demonstrate my technical skills, problem-solving abilities, 
            and passion for creating meaningful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-scale-in h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' ? 'bg-primary text-primary-foreground' :
                    project.status === 'Published' ? 'bg-accent text-accent-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="text-xs px-2 py-1 bg-surface rounded border border-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  {project.live !== '#' && (
                    <Button
                      size="sm"
                      className="flex-1 bg-gradient-primary"
                      onClick={() => window.open(project.live, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Profile CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary text-primary-foreground max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Explore More Projects</h3>
              <p className="text-lg mb-6 opacity-90">
                Visit my GitHub profile to see additional projects, contributions, and code samples.
              </p>
              <Button
                className="bg-white text-primary hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://github.com/thanujakonda22', '_blank')}
              >
                <Github className="h-5 w-5 mr-2" />
                View GitHub Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;