// src/components/Layout/Footer.jsx
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>Dr. Zelalem Getnet, DVM</h3>
            <p>
              Providing compassionate, expert veterinary care for your beloved
              companions.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services#preventive">Preventive Care</Link>
              </li>
              <li>
                <Link to="/services#surgery">Surgery</Link>
              </li>
              <li>
                <Link to="/services#dental">Dental Care</Link>
              </li>
              <li>
                <Link to="/services#emergency">Emergency</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li>📍 123 Veterinary Street</li>
              <li>📞 (+251) 990749862</li>
              <li>✉️ Zelalem@gmail.com</li>
              <li>🕒 Mon-Fri: 8am - 6pm</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Dr. Zelalem Getnet, DVM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
