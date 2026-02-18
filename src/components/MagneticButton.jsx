import { useRef, useState } from 'react'
import { m, useSpring, useTransform } from 'framer-motion'

/**
 * MagneticButton - Button that follows cursor within magnetic field
 * Creates an attractive effect where button moves toward cursor
 */
function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  // Spring animations for smooth magnetic effect
  const x = useSpring(0, { stiffness: 150, damping: 15 })
  const y = useSpring(0, { stiffness: 150, damping: 15 })

  const handleMouseMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Magnetic strength (0.3 = 30% of distance)
    const magneticStrength = 0.3

    x.set(distanceX * magneticStrength)
    y.set(distanceY * magneticStrength)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    x.set(0)
    y.set(0)
  }

  return (
    <m.button
      ref={ref}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </m.button>
  )
}

export default MagneticButton
