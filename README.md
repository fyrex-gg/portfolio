# Portfolio

Personal portfolio website showcasing my work and skills.

## Technologies

### Core
- **React 19** - UI library with latest features
- **Vite** - Lightning-fast build tool and dev server
- **JavaScript (ES6+)** - Modern JavaScript

### Animation & Interactivity
- **Framer Motion** - Declarative animations and micro-interactions
- **Three.js** - WebGL-based 3D particle scene
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **vanilla-tilt** - 3D tilt effects for cards

### Styling
- **CSS3** - Custom properties (CSS variables) for theming
- **Modern CSS** - Grid, Flexbox, custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/fyrex-gg/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

   The site will open at `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (creates `dist` folder)
- `npm run preview` - Preview production build locally

## Features

### Interactive Elements (10+ Features!)
- **Custom Cursor** - Smooth spring-based cursor with hover effects
- **Magnetic Buttons** ✨ NEW! - Buttons that attract toward cursor
- **3D Tilt Cards** ✨ NEW! - Cards with perspective tilt and glare effects
- **Text Reveal** ✨ NEW! - Word-by-word animated text reveals
- **Parallax Scroll** ✨ NEW! - Multi-speed scroll effects for depth
- **Interactive Background** ✨ NEW! - Mouse-following gradient orbs
- **3D Particle Scene** - Custom 5000-particle system with animations
- **Scroll Animations** - Staggered fade-in effects on viewport
- **Enhanced Micro-interactions** - 50+ unique interactive moments

### Design
- **Dark Aesthetic** - Modern dark theme with indigo accents
- **Design System** - Comprehensive token system for consistency
- **WCAG AA+ Compliant** - Accessible color contrasts and keyboard navigation
- **Responsive** - Mobile-first approach with smooth transitions

### Performance
- **Code Splitting** - Separate chunks for React, Motion, and Three.js
- **Optimized Bundle** - ~350KB gzipped total
- **Hardware Acceleration** - GPU-accelerated animations
- **60fps Animations** - Smooth interactions on all devices
- **Lazy Loading** - Components loaded on demand

See [FEATURES.md](FEATURES.md) and **[INTERACTIVE_FEATURES.md](INTERACTIVE_FEATURES.md)** for detailed documentation.

## Project Structure

```
portfolio/
├── .claude/                    # Claude Code configuration
│   ├── commands/              # Custom slash commands
│   └── context/               # Design principles
├── public/                    # Static files
│   ├── .htaccess             # HostGator configuration
│   └── favicon.svg           # Site icon
├── src/
│   ├── components/                # React components
│   │   ├── CustomCursor.jsx       # Custom cursor effect
│   │   ├── MagneticButton.jsx     # ✨ Magnetic button component
│   │   ├── TiltCard.jsx           # ✨ 3D tilt card wrapper
│   │   ├── TextReveal.jsx         # ✨ Text reveal animation
│   │   ├── ParallaxSection.jsx    # ✨ Parallax scroll wrapper
│   │   ├── InteractiveBackground.jsx # ✨ Mouse-following background
│   │   ├── Navigation.jsx         # Site navigation
│   │   ├── Hero.jsx               # Hero section with interactions
│   │   ├── ParticleScene.jsx      # ✨ Custom 3D particle system
│   │   ├── HeroScene.jsx          # (Legacy scene - not used)
│   │   ├── SplineScene.jsx        # (Legacy Spline - not used)
│   │   ├── About.jsx              # About section
│   │   ├── Projects.jsx           # Projects grid with tilt cards
│   │   └── Contact.jsx            # Contact section
│   ├── styles/                    # Component styles
│   │   ├── index.css              # Global styles & design tokens
│   │   ├── App.css                # App layout
│   │   ├── CustomCursor.css       # Cursor styles
│   │   ├── MagneticButton.css     # ✨ Magnetic button & tilt styles
│   │   ├── InteractiveBackground.css # ✨ Background effects
│   │   ├── Navigation.css         # Nav styles
│   │   ├── Hero.css               # Hero styles
│   │   ├── About.css              # About styles
│   │   ├── Projects.css           # Projects styles
│   │   └── Contact.css            # Contact styles
│   ├── assets/               # Images, fonts (add your media here)
│   ├── App.jsx               # Main App component
│   └── main.jsx              # Application entry point
├── index.html                # HTML template
├── vite.config.js           # Vite configuration with optimizations
├── package.json             # Dependencies and scripts
├── FEATURES.md              # Detailed feature documentation
├── INTERACTIVE_FEATURES.md  # ✨ Advanced interactions guide
├── DEPLOYMENT.md            # HostGator deployment guide
├── QUICKSTART.md            # Development quick start
└── README.md                # This file
```

## Deployment

This project is configured for deployment on **HostGator shared hosting**.

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `dist` folder to your HostGator `public_html` directory

3. Ensure `.htaccess` file is uploaded for proper routing

## Customization

### Quick Customization Tips

1. **Change Colors:**
   - Edit CSS variables in [src/styles/index.css](src/styles/index.css)
   - Modify `--primary-color`, `--bg-color`, etc.

2. **Update Content:**
   - Personal info: [src/components/Hero.jsx](src/components/Hero.jsx)
   - About section: [src/components/About.jsx](src/components/About.jsx)
   - Projects: [src/components/Projects.jsx](src/components/Projects.jsx)

3. **Adjust Interactions:**
   - Animation speed: Change transition variables in `index.css`
   - Cursor: Edit spring config in [src/components/CustomCursor.jsx](src/components/CustomCursor.jsx)
   - Magnetic buttons: Adjust magnetic strength in [src/components/MagneticButton.jsx](src/components/MagneticButton.jsx)
   - Tilt cards: Modify tilt options when using [TiltCard](src/components/TiltCard.jsx)
   - Text reveal: Adjust stagger timing in [TextReveal.jsx](src/components/TextReveal.jsx)
   - Particle scene: Adjust particle count in [src/components/ParticleScene.jsx](src/components/ParticleScene.jsx)

See [QUICKSTART.md](QUICKSTART.md) and [INTERACTIVE_FEATURES.md](INTERACTIVE_FEATURES.md) for detailed guides.

## Documentation

- **[INTERACTIVE_FEATURES.md](INTERACTIVE_FEATURES.md)** - 🎯 **Advanced interactivity guide** (10+ features)
- [FEATURES.md](FEATURES.md) - Comprehensive feature documentation
- [DEPLOYMENT.md](DEPLOYMENT.md) - HostGator deployment instructions
- [QUICKSTART.md](QUICKSTART.md) - Development and customization guide

## Development

Built with Claude Code for AI-assisted development.

- Design principles in `.claude/context/`
- Custom slash commands for code review
- MCP server support for testing

## License

ISC
