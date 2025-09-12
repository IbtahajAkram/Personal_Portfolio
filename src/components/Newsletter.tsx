import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Mail, Send, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const Newsletter = () => {
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

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="glass-card hover-glow overflow-hidden">
          <CardContent className="p-12 text-center relative">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
            
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary p-3">
                <Mail className="w-10 h-10 text-primary-foreground" />
              </div>

              {/* Content */}
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay <span className="gradient-text">Updated</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get notified about my latest projects, web development insights, and tech industry updates. 
                Join the community of developers and entrepreneurs.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 glass-card border-0 bg-background/50"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 transition-transform"
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  No spam
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  Weekly updates
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                  Unsubscribe anytime
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 blur-sm float-animation"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-secondary/20 blur-sm float-animation" style={{ animationDelay: '1s' }}></div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Newsletter