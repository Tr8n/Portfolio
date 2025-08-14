import React, { useState } from 'react';

const Projects = () => {
  const projectsData = [
    {
      slug: "linkup",
      title: "LinkUp – Personal Link Manager",
      summary: "Full-stack SaaS app with AI summarization and Chrome extension integration.",
      stack: ["React", "Node.js", "MongoDB", "AI"],
      year: 2025,
      tags: ["fullstack", "AI"],
      thumbnail: "/images/projects/linkup.png",
      links: {
        live: "https://github.com/Tr8n/LinkUp",
        code: "https://github.com/Tr8n/LinkUp"
      },
      featured: true
    },
    {
      slug: "sorting-visualizer",
      title: "Sorting Visualizer",
      summary: "Interactive visualization tool for sorting algorithms with adjustable speed and size.",
      stack: ["React", "JavaScript"],
      year: 2024,
      tags: ["frontend", "algorithms"],
      thumbnail: "/images/projects/sorting-visualizer.png",
      links: {
        live: "https://tr8n.github.io/Sorting-Visualizer/",
        code: "https://tr8n.github.io/Sorting-Visualizer/"
      },
      featured: true
    },
    {
      slug: "weather-prediction",
      title: "Weather Prediction (ML)",
      summary: "Trained ML models to predict weather with 85% accuracy.",
      stack: ["Python", "scikit-learn"],
      year: 2024,
      tags: ["machine-learning"],
      thumbnail: "/images/projects/weather-prediction.png",
      links: {
        live: "https://tr8n.github.io/WeatherApp/",
        code: "https://tr8n.github.io/WeatherApp/"
      },
      featured: false
    },
    {
      slug: "school-management-system",
      title: "School Management System (MERN)",
      summary: "Role-based ERP with admin dashboard and MongoDB integration.",
      stack: ["React", "Node.js", "MongoDB"],
      year: 2023,
      tags: ["fullstack", "ERP"],
      thumbnail: "/images/projects/school-management-system.png",
      links: {
        live: "https://github.com/Tr8n/School-ERP",
        code: "https://github.com/Tr8n/School-ERP"
      },
      featured: false
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'featured', label: 'Featured' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'security', label: 'Security' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'featured') return project.featured;
    return project.tags.includes(activeFilter);
  });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p>Here are some of the projects I've worked on</p>
        </div>

        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.slug} className="project-card">
              <div className="project-image">
                <div className="image-placeholder">
                  <i className="icon">💻</i>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                
                <p className="project-summary">{project.summary}</p>
                
                <div className="project-stack">
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.links.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    View Project
                  </a>
                  <a 
                    href={project.links.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a href="https://github.com/Tr8n" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
