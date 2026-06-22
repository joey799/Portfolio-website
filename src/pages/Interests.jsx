import React from "react";
import { motion } from "motion/react";
import InterestCard from "../components/InterestCard";
import { interests } from "../data/interests";

export default function Interests() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Interests & Hobbies
        </motion.h1>

        <div className="grid gap-6 md:gap-8 md:grid-cols-3">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.category}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <InterestCard {...interest} light={index < 2} />
            </motion.div>
          ))}
        </div>

        <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2">
          <div>© {new Date().getFullYear()} Joey Lourens</div>
          <div>joeylourens64@gmail.com</div>
          <div>+31 6 38 09 73 91</div>
        </footer>
      </div>
    </main>
  );
}