import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Events() {
  return (
    <>
      <Navbar />
      <Header />

      <main className="container">
        <section className="events-gallery">
          <h2>Community Outreach & Events</h2>
          <p>
            From tabling events and health workshops to student-run webinars, we’re actively connecting 
            with communities across California.
          </p>
          <div className="image-grid">
            <div className="image-card">
              <img src="https://source.unsplash.com/300x200/?volunteer,event" alt="Outreach event" />
              <p>Kidney Health Awareness Booth</p>
            </div>
            <div className="image-card">
              <img src="https://source.unsplash.com/300x200/?webinar,education" alt="Virtual session" />
              <p>Virtual Webinar for Students</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}