import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function About() {
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
        <section>
          <h2>About Us</h2>
          <p>
            Chronic kidney disease affects millions, often going undetected until it's too late. Lack of awareness, education, and access to preventive 
            resources disproportionately impacts vulnerable communities in California.
          </p>
          <p>
            At YourNephron, we’re tackling this issue head-on through community-centered education. Our solution is to empower Californians with accessible, 
            engaging, and trustworthy kidney health content — whether it’s understanding anatomy, spotting early warning signs, or making lifestyle changes.
          </p>
          <p>
            We collaborate with nephrologists, educators, and volunteers to create bilingual brochures, host outreach events, and maintain an online hub for 
            kidney care knowledge. Together, we’re building a healthier future through awareness, action, and community support.
          </p>        
        </section>

        <section>
          <h1>Our Team</h1>
          <div className="team-section">
            <div className="team-group">
              <h2>Founder</h2>
              <div className="team-card">
                <img src="/assets/advik_headshot.png" alt="Founder Headshot" className="team-photo" />
                <p><strong>Advik Sunil</strong><br />Founder & Research Lead</p>
              </div>
            </div>
            <div className="team-group">
              <h2>IT Team</h2>
              <div className="team-card">
                <img src="/assets/chandrahas_headshot.jpg" alt="IT Engineer" className="team-photo" />
                <p><strong>Chandrahas Kantheti</strong><br />Web Developer</p>
              </div>
              <div className="team-card">
                <img src="/assets/laith_headshot.jpg" alt="IT Engineer" className="team-photo" />
                <p><strong>Laith Darras</strong><br />Web Developer</p>
              </div>
              <div className="team-card">
                <img src="/assets/akash_headshot.jpg" alt="IT Engineer" className="team-photo" />
                <p><strong>Akash Sant</strong><br />Web Developer</p>
              </div>
            </div>
          </div>
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