// src/pages/AboutPage.jsx
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import Resume from "../components/Common/Resume";
import "../styles/about.css";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title">About Dr. Zelalem Getnet</h1>
          <div className="about-grid">
            <div className="about-image-grid">
              <ImagePlaceholder
                src="/images/Rescue.jpg"
                alt="Dr. Zelalem Getnet Meto"
                type="square"
                size="large"
                caption="Dr. Zelalem Getnet with his rescue dog, Buddy"
              />
              <div className="image-collage">
                <ImagePlaceholder
                  src="/images/surgery.png"
                  alt="Performing surgery"
                  type="rectangle"
                  size="small"
                />
                <ImagePlaceholder
                  src="/images/examRoom.png"
                  alt="In exam room"
                  type="rectangle"
                  size="small"
                />
              </div>
            </div>
            <div className="about-content">
              <h2>Dedicated to Animal Wellness</h2>
              <p>
                With over 5 years of experience in veterinary medicine, I've
                dedicated my career to providing the highest quality care for
                animals. My journey began at a young age, growing up on a small
                farm where I developed a deep connection with animals.
              </p>
              <p>
                After completing my Doctor of Veterinary Medicine at Addis Ababa
                University, I pursued advanced training in surgery and emergency
                medicine. Today, I combine cutting-edge medical technology with
                compassionate, personalized care for every patient.
              </p>
              <div className="philosophy-box">
                <h3>My Philosophy</h3>
                <p>
                  "Every animal deserves compassionate, expert care. I treat
                  every patient as if they were my own, ensuring comfort and the
                  best possible outcomes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="credentials-section section">
        <div className="container">
          <h2 className="section-title">Education & Credentials</h2>
          <div className="credentials-grid">
            <div className="credential-card">
              <h3>Education</h3>
              <ul>
                <li>Doctor of Veterinary Medicine - Addis Ababa University</li>
                <li>Bachelor of Science in Animal Science - UC Davis</li>
                <li>Advanced Surgical Fellowship - Addis Ababa State</li>
              </ul>
            </div>
            <div className="credential-card">
              <h3>Licenses</h3>
              <ul>
                <li>State Veterinary License #12345</li>
                <li>DEA Registration</li>
                <li>USDA Accreditation</li>
              </ul>
            </div>
            <div className="credential-card">
              <h3>Certifications</h3>
              <ul>
                <li>Ethiopian College of Veterinary medicine</li>
                <li>Veterinary Dental Specialist</li>
                <li>Certified Veterinary Acupuncturist</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section">
        <div className="container">
          <h2 className="section-title">Professional Resume</h2>
          <Resume />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
