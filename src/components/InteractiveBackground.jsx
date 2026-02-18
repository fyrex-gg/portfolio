import { useEffect, useRef } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'
import '../styles/InteractiveBackground.css'

/**
 * InteractiveBackground - Animated gradient that follows cursor
 * Creates depth and interactivity across entire page
 */
function InteractiveBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animation
  const springConfig = { stiffness: 50, damping: 30 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Convert to percentage
      const xPct = (e.clientX / window.innerWidth) * 100
      const yPct = (e.clientY / window.innerHeight) * 100

      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <div className="interactive-background">
      {/* Primary gradient orb */}
      <m.div
        className="gradient-orb primary"
        style={{
          left: x,
          top: y,
        }}
      />

      {/* Secondary gradient orb (inverse movement) */}
      <m.div
        className="gradient-orb secondary"
        style={{
          left: useSpring(
            useMotionValue(100),
            springConfig
          ),
          top: useSpring(
            useMotionValue(100),
            springConfig
          ),
        }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay" />
    </div>
  )
}

export default InteractiveBackground
