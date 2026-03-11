// src/pages/HomePage.jsx
import { Link } from "react-router-dom";
import HeroSection from "../components/Sections/HeroSection";
// import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import ServiceCard from "../components/Sections/ServiceCard";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import GalleryGrid from "../components/Sections/GalleryGrid";
import "../styles/home.css";
// import

const HomePage = () => {
  const services = [
    {
      icon: "🩺",
      title: "Preventive Care",
      description:
        "Comprehensive wellness exams and vaccinations to keep your pets healthy.",
    },
    {
      icon: "🦷",
      title: "Dental Care",
      description:
        "Professional cleaning, extractions, and oral surgery for optimal dental health.",
    },
    {
      icon: "🔬",
      title: "Diagnostic Imaging",
      description:
        "Advanced X-ray and ultrasound technology for accurate diagnosis.",
    },
    {
      icon: "⚕️",
      title: "Surgery",
      description:
        "State-of-the-art surgical suite for routine and complex procedures.",
    },
    {
      icon: "💊",
      title: "Emergency Care",
      description: "24/7 emergency services for critical conditions.",
    },
    {
      icon: "🐾",
      title: "Geriatric Care",
      description:
        "Specialized care for senior pets to ensure comfort and quality of life.",
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "10k+", label: "Pets Treated" },
    { number: "24/7", label: "Emergency Care" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <div className="home-page">
      {/* Hero Section - Full Width */}
      <div className="page-top-spacer"></div>
      <HeroSection />

      {/* Welcome Section */}
      <section className="welcome-section section">
        <div className="container">
          <div className="welcome-grid">
            <div className="welcome-content">
              <h2 className="section-title">Welcome to My Practice</h2>
              <p className="welcome-text">
                With over 15 years of dedicated service in veterinary medicine,
                I provide compassionate, comprehensive care for your beloved
                companions. My approach combines cutting-edge medical technology
                with genuine love for animals.
              </p>
              <div className="welcome-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>State-of-the-art facility</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Compassionate care</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Emergency services</span>
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Learn More About Me
              </Link>
            </div>
            <div className="welcome-image">
              <ImagePlaceholder
                src="/images/home1.png"
                alt="Dr. Zelalem Getnet examining a dog"
                type="rectangle"
                size="large"
                caption="Annual checkup with Dr. Zelalem"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">
            Comprehensive veterinary care tailored to your pet's needs
          </p>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - Multiple Image Placeholders */}
      <section className="gallery-section section">
        <div className="container">
          <h2 className="section-title">Patient Gallery</h2>
          <p className="section-subtitle">Some of my wonderful patients</p>
          <GalleryGrid />
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="case-preview-section section">
        <div className="container">
          <h2 className="section-title">Recent Success Stories</h2>
          <div className="case-grid">
            <div className="case-item">
              <ImagePlaceholder
                src="/img/before.png"
                alt="Max before surgery"
                type="square"
                size="medium"
                caption="Before: ACL injury"
              />
              <div className="case-info">
                <h3>Max's ACL Recovery</h3>
                <p>Successful TPLO surgery with full recovery in 12 weeks</p>
              </div>
            </div>
            <div className="case-item">
              <ImagePlaceholder
                src="/img/after.png"
                alt="Max after recovery"
                type="square"
                size="medium"
                caption="After: Running again"
              />
              <div className="case-info">
                <h3>Back to Happy Life</h3>
                <p>Max is now pain-free and active</p>
              </div>
            </div>
            <div className="case-item case-before-after">
              <div className="before-after-slider">
                <ImagePlaceholder
                  src="/img/image1.png"
                  alt="X-ray before treatment"
                  type="rectangle"
                  size="small"
                />
                <span className="arrow">→</span>
                <ImagePlaceholder
                  src="/img/image2.png"
                  alt="During surgery"
                  type="rectangle"
                  size="small"
                />
              </div>
              <div className="case-info">
                <h3>Leg Surgery</h3>
                <p>Complex dental extraction with perfect outcome</p>
              </div>
            </div>
          </div>
          <div className="case-cta">
            <Link to="/case-studies" className="btn btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">What Pet Parents Say</h2>
          <TestimonialSlider />
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Give Your Pet the Best Care?</h2>
            <p>
              Schedule an appointment today and experience compassionate
              veterinary medicine
            </p>
            <Link to="/contact" className="btn btn-primary btn-large">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
