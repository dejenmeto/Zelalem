// src/pages/ServicesPage.jsx
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import "../styles/services.css";

const ServicesPage = () => {
  const services = [
    {
      icon: "🩺",
      title: "Preventive Care",
      description:
        "Comprehensive wellness exams, vaccinations, and parasite prevention to keep your pets healthy.",
      features: [
        "Annual wellness exams",
        "Vaccinations",
        "Parasite prevention",
        "Nutritional counseling",
        "Weight management",
      ],
    },
    {
      icon: "🔬",
      title: "Diagnostic Services",
      description:
        "State-of-the-art diagnostic equipment for accurate and timely diagnosis.",
      features: [
        "Digital X-ray",
        "Ultrasound",
        "In-house laboratory",
        "Blood work analysis",
        "Urinalysis",
      ],
    },
    {
      icon: "⚕️",
      title: "Surgery",
      description:
        "Advanced surgical suite for routine and complex procedures.",
      features: [
        "Soft tissue surgery",
        "Orthopedic surgery",
        "Dental surgery",
        "Emergency surgery",
        "Laser surgery",
      ],
    },
    {
      icon: "🦷",
      title: "Dental Care",
      description: "Complete dental services for optimal oral health.",
      features: [
        "Dental cleanings",
        "Oral exams",
        "Extractions",
        "Dental X-rays",
        "Oral surgery",
      ],
    },
    {
      icon: "🚑",
      title: "Emergency Care",
      description: "24/7 emergency services for critical situations.",
      features: [
        "Trauma care",
        "Toxic ingestion",
        "Emergency surgery",
        "Critical care",
        "After-hours support",
      ],
    },
    {
      icon: "🐱",
      title: "Specialized Care",
      description:
        "Specialized treatment for specific conditions and life stages.",
      features: [
        "Geriatric care",
        "Pediatric care",
        "Chronic disease management",
        "Pain management",
        "Acupuncture",
      ],
    },
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="hero-subtitle">
            Comprehensive veterinary care tailored to your pet's needs
          </p>
        </div>
      </section>

      <section className="services-grid-section section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-detailed-card">
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="service-cta">
        <div className="container">
          <h2>Ready to schedule an appointment?</h2>
          <p>Contact us today to discuss your pet's healthcare needs</p>
          <button className="btn btn-primary btn-large">
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
