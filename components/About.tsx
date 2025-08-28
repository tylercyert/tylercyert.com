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
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            IT Support Specialist with expertise in cloud infrastructure, ERP systems, and technical support. 
            Currently pursuing a Bachelor's degree in Cloud Computing at Western Governors University, 
            bringing strong foundation in REST APIs, Python, and JavaScript.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card p-8 hover:shadow-xl transition-all duration-300"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Certifications & Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-left">Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">ITIL V4</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">CompTIA Security+</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">CompTIA Network+</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">CompTIA Cloud+</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">Azure Fundamentals</span>
                </div>
                <div className="flex items-center">
                  <span className="text-primary-600 dark:text-primary-400 mr-2 text-sm">✓</span>
                  <span className="text-gray-700 dark:text-gray-300 text-sm">AWS Cloud Practitioner</span>
                </div>
              </div>
            </div>
            <div className="card p-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-left">Education</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-left">
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Western Governors University</h5>
                  <p className="text-gray-700 dark:text-gray-300">BS, Cloud Computing</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2023-2025</p>
                </div>
                <div>
                  <h5 className="font-medium text-gray-900 dark:text-white">Winona State University</h5>
                  <p className="text-gray-700 dark:text-gray-300">Computer Science</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">2015 - 2021</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
