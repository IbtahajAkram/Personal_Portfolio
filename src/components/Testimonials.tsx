import { testimonials } from '@/data/services'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const testimonialVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="gradient-text">Clients Say</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it - hear from satisfied clients about their experience
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)"
              }}
            >
              <Card className="glass-card hover-glow relative overflow-hidden h-full">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + 0.2 }}
                  >
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  </motion.div>

                  {/* Rating */}
                  <motion.div
                    className="flex mb-4"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3, delay: (index * 0.1) + 0.3 + (i * 0.05) }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-lg mb-6 text-foreground/90 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + 0.4 }}
                  >
                    "{testimonial.text}"
                  </motion.p>

                  {/* Client Info */}
                  <motion.div
                    className="flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + 0.6 }}
                  >
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary p-0.5 mr-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover bg-background"
                      />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </motion.div>

                  {/* Background Decoration */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3],
                      transition: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to join these satisfied clients?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-full hover-glow transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials