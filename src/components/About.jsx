import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
              I'm a passionate full-stack developer with expertise in React, Next.js, and AI-powered applications. 
              I love creating innovative solutions that solve real-world problems and deliver exceptional user experiences.
            </p>
            <p>
              With a strong foundation in both frontend and backend technologies, I specialize in building scalable 
              web applications and integrating cutting-edge AI technologies to create intelligent, user-friendly solutions.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">1.2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">7+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Freelance Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Internship</div>
              </div>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            
            <div className="skill-category">
              <h4>Frontend Development</h4>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
              <span>React & Next.js</span>
            </div>
            
            <div className="skill-category">
              <h4>Backend Development</h4>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
              <span>Node.js & Python</span>
            </div>
            
            <div className="skill-category">
              <h4>Database & Cloud</h4>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
              <span>MongoDB & AWS</span>
            </div>
            
            <div className="skill-category">
              <h4>AI & Machine Learning</h4>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
              <span>TensorFlow & scikit-learn</span>
            </div>

            <h4 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Core Skills & Tools</h4>
            <div className="technologies">
              <div className="tech-item">
                <i className="icon">⚛️</i>
                <span>React</span>
              </div>
              <div className="tech-item">
                <i className="icon">🚀</i>
                <span>Next.js</span>
              </div>
              <div className="tech-item">
                <i className="icon">🟢</i>
                <span>Node.js</span>
              </div>
              <div className="tech-item">
                <i className="icon">🍃</i>
                <span>Express.js</span>
              </div>
              <div className="tech-item">
                <i className="icon">🗄️</i>
                <span>MongoDB</span>
              </div>
              <div className="tech-item">
                <i className="icon">🐍</i>
                <span>Python</span>
              </div>
              <div className="tech-item">
                <i className="icon">🤖</i>
                <span>AI/ML</span>
              </div>
              <div className="tech-item">
                <i className="icon">🧠</i>
                <span>Large Language Models</span>
              </div>
              <div className="tech-item">
                <i className="icon">📊</i>
                <span>pandas</span>
              </div>
              <div className="tech-item">
                <i className="icon">🔬</i>
                <span>scikit-learn</span>
              </div>
              <div className="tech-item">
                <i className="icon">🔢</i>
                <span>NumPy</span>
              </div>
              <div className="tech-item">
                <i className="icon">⚡</i>
                <span>TensorFlow</span>
              </div>
              <div className="tech-item">
                <i className="icon">☕</i>
                <span>Java</span>
              </div>
              <div className="tech-item">
                <i className="icon">🍃</i>
                <span>Spring Boot</span>
              </div>
              <div className="tech-item">
                <i className="icon">📚</i>
                <span>SQL</span>
              </div>
              <div className="tech-item">
                <i className="icon">📊</i>
                <span>MS Excel</span>
              </div>
              <div className="tech-item">
                <i className="icon">📄</i>
                <span>MS Office</span>
              </div>
              <div className="tech-item">
                <i className="icon">🎨</i>
                <span>Canva</span>
              </div>
              <div className="tech-item">
                <i className="icon">🎯</i>
                <span>Figma</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
