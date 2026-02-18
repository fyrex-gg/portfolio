import { m } from 'framer-motion'
import '../styles/About.css'

function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const skills = [
    'React & Next.js',
    'TypeScript',
    'Convex',
    'Three.js & WebGL',
    'Framer Motion',
    'Stripe',
  ]

  return (
    <section id="about" className="about-section">
      <div className="container">
        <m.div
          className="about-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <m.div className="about-header" variants={fadeInUp}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Turning ideas into
              <br />
              <span className="gradient-text">interactive experiences</span>
            </h2>
          </m.div>

          <m.p className="about-text" variants={fadeInUp}>
            I'm a creative developer passionate about building beautiful, performant
            web experiences. With a focus on modern technologies and design principles,
            I create digital products that not only look great but feel amazing to use.
          </m.p>

          <m.p className="about-text" variants={fadeInUp}>
            My approach combines technical expertise with creative problem-solving,
            ensuring every project is crafted with attention to detail and user experience
            at its core.
          </m.p>

          <m.div className="skills-grid" variants={fadeInUp}>
            {skills.map((skill, index) => (
              <m.div
                key={skill}
                className="skill-card interactive"
                variants={fadeInUp}
                whileHover={{
                  y: -5,
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, type: 'spring', stiffness: 300 }}
              >
                <m.span
                  className="skill-number"
                  whileHover={{ scale: 1.2, color: 'var(--primary-color)' }}
                >
                  0{index + 1}
                </m.span>
                <span className="skill-name">{skill}</span>
              </m.div>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  )
}

export default About
