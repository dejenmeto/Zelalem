// src/pages/CaseStudiesPage.jsx
import { useState } from "react";
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import BeforeAfterSlider from "../components/Common/BeforeAfterSlider";
import "../styles/case-studies.css";

const CaseStudiesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = [
    { id: "all", name: "All Cases" },
    { id: "surgery", name: "Surgery" },
    { id: "dental", name: "Dental" },
    { id: "emergency", name: "Emergency" },
    { id: "orthopedic", name: "Orthopedic" },
    { id: "chronic", name: "Chronic Conditions" },
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Max's ACL Recovery Journey",
      patient: "Max, 7-year-old Labrador Retriever",
      category: "surgery",
      date: "January 2024",
      images: {
        before: "/image/before.png",
        after: "/image/after.png",
        xray: "/image/x-ray.png",
        recovery: "/image/recovery.png",
      },
      symptoms: [
        "Limping on hind leg",
        "Difficulty standing up",
        "Reduced activity",
        "Pain when extending leg",
      ],
      diagnosis: "Complete Cranial Cruciate Ligament (CCL) tear in right knee",
      treatment: "TPLO (Tibial Plateau Leveling Osteotomy) surgery",
      recovery:
        "12 weeks with physical therapy, now fully recovered and active",
      outcome:
        "Max is now pain-free and running normally. Regular checkups show excellent joint stability.",
      testimonial: {
        quote:
          "Dr. Zelalem Getnet gave Max his life back. The surgery and recovery process was explained thoroughly, and the results are amazing!",
        owner: "Jennifer Thompson",
      },
    },
    {
      id: 2,
      title: "Luna's Complex Dental Restoration",
      patient: "Luna, 5-year-old Siamese Dog",
      category: "dental",
      date: "February 2024",
      images: {
        before: "/image/dogsheep.png",
        // after: "/images/case-studies/luna-after.jpg",
        // xray: "/images/case-studies/luna-xray-dental.jpg",
        // procedure: "/images/case-studies/luna-procedure.jpg",
      },
      symptoms: [
        "Bad breath",
        "Difficulty eating",
        "Drooling",
        "Pawing at mouth",
      ],
      diagnosis:
        "Advanced periodontal disease with tooth resorption in multiple teeth",
      treatment:
        "Full mouth dental cleaning, multiple extractions, and oral surgery",
      recovery: "2 weeks soft food diet, now eating normally",
      outcome:
        "Luna is pain-free, eating well, and her overall health has improved significantly.",
      testimonial: {
        quote:
          "I was so worried about Luna's dental surgery, but Dr. Mitchell was amazing. She's like a new cat now!",
        owner: "Robert Chen",
      },
    },
    {
      id: 3,
      title: "Emergency: Rocky's Toxic Ingestion",
      patient: "Rocky, 3-year-old German Shepherd",
      category: "emergency",
      date: "March 2024",
      images: {
        before: "/image/good.png",
        // treatment: "/images/case-studies/rocky-treatment.jpg",
        // recovery: "/images/case-studies/rocky-recovery.jpg",
      },
      symptoms: ["Vomiting", "Lethargy", "Tremors", "Rapid heart rate"],
      diagnosis: "Chocolate toxicity - severe theobromine poisoning",
      treatment:
        "Immediate decontamination, IV fluids, activated charcoal, and monitoring",
      recovery: "48 hours intensive care, now fully recovered",
      outcome:
        "Rocky made a complete recovery thanks to quick emergency intervention.",
      testimonial: {
        quote:
          "Dr. Mitchell saved Rocky's life at 2 AM. Her quick thinking and expertise made all the difference.",
        owner: "Maria Garcia",
      },
    },
    {
      id: 4,
      title: "Oliver's Geriatric Care Management",
      patient: "Oliver, 16-year-old Tabby Sheep",
      category: "chronic",
      date: "Ongoing",
      images: {
        before: "/image/sheep.png",
        // treatment: "/images/case-studies/oliver-treatment.jpg",
        // happy: "/images/case-studies/oliver-happy.jpg",
      },
      symptoms: ["Geriatric decline", "Multiple age-related conditions"],
      diagnosis: "Chronic kidney disease, arthritis, hypertension",
      recovery: "Ongoing management - continuous care",
      conditions: [
        "Chronic kidney disease",
        "Arthritis",
        "High blood pressure",
        "Dental disease",
      ],
      treatment:
        "Comprehensive geriatric care plan including special diet, medication, and regular monitoring",
      management:
        "Regular checkups every 3 months, home care instructions for owners",
      outcome:
        "Oliver's quality of life has significantly improved. He's comfortable and enjoying his golden years.",
      testimonial: {
        quote:
          "Dr. Zelalem has been incredible managing Oliver's multiple health issues. She truly cares about senior pets.",
        owner: "Dejen Johnson",
      },
    },

    {
      id: 5,
      title: "Duke's Complex Tumor Removal",
      patient: "Duke, 8-year-old Labrador",
      category: "surgery",
      date: "January 2024",
      images: {
        before: "/image/donkey.png",
        // during: "/images/case-studies/duke-surgery.jpg",
        // after: "/images/case-studies/duke-after.jpg",
        // pathology: "/images/case-studies/duke-pathology.jpg",
      },
      symptoms: [
        "Large mass on side",
        "Mass growing rapidly",
        "Some discomfort when touched",
      ],
      diagnosis: "Soft tissue sarcoma - grade II",
      treatment:
        "Wide surgical excision with clean margins, followed by monitoring",
      recovery: "3 weeks recovery, incision healed beautifully",
      outcome:
        "Complete removal with clean margins. Regular monitoring shows no recurrence.",
      testimonial: {
        quote:
          "Dr. Mitchell's surgical skills are exceptional. Duke's incision healed perfectly and he's back to his playful self.",
        owner: "Michael Brown",
      },
    },
    {
      id: 6,
      title: "Bella's Orthopedic Recovery",
      patient: "Bella, 4-year-old Golden Retriever",
      category: "orthopedic",
      date: "February 2024",
      images: {
        xray: "/image/case4.png",
        // surgery: "/images/case-studies/bella-surgery.jpg",
        // therapy: "/images/case-studies/bella-therapy.jpg",
        // recovery: "/images/case-studies/bella-recovery.jpg",
      },
      symptoms: [
        "Limping on front leg",
        "Elbow pain",
        "Reluctance to play",
        "Stiffness after exercise",
      ],
      diagnosis: "Fragmented Coronoid Process (elbow dysplasia)",
      treatment:
        "Arthroscopic surgery to remove bone fragments, followed by physical therapy",
      recovery: "8 weeks rehabilitation program including hydrotherapy",
      outcome:
        "Bella has regained full range of motion and is back to playing fetch.",
      testimonial: {
        quote:
          "The rehabilitation program Dr. Mitchell designed made all the difference. Bella is pain-free!",
        owner: "Emily Davis",
      },
    },
  ];

  const filteredCases =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selectedCategory);

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="case-studies-hero">
        <div className="container">
          <h1 className="page-title">Medical Case Studies</h1>
          <p className="hero-subtitle">
            Real cases, real results - showcasing our approach to veterinary
            medicine
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter section">
        <div className="container">
          <div className="filter-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? "active" : ""}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="cases-grid-section section">
        <div className="container">
          <div className="cases-grid">
            {filteredCases.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="case-card"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="case-card-image">
                  <ImagePlaceholder
                    src={
                      caseStudy.images.before ||
                      caseStudy.images.xray ||
                      caseStudy.images.exam
                    }
                    alt={caseStudy.title}
                    type="rectangle"
                    size="medium"
                  />
                  <span className="case-category">{caseStudy.category}</span>
                </div>
                <div className="case-card-content">
                  <h3>{caseStudy.title}</h3>
                  <p className="patient-name">{caseStudy.patient}</p>
                  <p className="case-date">{caseStudy.date}</p>
                  <p className="case-preview">{caseStudy.diagnosis}</p>
                  <button className="read-more">Read Full Case Study →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study with Before/After */}
      <section className="featured-case section">
        <div className="container">
          <h2 className="section-title">Featured Case: Max's ACL Recovery</h2>
          <div className="featured-case-content">
            <BeforeAfterSlider
              beforeImage="/image/before.png"
              afterImage="/image/after.png"
              beforeLabel="Before Surgery"
              afterLabel="12 Weeks After"
            />
            <div className="featured-case-details">
              <h3>The Journey to Recovery</h3>
              <p>
                Max, a 7-year-old Labrador Retriever, came to us with a complete
                CCL tear in his right knee. He was in significant pain and
                unable to bear weight on the affected leg. After thorough
                evaluation, we recommended TPLO surgery - the gold standard for
                CCL repair in active dogs.
              </p>
              <div className="recovery-timeline">
                <h4>Recovery Timeline</h4>
                <ul>
                  <li>
                    <strong>Week 1-2:</strong> Strict crate rest, pain
                    management, passive range of motion exercises
                  </li>
                  <li>
                    <strong>Week 3-4:</strong> Gradual increase in activity,
                    started physical therapy
                  </li>
                  <li>
                    <strong>Week 5-8:</strong> Hydrotherapy sessions, controlled
                    leash walks
                  </li>
                  <li>
                    <strong>Week 9-12:</strong> Progressive return to normal
                    activity
                  </li>
                  <li>
                    <strong>Week 12+:</strong> Full recovery, back to running
                    and playing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedCase && (
        <div className="case-modal" onClick={() => setSelectedCase(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedCase(null)}
            >
              ×
            </button>

            <h2>{selectedCase.title}</h2>
            <p className="modal-patient">
              {selectedCase.patient} • {selectedCase.date}
            </p>

            <div className="modal-images">
              {Object.entries(selectedCase.images).map(([key, src]) => (
                <div key={key} className="modal-image">
                  <ImagePlaceholder
                    src={src}
                    alt={`${key} image`}
                    type="rectangle"
                    size="medium"
                    caption={key.charAt(0).toUpperCase() + key.slice(1)}
                  />
                </div>
              ))}
            </div>

            <div className="modal-details">
              <div className="detail-section">
                <h3>Presenting Symptoms</h3>
                <ul>
                  {selectedCase.symptoms.map((symptom, index) => (
                    <li key={index}>{symptom}</li>
                  ))}
                </ul>
              </div>

              <div className="detail-section">
                <h3>Diagnosis</h3>
                <p>{selectedCase.diagnosis}</p>
              </div>

              <div className="detail-section">
                <h3>Treatment</h3>
                <p>{selectedCase.treatment}</p>
              </div>

              <div className="detail-section">
                <h3>Recovery & Outcome</h3>
                <p>{selectedCase.recovery}</p>
                <p className="outcome">{selectedCase.outcome}</p>
              </div>

              {selectedCase.testimonial && (
                <div className="detail-section testimonial">
                  <h3>Owner Testimonial</h3>
                  <blockquote>
                    "{selectedCase.testimonial.quote}"
                    <cite>- {selectedCase.testimonial.owner}</cite>
                  </blockquote>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudiesPage;
