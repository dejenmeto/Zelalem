// src/pages/TestimonialsPage.jsx
import { useState } from "react";
import ImagePlaceholder from "../components/Common/ImagePlaceholder";
import TestimonialSlider from "../components/Common/TestimonialSlider";
import "../styles/testimonials.css";

const TestimonialsPage = () => {
  const [filter, setFilter] = useState("all");

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Thompson",
      petName: "Max (Golden Retriever)",
      image: "/test/image4.png",
      rating: 5,
      date: "March 15, 2024",
      service: "ACL Surgery",
      content:
        "Dr. Zelalem performed emergency ACL surgery on our Max. Her expertise and care were outstanding. Max is now running happily again! The way she explained every step of the procedure and recovery process gave us so much confidence.",
      videoTestimonial: "/videos/testimonial1.mp4",
    },
    {
      id: 2,
      name: "Robert Chen",
      petName: "Luna (Siamese Cat)",
      image: "/test/image5.png",
      rating: 5,
      date: "March 10, 2024",
      service: "Dental Care",
      content:
        "Luna needed extensive dental work, and I was so worried. Dr. Zelalem was gentle, professional, and kept me updated throughout. Luna's recovery was smooth, and she's eating better than ever!",
      videoTestimonial: null,
    },
    {
      id: 3,
      name: "Maria Garcia",
      petName: "Rocky (German Shepherd)",
      image: "/images/current.png",
      rating: 5,
      date: "March 5, 2024",
      service: "Emergency Care",
      content:
        "When Rocky ate something toxic at 2 AM, Dr. Zelalem met us at the clinic within minutes. Her quick thinking saved his life. We're forever grateful for her dedication and expertise.",
      videoTestimonial: "/videos/testimonial2.mp4",
    },
    {
      id: 4,
      name: "David Williams",
      petName: "Coco (Poodle)",
      image: "/test/image3.png",
      rating: 5,
      date: "February 28, 2024",
      service: "Preventive Care",
      content:
        "Dr. Zelalem Getnet has been Coco's vet for 5 years. He's incredibly thorough during checkups and always catches things early. Coco actually gets excited when we pull into the parking lot!",
      videoTestimonial: null,
    },
    {
      id: 5,
      name: "Dejen Johnson",
      petName: "Oliver (Tabby Cat)",
      image: "/test/image2.png",
      rating: 4,
      date: "February 20, 2024",
      service: "Geriatric Care",
      content:
        "Oliver is 16 years old with multiple health issues. Dr. Zelalem has been amazing at managing his conditions and keeping him comfortable. She truly cares about senior pets.",
      videoTestimonial: null,
    },
    {
      id: 6,
      name: "Michael Brown",
      petName: "Duke (Labrador)",
      image: "/test/image1.png",
      rating: 5,
      date: "February 15, 2024",
      service: "Surgery",
      content:
        "Duke had a complex tumor removal surgery. Dr. Zelalem's surgical skills are exceptional. The incision healed beautifully, and Duke was back to his playful self in no time.",
      videoTestimonial: "/videos/testimonial3.mp4",
    },
  ];

  const filteredTestimonials =
    filter === "all"
      ? testimonials
      : testimonials.filter((t) => t.service === filter);

  const services = ["all", ...new Set(testimonials.map((t) => t.service))];

  const averageRating = (
    testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length
  ).toFixed(1);

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonials-page">
      {/* Hero Section */}
      <section className="testimonials-hero">
        <div className="container">
          <h1 className="page-title">Client Testimonials</h1>
          <p className="hero-subtitle">
            Real stories from pet parents who trust us with their beloved
            companions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="testimonials-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{averageRating}</div>
              <div className="stat-label">Average Rating</div>
              <div className="stat-stars">{renderStars(5)}</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">95%</div>
              <div className="stat-label">Would Recommend</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Video Testimonials */}
      <section className="featured-videos section">
        <div className="container">
          <h2 className="section-title">Video Testimonials</h2>
          <div className="videos-grid">
            {testimonials
              .filter((t) => t.videoTestimonial)
              .map((testimonial) => (
                <div key={testimonial.id} className="video-card">
                  <div className="video-placeholder">
                    <ImagePlaceholder
                      src={testimonial.image}
                      alt={testimonial.name}
                      type="rectangle"
                      size="large"
                    />
                    <button className="play-button">▶</button>
                  </div>
                  <div className="video-info">
                    <h3>
                      {testimonial.name} & {testimonial.petName}
                    </h3>
                    <p className="video-service">{testimonial.service}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid-section section">
        <div className="container">
          <div className="testimonials-header">
            <h2 className="section-title">What Our Clients Say</h2>

            {/* Filter */}
            <div className="testimonials-filter">
              <label htmlFor="service-filter">Filter by Service:</label>
              <select
                id="service-filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="filter-select"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service === "all" ? "All Services" : service}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="testimonials-grid">
            {filteredTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-card-header">
                  <ImagePlaceholder
                    src={testimonial.image}
                    alt={testimonial.name}
                    type="circle"
                    size="small"
                  />
                  <div className="client-info">
                    <h3>{testimonial.name}</h3>
                    <p className="pet-name">with {testimonial.petName}</p>
                    <div className="rating">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <span className="testimonial-date">{testimonial.date}</span>
                </div>

                <div className="testimonial-content">
                  <p>"{testimonial.content}"</p>
                </div>

                <div className="testimonial-footer">
                  <span className="service-tag">{testimonial.service}</span>
                  {testimonial.videoTestimonial && (
                    <button className="watch-video-btn">
                      <span className="video-icon">▶</span> Watch Video
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="no-results">
              <p>No testimonials found for this service.</p>
            </div>
          )}
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="review-section section">
        <div className="container">
          <div className="review-content">
            <h2>Share Your Experience</h2>
            <p>
              We'd love to hear about your experience with Dr. Zelalem and our
              team.
            </p>
            <div className="review-platforms">
              <a href="#" className="review-platform google">
                <span className="platform-icon">G</span>
                Review on Google
              </a>
              <a href="#" className="review-platform yelp">
                <span className="platform-icon">Y</span>
                Review on Yelp
              </a>
              <a href="#" className="review-platform facebook">
                <span className="platform-icon">f</span>
                Review on Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;
