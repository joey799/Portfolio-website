import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { homeData } from "../data/homeData";

export default function Home() {
  const navigate = useNavigate();
  const { intro } = homeData;

  return (
    <main className="home-container">

      <section className="intro">
        <img src={intro.image} alt={intro.name} className="intro-image" />
        <div className="intro-text">
          <h1>{intro.name}</h1>
          <p>{intro.description}</p>
          <button onClick={() => navigate(intro.buttonLink)}>
            {intro.buttonText}
          </button>
        </div>
      </section>

      <section className="projects">
        <h2>Mijn Projecten</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}
