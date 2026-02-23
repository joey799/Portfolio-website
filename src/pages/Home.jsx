import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { homeData } from "../data/homeData";

export default function Home() {
  const navigate = useNavigate();
  const { intro } = homeData;

  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-screen">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-12 max-w-7xl">
          {/* Foto */}
          <div className="flex-1 px-6 md:px-12">
            <img
              src={intro.image}
              alt={intro.name}
              className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-white"
            />
          </div>

          {/* Tekst */}
          <div className="flex-1 text-center md:text-left px-6 md:px-12">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">
              {intro.name}
            </h1>

            {/* DESCRIPTION MET SERIF FONT */}
            <p className="text-lg md:text-xl text-neutral-300 mb-6 font-serif">
              Ik ben een 20-jarige toekomstige webdeveloper uit Rotterdam. Ik ben gepassioneerd over het bouwen van moderne, gebruiksvriendelijke websites en webapplicaties met technologieën als HTML, CSS, JavaScript, PHP, React en Node.js. Ik hou ervan om ideeën om te zetten in werkende oplossingen en blijf mezelf continu ontwikkelen binnen de wereld van ICT en webtechnologie.
            </p>

            <button
              onClick={() => navigate(intro.buttonLink)}
              className="border border-white px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm font-medium uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              {intro.buttonText}
            </button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-12 py-32">
        <div className="mb-20 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-2 md:gap-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-0">Projects</h2>
          <span className="text-sm md:text-base text-neutral-400 font-serif">Selected work</span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
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