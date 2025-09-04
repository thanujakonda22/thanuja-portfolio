import { ArrowRight, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/thanuja-profile-new.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-surface pt-16">
      <div className="container-max section-padding">
        <div className="text-center animate-fade-in">
          {/* Profile Picture */}
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Thanuja Chamundeswari Profile"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-strong hover-lift object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">Konda Thanuja</span>
            <br />
            <span className="text-foreground">Chamundeswari</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Web Developer | Problem Solver | Tech Enthusiast
          </p>

          {/* Bio */}
          <p className="text-lg text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            I'm a Master's student in Computer Applications with a strong interest in software development, 
            full stack web technologies, and problem-solving. I enjoy building projects that combine 
            technical skills with practical impact, and I'm particularly interested in opportunities 
            within IT and the gaming industry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection('portfolio')}
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection('contact')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;