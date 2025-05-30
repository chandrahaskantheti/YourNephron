import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <main className="container">
        <section className="interactive-gallery">
          <h2>Our Community</h2>
          <div className="image-grid">
            <div className="image-card">
              <img src="/assets/community.jpg" alt="Community event" />
              <p>Community Outreach Event</p>
            </div>
            <div className="image-card">
              <img src="https://source.unsplash.com/300x200/?teamwork" alt="Team photo" />
              <p>Team Collaboration</p>
            </div>
          </div>
        </section>
        <section id="mission" className="mission-section">
          <h2>Our Mission</h2>
          <p>
            YourNephron empowers Californians with accessible kidney health education — tackling chronic
            kidney disease through awareness, prevention, and community outreach.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}