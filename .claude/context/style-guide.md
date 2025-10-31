# Branding Agency Website - Style Guide

## Code Style

### HTML
- Use semantic HTML5 elements
- Maintain proper indentation (4 spaces)
- Use Bulgarian language for user-facing text
- Include ARIA labels for accessibility
- Use meaningful class names following BEM methodology

### CSS
- Use CSS custom properties for theming
- Follow mobile-first responsive design
- Use glassmorphism design pattern
- Maintain consistent spacing (multiples of 0.5rem)
- Use CSS transitions for smooth interactions
- Prefer flexbox and grid for layouts

### JavaScript
- Use modern ES6+ syntax
- Prefer const over let, avoid var
- Use meaningful variable names
- Add comments for complex logic
- Use arrow functions for callbacks
- Implement proper error handling

## Design Principles

### Colors
- Light mode: High contrast, clean whites and grays
- Dark mode: Deep blacks with subtle gradients
- Accent colors: Gradient-based (purple, pink, blue)
- Text: High readability with proper contrast ratios

### Typography
- Font family: Inter
- Headings: Bold (700-900), tight letter-spacing
- Body text: Regular (400), comfortable line-height (1.6-1.8)
- Use fluid typography for responsiveness

### Spacing
- Consistent vertical rhythm
- Section padding: 80px (desktop), 60px (mobile)
- Card padding: 2rem
- Gap between elements: 1rem, 2rem, 3rem

### Components
- Cards: Glassmorphism with blur effects
- Buttons: Clear hierarchy (primary/secondary)
- Forms: Proper validation and feedback
- Icons: Use emoji or SVG, never images
- Animations: Smooth, purpose-driven, not excessive

### Accessibility
- Minimum contrast ratio: 4.5:1 for normal text
- All interactive elements keyboard accessible
- ARIA labels for screen readers
- Focus indicators visible
- Proper heading hierarchy

## File Organization
```
/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # All JavaScript
└── .claude/           # Claude Code workflows
```

## Naming Conventions
- CSS classes: kebab-case (e.g., `hero-content`, `service-card`)
- JavaScript variables: camelCase (e.g., `contactForm`, `navMenu`)
- Files: lowercase with hyphens (e.g., `style.css`, `code-review.md`)
