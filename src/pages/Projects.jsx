import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const allProjects = Array.isArray(projects) ? projects : [];

  const filteredProjects = allProjects.filter((project) => {
    const search = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(search) ||
      project.description.toLowerCase().includes(search) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(search))
    );
  });

  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 md:px-12 pt-48 pb-16">

      <div className="max-w-3xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          All Projects
        </motion.h1>

        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Zoek projecten… (titel, omschrijving, technologie)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 rounded-lg text-black text-lg font-medium shadow-lg bg-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </motion.div>
      </div>

      {/* Grid */}
      <section className="max-w-7xl mx-auto">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.06, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.p
              key="empty"
              className="text-center text-gray-400 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Geen projecten gevonden.
            </motion.p>
          )}
        </AnimatePresence>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
        <div>© {new Date().getFullYear()} Joey Lourens</div>
        <div>joeylourens64@gmail.com</div>
        <div>+31 6 38 09 73 91</div>
      </footer>
    </main>
  );
}