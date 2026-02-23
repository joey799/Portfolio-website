import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { certificates } from "../data/certificates";

export default function CertificateDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const certificate = certificates.find((c) => c.id === id);

  if (!certificate) {
    return <p className="text-white p-6">Diploma niet gevonden.</p>;
  }

  return (
    <main className="min-h-screen bg-black text-white font-sans p-6 relative max-w-5xl mx-auto">
      
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 md:top-8 md:right-12 px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
      >
        ← Back
      </button>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        {certificate.title}
      </h1>

      <p className="text-gray-300 mb-4">{certificate.school}</p>

      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full rounded-lg mb-6"
      />

      <p className="text-gray-300 mb-4">{certificate.description}</p>

      <div className="mb-6 space-y-2 text-black-400">
        <p>
          <span className="text-white font-semibold">Type:</span>{" "}
          {certificate.type}
        </p>
        <p>
          <span className="text-white font-semibold">Duur:</span>{" "}
          {certificate.duration}
        </p>
        <p>
          <span className="text-white font-semibold">Jaar:</span>{" "}
          {certificate.year}
        </p>
      </div>

      {certificate.link && (
        <button
          onClick={() => window.open(certificate.link, "_blank")}
          className="border border-white px-6 py-2 uppercase tracking-widest hover:bg-white hover:text-black transition"
        >
          Bekijk Diploma
        </button>
      )}
    </main>
  );
}
