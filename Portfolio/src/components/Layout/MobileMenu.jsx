// src/components/Layout/MobileMenu.jsx
import { Link } from "react-router-dom";
import "../../styles/mobile-menu.css";

const MobileMenu = ({ isOpen, onClose, navLinks }) => {
  // Add a check to ensure navLinks exists and is an array
  if (!navLinks || !Array.isArray(navLinks)) {
    return null; // Don't render anything if navLinks is not valid
  }

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="mobile-menu-header">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
      </div>
      <div className="mobile-menu-content">
        {navLinks.map((link, index) => (
          <Link
            key={link.path || index}
            to={link.path}
            className="mobile-nav-link"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
