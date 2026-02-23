import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll naar hash
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 pt-48 pb-16">
      <div className="max-w-4xl mx-auto">

        {/* Terug knop */}
        <button
          onClick={() => navigate("/projects")}
          className="mb-12 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition"
        >
          ← Terug naar projecten
        </button>

        {/* Titel */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-16 text-center">
          Project Details
        </h1>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              id={`project-${project.id}`}
              className="scroll-mt-32"
            >
              {index !== 0 && (
                <div className="border-t border-neutral-700 mb-16" />
              )}

              {/* Project afbeelding */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-lg mb-8"
              />

              {/* Project titel en details */}
              <h2 className="text-3xl font-extrabold mb-4">{project.title}</h2>
              <p className="text-neutral-300 mb-6 leading-relaxed">{project.details}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 text-white text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Rol en Duur */}
              <div className="text-sm text-neutral-400 space-y-2 mb-6">
                <p>
                  <span className="text-white font-semibold">Rol:</span> {project.role}
                </p>
                <p>
                  <span className="text-white font-semibold">Duur:</span> {project.duration}
                </p>
              </div>

              {/* GitHub button → opent jouw profiel */}
              <div>
                <button
                  onClick={() => window.open("https://github.com/joey799", "_blank")}
                  className="border border-white px-6 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition"
                >
                  Bekijk GitHub
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
        <div>© {new Date().getFullYear()} Joey Lourens</div>
        <div>joeylouresns64@gmail.com</div>
        <div>+31 6 38 09 73 91</div>
      </footer>
    </main>
  );
}