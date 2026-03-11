// src/components/Common/ImagePlaceholder.jsx
import { useState } from "react";
import "../../styles/image-placeholder.css";
// import Logo from "../../assets";

const ImagePlaceholder = ({
  src,
  alt,
  type = "rectangle", // rectangle, square, circle, full, hero
  size = "medium", // small, medium, large
  caption,
  overlay = false,
  onClick,
}) => {
  const [error, setError] = useState(false);

  const getTypeClass = () => {
    switch (type) {
      case "square":
        return "image-square";
      case "circle":
        return "image-circle";
      case "full":
        return "image-full";
      case "hero":
        return "image-hero";
      default:
        return "image-rectangle";
    }
  };

  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "image-small";
      case "large":
        return "image-large";
      default:
        return "image-medium";
    }
  };

  return (
    <div
      className={`image-container ${getTypeClass()} ${getSizeClass()}`}
      onClick={onClick}
    >
      {src && !error ? (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className="image"
        />
      ) : (
        <div className="image-placeholder">
          <span className="placeholder-text">{alt || "Image Placeholder"}</span>
          <span className="placeholder-icon">📸</span>
        </div>
      )}
      {overlay && <div className="image-overlay"></div>}
      {caption && <div className="image-caption">{caption}</div>}
    </div>
  );
};

export default ImagePlaceholder;
