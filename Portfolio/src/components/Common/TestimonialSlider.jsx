// src/components/Common/TestimonialSlider.jsx
import { useState, useEffect } from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import "../../styles/testimonial-slider.css";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer",
      petName: "Max (Golden Retriever)",
      image: "/images/suite.png",
      rating: 5,
      content:
        "Dr. Zelalem Getnet performed emergency ACL surgery on our Max. Her expertise and care were outstanding. Max is now running happily again! The way she explained every step of the procedure and recovery process gave us so much confidence.",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Robert Chen",
      petName: "Luna (Siamese Cat)",
      image: "/images/luna.png",
      rating: 5,
      content:
        "Luna needed extensive dental work, and I was so worried. Dr. Zelalem Getnet was gentle, professional, and kept me updated throughout. Luna's recovery was smooth, and she's eating better than ever!",
      date: "February 2024",
    },
    {
      id: 3,
      name: "Maria Garcia",
      petName: "Rocky (German Shepherd)",
      image: "/images/rocky.png",
      rating: 5,
      content:
        "When Rocky ate something toxic at 2 AM, Dr. Zelalem Getnet met us at the clinic within minutes. Her quick thinking saved his life. We're forever grateful for her dedication and expertise.",
      date: "January 2024",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? "filled" : ""}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="testimonial-slider">
      <button className="slider-nav prev" onClick={goToPrevious}>
        ←
      </button>
      <button className="slider-nav next" onClick={goToNext}>
        →
      </button>

      <div className="slider-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-slide ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <div className="testimonial-content">
              <div className="testimonial-header">
                <ImagePlaceholder
                  src={testimonial.image}
                  alt={testimonial.name}
                  type="circle"
                  size="small"
                />
                <div className="testimonial-info">
                  <h3>{testimonial.name}</h3>
                  <p className="pet-name">{testimonial.petName}</p>
                  <div className="rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <span className="testimonial-date">{testimonial.date}</span>
              </div>
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                <p>{testimonial.content}</p>
                <span className="quote-mark closing">"</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
