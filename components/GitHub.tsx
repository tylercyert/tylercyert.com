'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import GitHubCalendar from 'react-github-calendar'

export default function GitHub() {
  const githubStats = {
    username: 'TylerCyert'
  }

  return (
    <section id="github" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            GitHub Contributions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out my open source contributions and coding activity on GitHub.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* GitHub Calendar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="card p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Github className="w-6 h-6 text-primary" />
              Contribution Graph
            </h3>
            <div className="overflow-x-auto flex-grow">
              <GitHubCalendar 
                username={githubStats.username}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
          </motion.div>

          {/* GitHub Profile Link */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="card p-8 h-full flex flex-col"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Github className="w-6 h-6 text-primary" />
              GitHub Profile
            </h3>
            <p className="text-muted-foreground mb-6 flex-grow">
              Explore my repositories, contributions, and coding journey on GitHub.
            </p>
            <a
              href={`https://github.com/${githubStats.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 mt-auto w-fit"
            >
              <ExternalLink className="w-4 h-4" />
              View GitHub Profile
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
