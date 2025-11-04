import { Code2, Heart, Zap } from 'lucide-react'
import img from "../../src/assets/mypicture.jpeg"
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
const About = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          />
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Profile Image */}
          <motion.div
            className="order-2 lg:order-1 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl glass-card overflow-hidden hover-glow"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={img}
                  alt="Muhammad Zawwar Akram"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.6, -0.05, 0.01, 0.99] }}
                />
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-accent rounded-full opacity-20"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-primary rounded-full opacity-30"
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }
                }}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="order-1 lg:order-2 space-y-6"
            variants={containerVariants}
          >
            <motion.div
              className="glass-card p-8 hover-glow"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)" }}
            >
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
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              <motion.div
                className="glass-card p-6 hover-glow"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                  boxShadow: "0 20px 40px -12px hsl(var(--accent) / 0.3)"
                }}
              >
                <Heart className="h-8 w-8 text-accent mb-3" />
                <h4 className="font-semibold mb-2">Passion Driven</h4>
                <p className="text-sm text-muted-foreground">
                  I love turning complex problems into simple, beautiful solutions through code.
                </p>
              </motion.div>

              <motion.div
                className="glass-card p-6 hover-glow"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  rotate: -1,
                  boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.3)"
                }}
              >
                <Zap className="h-8 w-8 text-primary mb-3" />
                <h4 className="font-semibold mb-2">Fast Learner</h4>
                <p className="text-sm text-muted-foreground">
                  Always staying up-to-date with the latest technologies and best practices.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About