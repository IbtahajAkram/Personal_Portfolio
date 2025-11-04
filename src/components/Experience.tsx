import { Briefcase, Calendar, CheckCircle } from 'lucide-react'
import { experience } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  }

  const experienceVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.5
      }
    }
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my career
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30 md:transform md:-translate-x-1/2 origin-top"
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          {/* Experience Items */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                variants={experienceVariants}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background md:transform md:-translate-x-1/2 z-10"
                  variants={dotVariants}
                >
                  <motion.div
                    className="absolute inset-1 bg-primary-glow rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                      transition: {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card p-6 hover-glow">
                    {/* Header */}
                    <motion.div
                      className="flex items-center mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + 0.2 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Briefcase className="h-6 w-6 text-primary mr-3" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                    </motion.div>

                    {/* Duration */}
                    <motion.div
                      className="flex items-center mb-4 text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{exp.duration}</span>
                    </motion.div>

                    {/* Responsibilities */}
                    <motion.ul
                      className="space-y-2"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + 0.4 }}
                    >
                      {exp.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          className="flex items-start text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.3, delay: (index * 0.1) + 0.4 + (itemIndex * 0.1) }}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                            <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Resume CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="glass-card p-8 hover-glow"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
            }}
          >
            <h3 className="text-2xl font-semibold mb-4">Interested in my full experience?</h3>
            <p className="text-muted-foreground mb-6">
              Download my complete resume to learn more about my background and achievements.
            </p>
            <motion.button
              className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg hover-glow font-medium"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download Full Resume
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience