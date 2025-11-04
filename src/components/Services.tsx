import { services } from '@/data/services'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import * as LucideIcons from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type IconName = keyof typeof LucideIcons

const getIcon = (iconName: string) => {
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<any>
  return Icon ? <Icon className="w-8 h-8" /> : <LucideIcons.Code className="w-8 h-8" />
}

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span> I Offer
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="glass-card cursor-pointer hover-glow group h-full">
                <CardHeader className="text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 pt-4 pl-4 rounded-full bg-gradient-to-r from-primary to-secondary p-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-primary-foreground">
                      {getIcon(service.icon)}
                    </div>
                  </motion.div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                        >
                          {feature}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Decorations */}
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl"
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: '2s' }}
        />
      </div>
    </section>
  )
}

export default Services