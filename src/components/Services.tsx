import { services } from '@/data/services'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import * as LucideIcons from 'lucide-react'

type IconName = keyof typeof LucideIcons

const getIcon = (iconName: string) => {
  const Icon = LucideIcons[iconName as IconName] as React.ComponentType<any>
  return Icon ? <Icon className="w-8 h-8" /> : <LucideIcons.Code className="w-8 h-8" />
}

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 slide-in-bottom">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Services</span> I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development solutions tailored to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className="glass-card cursor-pointer hover-glow bounce-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 pt-4 pl-4 rounded-full bg-gradient-to-r from-primary to-secondary p-3 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-primary-foreground">
                    {getIcon(service.icon)}
                  </div>
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.features.map((feature, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-background/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl float-animation"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  )
}

export default Services