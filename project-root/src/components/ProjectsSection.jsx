import React from 'react';
import '../styles/ProjectsSection.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern and responsive personal portfolio website built with React and CSS animations.',
    image: require('../assets/images/project1.jpg'), // require ile dinamik olarak yükleme
    link: '#'
  },
  {
    title: 'E-Commerce Platform',
    description: 'An advanced e-commerce platform with payment integration and product management.',
    image: require('../assets/images/project2.jpg'),
    link: '#'
  },
  {
    title: 'Social Media App',
    description: 'A full-stack social media app with real-time messaging and notifications.',
    image: require('../assets/images/project3.jpg'),
    link: '#'
  }
];


const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
