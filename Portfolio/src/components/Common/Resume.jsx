// src/components/Common/Resume.jsx
import { useRef } from "react";
import { generateResumePDF, downloadAsImage } from "../../utils/pdfGenerator";
import { ImagePlaceholder } from "./ImagePlaceholder.jsx";
// import ImagePlaceholder from "./ImagePlaceHolder.jsx";
import "../../styles/resume.css";

const Resume = () => {
  const resumeRef = useRef(null);

  const handleDownloadPDF = () => {
    generateResumePDF("resume-content", "Dr-Zelalem-Getnet-resume.pdf");
  };

  const handleDownloadImage = () => {
    downloadAsImage("resume-content", "Dr-Zelalem-Getnet-resume.png");
  };

  return (
    <div className="resume-container">
      <div className="resume-actions">
        <button onClick={handleDownloadPDF} className="btn btn-primary">
          Download as PDF
        </button>
        <button onClick={handleDownloadImage} className="btn btn-outline">
          Download as Image
        </button>
      </div>

      <div id="resume-content" ref={resumeRef} className="resume-content">
        <div className="resume-header">
          <ImagePlaceholder
            src="/images/resume1.png"
            alt="Dr. Zelalem Getnet"
            type="circle"
            size="small"
          />
          <div className="resume-header-info">
            <h1>Dr. Zelalem Getnet, DVM</h1>
            <p>Veterinary Medicine • Small Animal Specialist</p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Doctor of Veterinary Medicine</h3>
            <p>
              Addis Ababa University College of Veterinary Medicine • 2018-2024
            </p>
          </div>
          <div className="resume-item">
            <h3>Bachelor of Science in Animal Science</h3>
            <p>University of Addis Ababa, Bishoftu • 2018-2024</p>
          </div>
        </div>

        <div className="resume-section">
          <h2>Certifications</h2>
          <ul className="resume-list">
            <li>Ethiopian College of Veterinary medicine (ECVM) • 2024</li>
            <li>Advanced Veterinary Dental Certification • 2025</li>
            <li>Emergency & Critical Care Certification • 2026</li>
            <li>Veterinary Acupuncture Certification • 2024</li>
          </ul>
        </div>

        <div className="resume-section">
          <h2>Experience</h2>
          <div className="resume-item">
            <h3>Lead Veterinary Surgeon</h3>
            <p>Paws & Claws Veterinary Hospital • 2023-Present</p>
            <ul>
              <li>Perform complex orthopedic and soft tissue surgeries</li>
              <li>Manage a team of 5 veterinarians and 15 support staff</li>
              <li>Develop treatment protocols for critical cases</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3>Associate Veterinarian</h3>
            <p>Animal Medical Center of Addis Ababa • 2023-2026</p>
            <ul>
              <li>Provided comprehensive medical and surgical care</li>
              <li>Specialized in dental procedures and oral surgery</li>
              <li>Participated in continuing education programs</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <span className="skill-tag">Soft Tissue Surgery</span>
            <span className="skill-tag">Orthopedic Surgery</span>
            <span className="skill-tag">Dental Surgery</span>
            <span className="skill-tag">Ultrasound</span>
            <span className="skill-tag">Emergency Medicine</span>
            <span className="skill-tag">Acupuncture</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
