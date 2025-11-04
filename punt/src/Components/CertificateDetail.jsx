import { useParams, useNavigate } from "react-router-dom";
import { certificates } from "../data/certificates";

const CertificateDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const cert = certificates.find(c => c.id === id);

  if (!cert) return <h1>Certificaat niet gevonden</h1>;

  return (
    <div className="detail-page">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Terug
      </button>

      <div className="project-detail">
        <img src={cert.image} alt={cert.title} className="project-image" />

        <div className="project-info">
          <h1>{cert.title}</h1>
          <p><strong>School:</strong> {cert.school}</p>
          <p><strong>Jaar:</strong> {cert.year}</p>
          {cert.type && <p><strong>Type:</strong> {cert.type}</p>}
          {cert.duration && <p><strong>Duur:</strong> {cert.duration}</p>}
          {cert.description && <p>{cert.description}</p>}
          {cert.link && (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="github-link">
              Bekijk certificaat →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateDetail;

