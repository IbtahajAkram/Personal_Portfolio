import { testimonials } from '@/data/services'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - hear from satisfied clients about their experience
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="glass-card hover-glow bounce-hover relative overflow-hidden scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-lg mb-6 text-foreground/90 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover bg-background"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these satisfied clients?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover-glow transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonials