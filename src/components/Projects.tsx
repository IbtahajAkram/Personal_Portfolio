import { ExternalLink, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/portfolio'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

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

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="glass-card overflow-hidden group"
              variants={projectVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 25px 50px -12px hsl(var(--primary) / 0.25)"
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Overlay Buttons */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center space-x-1"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.video && (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button size="sm" variant="secondary" onClick={() => setSelectedVideo(project.video)}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Watch Video
                      </Button>
                    </motion.div>
                  )}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <motion.h3
                  className="text-xl font-semibold group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="secondary"
                        className="text-xs bg-muted/50 hover:bg-gradient-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                  className="flex space-x-3 pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: (index * 0.1) + 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1"
                  >
                    <Button size="sm" variant="default" className="w-full" asChild>
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(var(--primary-glow) / 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button variant="outline" size="lg" className="glass-card hover-glow">
              View More Projects
            </Button>
          </motion.div>
        </motion.div>

        {/* Video Modal */}
        <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
          <DialogContent className="max-w-4xl">
            {selectedVideo && (
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

export default Projects