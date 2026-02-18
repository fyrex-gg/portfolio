import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="app-footer">
      <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer
