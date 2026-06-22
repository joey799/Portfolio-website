import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects-detail#project-${project.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg overflow-hidden bg-neutral-900 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105"
    >
      {/* Video óf afbeelding */}
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
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-neutral-400 text-sm">
          {project.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;