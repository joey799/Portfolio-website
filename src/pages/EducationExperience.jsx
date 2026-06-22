import React from "react";
import { motion } from "motion/react";
import { certificates } from "../data/certificates";
import DiplomaCard from "../components/DiplomaCard";

export default function EducationExperience() {
  const years = [2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  const schools = [
    { name: "Scheepvaart en Transport College", start: 2018, end: 2022 },
    { name: "Albeda Sportcollege", start: 2022, end: 2024 },
    { name: "Techniek College Rotterdam", start: 2024, end: 2025 },
  ];

  const work = [
    { name: "Action", start: 2021, end: 2021 },
    { name: "Dirk", start: 2022, end: 2022 },
    { name: "Cycloon", start: 2022, end: 2023 },
    { name: "Flink", start: 2023, end: 2024 },
    { name: "Albert Heijn", start: 2024, end: 2025 },
  ];

  const internships = [
    { name: "BokitoCamp", start: 2022, end: 2024 },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">

        {/* DIPLOMAS */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Mijn Diploma's</h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-16">
              Hier vind je een overzicht van de diploma's en certificaten die ik heb behaald.
            </p>
          </motion.div>

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <DiplomaCard certificate={cert} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE TIMELINE */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Education & Experience</h1>
            <p className="text-lg md:text-xl text-neutral-300 mb-16">
              Hier vind je een overzicht van mijn opleidingen, werkervaring en stages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-0 text-center border-l border-r border-white/30">
            {years.map((year, index) => (
              <motion.div
                key={year}
                className={`flex flex-col items-center border-l border-white/20 ${index < years.length - 1 ? "border-r border-white/20" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <h2 className="font-bold text-gray-400 mb-4">{year}</h2>

                {schools.filter(s => year >= s.start && year <= s.end).map((s, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-800 p-3 mb-3 border border-gray-700 rounded-md text-white font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#374151" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{s.name}</span>
                    <div className="text-sm text-gray-300">School</div>
                  </motion.div>
                ))}

                {work.filter(w => year >= w.start && year <= w.end).map((w, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-700 p-3 mb-3 border border-gray-600 rounded-md text-white font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{w.name}</span>
                    <div className="text-sm text-gray-300">Werk</div>
                  </motion.div>
                ))}

                {internships.filter(i => year >= i.start && year <= i.end).map((item, j) => (
                  <motion.div
                    key={j}
                    className="bg-gray-700 p-3 mb-3 border border-gray-600 rounded-md text-white font-semibold"
                    whileHover={{ scale: 1.05, backgroundColor: "#4B5563" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{item.name} (Stage)</span>
                    <div className="text-sm text-gray-300">Stage</div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </section>

        <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
          <div>© {new Date().getFullYear()} Joey Lourens</div>
          <div>joeylourens64@gmail.com</div>
          <div>+31 6 38 09 73 91</div>
        </footer>
      </div>
    </main>
  );
}