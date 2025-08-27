import React, { useState, useEffect } from 'react';

const Footer = () => {
  const name = "Siddhant Shukla";
  const links = {
    github: "https://github.com/Tr8n",
    linkedin: "https://linkedin.com/in/siddhant-shukla-6b4564275",
    leetcode: "https://leetcode.com/u/0nTr8n",
    codeforces: "https://codeforces.com/profile/TanBlaze"
  };
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">{name}</h3>
            <p className="footer-tagline">Building digital experiences that matter</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="social-links">
              <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="icon">🐙</i>
              </a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="icon">💼</i>
              </a>
              <a href={links.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
                <i className="icon">⚡</i>
              </a>
              <a href={links.codeforces} target="_blank" rel="noopener noreferrer" aria-label="Codeforces">
                <i className="icon">🏆</i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 {name}. All rights reserved.</p>
          <p>Made with ❤️ using React</p>
        </div>
      </div>
      
      <button 
        className={`scroll-top ${showScrollTop ? 'visible' : ''}`} 
        onClick={scrollToTop} 
        aria-label="Scroll to top"
      >
        <i className="icon">↑</i>
      </button>
    </footer>
  );
};

export default Footer;
