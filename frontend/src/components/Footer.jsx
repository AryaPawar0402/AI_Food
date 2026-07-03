import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col" style={{ gridColumn: 'span 2' }}>
            <div className="logo" style={{ marginBottom: '16px' }}>
              <span className="text-gradient">Food GenAI</span>
              <Sparkles size={20} color="var(--accent-pink)" />
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '300px' }}>
              Next-generation MERN food ordering experience powered by artificial intelligence recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Browse Restaurants</Link></li>
              <li><Link to="/recommendations">AI Recommendations</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Support</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
            <span>&copy; {new Date().getFullYear()} Food GenAI. Crafted with</span>
            <Heart size={14} fill="var(--accent-red)" color="var(--accent-red)" />
            <span>using the MERN stack.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
