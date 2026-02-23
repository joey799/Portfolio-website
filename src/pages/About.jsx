import React from "react";
import { aboutInfo } from "../data/aboutData";

export default function About() {
  const { intro, values } = aboutInfo;

  return (
    <main className="bg-black text-white font-sans min-h-screen">
      
      {/* HERO / OVER MIJ SECTION */}
      <section className="flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto pt-40 px-6 md:px-12 mb-32">
        
        {/* Tekst */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Hoi! Ik ben {intro.name}
          </h2>

          {/* Intro description in serif font */}
          {intro.description.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl text-neutral-300 mb-6 leading-relaxed font-serif"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Foto */}
        <div className="flex-1 px-6 md:px-12">
          <img
            src={intro.image}
            alt={intro.name}
            className="w-full max-w-sm md:max-w-lg h-auto object-cover rounded-lg mx-auto"
          />
        </div>
      </section>

      {/* KERNWAARDEN SECTION */}
      <section className="max-w-7xl mx-auto mb-32 px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left">
          Kernwaarden
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex justify-center items-center"
            >
              {/* "Button-look" op zwarte achtergrond, font-sans */}
              <div className="border border-white px-6 py-2 uppercase tracking-widest text-sm md:text-base font-medium text-white font-sans text-center">
                {value.title}
              </div>
            </div>
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