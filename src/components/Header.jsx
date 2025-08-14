import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <a href="#hero" className="header-logo" onClick={closeMobileMenu}>
            Siddhant
          </a>
          
          <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul>
              <li><a href="#hero" className="nav-link" onClick={() => scrollToSection('hero')}>Home</a></li>
              <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#experience" className="nav-link" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
              <li><a href="/siddhant_shukla_resume.pdf" className="nav-link" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </nav>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <i className="icon">{isMobileMenuOpen ? '✕' : '☰'}</i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
