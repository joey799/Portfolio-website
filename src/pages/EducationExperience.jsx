import React from "react";
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

        {/* DIPLOMA'S */}
        <section className="mb-32">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Mijn Diploma's</h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-16">
            Hier vind je een overzicht van de diploma’s en certificaten die ik heb behaald.
          </p>

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
            {certificates.map(cert => (
              <DiplomaCard key={cert.id} certificate={cert} />
            ))}
          </div>
        </section>

        {/* EDUCATION & EXPERIENCE */}
        <section>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Education & Experience</h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-16">
            Hier vind je een overzicht van mijn opleidingen, werkervaring en stages.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-8 gap-0 text-center border-l border-r border-white/30">
            {years.map((year, index) => (
              <div
                key={year}
                className={`flex flex-col items-center border-l border-white/20 ${index < years.length - 1 ? "border-r border-white/20" : ""}`}
              >
                <h2 className="font-bold text-gray-400 mb-4">{year}</h2>

                {/* Schools */}
                {schools.filter(s => year >= s.start && year <= s.end).map((s,i) => (
                  <div key={i} className="bg-gray-800 p-3 mb-3 border border-gray-700 hover:bg-gray-700 rounded-md text-white font-semibold transition transform hover:scale-105">
                    <span>{s.name}</span>
                    <div className="text-sm text-gray-300">School</div>
                  </div>
                ))}

                {/* Work */}
                {work.filter(w => year >= w.start && year <= w.end).map((w,i) => (
                  <div key={i} className="bg-gray-700 p-3 mb-3 border border-gray-600 hover:bg-gray-600 rounded-md text-white font-semibold transition transform hover:scale-105">
                    <span>{w.name}</span>
                    <div className="text-sm text-gray-300">Werk</div>
                  </div>
                ))}

                {/* Internships / Stage */}
                {internships.filter(i => year >= i.start && year <= i.end).map((i,j) => (
                  <div key={j} className="bg-gray-700 p-3 mb-3 border border-gray-600 hover:bg-gray-600 rounded-md text-white font-semibold transition transform hover:scale-105">
                    <span>{i.name} (Stage)</span>
                    <div className="text-sm text-gray-300">Stage</div>
                  </div>
                ))}

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

      </div>
    </main>
  );
}
