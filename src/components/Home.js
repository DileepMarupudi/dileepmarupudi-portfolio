import React from 'react';
import './Home.css';
import profilePic from '../assets/dileep.jpg';

function Home() {
  return (
    <section className="home-section" id="home">
      <div className="home-content">
        <h1 className="home-heading">Hi, <br />I'm <span className="highlight-name">Dileep</span></h1>
        <h2 className="typing-text">Full Stack Developer</h2>
        <p>
          Test Engineer at Data Center | Aspiring Full Stack Developer
        </p>
        <a className="resume-button" href="/Dileep_Resume.pdf" target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
      <div className="home-image">
        <img src={profilePic} alt="Dileep" />
      </div>
    </section>
  );
}

export default Home;
