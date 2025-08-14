import React from 'react';

const Experience = () => {
  const experienceData = [
    {
      company: "Outliar",
      role: "AI Training Intern",
      start: "2024-09",
      end: "2025-03",
      duration: "6 months",
      location: "Remote",
      type: "Internship",
      bullets: [
        "Developed and fine-tuned ML models using Python, TensorFlow, and scikit-learn on real datasets.",
        "Improved model accuracy by 15% through feature engineering and hyperparameter tuning.",
        "Implemented generative AI prototypes and deployed models with best practices."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p>My professional journey and achievements</p>
        </div>

        <div className="experience-content">
          <div className="timeline">
            {experienceData.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-title">{job.role}</h3>
                      <div className="timeline-company">{job.company}</div>
                    </div>
                    <div className="timeline-meta">
                      <span className="timeline-period">
                        {job.start} - {job.end}
                      </span>
                      <span className="timeline-duration">{job.duration}</span>
                    </div>
                  </div>
                  
                  <div className="timeline-info">
                    <div className="timeline-location">
                      <i className="icon">📍</i> {job.location}
                    </div>
                    <div className="timeline-type">
                      <span className={`type-badge ${job.type.toLowerCase()}`}>
                        {job.type}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="timeline-bullets">
                    {job.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* Future opportunity placeholder */}
            <div className="timeline-item">
              <div className="timeline-content future-opportunity">
                <div className="timeline-header">
                  <h3 className="timeline-title">Future Opportunity</h3>
                  <span className="timeline-period">Open to new challenges</span>
                </div>
                <p>I'm always open to exciting new opportunities and collaborations. Let's build something amazing together!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
