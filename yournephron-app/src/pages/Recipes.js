import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Recipes() {
  return (
    <>
      <Navbar />
      <Header />

      <main className="container">
        <section className="coming-soon">
          <h2>Kidney Health & Nutrition</h2>
          <p>
            We’re currently updating this section to bring you evidence-based nutrition tips and simple, 
            budget-friendly recipes that support your kidney health.
          </p>
          <p>
            From meal planning to lifestyle changes, we’re excited to launch new content soon!
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}