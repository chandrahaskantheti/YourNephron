import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
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
            <li>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdE3F5CIHCeF1I5nO4ljF2H7uLjv_fAosH5z-3Swb6lmGRYEQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer
              </a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/007bff/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/007bff/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/007bff/instagram-new.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/50/007bff/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 YourNephron. All Rights Reserved.</p>
      </div>
    </footer>
  );
}