import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects-detail#project-${project.id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="cursor-pointer rounded-lg overflow-hidden bg-neutral-900 shadow-md"
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(255,255,255,0.08)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    >
      {project.video ? (
        <video
          src={project.video}
          className="w-full h-48 object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-neutral-400 text-sm">
          {project.description.substring(0, 100)}...
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-0.5 border border-neutral-700 text-neutral-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;