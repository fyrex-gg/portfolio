/**
 * Portfolio Projects Data
 */

const projectsData = [
  {
    id: 'collaborative-whiteboard',
    title: 'Real-Time Collaborative Whiteboard',
    slug: 'collaborative-whiteboard',
    category: 'Real-Time Collaboration',
    color: '#8b5cf6',
    tags: ['React', 'TypeScript', 'Convex', 'Canvas API', 'Framer Motion'],
    shortDescription:
      'Multi-user collaborative whiteboard with real-time sync, drawing tools, and team presence — built with React and Convex.',

    liveUrl: 'https://real-time-whiteboard-sigma.vercel.app/',
    githubUrl: 'https://github.com/fyrex-gg/real-time-whiteboard',
    status: 'live',

    features: [
      'Real-time multi-user collaboration with live cursor tracking',
      'Full drawing toolkit: shapes, freehand, text, sticky notes',
      'Infinite canvas with pan and zoom',
      'Undo/redo history',
      'Export to PNG',
      'User presence indicators',
    ],

    technologies: {
      frontend: ['React', 'TypeScript', 'Canvas API', 'Framer Motion'],
      backend: ['Convex'],
      deployment: ['Vercel'],
    },

    metrics: {
      development: '3 weeks',
      complexity: 'Intermediate',
      teamSize: '1 developer',
      linesOfCode: '~3,000',
    },
  },

  {
    id: 'hotshot',
    title: 'Hotshot — Nightlife Gamification Platform',
    slug: 'hotshot',
    category: 'Full-Stack SaaS',
    color: '#ec4899',
    tags: ['Next.js', 'TypeScript', 'Convex', 'Stripe', 'TailwindCSS'],
    shortDescription:
      'Nightlife platform where attendees request songs, earn reward points, skip queues with QR codes, and clubs manage events with real-time data.',

    liveUrl: 'https://hotshot-six.vercel.app',
    githubUrl: 'https://github.com/fyrex-gg/hotshot',
    status: 'live',

    features: [
      'QR-code check-in with skip-the-line support',
      'Tipped song request queue with real-time DJ display',
      'Loyalty points system and reward redemption',
      'Multi-role dashboard: attendee, DJ, venue admin',
      'Stripe payments for tips and premium features',
      'Event and happy hour scheduling',
      'Leaderboards and gamification badges',
    ],

    technologies: {
      frontend: ['Next.js 16', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      backend: ['Convex', 'Convex Auth'],
      payments: ['Stripe'],
      deployment: ['Vercel', 'Convex Cloud'],
    },

    metrics: {
      development: 'Ongoing',
      complexity: 'Advanced',
      teamSize: '1 developer',
      linesOfCode: '~15,000',
    },
  },

  {
    id: 'exacta-branding',
    title: 'Exacta — Branding Agency Website',
    slug: 'exacta-branding',
    category: 'Marketing Website',
    color: '#f59e0b',
    tags: ['HTML', 'CSS', 'JavaScript'],
    shortDescription:
      'Clean, modern website for a Bulgarian branding and design agency — showcasing their services, portfolio, and identity.',

    liveUrl: 'https://exacta-branding.vercel.app',
    githubUrl: 'https://github.com/fyrex-gg/branding-agency-website',
    status: 'live',

    features: [
      'Responsive multi-section layout',
      'Service and portfolio showcase',
      'Smooth scroll interactions',
      'Contact form',
      'Custom brand identity',
    ],

    technologies: {
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      deployment: ['Vercel'],
    },

    metrics: {
      development: '1 week',
      complexity: 'Beginner',
      teamSize: '1 developer',
      linesOfCode: '~800',
    },
  },

  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    slug: 'portfolio',
    category: 'Personal Project',
    color: '#06b6d4',
    tags: ['React', 'Three.js', 'Framer Motion', 'Vite'],
    shortDescription:
      'This portfolio — a 3D interactive site built with React, Three.js particle system, and Framer Motion animations.',

    liveUrl: 'https://portfolio-one-vert-20.vercel.app',
    githubUrl: 'https://github.com/fyrex-gg/portfolio',
    status: 'live',

    features: [
      'Flow-field particle animation with WebGL via Three.js',
      'Mouse-reactive 3D camera tracking',
      'Smooth page transitions with Framer Motion',
      'Project detail pages with dynamic routing',
      'Responsive design',
    ],

    technologies: {
      frontend: ['React', 'Three.js', '@react-three/fiber', 'Framer Motion', 'Vite'],
      deployment: ['Vercel'],
    },

    metrics: {
      development: '2 weeks',
      complexity: 'Intermediate',
      teamSize: '1 developer',
      linesOfCode: '~2,000',
    },
  },
]

export default projectsData
