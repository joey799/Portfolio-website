import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()

  const pageMap = {
    '/': 'Home',
    '/about': 'About Me',
    '/education': 'Education & Work',
    '/certifications': 'Certifications',
    '/interests': 'Interests & Hobbies',
    '/contact': 'Contact Me'
  }

  const currentPage = pageMap[location.pathname] || ''

  return (
    <header>
      <div className="container header-top">
        <h1>Joey Lourens</h1>
      </div>
      <div className="header-line">
        <span className="page-name">{currentPage}</span>
      </div>
    </header>
  )
}
