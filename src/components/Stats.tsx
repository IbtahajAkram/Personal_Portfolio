import { stats } from '@/data/services'
import * as LucideIcons from 'lucide-react'
import { useEffect, useState } from 'react'

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
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.id}
              className="text-center group scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-4 pt-4 cursor-pointer rounded-full bg-gradient-to-r from-primary to-secondary p-3 group-hover:scale-110 transition-transform duration-300 pulse-glow">
                <div className="text-primary-foreground flex items-center justify-center">
                  {getIcon(stat.icon)}
                </div>
              </div>

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
            </div>
          ))}
        </div>

        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 blur-3xl float-animation"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-secondary/5 blur-3xl float-animation" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </section>
  )
}

export default Stats