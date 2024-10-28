import React from 'react';

const Card = ({ title, description, link }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default Card;
