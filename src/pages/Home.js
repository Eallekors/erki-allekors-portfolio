import React from 'react';
import './Home.css'; // Importing the CSS file for styling

const Home = () => {
  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">I'm a Front-end Developer</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </header>

      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in creating responsive and engaging web applications. My expertise includes HTML, CSS, JavaScript, and React. I enjoy solving problems and learning new technologies.
        </p>
        <a href="/about" className="learn-more">Learn More</a>
      </section>

      <section className="projects-section" id="projects">
        <h2>My Projects</h2>
        <p>Check out some of the projects I've worked on:</p>
        <div className="projects-grid">
          {/* Example Project Cards */}
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 1" />
            <h3>Project 1</h3>
            <p>Short description of Project 1.</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          <div className="project-card">
            <img src="https://via.placeholder.com/300" alt="Project 2" />
            <h3>Project 2</h3>
            <p>Short description of Project 2.</p>
            <a href="#" className="project-link">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
