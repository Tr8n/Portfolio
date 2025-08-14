import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Siddhant Shukla</span>
            </h1>
            <h2 className="hero-role">Senior React Developer</h2>
            <p className="hero-headline">Full-stack developer specializing in React, Next.js, and AI-powered applications.</p>
            <p className="hero-location">
              <i className="icon">📍</i> Kanpur, Uttar Pradesh, India
            </p>
            
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="/siddhant_shukla_resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                Download Resume
              </a>
            </div>

            <div className="social-links">
              <a href="https://github.com/Tr8n" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="icon">🐙</i>
              </a>
              <a href="https://linkedin.com/in/siddhant-shukla-6b4564275" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="icon">💼</i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <i className="icon">⚡</i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
                <i className="icon">🏆</i>
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="avatar-placeholder">
              <i className="icon">👨‍💻</i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
