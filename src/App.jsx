import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import CustomCursor from './components/CustomCursor'
import InteractiveBackground from './components/InteractiveBackground'
import './styles/App.css'

// Loading component
function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
    </div>
  )
}

// Home Page Component
function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Router>
        <div className="app">
          {/* Interactive Background */}
          <InteractiveBackground />

          {/* Custom Cursor */}
          <CustomCursor />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="app-main">
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project/:slug" element={<ProjectDetail />} />
              </Routes>
            </Suspense>
          </main>

          {/* Footer */}
          <footer className="app-footer">
            <div className="footer-content">
              <p>&copy; 2025 Portfolio. All rights reserved.</p>
              <p className="footer-tagline">Built with React, Three.js & Framer Motion</p>
            </div>
          </footer>
        </div>
      </Router>
    </LazyMotion>
  )
}

export default App
