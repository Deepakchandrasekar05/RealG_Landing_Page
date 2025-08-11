import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Mail, Phone, Github as GitHub, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/" className="logo" onClick={closeMenu}>
                <img src={logo} alt="RealG Logo" className="logo-image" />
            </Link>
            <p className="footer-tagline">
              Realtime Emergency and Location Geofencing for construction worker safety
            </p>
            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <GitHub size={20} />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <div className="footer-links-column">
              <h3>Products</h3>
              <ul>
                <li><a href="#">Safety Solutions</a></li>
                <li><a href="#">Geofencing API</a></li>
                <li><a href="#">Emergency Alerts</a></li>
                <li><a href="#">Safety Analytics</a></li>
                <li><a href="#">Integration Partners</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Company</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Resources</h3>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Case Studies</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            
            <div className="footer-links-column">
              <h3>Contact</h3>
              <ul className="contact-list">
                <li>
                  <Mail size={16} className="contact-icon" />
                  <a href="mailto:info@realg-safety.com">info@realg-safety.com</a>
                </li>
                <li>
                  <Phone size={16} className="contact-icon" />
                  <a href="tel:+15551234567">+1 (555) 123-4567</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} RealG Safety Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;