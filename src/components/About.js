import React from 'react';
import './About.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-left">
        <div className="circle-animation"></div>
      </div>

      <div className="about-right">
        <h2>
          About <span className="highlight">Me</span>
        </h2>
        <h3>Full Stack Developer</h3>
        <p>
          I’m Dileep, a Full Stack Developer and Test Engineer with a strong foundation in Linux systems and hardware diagnostics,
          experienced in managing over 1,800+ server units. I’m passionate about building scalable, efficient, and user-centric
          applications using technologies like React, Node.js, and SQL.
        </p>
        <p>
          I’ve worked on cloud-based ETL pipelines, real-time data processing, and dashboard development using Power BI. With a
          background in debugging, automation, and team collaboration, I aim to bridge front-end creativity with back-end logic to
          deliver full-stack solutions that solve real-world problems.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
