import React from "react";
import InterestCard from "../components/InterestCard";
import { interests } from "../data/interests";

export default function Interests() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <div className="pt-32 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Titel zonder puntjes */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-center md:text-left list-none">
          Interests & Hobbies
        </h1>

        {/* Grid met kaarten */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-3 list-none">
          {interests.map((interest, index) => (
            <InterestCard
              key={interest.category}
              {...interest}
              light={index < 2} // eerste 2 kaarten lichter
            />
          ))}
        </div>

        {/* FOOTER zonder puntjes */}
        <footer className="border-t border-neutral-700 py-10 text-center text-xs uppercase tracking-widest text-neutral-400 mt-32 space-y-2 list-none">
          <div>© {new Date().getFullYear()} Joey Lourens</div>
          <div>joeylourens64@gmail.com</div>
          <div>+31 6 38 09 73 91</div>
        </footer>
      </div>
    </main>
  );
}