import React from "react";
import "../App.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <Header />

      <main className="container">
        <section>
          <h2>About Us</h2>
          <p>
            Chronic kidney disease affects millions, often going undetected
            until it's too late. Lack of awareness, education, and access to
            preventive resources disproportionately impacts vulnerable
            communities in California.
          </p>
          <p>
            At YourNephron, we’re tackling this issue head-on through
            community-centered education. Our solution is to empower
            Californians with accessible, engaging, and trustworthy kidney
            health content. Whether it’s understanding anatomy, spotting early
            warning signs, or making lifestyle changes.
          </p>
          <p>
            We collaborate with nephrologists, educators, and volunteers to
            create bilingual brochures, host outreach events, and maintain an
            online hub for kidney care knowledge. Together, we’re building a
            healthier future through awareness, action, and community support.
          </p>
        </section>

        <section>
          <h1>Our Team</h1>
          <div className="team-section">
            <div className="team-group">
              <h2>Founder</h2>
              <div className="team-card">
                <img
                  src="/assets/advik_headshot.png"
                  alt="Founder Headshot"
                  className="team-photo"
                />
                <p>
                  <strong>Advik Sunil</strong>
                  <br />
                  Founder & Research Lead
                </p>
              </div>
            </div>
            <div className="team-group">
              <h2>IT Team</h2>
              <div className="team-card">
                <img
                  src="/assets/laith_headshot.jpg"
                  alt="IT Engineer"
                  className="team-photo"/>
                <p>
                  <strong>Laith Darras</strong>
                  <br />
                  Web Developer
                </p>
              </div>
              <div className="team-card">
                <img
                  src="/assets/chandrahas_headshot.jpg"
                  alt="IT Engineer"
                  className="team-photo"
                />
                <p>
                  <strong>Chandrahas Kantheti</strong>
                  <br />
                  Web Developer
                </p>
              </div>
              <div className="team-card">
                <img
                  src="/assets/akash_headshot.jpg"
                  alt="IT Engineer"
                  className="team-photo"
                />
                <p>
                  <strong>Akash Sant</strong>
                  <br />
                  Web Developer
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
