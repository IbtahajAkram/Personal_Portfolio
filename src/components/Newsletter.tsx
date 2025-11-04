import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Send, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Newsletter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    // Simulate subscription
    setIsSubscribed(true)
    toast({
      title: "Successfully Subscribed!",
      description: "You'll receive updates about my latest projects and insights.",
    })

    setTimeout(() => {
      setIsSubscribed(false)
      setEmail('')
    }, 3000)
  }

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section className="py-20 px-4" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Card className="glass-card hover-glow overflow-hidden">
            <CardContent className="p-12 text-center relative">
              {/* Background Decoration */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary p-3"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-10 h-10 text-primary-foreground" />
                </motion.div>

                {/* Content */}
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Stay <span className="gradient-text">Updated</span>
                </motion.h2>
                <motion.p
                  className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Get notified about my latest projects, web development insights, and tech industry updates.
                  Join the community of developers and entrepreneurs.
                </motion.p>

                {/* Newsletter Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  className="max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <div className="flex gap-3">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="flex-1"
                    >
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-1 glass-card border-0 bg-background/50"
                        required
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                        disabled={isSubscribed}
                      >
                        {isSubscribed ? (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Check className="w-5 h-5" />
                          </motion.div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Subscribe
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </motion.form>

                {/* Trust Indicators */}
                <motion.div
                  className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  {[
                    { color: 'bg-green-500', text: 'No spam' },
                    { color: 'bg-blue-500', text: 'Weekly updates' },
                    { color: 'bg-purple-500', text: 'Unsubscribe anytime' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: 1 + (index * 0.1) }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        className={`w-2 h-2 rounded-full ${item.color}`}
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: {
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5
                          }
                        }}
                      />
                      {item.text}
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 blur-sm"
                variants={floatingVariants}
                animate="animate"
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-secondary/20 blur-sm"
                variants={floatingVariants}
                animate="animate"
                style={{ animationDelay: '1s' }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter