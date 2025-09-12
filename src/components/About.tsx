import { Code2, Heart, Zap } from 'lucide-react'
import img from "../../src/assets/mypicture.jpeg"
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl glass-card overflow-hidden hover-glow">
                <img 
                  src={img} 
                  alt="Muhammad Zawwar Akram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20 float-animation"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30 float-animation" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="glass-card p-8 hover-glow animate-slide-up">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Code2 className="mr-3 h-6 w-6 text-primary" />
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate MERN Stack Developer with over 3 years of experience in building 
                scalable web applications. My journey started with a curiosity about how websites work, 
                and it has evolved into a deep love for creating digital experiences that make a difference.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in modern JavaScript technologies and have a strong foundation in both 
                frontend and backend development. From crafting pixel-perfect user interfaces to 
                designing robust APIs, I enjoy every aspect of the development process.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 hover-glow animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Heart className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Passion Driven</h4>
                <p className="text-sm text-muted-foreground">
                  I love turning complex problems into simple, beautiful solutions through code.
                </p>
              </div>

              <div className="glass-card p-6 hover-glow animate-slide-up" style={{ animationDelay: '0.4s' }}>
                <Zap className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">
                  Always staying up-to-date with the latest technologies and best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About