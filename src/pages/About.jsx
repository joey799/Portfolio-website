import React from "react";
import { motion } from "motion/react";
import { aboutInfo } from "../data/aboutData";

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
      <section className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto pt-40 px-6 md:px-12 mb-32">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Hoi! Ik ben {intro.name}
          </motion.h2>

          {intro.description.split("\n\n").map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg md:text-xl text-neutral-300 mb-6 leading-relaxed font-serif"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={index + 1}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Photo */}
        <motion.div
          className="flex-1 px-6 md:px-12"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={intro.image}
            alt={intro.name}
            className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg mx-auto"
          />
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="max-w-7xl mx-auto mb-32 px-6 md:px-12">
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