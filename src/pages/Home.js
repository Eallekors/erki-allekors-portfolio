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
  }, [handleScroll]);

  return (
    <div className="home-page">
      <header className="hero">
    <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">I'm a Full-Stack Developer</p>
        <p className="hero-description">Creating efficient and scalable solutions with a passion for innovation and design.</p>
        <a href="#projects" className="cta-button">View My Work</a>

        
    </div>
</header>


      <SlideInSection direction="right">
      <section className="about-section" id="about">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in creating responsive and engaging web applications. My expertise includes HTML, CSS, JavaScript, and React. I enjoy solving problems and learning new technologies.
        </p>
        <a href="About" className="learn-more">Learn More</a>
        </section>
      </SlideInSection>
      <SlideInSection direction="left">
      <section className="skills-section" id="skills" ref={skillsRef}>
        <h2>My Skills</h2>
        <div className="skill">
          <img src={require('../assets/pictures/html.png')} alt="HTML" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">HTML</span>
            <div className="progress-bar">
              <div className="progress" data-progress="90%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src={require('../assets/pictures/css.png')} alt="CSS" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">CSS</span>
            <div className="progress-bar">
              <div className="progress" data-progress="90%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src={require('../assets/pictures/js.png')} alt="JavaScript" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">JavaScript</span>
            <div className="progress-bar">
              <div className="progress" data-progress="85%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src={require('../assets/pictures/React_Logo_SVG.svg.png')} alt="React" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">React</span>
            <div className="progress-bar">
              <div className="progress" data-progress="70%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src={require('../assets/pictures/mysql.png')} alt="MySQL" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">MySQL</span>
            <div className="progress-bar">
              <div className="progress" data-progress="90%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src={require('../assets/pictures/java.png')} alt="Java" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">Java</span>
            <div className="progress-bar">
              <div className="progress" data-progress="50%">0%</div>
            </div>
          </div>
        </div>
        <div className="skill">
          <img src={require('../assets/pictures/git.png')} alt="Git" className="skill-icon" />
          <div className="skill-info">
            <span className="skill-name">Git</span>
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
            <h3>Internship at ART-KON-TOR Digital</h3>
            <p><strong>Position:</strong> Intern</p>
            <p><strong>Duration:</strong> April 2024 - May 2024</p>
            <p><strong>Description:</strong> Developed a URL status checker with login functionality as my primary internship project. Gained hands-on experience in Germany, enhancing my technical skills and understanding of real-world project development.</p>
          </div>
        </section>
      </SlideInSection>

      <SlideInSection direction="left">
      <section className="projects-section" id="projects">
        <h2>Some of my projects</h2>
        <p>Check out some of the projects I've worked on:</p>
        <div className="projects-grid">
          {/* Example Project Cards */}
          <div className="project-card">
            <img src={require('../assets/pictures/West.png')} alt="Project 1" />
            <h3>Client project</h3>
            <p>A website developed for a client as part of a school project</p> 
            <a href="https://westcar.eu/" className="project-link" target="_blank"  rel="noreferrer">View Project</a>
          </div>
          <div className="project-card">
            <img src={require('../assets/pictures/aasta.png')}  alt="Project 2" />
            <h3>Competition Aasta tegija 2024 project</h3>
            <p>Website that was created from the design we were given for the competition</p>
            <a href="https://eallekors.github.io/Aasta-Tegija-24/" className="project-link" target="_blank"  rel="noreferrer">View Project</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>
      </SlideInSection>
      
    </div>
  );
};

export default Home;
