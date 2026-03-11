// src/components/Sections/GalleryGrid.jsx
import ImagePlaceholder from "../Common/ImagePlaceholder";
import "../../styles/gallery-grid.css";

const GalleryGrid = () => {
  const galleryImages = [
    {
      // src: "/images/patient-gallery/dog-1.jpg",
      src: "/images/current.png",
      alt: "Happy Labrador",
      type: "square",
    },
    {
      src: "/images/fluffy.png",
      alt: "Fluffy Cat",
      type: "rectangle",
    },
    {
      src: "/images/horse.png",
      alt: "Beautiful Horse",
      type: "square",
    },
    {
      src: "/images/bull.png",
      alt: "Cute Rabbit",
      type: "rectangle",
    },
    { src: "/images/room.png", alt: "Exam Room", type: "square" },
    {
      src: "/images/suite.png",
      alt: "Surgery Suite",
      type: "rectangle",
    },
  ];

  return (
    <div className="gallery-grid">
      {galleryImages.map((image, index) => (
        <div key={index} className="gallery-item">
          <ImagePlaceholder
            src={image.src}
            alt={image.alt}
            type={image.type}
            size="medium"
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;
