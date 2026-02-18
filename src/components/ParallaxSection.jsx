import { useRef } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'

/**
 * ParallaxSection - Section with parallax scroll effect
 * Content moves at different speeds creating depth
 */
function ParallaxSection({ children, speed = 0.5, className = '' }) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Transform scroll progress to Y position
  // speed: 0.5 = half speed, 2 = double speed
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <div ref={ref} className={`parallax-section ${className}`}>
      <m.div style={{ y }}>{children}</m.div>
    </div>
  )
}

export default ParallaxSection
