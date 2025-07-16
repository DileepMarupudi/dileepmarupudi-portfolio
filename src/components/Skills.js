import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="section" id="skills">
      <h2 className="section-heading">🚀 Skills & Tools</h2>
      <div className="skills-container">
        <div className="skill-card">
          <h3 className="skill-title">Languages</h3>
          <p>C, Python, JavaScript</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Frameworks & Libraries</h3>
          <p>React.js, Node.js, OpenCV, Flask, Jest, Next.js</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Databases & Cloud</h3>
          <p>MongoDB, Google Cloud Platform (GCP), Heroku</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Middleware & Tools</h3>
          <p>Express, Django, Redux, Git, GitHub</p>
        </div>

        <div className="skill-card">
          <h3 className="skill-title">Server & Hardware</h3>
          <p>Linux, Secure Shell (SSH), Hardware Debugging</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
