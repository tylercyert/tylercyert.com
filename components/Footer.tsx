'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Let's Connect</h3>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together or just say hello!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:cyert@pm.me"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
              cyert@pm.me
            </a>
            
            <a
              href="https://linkedin.com/in/tyler-cyert"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            
            <a
              href="https://github.com/TylerCyert"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-lg hover:text-primary transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © 2025 Tyler Cyert. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
