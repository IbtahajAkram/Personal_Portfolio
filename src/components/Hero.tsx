import { ArrowDown, Download, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { personalInfo } from '@/data/portfolio'
import heroBg from '@/assets/hero-bg.jpg'
import { motion, useScroll, useTransform } from 'framer-motion'

const Hero = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -200])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          y,
          opacity
        }}
      />
      <div className="absolute inset-0 bg-background/60" />

      {/* Floating Elements with Physics */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-gradient-primary opacity-20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '0s' }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-gradient-accent opacity-10"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-primary/20"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '4s' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.2
            }}
          >
            <motion.span
              className="gradient-text"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%"
              }}
            >
              {personalInfo.name}
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6"
            variants={itemVariants}
          >
            {personalInfo.title}
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                onClick={downloadResume}
                className="glass-card hover-glow px-8 py-3 bg-gradient-primary border-0"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="glass-card hover-glow px-8 py-3"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero