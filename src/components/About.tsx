import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const experiences = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Master of Computer Applications",
      organization: "International School of Technology and Science for Women",
      period: "2025",
      description: "Currently pursuing MCA with specialization in software development and full-stack technologies."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-accent" />,
      title: "Python Full Stack Development Intern",
      organization: "Data Valley Private Limited, Vijayawada",
      period: "2024",
      description: "Gained hands-on experience with Python, HTML, CSS, JavaScript, React, MySQL, and Flask through full-stack development projects."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Community Service Project Leader",
      organization: "Sri Venkateswara Degree College",
      period: "2022",
      description: "Led research on water quality & accessibility, conducted surveys, and provided actionable recommendations for community improvement."
    }
  ];

  const strengths = [
    "Strong analytical and problem-solving abilities",
    "Excellent communication and teamwork skills",
    "Adaptability to new technologies and environments",
    "Detail-oriented approach to software development",
    "Passion for continuous learning and improvement",
    "Experience in project leadership and community service"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to creating innovative solutions and making a positive impact through technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Experience & Education</h3>
            {experiences.map((exp, index) => (
              <Card key={index} className="hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-surface rounded-lg flex items-center justify-center">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{exp.title}</h4>
                      <p className="text-primary font-medium mb-1">{exp.organization}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Strengths & Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Professional Strengths</h3>
            <div className="grid gap-4">
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-surface rounded-lg hover-lift animate-fade-in"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-gradient-primary rounded-full flex-shrink-0"></div>
                  <p className="text-muted-foreground">{strength}</p>
                </div>
              ))}
            </div>

            <Card className="bg-gradient-primary text-primary-foreground hover-lift mt-8">
              <CardContent className="p-6">
                <h4 className="font-semibold text-lg mb-3">Career Focus</h4>
                <p className="leading-relaxed">
                  I'm particularly interested in opportunities within the IT industry and gaming sector, 
                  where I can apply my full-stack development skills to create engaging, user-focused applications 
                  that solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;