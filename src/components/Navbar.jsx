import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HardHat, Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Adjust path based on your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">

        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={logo} alt="RealG Logo" className="logo-image" />
        </Link>

        
        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/pricing" 
            className={location.pathname === '/pricing' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Pricing
          </Link>
          <Link 
            to="/contact" 
            className={location.pathname === '/contact' ? 'active' : ''} 
            onClick={closeMenu}
          >
            Contact
          </Link>
          <a 
            href="https://realg-website.web.app" 
            className="btn btn-primary nav-cta" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Try RealG
          </a>
        </div>
        
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;