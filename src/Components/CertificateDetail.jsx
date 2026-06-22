import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
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

      <motion.button
        onClick={() => navigate(-1)}
        className="absolute top-6 right-6 md:top-8 md:right-12 px-4 py-2 border border-white rounded text-sm uppercase tracking-widest"
        whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.2 }}
      >
        ← Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{certificate.title}</h1>
        <p className="text-gray-300 mb-4">{certificate.school}</p>
      </motion.div>

      <motion.div
        className="overflow-hidden rounded-lg mb-6"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        <img src={certificate.image} alt={certificate.title} className="w-full rounded-lg" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5 }}
      >
        <p className="text-gray-300 mb-4">{certificate.description}</p>

        <div className="mb-6 space-y-2">
          <p><span className="text-white font-semibold">Type:</span> {certificate.type}</p>
          <p><span className="text-white font-semibold">Duur:</span> {certificate.duration}</p>
          <p><span className="text-white font-semibold">Jaar:</span> {certificate.year}</p>
        </div>

        {certificate.link && (
          <motion.button
            onClick={() => window.open(certificate.link, "_blank")}
            className="border border-white px-6 py-2 uppercase tracking-widest text-sm"
            whileHover={{ backgroundColor: "#ffffff", color: "#000000" }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
          >
            Bekijk Diploma
          </motion.button>
        )}
      </motion.div>
    </main>
  );
}