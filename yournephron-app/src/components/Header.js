import React from 'react';

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/assets/logo.png" alt="YourNephron logo" height="80" />
        <h1 className="site-title">YOURNEPHRON</h1>
      </div>
    </header>
  );
}