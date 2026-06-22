import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const DiplomaCard = ({ certificate }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/certifications/${certificate.id}`)}
      className="cursor-pointer rounded-lg overflow-hidden bg-neutral-900 shadow-md"
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255,255,255,0.08)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden">
        <motion.img
          src={certificate.image}
          alt={certificate.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.4 }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
        <p className="text-neutral-400 text-sm">{certificate.school}</p>
        <p className="text-neutral-500 text-xs">{certificate.year}</p>
      </div>
    </motion.div>
  );
};

export default DiplomaCard;