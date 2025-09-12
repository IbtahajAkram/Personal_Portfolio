import * as LucideIcons from 'lucide-react'
import { skills } from '@/data/portfolio'

type IconName = keyof typeof LucideIcons

const Skills = () => {
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

  return (
    <section id="skills" className="py-20 px-4 sm:px-10 lg:px-10 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="flex flex-wrap  gap-4">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="glass-card p-6 w-[282px] cursor-pointer hover-glow animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold cursor-pointer mb-4 text-center">
                <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </span>
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="skill-badge py-3 cursor-pointer flex items-center space-x-3"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <span className="text-primary">
                      {getIcon(skill.icon)}
                    </span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Skill Icons */}
        <div className="relative mt-16 h-32 overflow-hidden">
          <div className="absolute top-4 left-1/4 opacity-20 float-animation">
            <LucideIcons.Code className="h-8 w-8 text-primary" />
          </div>
          <div className="absolute top-8 right-1/3 opacity-15 float-animation" style={{ animationDelay: '2s' }}>
            <LucideIcons.Database className="h-10 w-10 text-accent" />
          </div>
          <div className="absolute bottom-4 left-1/2 opacity-25 float-animation" style={{ animationDelay: '4s' }}>
            <LucideIcons.Server className="h-6 w-6 text-secondary" />
          </div>
          <div className="absolute top-2 right-1/4 opacity-20 float-animation" style={{ animationDelay: '1s' }}>
            <LucideIcons.Globe className="h-7 w-7 text-primary" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills