import { m } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import SmoothTiltCard from './SmoothTiltCard'
import projectsData from '../data/projectsData'
import '../styles/Projects.css'
import '../styles/SmoothTiltCard.css'

function Projects() {
  const navigate = useNavigate()

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

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`)
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <m.div className="section-header" variants={fadeInUp}>
            <span className="section-label">Selected Works</span>
            <h2 className="section-title">
              Featured
              <br />
              <span className="gradient-text">Projects</span>
            </h2>
          </m.div>

          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <m.div
                key={project.id}
                variants={fadeInUp}
              >
                <SmoothTiltCard
                  className="project-card interactive"
                  onClick={() => handleProjectClick(project.slug)}
                >
                  <div
                    className="project-visual"
                    style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}
                  >
                    <div className="project-number">{String(index + 1).padStart(2, '0')}</div>
                    <div className="project-category">{project.category}</div>
                  </div>

                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.shortDescription}</p>

                    <div className="project-tags">
                      {project.tags.slice(0, 4).map((tag) => (
                        <m.span
                          key={tag}
                          className="tag"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tag}
                        </m.span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="tag more">+{project.tags.length - 4}</span>
                      )}
                    </div>

                    <div className="project-link">
                      <span>View Details</span>
                      <m.svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          d="M4 10H16M16 10L10 4M16 10L10 16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </m.svg>
                    </div>
                  </div>
                </SmoothTiltCard>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default Projects
