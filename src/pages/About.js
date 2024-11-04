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
            Hi there! I'm <strong>Erki Allekõrs</strong>, a full-stack development enthusiast and a student based on the edge of Tartu, Estonia. Known for being friendly and approachable, I'm passionate about building impactful digital solutions and expanding my technical knowledge.
          </p>
          <p>
            My current skill set includes a strong foundation in Java, HTML, CSS, JavaScript, and MySQL, along with some experience in C++. I enjoy the challenges that come with working across both the front end and back end of applications, constantly learning to improve my craft.
          </p>
          <p>
            When I'm not diving into code, you might find me exploring new technologies, connecting with fellow students and developers, or simply enjoying life in Tartu. I’m always open to new opportunities and connections in the tech world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
