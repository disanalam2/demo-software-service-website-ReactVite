import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">KhAB PRIVATE LIMITED</div>
        <nav>
          <button onClick={() => showSection('home')}>Home</button>
          <button onClick={() => showSection('services')}>Services</button>
          <button onClick={() => showSection('contact')}>Contact</button>
          <button onClick={() => showSection('about')}>About</button>
        </nav>
      </header>

      {activeSection === 'home' && (
        <section className="hero">
          <div className="hero-text">
            <h1>KhAB PRIVATE LIMITED</h1>
            <p>
              At KhAB PRIVATE LIMITED, we are driven by a singular mission: to revolutionize the way businesses
              operate by providing cutting-edge software solutions. Founded by a team of passionate tech enthusiasts,
              we combine expertise with creativity to deliver tailor-made solutions that empower our clients to
              thrive in today's dynamic digital landscape.
            </p>
            <div className="buttons">
              <a href="#" className="btn-primary">Get Started</a>
              <a href="#" className="btn-outline">Contact</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/public/KhaAB PRIVATE LIMITED.png" alt="KhAB PRIVATE LIMITED" />
          </div>
        </section>
      )}

      {activeSection === 'services' && (
        <section className="section">
          <h2>Our Services</h2>
          
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="section">
          <h2>Contact Us</h2>
          <p>Email: info@khab.com | Phone: +123456789</p>
        </section>
      )}

      {activeSection === 'about' && (
        <section className="section">
          <h2>About Us</h2>
          <p>We are a team of developers dedicated to digital transformation with Taqwa and compassion.</p>
        </section>
      )}

      <footer>
        &copy; 2024 Khedmat Al Barmajiat - All Rights Reserved
      </footer>
    </div>
  );
};

export default App;

