import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) return <h1>Project niet gevonden</h1>;

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Terug
      </button>

      <div className="project-detail">
        <img src={project.image} alt={project.title} className="project-image" />

        <div className="project-info">
          <h1>{project.title}</h1>
          <p>{project.description}</p>

          {project.details && (
            <>
              <h2>Over het project</h2>
              <p>{project.details}</p>
            </>
          )}

          {project.technologies && (
            <>
              <h3>Gebruikte technologieën</h3>
              <ul>
                {project.technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </>
          )}

          {project.role && <p><strong>Rol:</strong> {project.role}</p>}
          {project.duration && <p><strong>Duur:</strong> {project.duration}</p>}

          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
              Bekijk op GitHub →
            </a>
          )}

          {project.liveDemo && (
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="github-link">
              Bekijk live demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
