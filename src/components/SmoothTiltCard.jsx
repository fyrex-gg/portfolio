import { useRef, useState } from 'react'
import { m } from 'framer-motion'

/**
 * SmoothTiltCard - Smooth 3D tilt effect using Framer Motion
 * Much smoother than vanilla-tilt, using spring physics
 */
function SmoothTiltCard({ children, className = '', onClick }) {
  const ref = useRef(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glareX, setGlareX] = useState(50)
  const [glareY, setGlareY] = useState(50)

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top

    // Calculate rotation based on mouse position
    // Center is 0, edges are ±25 degrees
    const rotX = ((mouseYPos / height) - 0.5) * -50 // -25 to 25
    const rotY = ((mouseXPos / width) - 0.5) * 50 // -25 to 25

    setRotateX(rotX)
    setRotateY(rotY)
    setGlareX((mouseXPos / width) * 100)
    setGlareY((mouseYPos / height) * 100)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div style={{ perspective: '1000px' }}>
      <m.div
        ref={ref}
        className={`smooth-tilt-card ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        animate={{
          rotateX,
          rotateY,
          scale: 1.02,
        }}
        initial={{
          rotateX: 0,
          rotateY: 0,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>

        {/* Glare effect */}
        <m.div
          className="tilt-glare"
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
            opacity: rotateX !== 0 || rotateY !== 0 ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </m.div>
    </div>
  )
}

export default SmoothTiltCard
