import React, { useEffect, useRef } from 'react';
import './Home.css'; // Ensure your CSS is imported
import SlideInSection from '../components/SlideInSection';

const Home = () => {
  const skillsRef = useRef([]);
  // Function to handle the animation of progress bars
  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll('.progress');
        progressBars.forEach(bar => {
          const targetWidth = bar.dataset.progress;
          bar.style.width = targetWidth; // Set the width from data attribute
          animateProgress(bar, targetWidth); // Animate the percentage text
        });
      }
    });
  };

  // Function to animate the percentage text
  const animateProgress = (bar, targetWidth) => {
    const targetValue = parseInt(targetWidth); // Get the target percentage
    const incrementValue = Math.ceil(targetValue / 100); // Adjust the increment value based on the target
    let currentValue = 0; // Start from 0%
    const speed = 20; // Adjust the speed (milliseconds) of text update
    const interval = setInterval(() => {
      if (currentValue < targetValue) {
        currentValue += incrementValue; // Increase the current value
        if (currentValue > targetValue) currentValue = targetValue; // Prevent overshooting
        bar.textContent = `${currentValue}%`; // Update the text
      } else {
        clearInterval(interval); // Clear the interval when done
      }
    }, speed); // Use the speed variable for timing
  };
  

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.1,
    });

    const skillsSection = skillsRef.current;
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <div className="home-page">
      <header className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">I'm a Front-end Developer</p>
          <a href="#projects" className="cta-button">View My Work</a>
        </div>
      </header>

      <SlideInSection direction="right">
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in creating responsive and engaging web applications. My expertise includes HTML, CSS, JavaScript, and React. I enjoy solving problems and learning new technologies.
        </p>
        <a href="/about" className="learn-more">Learn More</a>
      </section>
      </SlideInSection>
      <SlideInSection direction="left">
      <section className="skills-section" id="skills" ref={skillsRef}>
        <h2>My Skills</h2>
        <div className="skill">
          <img src="https://via.placeholder.com/40" alt="JavaScript" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">JavaScript</span>
            <div className="progress-bar">
              <div className="progress" data-progress="90%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src="https://via.placeholder.com/40" alt="React" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">React</span>
            <div className="progress-bar">
              <div className="progress" data-progress="85%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src="https://via.placeholder.com/40" alt="CSS" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">CSS</span>
            <div className="progress-bar">
              <div className="progress" data-progress="80%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src="https://via.placeholder.com/40" alt="HTML" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">HTML</span>
            <div className="progress-bar">
              <div className="progress" data-progress="90%">0%</div>
            </div>
          </div>
        </div>
        {/* Add more skills as needed */}
      </section>
      </SlideInSection>

      <SlideInSection direction="right">
      <section id="experience">
        <h2>Work Experience</h2>
        <div class="experience-item">
          <h3>Internship at Company Name</h3>
          <p><strong>Position:</strong> Intern Title</p>
          <p><strong>Duration:</strong> Month Year - Month Year</p>
          <p><strong>Description:</strong> Briefly describe your responsibilities, projects, and what you learned during your internship.</p>
        </div>
       
      </section>
      </SlideInSection>

      <SlideInSection direction="left">
      <section className="projects-section" id="projects">
        <h2>Some of my projects</h2>
        <p>Check out some of the projects I've worked on:</p>
        <p>You can find my other projects <a href="/projects" className="project-link">Here</a></p>
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
      </SlideInSection>
      
    </div>
  );
};

export default Home;
