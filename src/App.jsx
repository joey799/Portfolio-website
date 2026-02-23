import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import EducationExperience from "./pages/EducationExperience";
import Interests from "./pages/Interests";
import Contact from "./pages/Contact";

// Let op: DetailPage staat in components
import DetailPage from "./components/DetailPage"; 
import CertificateDetail from "./components/CertificateDetail";

import "./index.css";
import "./App.css";

export default function App() {
  return (
    <div id="app" className="bg-black text-white font-sans min-h-screen">
      
      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/projects" element={<Projects />} />

        {/* Project detail */}
        <Route path="/projects-detail" element={<DetailPage />} />

        <Route path="/education-experience" element={<EducationExperience />} />
        <Route path="/certifications/:id" element={<CertificateDetail />} />

        <Route path="/interests" element={<Interests />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<div className="pt-32 text-white">Pagina niet gevonden</div>} />
      </Routes>
    </div>
  );
}