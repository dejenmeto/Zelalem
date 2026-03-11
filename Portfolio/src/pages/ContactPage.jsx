// src/pages/ContactPage.jsx
import { useState } from "react";
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../styles/contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    service: "general",
    preferredDate: "",
    preferredTime: "",
    message: "",
    urgent: false,
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message:
        "Thank you! Your appointment request has been sent. We will contact you within 24 hours.",
    });

    // Reset form after successful submission
    setTimeout(() => {
      setFormStatus({ submitted: false, success: false, message: "" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        service: "general",
        preferredDate: "",
        preferredTime: "",
        message: "",
        urgent: false,
      });
    }, 5000);
  };

  const services = [
    { value: "general", label: "General Checkup" },
    { value: "emergency", label: "Emergency Care" },
    { value: "surgery", label: "Surgery Consultation" },
    { value: "dental", label: "Dental Care" },
    { value: "vaccination", label: "Vaccinations" },
    { value: "followup", label: "Follow-up Visit" },
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 3:00 PM" },
    { day: "Sunday", hours: "Closed (Emergency Only)" },
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="hero-subtitle">
            We're here to help your pets live their healthiest lives
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>Emergency: (+251) 990-749862</p>
              <p>Appointments: (+251) 943-699679</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>Zelalem@vetcare.com</p>
              <p>Zelalem@gmail.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>123 Veterinary Street</p>
              <p>Addis Ababa, ST 12345</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="contact-main section">
        <div className="container">
          <div className="contact-grid">
            {/* Appointment Form */}
            <div className="contact-form-container">
              <h2>Request an Appointment</h2>
              <p className="form-intro">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              {formStatus.submitted && formStatus.success && (
                <div className="form-success">{formStatus.message}</div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Zelalem Getnet"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="zelalem@gmail.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(+251) 990-749862"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="petName">Pet's Name *</label>
                    <input
                      type="text"
                      id="petName"
                      name="petName"
                      value={formData.petName}
                      onChange={handleChange}
                      required
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Needed *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    {services.map((service) => (
                      <option key={service.value} value={service.value}>
                        {service.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="preferredDate">Preferred Date *</label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="preferredTime">Preferred Time *</label>
                    <input
                      type="time"
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Additional Information</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Please share any specific concerns or questions..."
                  ></textarea>
                </div>

                <div className="form-group checkbox-group">
                  <input
                    type="checkbox"
                    id="urgent"
                    name="urgent"
                    checked={formData.urgent}
                    onChange={handleChange}
                  />
                  <label htmlFor="urgent">
                    This is an urgent/emergency matter
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  Request Appointment
                </button>
              </form>
            </div>

            {/* Sidebar Info */}
            <div className="contact-sidebar">
              {/* Map */}
              <div className="sidebar-section">
                <h3>Our Location</h3>
                <div className="map-container">
                  <ImagePlaceholder
                    src="/test/location.png"
                    alt="Clinic location map"
                    type="rectangle"
                    size="medium"
                  />
                </div>

                <p className="address-detail">
                  123 Veterinary Street
                  <br />
                  Anytown, ST 12345
                  <br />
                  <a href="#" className="directions-link">
                    Get Directions →
                  </a>
                </p>
              </div>

              {/* Business Hours */}
              <div className="sidebar-section hours-section">
                <h3>Business Hours</h3>
                <div className="hours-list">
                  {businessHours.map((item, index) => (
                    <div key={index} className="hours-item">
                      <span className="day">{item.day}</span>
                      <span className="hours">{item.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="emergency-note">
                  <FaClock /> 24/7 Emergency Service Available
                </p>
              </div>

              {/* Emergency Info */}
              <div className="sidebar-section emergency-box">
                <h3>Emergency?</h3>
                <p className="emergency-phone">
                  <FaPhone /> (+251) 990-749862
                </p>
                <p className="emergency-text">
                  For life-threatening emergencies, please call immediately or
                  visit the nearest emergency animal hospital.
                </p>
              </div>

              {/* Clinic Images */}
              <div className="sidebar-section">
                <h3>Our Facility</h3>
                <div className="clinic-images">
                  <ImagePlaceholder
                    src="/contact/image1.png"
                    alt="Clinic exterior"
                    type="square"
                    size="small"
                  />
                  <ImagePlaceholder
                    src="/contact/image2.png"
                    alt="Exam room"
                    type="square"
                    size="small"
                  />
                  <ImagePlaceholder
                    src="/contact/image4.png"
                    alt="Surgery suite"
                    type="square"
                    size="small"
                  />
                  <ImagePlaceholder
                    src="/contact/image3.png"
                    alt="Waiting area"
                    type="square"
                    size="small"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I prepare for my pet's first visit?</h3>
              <p>
                Bring any previous medical records, a list of current
                medications, and your pet's vaccination history. Arrive 10-15
                minutes early to complete paperwork.
              </p>
            </div>
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
              <p>
                We accept cash, all major credit cards, and pet insurance. We
                also offer payment plans for qualifying patients.
              </p>
            </div>
            <div className="faq-item">
              <h3>How long do appointments typically last?</h3>
              <p>
                Regular checkups take 30-45 minutes. Surgical consultations and
                complex cases may take longer.
              </p>
            </div>
            <div className="faq-item">
              <h3>Do you accept pet insurance?</h3>
              <p>
                Yes, we work with all major pet insurance providers. We can help
                you understand your coverage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
