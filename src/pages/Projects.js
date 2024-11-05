import React from 'react';
import './Projects.css'; // Importing the CSS file for styling

const projectsData = [
  {
    title: "Client project",
    description: "A website developed for a client as part of a school project.",
    image: require('../assets/pictures/West.png'), // Replace with actual image URL
    link: "https://westcar.eu/"
  },
  {
    title: "Competition Aasta tegija 2024 project",
    description: "Website that was created from the design we were given for the competition",
    image: require('../assets/pictures/aasta.png'), // Replace with actual image URL
    link: "https://eallekors.github.io/Aasta-Tegija-24/"
  },
  {
    title: "Intership project",
    description: "Website that i created when i was an intern in germany",
    image: require('../assets/pictures/Intern.png'), // Replace with actual image URL
    link: "https://github.com/Eallekors/DomainChecker/"
  },
  {
    title: "Most of my other projects",
    description: "My github with the projects that have been done in school",
    image: require('../assets/pictures/github.png'), // Replace with actual image URL
    link: "https://github.com/Eallekors/"
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
