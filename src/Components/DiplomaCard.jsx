import { useNavigate } from "react-router-dom";

const DiplomaCard = ({ certificate }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/certifications/${certificate.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer rounded-lg overflow-hidden bg-neutral-900 shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-2 hover:scale-105"
    >
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{certificate.title}</h3>
        <p className="text-neutral-400 text-sm">{certificate.school}</p>
        <p className="text-neutral-500 text-xs">{certificate.year}</p>
      </div>
    </div>
  );
};

export default DiplomaCard;
