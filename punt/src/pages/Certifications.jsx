import React from "react";
import { useNavigate } from "react-router-dom";
import { certificates } from "../data/certificates";

export default function Certifications() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <section className="intro">
        <div className="intro-text">
          <h1>Mijn Certificaten</h1>
          <p>
            Hier vind je een overzicht van de certificaten en diploma’s die ik
            heb behaald tijdens mijn studie en persoonlijke ontwikkeling.
          </p>
        </div>
      </section>

      <section className="projects">
        <h2>Certificaten</h2>
        <div className="projects-grid">
          {certificates.map(cert => (
            <div
              key={cert.id}
              className="project-card"
              onClick={() => navigate(`/certifications/${cert.id}`)}
            >
              <img src={cert.image} alt={cert.title} className="project-image" />
              <div className="project-info">
                <h3>{cert.title}</h3>
                <p>{cert.school}</p>
                <p>{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
