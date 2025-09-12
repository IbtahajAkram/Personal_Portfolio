import { Briefcase, Calendar, CheckCircle } from 'lucide-react'
import { experience } from '@/data/portfolio'

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 md:transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10">
                  <div className="absolute inset-1 bg-primary-glow rounded-full animate-pulse-glow"></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-card p-6 hover-glow">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <Briefcase className="h-6 w-6 text-primary mr-3" />
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center mb-4 text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="space-y-2">
                      {exp.description.map((item, itemIndex) => (
                        <li 
                          key={itemIndex}
                          className="flex items-start text-sm text-muted-foreground"
                        >
                          <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 hover-glow animate-scale-in">
            <h3 className="text-2xl font-semibold mb-4">Interested in my full experience?</h3>
            <p className="text-muted-foreground mb-6">
              Download my complete resume to learn more about my background and achievements.
            </p>
            <button className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover-glow font-medium">
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience