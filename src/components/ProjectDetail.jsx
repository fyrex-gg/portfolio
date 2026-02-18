import { useParams, useNavigate } from 'react-router-dom'
import { m } from 'framer-motion'
import { useEffect } from 'react'
import projectsData from '../data/projectsData'
import '../styles/ProjectDetail.css'

function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="project-detail-not-found">
        <h1>Project Not Found</h1>
        <button onClick={() => navigate('/')}>Back to Home</button>
      </div>
    )
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <m.div
      className="project-detail"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      {/* Header */}
      <m.div className="project-detail-header" variants={fadeIn}>
        <button className="back-button" onClick={() => navigate('/')}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to Projects
        </button>

        <div className="project-hero">
          <div className="project-hero-content">
            <span className="project-category-badge">{project.category}</span>
            <h1 className="project-hero-title">{project.title}</h1>
            <p className="project-hero-description">{project.shortDescription}</p>

            <div className="project-hero-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="hero-tag">
                  {tag}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="project-hero-actions">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    View Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn secondary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                      />
                    </svg>
                    View GitHub
                  </a>
                )}
              </div>
            )}
          </div>

          <div
            className="project-hero-visual"
            style={{
              background: `linear-gradient(135deg, ${project.color}33, ${project.color}66)`,
            }}
          >
            <div className="project-hero-number">{project.id.split('-')[0].toUpperCase()}</div>
          </div>
        </div>
      </m.div>

      <div className="project-detail-content">
        {/* Quick Stats */}
        <m.div className="project-stats" variants={fadeIn}>
          <div className="stat-card">
            <div className="stat-label">Development Time</div>
            <div className="stat-value">{project.metrics.development}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Complexity</div>
            <div className="stat-value">{project.metrics.complexity}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Team Size</div>
            <div className="stat-value">{project.metrics.teamSize}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Lines of Code</div>
            <div className="stat-value">{project.metrics.linesOfCode}</div>
          </div>
        </m.div>

        {/* Key Features */}
        <m.section className="project-section" variants={fadeIn}>
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <m.div
                key={index}
                className="feature-card"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="feature-icon" style={{ color: project.color }}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="feature-text">{feature}</p>
              </m.div>
            ))}
          </div>
        </m.section>

        {/* AI Prompt Section */}
        {project.detailedPrompt && (
          <m.section className="project-section prompt-section" variants={fadeIn}>
            <h2 className="section-title">Full Implementation Prompt</h2>
            <p className="section-description">
              Copy this comprehensive prompt and paste it into AI tools like Claude, ChatGPT, or
              other AI assistants to generate the complete project implementation.
            </p>

            <div className="prompt-container">
              <div className="prompt-header">
                <span className="prompt-label">AI Generation Prompt</span>
                <button
                  className="copy-button"
                  onClick={() => {
                    navigator.clipboard.writeText(project.detailedPrompt)
                    alert('Prompt copied to clipboard!')
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4H14C15.1046 4 16 4.89543 16 6V8M10 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8H10C8.89543 8 8 8.89543 8 10V18C8 19.1046 8.89543 20 10 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Copy Prompt
                </button>
              </div>
              <pre className="prompt-code">
                <code>{project.detailedPrompt}</code>
              </pre>
            </div>
          </m.section>
        )}

        {/* Technology Stack */}
        <m.section className="project-section" variants={fadeIn}>
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-stack-grid">
            {Object.entries(project.technologies).map(([category, techs]) => (
              <div key={category} className="tech-category">
                <h3 className="tech-category-title">
                  {category.replace(/([A-Z])/g, ' $1').trim()}
                </h3>
                <div className="tech-tags">
                  {techs.map((tech) => (
                    <span key={tech} className="tech-tag" style={{ borderColor: project.color }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </m.section>

        {/* Navigation */}
        <m.div className="project-navigation" variants={fadeIn}>
          <button className="nav-button primary" onClick={() => navigate('/')}>
            Back to All Projects
          </button>
          {project.detailedPrompt && (
            <button
              className="nav-button secondary"
              onClick={() => {
                navigator.clipboard.writeText(project.detailedPrompt)
                alert('Prompt copied! Ready to paste into your AI tool.')
              }}
            >
              Copy Prompt & Start Building
            </button>
          )}
        </m.div>
      </div>
    </m.div>
  )
}

export default ProjectDetail
