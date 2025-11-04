import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="project-card" onClick={handleClick}>
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description.substring(0, 100)}...</p>
      </div>
    </div>
  );
};

export default ProjectCard;
