import React, { useState } from 'react';

const Contact = () => {
  const email = "dev.siddhant.shukla@gmail.com";
  const location = "Kanpur, Uttar Pradesh, India";
  const links = {
    linkedin: "https://linkedin.com/in/siddhant-shukla-6b4564275",
    github: "https://github.com/Tr8n",
    leetcode: "https://leetcode.com/your-leetcode-profile",
    codeforces: "https://codeforces.com/profile/your-codeforces-handle"
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Let's discuss your next project or just say hello!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology.</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <i className="icon">📧</i>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="icon">📍</i>
                <div>
                  <h4>Location</h4>
                  <p>{location}</p>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="icon">💼</i>
                <div>
                  <h4>LinkedIn</h4>
                  <a href={links.linkedin} target="_blank" rel="noopener noreferrer">Connect on LinkedIn</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="icon">🐙</i>
                <div>
                  <h4>GitHub</h4>
                  <a href={links.github} target="_blank" rel="noopener noreferrer">View my code</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="icon">⚡</i>
                <div>
                  <h4>LeetCode</h4>
                  <a href={links.leetcode} target="_blank" rel="noopener noreferrer">Check my solutions</a>
                </div>
              </div>
              
              <div className="contact-method">
                <i className="icon">🏆</i>
                <div>
                  <h4>Codeforces</h4>
                  <a href={links.codeforces} target="_blank" rel="noopener noreferrer">View my profile</a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            
            {isSubmitted && (
              <div className="success-message">
                <i className="icon">✅</i>
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
