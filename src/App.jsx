import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Home from './pages/Home'
import DetailPage from './components/DetailPage';
import About from './pages/About'
import Education from './pages/Education'
import Certifications from './pages/Certifications'
import CertificateDetail from './components/CertificateDetail';
import Interests from './pages/Interests'
import Contact from './pages/Contact'
import './index.css'
import './App.css' 

export default function App() {
  return (
    <div id="app">
      <Header currentPage="Home" />
      <div id="main-content">
        <Navbar />
        <div id="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/certifications/:id" element={<CertificateDetail />} />
            <Route path="/interests" element={<Interests />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:id" element={<DetailPage />} />
          </Routes>
        </div>
      </div>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} Joey Lourens
        </div>
      </footer>
    </div>
  )
}
