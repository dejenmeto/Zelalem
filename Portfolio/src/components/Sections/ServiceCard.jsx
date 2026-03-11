// src/components/Sections/ServiceCard.jsx
import "../../styles/service-card.css";

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <button className="service-link">Learn More →</button>
    </div>
  );
};

export default ServiceCard;
