'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

const experiences = [
  {
    id: 1,
    title: 'IT Support Specialist',
    company: 'Sound Productions',
    location: 'Irving, Texas',
    period: 'August 2024 - Present',
    description: 'Leveraging IT expertise to optimize onsite and cloud infrastructure, manage virtual machines, and deliver actionable insights through custom dashboards and ERP systems.',
    achievements: [
      'Implemented ERP, EDI, and sales tools',
      'Developed internal dashboards for insights',
      'Managed on-premise servers and cloud VMs',
      'Provided Tier 2+ support for platforms'
    ]
  },
  {
    id: 2,
    title: 'IT Support Specialist',
    company: 'Alpha Orthopedics & Sports Medicine',
    location: 'McKinney, Texas',
    period: 'April 2022 - August 2024',
    description: 'Delivered comprehensive technical support to physicians and clinical staff across three locations, enhancing operational efficiency.',
    achievements: [
      'Ensured HIPAA and PCI-DSS compliance',
      'Implemented IT solutions for patient care',
      'Acted as technical liaison for upgrades'
    ]
  },
  {
    id: 3,
    title: 'Partner/Consultant',
    company: 'ThumBrand - Crafting Engaging Websites',
    location: 'Allen, Texas',
    period: 'August 2020 - April 2022',
    description: 'Consulted with startup founders and SMB executives to enhance digital strategies and optimize web infrastructure.',
    achievements: [
      'Led discovery sessions for SaaS selection',
      'Created conversion-optimized websites',
      'Documented requirements and reports'
    ]
  },
  {
    id: 4,
    title: 'IT Support Specialist',
    company: 'MDH Technologies LLC',
    location: 'Addison, Texas',
    period: 'April 2021 - August 2021',
    description: 'Delivered exceptional helpdesk, phone, and chat support to over 400 endpoints for businesses in the Dallas-Fort Worth area.',
    achievements: [
      'Managed cloud systems in Google Cloud and Azure',
      'Successfully juggled multiple projects',
      'Provided technical support across platforms'
    ]
  }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Dynamic IT professional with over 8 years of experience across multiple industries. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="card p-8"
            >
              <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{experience.title}</h3>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span className="font-medium">{experience.company}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{experience.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{experience.period}</span>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex}>• {achievement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Certifications & Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* IT Certifications Card */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-left">IT Certifications</h4>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">CompTIA A+</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">ITIL V4</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">CompTIA Security+</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">CompTIA Network+</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">LPI Linux Essentials</span>
                </div>
              </div>
            </div>

            {/* Cloud Certifications Card */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-left">Cloud Certifications</h4>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">CompTIA Cloud+</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">Azure Fundamentals</span>
                </div>
                <div className="flex items-start">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-left">AWS Cloud Practitioner</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 dark:text-gray-500 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-left">
                    Azure Developer Associate
                    <sup className="text-xs text-primary-600 dark:text-primary-400 ml-1 font-medium">coming soon!</sup>
                  </span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 dark:text-gray-500 mr-2 text-sm mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed text-left">
                    AWS Certified Solutions Architect
                    <sup className="text-xs text-primary-600 dark:text-primary-400 ml-1 font-medium">coming soon!</sup>
                  </span>
                </div>
              </div>
            </div>

            {/* Western Governors University Card */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-left">Western Governors University</h4>
              <div className="space-y-2 text-left">
                <p className="text-gray-700 dark:text-gray-300 font-medium">BS, Cloud Computing</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2023-2025</p>
                <div className="pt-2">
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-left">Key Focus Areas:</h5>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 text-left">
                    <li className="text-left">• Cloud Infrastructure & Architecture</li>
                    <li className="text-left">• DevOps & CI/CD Practices</li>
                    <li className="text-left">• Security & Compliance</li>
                    <li className="text-left">• Automation & Orchestration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Winona State University Card */}
            <div className="card p-6">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 text-left">Winona State University</h4>
              <div className="space-y-2 text-left">
                <p className="text-gray-700 dark:text-gray-300 font-medium">Computer Science</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2015 - 2021</p>
                <div className="pt-2">
                  <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 text-left">Key Focus Areas:</h5>
                  <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 text-left">
                    <li className="text-left">• Software Engineering</li>
                    <li className="text-left">• Data Structures & Algorithms</li>
                    <li className="text-left">• Web Development</li>
                    <li className="text-left">• Database Systems</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
