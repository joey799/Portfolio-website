import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive ? 'active' : ''

  return (
    <nav id="sidebar">
      <NavLink to="/home"  className={linkClass}>Home</NavLink>
      <NavLink to="/about" className={linkClass}>About Me</NavLink>
      <NavLink to="/education" className={linkClass}>Education & Work</NavLink>
      <NavLink to="/certifications" className={linkClass}>Certifications</NavLink>
      <NavLink to="/interests" className={linkClass}>Interests & Hobbies</NavLink>
      <NavLink to="/contact" className={linkClass}>Contact Me</NavLink>
    </nav>
  )
}
