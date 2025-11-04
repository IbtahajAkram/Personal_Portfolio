import * as LucideIcons from 'lucide-react'
import { skills } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

type IconName = keyof typeof LucideIcons

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'from-blue-500 to-purple-600' },
    { title: 'Backend', skills: skills.backend, color: 'from-green-500 to-teal-600' },
    { title: 'Databases', skills: skills.databases, color: 'from-orange-500 to-red-600' },
    { title: 'DevOps & Tools', skills: skills.tools, color: 'from-purple-500 to-pink-600' }
  ]

  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as IconName] as React.ComponentType<{ className?: string }>
    return Icon ? <Icon className="h-5 w-5" /> : <LucideIcons.Code className="h-5 w-5" />
  }

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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 3, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-10 lg:px-10 bg-muted/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="glass-card p-6 w-[282px] cursor-pointer hover-glow"
              variants={categoryVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.3)"
              }}
            >
              <h3 className="text-xl font-semibold cursor-pointer mb-4 text-center">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h3>

              <motion.div className="space-y-3" variants={containerVariants}>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-badge py-3 cursor-pointer flex items-center space-x-3"
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.05,
                      background: "linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--secondary) / 0.1))"
                    }}
                  >
                    <span className="text-primary">
                      {getIcon(skill.icon)}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skill Icons */}
        <motion.div
          className="relative mt-16 h-32 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="absolute top-4 left-1/4 opacity-20"
            variants={floatingVariants}
            animate="animate"
          >
            <LucideIcons.Code className="h-8 w-8 text-primary" />
          </motion.div>
          <motion.div
            className="absolute top-8 right-1/3 opacity-15"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '2s' }}
          >
            <LucideIcons.Database className="h-10 w-10 text-accent" />
          </motion.div>
          <motion.div
            className="absolute bottom-4 left-1/2 opacity-25"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '4s' }}
          >
            <LucideIcons.Server className="h-6 w-6 text-secondary" />
          </motion.div>
          <motion.div
            className="absolute top-2 right-1/4 opacity-20"
            variants={floatingVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
          >
            <LucideIcons.Globe className="h-7 w-7 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills