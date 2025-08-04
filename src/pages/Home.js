import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import SlideInSection from '../components/SlideInSection';
import { Link } from 'react-router-dom';

// Updated Skill data
const skills = [
  // Programming
  { name: 'JavaScript', icon: require('../assets/pictures/js.png'), proficiency: 'Advanced', level: 'Advanced', category: 'Programming' },
  { name: 'HTML', icon: require('../assets/pictures/html.png'), proficiency: 'Advanced', level: 'Advanced', category: 'Programming' },
  { name: 'CSS', icon: require('../assets/pictures/css.png'), proficiency: 'Advanced', level: 'Advanced', category: 'Programming' },
  { name: 'React', icon: require('../assets/pictures/React_Logo_SVG.svg.png'), proficiency: 'Advanced', level: 'Advanced', category: 'Programming' },
  { name: 'PHP', icon: require('../assets/pictures/php.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'Programming' },
  { name: 'TypeScript', icon: require('../assets/pictures/Typescript.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'Programming' },
  { name: 'Vue 3', icon: require('../assets/pictures/vue.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'Programming' },
  { name: 'Java', icon: require('../assets/pictures/java.png'), proficiency: 'User', level: 'User', category: 'Programming' },
  { name: 'C++', icon: require('../assets/pictures/cpp.png'), proficiency: 'Beginner', level: 'Beginner', category: 'Programming' },

  // Database
  { name: 'MySQL', icon: require('../assets/pictures/mysql.png'), proficiency: 'Advanced', level: 'Advanced', category: 'Database' },

  // OS
  { name: 'Linux', icon: require('../assets/pictures/linux.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'OS' },

  // Tools
  { name: 'Git/GitHub', icon: require('../assets/pictures/git.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'Tools' },
  { name: 'Figma', icon: require('../assets/pictures/figma.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'Tools' },
  { name: 'Docker', icon: require('../assets/pictures/docker.webp'), proficiency: 'User', level: 'User', category: 'Tools' },
  { name: 'GameMaker Studio 2', icon: require('../assets/pictures/gamemaker.webp'), proficiency: 'User', level: 'User', category: 'Tools' },

  // Office
  { name: 'MS Excel', icon: require('../assets/pictures/excel.png'), proficiency: 'Intermediate', level: 'Intermediate', category: 'Office' },
  { name: 'Word & PowerPoint', icon: require('../assets/pictures/word.png'), proficiency: 'User', level: 'User', category: 'Office' },

  // Hardware
  { name: 'Networking Devices', icon: require('../assets/pictures/networking.png'), proficiency: 'Beginner', level: 'Beginner', category: 'Hardware' },

  // Networking
  { name: 'Cisco', icon: require('../assets/pictures/cisco.png'), proficiency: 'Beginner', level: 'Beginner', category: 'Networking' },

  // CAD
  { name: 'AutoCAD', icon: require('../assets/pictures/autocad.png'), proficiency: 'Beginner', level: 'Beginner', category: 'CAD' },
];

// Updated categories for tabs
const skillCategories = [
  { name: 'Programming', color: '#2196f3' },
  { name: 'Database', color: '#4caf50' },
  { name: 'OS', color: '#607d8b' },
  { name: 'Tools', color: '#ff9800' },
  { name: 'Office', color: '#8bc34a' },
  { name: 'Hardware', color: '#9e9e9e' },
  { name: 'Networking', color: '#00bcd4' },
  { name: 'CAD', color: '#e91e63' },
];

const Home = () => {
  const skillsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(skillCategories[0].name);
  const [modalSkill, setModalSkill] = useState(null);

  const tabSkills = skills.filter(skill => skill.category === activeTab);

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
          <Link to="/about" className="learn-more">Learn More</Link>
        </section>
      </SlideInSection>

      <SlideInSection direction="left">
        <section className="skills-section" id="skills" ref={skillsRef}>
          <h2>My Skills</h2>
          <h3>Skills by Category</h3>
          <div className="skills-tabs">
            {skillCategories.map(cat => (
              <button
                key={cat.name}
                className={`tab-btn${activeTab === cat.name ? ' active' : ''}`}
                style={{
                  borderColor: cat.color,
                  background: activeTab === cat.name ? cat.color : '#fff',
                  color: activeTab === cat.name ? '#fff' : '#333',
                  fontWeight: activeTab === cat.name ? 'bold' : 'normal',
                  boxShadow: activeTab === cat.name ? '0 2px 8px rgba(0,0,0,0.12)' : 'none',
                }}
                onClick={() => setActiveTab(cat.name)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className="skills-grid">
            {tabSkills.map(skill => (
              <div
                className="skill-card"
                key={skill.name}
                onClick={() => setModalSkill(skill)}
                style={{ cursor: 'pointer' }}
              >
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
                <span className={`skill-level ${skill.level.toLowerCase()}`}>{skill.level}</span>
              </div>
            ))}
          </div>
          {modalSkill && (
            <div className="skill-modal" onClick={() => setModalSkill(null)}>
              <div className="skill-modal-content" onClick={e => e.stopPropagation()}>
                <img src={modalSkill.icon} alt={modalSkill.name} className="skill-icon" />
                <h4>{modalSkill.name}</h4>
                <p><strong>Level:</strong> {modalSkill.level}</p>
                <p><strong>Proficiency:</strong> {modalSkill.proficiency}</p>
                <button className="close-modal-btn" onClick={() => setModalSkill(null)}>Close</button>
              </div>
            </div>
          )}
        </section>
      </SlideInSection>

      <SlideInSection direction="right">
        <section id="experience">
          <h2>Work Experience</h2>
          <div className="experience-item">
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
          <p>You can find my other projects <Link to="/projects" className="project-link">Here</Link></p>
          <div className="projects-grid">
            <div className="project-card">
              <img src={require('../assets/pictures/West.png')} alt="Project 1" />
              <h3>Client project</h3>
              <p>A website developed for a client as part of a school project</p>
              <a href="https://westcar.eu/" className="project-link" target="_blank" rel="noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <img src={require('../assets/pictures/aasta.png')} alt="Project 2" />
              <h3>Competition Aasta tegija 2024 project</h3>
              <p>Website that was created from the design we were given for the competition</p>
              <a href="https://eallekors.github.io/Aasta-Tegija-24/" className="project-link" target="_blank" rel="noreferrer">View Project</a>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>
      </SlideInSection>
    </div>
  );
};

export default Home;
