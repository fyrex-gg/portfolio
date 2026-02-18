import { m } from 'framer-motion'
import ParticleScene from './ParticleScene'
import MagneticButton from './MagneticButton'
import TextReveal from './TextReveal'
import ParallaxSection from './ParallaxSection'
import '../styles/Hero.css'
import '../styles/MagneticButton.css'

function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="hero">
      {/* 3D Particle Scene */}
      <ParticleScene />

      {/* Content */}
      <m.div
        className="hero-content"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <m.div className="hero-badge" variants={textVariants}>
          <span className="badge-dot"></span>
          Available for work
        </m.div>

        <m.h1 className="hero-title" variants={textVariants}>
          <TextReveal text="Full-Stack Developer" type="word" />
          <br />
          <TextReveal
            text="& Digital Designer"
            type="word"
            delay={0.3}
            className="gradient-text"
          />
        </m.h1>

        <m.p className="hero-description" variants={textVariants}>
          Crafting immersive digital experiences with code and creativity.
          <br />
          Specialized in modern web technologies and interactive design.
        </m.p>

        <m.div className="hero-cta" variants={textVariants}>
          <a href="#projects">
            <MagneticButton className="btn btn-primary interactive">
              View Projects
            </MagneticButton>
          </a>
          <a href="#contact">
            <MagneticButton className="btn btn-secondary interactive">
              Get in Touch
            </MagneticButton>
          </a>
        </m.div>

      </m.div>

      <m.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="scroll-indicator">
          <span>Scroll to explore</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 4L10 16M10 16L16 10M10 16L4 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </m.div>
    </section>
  )
}

export default Hero
