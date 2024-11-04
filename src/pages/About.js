import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-page">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img 
          src={require('../assets/pictures/profiil.png')} // Replace with your photo URL
          alt="Erki Allekõrs"
          className="about-image"
        />
        <div className="about-text">
          <p>
            Hello! I'm <strong>Erki Allekõrs</strong>, a passionate front-end developer specializing in creating engaging and responsive web applications. With a keen eye for design and attention to detail, I strive to bring ideas to life through code.
          </p>
          <p>
            My journey in web development began with a love for technology and creativity. Over the years, I have honed my skills in HTML, CSS, JavaScript, and popular frameworks such as React and Vue.js. I'm always looking for new challenges to expand my skill set and build impactful digital experiences.
          </p>
          <p>
            When I'm not coding, you can find me exploring new places, reading tech blogs, or experimenting with photography.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
