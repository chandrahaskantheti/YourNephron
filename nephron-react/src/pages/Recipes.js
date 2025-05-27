import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Recipes() {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="navbar-nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/events">Events and Join Us</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="YourNephron logo" height="80" />
          <h1 className="site-title">YOURNEPHRON</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        <section className="coming-soon">
          <h2>Kidney Health & Nutrition</h2>
          <p>We’re currently updating this section to bring you evidence-based nutrition tips and easy, budget-friendly recipes that support your kidney health.</p>
          <p>From meal planning to lifestyle changes, we’re excited to launch new content soon — stay tuned!</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>Email: <a href="mailto:info@yournephron.org">info@yournephron.org</a></p>
            <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            <p>Address: 123 Nonprofit Way, Care City, State, ZIP</p>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/recipes">Recipes</Link></li>
              <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdE3F5CIHCeF1I5nO4ljF2H7uLjv_fAosH5z-3Swb6lmGRYEQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Volunteer</a></li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Follow Us</h3>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/007bff/facebook.png" alt="Facebook" /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/007bff/twitter.png" alt="Twitter" /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/007bff/instagram-new.png" alt="Instagram" /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios-filled/50/007bff/linkedin.png" alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 YourNephron. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
