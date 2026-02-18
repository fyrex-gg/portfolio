import { m } from 'framer-motion'

/**
 * TextReveal - Animated text reveal with stagger effect
 * Each word or character animates in sequence
 */
function TextReveal({ text, className = '', type = 'word', delay = 0 }) {
  const items = type === 'word' ? text.split(' ') : text.split('')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === 'word' ? 0.12 : 0.03,
        delayChildren: delay,
      },
    },
  }

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: -90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    },
  }

  return (
    <m.div
      className={`text-reveal ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {items.map((char, index) => (
        <m.span
          key={index}
          variants={item}
          style={{
            display: 'inline-block',
            marginRight: type === 'word' ? '0.25em' : '0',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </m.span>
      ))}
    </m.div>
  )
}

export default TextReveal
