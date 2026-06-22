import React from "react";
import { motion } from "motion/react";
import { aboutInfo } from "../data/aboutData";

// Import je nieuwe foto's — pas de paden aan naar jouw assets map
import desertSolo from "../assets/images/IMG_1553.jpeg";
import desertShot from "../assets/images/IMG_1558.JPG";
import gymSelfie from "../assets/images/joey4.JPG";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const { intro, values } = aboutInfo;

  return (
    <main className="bg-black text-white font-sans min-h-screen">

      {/* HERO */}
      <section className="flex flex-col md:flex-row items-start gap-16 max-w-6xl mx-auto pt-40 px-6 md:px-12 mb-24">

        {/* Text — neemt meer ruimte */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4"
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
          >
            Web Developer · Rotterdam
          </motion.p>

          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight"
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
          >
            Hoi! Ik ben<br />{intro.name}
          </motion.h2>

          {intro.description.split("\n\n").map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-base md:text-lg text-neutral-400 mb-5 leading-relaxed font-serif"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 2}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Main photo — compact portrait */}
        <motion.div
          className="flex-shrink-0 self-start mx-auto md:mx-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-56 md:w-72">
            {/* Offset border accent */}
            <div className="absolute inset-0 translate-x-2 translate-y-2 border border-neutral-700 rounded-2xl" />
            <img
              src={desertSolo}
              alt={intro.name}
              className="relative w-full aspect-[3/4] object-cover object-top rounded-2xl"
            />
          </div>
        </motion.div>
      </section>

      {/* PHOTO STRIP — 3 kleine foto's */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 mb-32">
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { src: desertSolo, label: "Egypt" },
            { src: desertShot, label: "Egypt" },
            { src: gymSelfie, label: "Gym" },
          ].map(({ src, label }, i) => (
            <motion.div
              key={label}
              className="relative overflow-hidden rounded-xl aspect-[3/4] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover="hover"
            >
              <motion.img
                src={src}
                alt={label}
                className="w-full h-full object-cover object-top"
                variants={{ hover: { scale: 1.06 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              {/* Hover overlay met label */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-end p-3"
                initial={{ opacity: 0 }}
                variants={{ hover: { opacity: 1 } }}
                transition={{ duration: 0.25 }}
              >
                <span className="text-xs uppercase tracking-widest text-white/70">{label}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* KERNWAARDEN */}
      <section className="max-w-6xl mx-auto mb-32 px-6 md:px-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kernwaarden
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.id}
              className="flex justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.div
                className="border border-white px-6 py-2 uppercase tracking-widest text-sm md:text-base font-medium text-white font-sans text-center cursor-default"
                whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
                transition={{ duration: 0.2 }}
              >
                {value.title}
              </motion.div>
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