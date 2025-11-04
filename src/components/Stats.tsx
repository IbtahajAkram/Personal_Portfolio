import { stats } from '@/data/services'
import * as LucideIcons from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type IconName = keyof typeof LucideIcons

const getIcon = (iconName: string) => {
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<any>
  return Icon ? <Icon className="w-8 h-8" /> : <LucideIcons.TrendingUp className="w-8 h-8" />
}

const AnimatedCounter = ({ target, duration = 2000 }: { target: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const numericTarget = parseInt(target.replace(/\D/g, ''))
  const suffix = target.replace(/\d/g, '')

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * numericTarget))
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [numericTarget, duration])

  return <span className="counter">{count}{suffix}</span>
}

const Stats = () => {
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

  const statVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
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
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="text-center group"
              variants={statVariants}
              whileHover={{
                scale: 1.05,
                y: -5
              }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-4 pt-4 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary p-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(var(--primary-glow) / 0.3)",
                    "0 0 40px hsl(var(--primary-glow) / 0.6)",
                    "0 0 20px hsl(var(--primary-glow) / 0.3)"
                  ]
                }}
                transition={{
                  boxShadow: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              >
                <div className="text-primary-foreground flex items-center justify-center">
                  {getIcon(stat.icon)}
                </div>
              </motion.div>

              {/* Number */}
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter target={stat.number} />
              </div>

              {/* Label */}
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/5 blur-3xl"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Stats