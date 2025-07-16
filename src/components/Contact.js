import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const contacts = [
    {
      icon: <FaEnvelope />,
      link: "mailto:dileepmarupudi@gmail.com",
      display: "dileepmarupudi@gmail.com",
    },
    {
      icon: <FaGithub />,
      link: "https://github.com/DileepMarupudi",
      display: "github.com/DileepMarupudi",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/dileep-marupudi",
      display: "linkedin.com/in/dileep-marupudi",
    },
  ];

  return (
    <div className="contact-section section" id="contact">
      <h2 className="section-heading">📫 Contact Me</h2>
      <div className="contact-container">
        {contacts.map((item, index) => (
          <div className="contact-card" key={index}>
            <span className="contact-icon">{item.icon}</span>
            <div className="contact-info">
              <h4>{item.label}</h4>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.display}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
