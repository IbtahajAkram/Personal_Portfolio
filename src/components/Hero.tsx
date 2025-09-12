import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'
import heroBg from '@/assets/hero-bg.jpg'

const Hero = () => {
  const scrollToContact = () => {
    const contact = document.querySelector('#contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadResume = () => {
    // Replace with actual resume URL
    const resumeUrl = '/resume.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Muhammad_Zawwar_Akram_Resume.pdf'
    link.click()
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-gradient-primary opacity-20 float-animation" />
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-accent opacity-10 float-animation" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-primary/20 float-animation" style={{ animationDelay: '4s' }} />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
            {personalInfo.title}
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {personalInfo.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={downloadResume}
              className="glass-card hover-glow px-8 py-3 bg-gradient-primary border-0"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="glass-card hover-glow px-8 py-3"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-primary" />
        </div>
      </div>
    </section>
  )
}

export default Hero