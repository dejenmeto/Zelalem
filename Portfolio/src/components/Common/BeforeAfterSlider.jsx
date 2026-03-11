// src/components/Common/BeforeAfterSlider.jsx
import { useState, useRef, useEffect } from "react";
import "../../styles/before-after-slider.css";

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const position = (x / width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const width = rect.width;
    const position = (x / width) * 100;

    if (position >= 0 && position <= 100) {
      setSliderPosition(position);
    }
  };

  useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleMouseUp);

    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
    >
      <div className="before-image">
        <img src={beforeImage} alt="Before" />
        <span className="image-label before-label">{beforeLabel}</span>
      </div>

      <div
        className="after-image"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
      >
        <img src={afterImage} alt="After" />
        <span className="image-label after-label">{afterLabel}</span>
      </div>

      <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
        <div className="handle-line"></div>
        <div className="handle-circle">
          <span className="handle-arrow left">←</span>
          <span className="handle-arrow right">→</span>
        </div>
      </div>

      <div className="slider-track"></div>
    </div>
  );
};

export default BeforeAfterSlider;
