import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { homeData } from "../data/homeData";

// Fade-up helper
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Home() {
  const navigate = useNavigate();
  const { intro } = homeData;

  return (
    <main className="bg-black text-white font-sans">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full">
          {/* Photo — slides in from left */}
          <motion.div
            className="flex-1 px-6 md:px-12"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={intro.image}
              alt={intro.name}
              className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg shadow-white"
            />
          </motion.div>

          {/* Text — staggered reveal */}
          <div className="flex-1 text-center md:text-left px-6 md:px-12">
            <motion.h1
              className="text-3xl md:text-5xl font-extrabold mb-6 text-white"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              {intro.name}
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-neutral-300 mb-6 font-serif"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {intro.description}
            </motion.p>

            <motion.button
              onClick={() => navigate(intro.buttonLink)}
              className="border border-white px-6 md:px-10 py-2 md:py-3 text-xs md:text-sm font-medium uppercase tracking-widest transition"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              {intro.buttonText}
            </motion.button>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-12 py-32">
        <motion.div
          className="mb-20 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-2 md:gap-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-0">Projects</h2>
          <span className="text-sm md:text-base text-neutral-400 font-serif">Selected work</span>
        </motion.div>

        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
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