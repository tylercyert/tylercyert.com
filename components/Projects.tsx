'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Zap, Gamepad2, Moon, Headphones } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'REMHunter.com',
    icon: <Moon className="w-6 h-6" />,
    description: 'An intelligent sleep cycle calculator that provides personalized bedtime and wake time recommendations based on sleep science, featuring multiple calculation modes and real-time recommendations.',
    technologies: ['Python', 'Flask', 'JavaScript'],
    liveUrl: 'https://remhunter.com',
    codeUrl: 'https://github.com/tylercyert/remhunter'
  },
  {
    id: 2,
    name: 'POMOraid.com',
    icon: <Gamepad2 className="w-6 h-6" />,
    description: 'A dungeon-crawling RPG game that combines productivity with adventure, featuring character progression, zone exploration, and strategic combat encounters.',
    technologies: ['React', 'TypeScript', 'PWA'],
    liveUrl: 'https://pomoraid.com',
    codeUrl: 'https://github.com/tylercyert/pomoraid'
  },
  {
    id: 3,
    name: 'FocusTones.co',
    icon: <Headphones className="w-6 h-6" />,
    description: 'A professional binaural beat generator that creates customizable audio frequencies to guide your brain into optimal states for focus, creativity, and deep work, featuring real-time audio generation and immersive 3D visualization.',
    technologies: ['React', 'TypeScript', 'Three.js', 'Web Audio API'],
    liveUrl: 'https://focustones.co',
    codeUrl: 'https://github.com/tylercyert/focustones'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my favorite projects that I've built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card p-8 h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-bold">{project.name}</h3>
              </div>
              
              <div className="mb-6 flex-grow">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.name === 'REMHunter.com' ? (
                      <>
                        <li>• Sleep cycle optimization with 90-minute cycles</li>
                        <li>• Multiple calculation modes for optimal timing</li>
                        <li>• Real-time recommendations and current time integration</li>
                        <li>• Responsive web interface with modern UI design</li>
                        <li>• Personalized bedtime and wake time suggestions</li>
                        <li>• Sleep science-based algorithms for accuracy</li>
                      </>
                    ) : project.name === 'POMOraid.com' ? (
                      <>
                        <li>• Character creation and customization system</li>
                        <li>• Multiple game zones and environments</li>
                        <li>• Equipment and inventory management</li>
                        <li>• Strategic combat encounters and raid system</li>
                        <li>• Productivity-focused gameplay mechanics</li>
                        <li>• Progressive Web App for cross-platform access</li>
                      </>
                    ) : (
                      <>
                        <li>• Real-time binaural beat generation with zero latency</li>
                        <li>• Five brainwave frequency bands for different states</li>
                        <li>• Interactive 3D sphere visualization</li>
                        <li>• Smooth audio transitions and white noise overlay</li>
                        <li>• Settings persistence and personalized preferences</li>
                        <li>• Responsive design optimized for all devices</li>
                      </>
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Live Site
                </a>
                {(project.name === 'REMHunter.com' || project.name === 'FocusTones.co') && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
