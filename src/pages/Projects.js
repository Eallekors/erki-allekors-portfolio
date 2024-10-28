import React from 'react';
import Card from '../components/Card'; // Reusable Card component for projects

const Projects = () => (
  <div>
    <h1>My Projects</h1>
    <div className="projects-list">
      <Card title="Project 1" description="A cool project about..." link="#" />
      <Card title="Project 2" description="An innovative project about..." link="#" />
    </div>
  </div>
);

export default Projects;
