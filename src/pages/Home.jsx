import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Shield, MapPin, Construction, AlertTriangle, Activity } from 'lucide-react';
import './Home.css';
import Spline from '@splinetool/react-spline';

const Home = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('show');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-page">
      <section className="hero">
        <div className="grid-background"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="animate-on-scroll">
              The All-In-One <span className="text-red">Construction Site</span> Safety System
            </h1>
            <p className="hero-subtitle animate-on-scroll">
              RealG combines emergency response systems with location-based geofencing to keep your workers safe on-site.
            </p>
            <div className="hero-buttons animate-on-scroll">
              <a href="https://realg-website.web.app" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Try RealG Now
              </a>
              <Link to="/pricing" className="btn btn-outline">
                View Plans
              </Link>
            </div>
          </div>

          {/* Replace map locator with Spline */}
          <div className="hero-spline animate-on-scroll">
          <Spline scene="https://prod.spline.design/0trOy2XuLQVYELfc/scene.splinecode" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title text-center animate-on-scroll">Introducing RealG</h2>
          <p className="section-subtitle text-center animate-on-scroll">
            Advanced safety technology for modern construction sites
          </p>
          
          <div className="features-grid">
            {/* Feature cards */}
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon"><AlertTriangle size={32} /></div>
              <h3>Real-time Alerts</h3>
              <p>Instant notifications for emergencies, with automatic location tracking.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon"><MapPin size={32} /></div>
              <h3>Geofencing</h3>
              <p>Define safe zones and receive alerts when workers enter hazardous areas.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon"><HardHat size={32} /></div>
              <h3>Worker Protection</h3>
              <p>Monitor vital signs and environmental conditions to prevent accidents.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon"><Activity size={32} /></div>
              <h3>Activity Tracking</h3>
              <p>Analyze movement patterns to optimize site safety and workflow.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon"><Shield size={32} /></div>
              <h3>Security Compliance</h3>
              <p>Meet industry regulations and improve safety documentation.</p>
            </div>
            <div className="feature-card animate-on-scroll">
              <div className="feature-icon"><Construction size={32} /></div>
              <h3>Site Management</h3>
              <p>Comprehensive tools for construction site safety administration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="animate-on-scroll">Ready to enhance your site safety?</h2>
            <p className="animate-on-scroll">
              Get started with RealG today and experience the future of construction safety management.
            </p>
            <a 
              href="https://realg-website.web.app" 
              className="btn btn-primary animate-on-scroll"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try RealG Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
