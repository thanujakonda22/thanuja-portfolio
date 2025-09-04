import { Globe, Database, Palette, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full Stack Web Development",
      description: "Complete web application development using modern technologies like Python, Flask, React, HTML, CSS, and JavaScript. From responsive front-end interfaces to robust back-end systems.",
      features: [
        "Responsive web applications",
        "Modern UI/UX implementation",
        "API development and integration",
        "Cross-browser compatibility"
      ]
    },
    {
      icon: <Database className="h-10 w-10 text-accent" />,
      title: "Database Design & Management",
      description: "Comprehensive database solutions including design, optimization, and management using MySQL and other database technologies for efficient data storage and retrieval.",
      features: [
        "Database schema design",
        "Query optimization",
        "Data migration services",
        "Performance monitoring"
      ]
    },
    {
      icon: <Palette className="h-10 w-10 text-primary" />,
      title: "Frontend Development",
      description: "Clean, functional, and engaging user interface development with focus on user experience, accessibility, and modern design principles.",
      features: [
        "Responsive design implementation",
        "Interactive user interfaces",
        "Component-based architecture",
        "Performance optimization"
      ]
    },
    {
      icon: <Code2 className="h-10 w-10 text-accent" />,
      title: "Python Scripting & Automation",
      description: "Custom Python scripts and automation solutions to streamline workflows, data processing, and repetitive tasks for improved efficiency.",
      features: [
        "Process automation",
        "Data processing scripts",
        "API integrations",
        "Custom tool development"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development services focused on delivering high-quality, scalable solutions 
            tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-3 bg-surface rounded-xl group-hover:shadow-glow transition-all duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
            <h3 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's collaborate to bring your ideas to life with modern, efficient, and scalable solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;