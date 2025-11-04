import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { personalInfo } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    })

    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' }
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's discuss your project or just say hello. I'm always excited to work on new opportunities.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className="space-y-8" variants={containerVariants}>
            <motion.div
              className="glass-card p-8 hover-glow"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)"
              }}
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

              <div className="space-y-6">
                <motion.div
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-6 w-6 text-accent-foreground" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">03292045380</p>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-6 w-6 text-primary-foreground" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Karachi, Pakistan</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="glass-card p-8 hover-glow"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)"
              }}
            >
              <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass-card hover-glow flex items-center justify-center group"
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        boxShadow: "0 0 20px hsl(var(--primary-glow) / 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="glass-card p-8 hover-glow"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.2)"
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                <motion.div variants={formFieldVariants}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="glass-card h-12 border-border/50"
                      placeholder="Your name"
                    />
                  </motion.div>
                </motion.div>
                <motion.div variants={formFieldVariants}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="glass-card h-12 border-border/50"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="glass-card h-12 border-border/50"
                    placeholder="What's this about?"
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={formFieldVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="glass-card h-12 border-border/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={formFieldVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  size="lg"
                  className="w-full py-3 bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact