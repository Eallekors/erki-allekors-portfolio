import React from 'react';
import './Projects.css'; // Importing the CSS file for styling

const projectsData = [
  {
    title: "Project 1",
    description: "This is a description of project 1. It covers X, Y, and Z features.",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    link: "https://github.com/your-username/project-1"
  },
  {
    title: "Project 2",
    description: "This is a description of project 2. It focuses on A, B, and C.",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    link: "https://github.com/your-username/project-2"
  },
  // Add more project objects as needed
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
