import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const allProjects = Array.isArray(projects) ? projects : [];

  const filteredProjects = allProjects.filter((project) => {
    const search = searchTerm.toLowerCase();

    const inTitle = project.title.toLowerCase().includes(search);
    const inDescription = project.description.toLowerCase().includes(search);
    const inTech = project.technologies.some((tech) =>
      tech.toLowerCase().includes(search)
    );

    return inTitle || inDescription || inTech;
  });

  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 md:px-12 pt-48 pb-16">
      
      <div className="max-w-3xl mx-auto">
        {/* Pagina Titel */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center">
          All Projects
        </h1>

        {/* Zoekbalk */}
        <div className="mb-12">
          <input
            type="text"
            placeholder=" Zoek projecten… (titel, omschrijving, technologie)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-lg text-black text-lg font-medium shadow-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>
      </div>

      {/* Grid van projecten */}
      <section className="max-w-7xl mx-auto">
        {filteredProjects.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400 mt-12">
            Geen projecten gevonden.
          </p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
        <div>© {new Date().getFullYear()} Joey Lourens</div>
        <div>joeylouresns64@gmail.com</div>
        <div>+31 6 38 09 73 91</div>
      </footer>

    </main>
  );
}
