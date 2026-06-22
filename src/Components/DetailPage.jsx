import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";

export default function DetailPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalVideo, setModalVideo] = useState(null);

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

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setModalVideo(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-12 pt-48 pb-16">
      <div className="max-w-4xl mx-auto">

        <motion.button
          onClick={() => navigate("/projects")}
          className="mb-12 text-sm uppercase tracking-widest text-neutral-400 hover:text-white transition"
          whileHover={{ x: -4 }}
          transition={{ duration: 0.2 }}
        >
          ← Terug naar projecten
        </motion.button>

        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project Details
        </motion.h1>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              id={`project-${project.id}`}
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {index !== 0 && <div className="border-t border-neutral-700 mb-16" />}

              {/* VIDEO or IMAGE */}
              {project.video ? (
                <div className="relative w-full h-72 rounded-lg overflow-hidden mb-8 group">
                  <video
                    src={project.video}
                    className="w-full h-full object-cover"
                    autoPlay loop muted playsInline
                  />
                  <motion.button
                    onClick={() => setModalVideo(project.video)}
                    className="absolute bottom-3 right-3 bg-black/70 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full border border-white flex items-center gap-2"
                    whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                    </svg>
                    Vergroot video
                  </motion.button>
                </div>
              ) : (
                <div className="overflow-hidden rounded-lg mb-8">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}

              <h2 className="text-3xl font-extrabold mb-4">{project.title}</h2>
              <p className="text-neutral-300 mb-6 leading-relaxed">{project.details}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="bg-neutral-800 text-white text-sm px-3 py-1 rounded-full border border-neutral-700"
                    whileHover={{ borderColor: "#ffffff", color: "#ffffff" }}
                    transition={{ duration: 0.2 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <div className="text-sm text-neutral-400 space-y-2 mb-6">
                <p><span className="text-white font-semibold">Rol:</span> {project.role}</p>
                <p><span className="text-white font-semibold">Duur:</span> {project.duration}</p>
              </div>

              <motion.button
                onClick={() => window.open("https://github.com/joey799", "_blank")}
                className="border border-white px-6 py-2 uppercase tracking-widest text-sm"
                whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Bekijk GitHub
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN VIDEO MODAL */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalVideo(null)}
          >
            <motion.div
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalVideo(null)}
                className="absolute -top-10 right-0 text-white text-sm uppercase tracking-widest hover:text-neutral-400 transition flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Sluiten
              </button>
              <video src={modalVideo} className="w-full rounded-lg" controls autoPlay />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
        <div>© {new Date().getFullYear()} Joey Lourens</div>
        <div>joeylourens64@gmail.com</div>
        <div>+31 6 38 09 73 91</div>
      </footer>
    </main>
  );
}