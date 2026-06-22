import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { homeData } from "../data/homeData";

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
        <div className="mx-auto flex flex-col md:flex-row items-center gap-16 max-w-6xl w-full px-6 md:px-12">

          {/* Text — left, takes most space */}
          <div className="flex-1 text-center md:text-left order-2 md:order-1">
            {/* Eyebrow label */}
            <motion.p
              className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Web Developer · Rotterdam
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {intro.name}
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-neutral-400 mb-8 font-serif leading-relaxed max-w-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {intro.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <motion.button
                onClick={() => navigate(intro.buttonLink)}
                className="border border-white px-8 py-3 text-xs font-medium uppercase tracking-widest"
                whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                {intro.buttonText}
              </motion.button>

              <motion.button
                onClick={() => navigate("/projects")}
                className="border border-neutral-700 px-8 py-3 text-xs font-medium uppercase tracking-widest text-neutral-400"
                whileHover={{ borderColor: "#ffffff", color: "#ffffff" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Bekijk projecten
              </motion.button>
            </motion.div>
          </div>

          {/* Photo — compact portrait card, right side */}
          <motion.div
            className="order-1 md:order-2 flex-shrink-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Portrait frame: fixed width, tall crop */}
            <div className="relative w-64 md:w-80">
              {/* Subtle border accent behind the photo */}
              <div className="absolute inset-0 translate-x-3 translate-y-3 border border-neutral-700 rounded-2xl" />
              <img
                src={intro.image}
                alt={intro.name}
                className="relative w-full aspect-[3/4] object-cover object-top rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 md:px-12 py-32">
        <motion.div
          className="mb-20 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-2 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 md:mb-0">Projects</h2>
          <span className="text-sm text-neutral-500 font-serif uppercase tracking-widest">Selected work</span>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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