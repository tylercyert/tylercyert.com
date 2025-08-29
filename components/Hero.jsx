'use client'

import { motion } from 'framer-motion'
import { useTheme } from './ThemeProvider'
import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const { theme } = useTheme()
  const mountRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  // Typewriter effect
  useEffect(() => {
    const firstText = "Nice to meet you"
    const secondText = "I'm Tyler Cyert"
    
    let currentIndex = 0
    let isFirstText = true
    let isBackspacing = false
    
    const typeInterval = setInterval(() => {
      if (isFirstText && !isBackspacing) {
        // Typing first text
        if (currentIndex < firstText.length) {
          setDisplayText(firstText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          // Wait a bit, then start backspacing
          setTimeout(() => {
            isBackspacing = true
            currentIndex = firstText.length
          }, 1000)
        }
      } else if (isBackspacing) {
        // Backspacing first text
        if (currentIndex > 0) {
          setDisplayText(firstText.slice(0, currentIndex - 1))
          currentIndex--
        } else {
          // Start typing second text
          isBackspacing = false
          isFirstText = false
          currentIndex = 0
        }
      } else {
        // Typing second text
        if (currentIndex < secondText.length) {
          setDisplayText(secondText.slice(0, currentIndex + 1))
          currentIndex++
        } else {
          // Done typing, stay there
          setIsTyping(false)
          clearInterval(typeInterval)
        }
      }
    }, 100) // Typing speed

    return () => clearInterval(typeInterval)
  }, [])

  // Initialize Three.js scene
  useEffect(() => {
    if (!mountRef.current) return

    // Dynamic import to avoid SSR issues
    import('three').then((THREE) => {
      const container = mountRef.current
      const { width, height } = container.getBoundingClientRect()

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)
      camera.position.z = 3

      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(width, height, false)
      renderer.setClearColor(0x000000, 0)
      container.appendChild(renderer.domElement)

      // Ensure canvas fills container
      renderer.domElement.style.display = 'block'
      renderer.domElement.style.width = '100%'
      renderer.domElement.style.height = '100%'
      renderer.domElement.style.pointerEvents = 'none'

      // Create simple sphere
      const geometry = new THREE.SphereGeometry(1, 32, 32)
      const material = new THREE.MeshBasicMaterial({ 
        color: theme === 'dark' ? 0x3b82f6 : 0x1e40af,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      })
      const sphere = new THREE.Mesh(geometry, material)
      scene.add(sphere)

      // Mouse interaction
      let mouseY = 0.5
      const handleMouseMove = (e) => {
        const rect = container.getBoundingClientRect()
        mouseY = (e.clientY - rect.top) / rect.height
      }

      container.addEventListener('mousemove', handleMouseMove)

      // Animation loop
      let animationId = 0
      const clock = new THREE.Clock()
      
      const animate = () => {
        const time = clock.getElapsedTime()
        
        // Rotate sphere on single Y-axis only (half speed)
        sphere.rotation.y += 0.005
        
        renderer.render(scene, camera)
        animationId = requestAnimationFrame(animate)
      }
      
      animate()

      // Handle resize
      const handleResize = () => {
        const { width, height } = container.getBoundingClientRect()
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height, false)
      }

      const resizeObserver = new ResizeObserver(handleResize)
      resizeObserver.observe(container)

      // Cleanup
      return () => {
        cancelAnimationFrame(animationId)
        resizeObserver.disconnect()
        container.removeEventListener('mousemove', handleMouseMove)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
        if (renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement)
        }
      }
    }).catch(console.error)

  }, [theme])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(156,163,175,0.1),transparent_50%)] opacity-30 dark:opacity-10"></div>
      </div>

      {/* Three.js Sphere Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-30">
        <div ref={mountRef} className="w-full h-full" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 min-h-[4rem] md:min-h-[6rem] flex items-center justify-center"
        >
          <span className="text-primary mr-2">&gt;</span>
          {displayText}
          <span className="cursor-blink">_</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl font-semibold text-primary mb-8"
        >
          IT and Cloud Specialist
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          Focused on building reliable IT solutions, supporting both cloud and onsite systems, and helping teams work more efficiently. Currently studying Cloud Computing while continuing to grow skills in modern technologies.
        </motion.p>
      </div>
    </section>
  )
}
