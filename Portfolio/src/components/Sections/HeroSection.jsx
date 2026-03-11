// src/components/Sections/HeroSection.jsx
import { Link } from "react-router-dom";
import ImagePlaceholder from "../Common/ImagePlaceholder";
import "../../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <ImagePlaceholder
        src="/images/image1.png"
        alt="Dr. Zelalem Getnet with animals"
        type="hero"
        overlay={true}
        // overlay={false}
      />
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Dr. Zelalem Getnet
              <span className="hero-subtitle">
                Doctor of Veterinary Medicine
              </span>
            </h1>
            <p className="hero-description">
              Providing compassionate, advanced medical care for your beloved
              companions. With 5+ years of experience in small & large animal
              medicine and surgery.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary btn-large">
                Schedule Appointment
              </Link>
              <Link to="/about" className="btn btn-outline btn-large">
                Meet Dr. Zelalem Getnet
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
