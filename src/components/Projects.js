import React from "react";
import "./Project.css"; // Make sure this CSS file is imported

const Projects = () => {
  const projectList = [
    {
      title: "Power BI Dashboard",
      details:
        "Led the organization-wide rollout of Microsoft Power BI, impacting over 5 departments and 30+ users, to drive data-driven decision-making and operational efficiency. Configured daily auto-refresh schedules and row-level security (RLS) to ensure data integrity and secure access for various teams."
    },
    {
      title: "Real-time Spotify music analytics",
      details:
        "Automated an ETL pipeline that processed 1M+ records from Spotify API, enabling real-time analysis of music trends and artist popularity. Automated data extraction of songs, artists and playlists, reducing manual effort by 80%."
    },
    {
      title: "Privacy-Preserving mechanism using Blockchain",
      details:
        "Executed a secure authentication system using SSH with public-private key encryption, ensuring encrypted communication and preventing unauthorized access. Created an advanced cloud security architecture employing Fully Homomorphic Encryption (FHE) and SHA algorithms."
    }
  ];

  return (
    <div className="projects-section" id="projects">
      <h2 className="section-heading">🛠 Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-details">{project.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
