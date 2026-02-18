import { m } from 'framer-motion'
import '../styles/Contact.css'

function Contact() {
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

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/fyrex-gg' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/yavor-savov' },
    { name: 'Email', url: 'mailto:yavor.ssavov@gmail.com' },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <m.div
          className="contact-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <m.div className="contact-header" variants={fadeInUp}>
            <span className="section-label">Get in Touch</span>
            <h2 className="section-title">
              Let's create
              <br />
              <span className="gradient-text">something amazing</span>
            </h2>
          </m.div>

          <m.p className="contact-text" variants={fadeInUp}>
            Have a project in mind or want to collaborate? I'm always open to
            discussing new opportunities and creative ideas.
          </m.p>

          <m.div className="social-links" variants={fadeInUp}>
            {socialLinks.map((link) => (
              <m.a
                key={link.name}
                href={link.url}
                className="social-link interactive"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <span className="link-arrow">→</span>
                <span className="link-text">{link.name}</span>
              </m.a>
            ))}
          </m.div>

          <m.div className="cta-large" variants={fadeInUp}>
            <a href="mailto:yavor.ssavov@gmail.com" className="btn-large interactive">
              Start a Conversation
            </a>
          </m.div>
        </m.div>
      </div>

      {/* Background decoration */}
      <div className="contact-bg">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  )
}

export default Contact
