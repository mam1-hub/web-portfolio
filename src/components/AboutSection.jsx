import React from 'react';
import '../styles/AboutSection.css';
import aboutImage from '../assets/images/about.jpg'; // Resmi içe aktar

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-text">
          I’m MaMi, a passionate frontend developer with experience in building modern, interactive websites. I love working with React and creating visually appealing user experiences. My goal is to merge creativity with technology to deliver unique, functional, and aesthetic digital products.
        </p>
        <p className="about-text">
          Whether it’s coding, designing, or learning about new technologies, I always strive to push the boundaries of web development. Let's build something amazing together!
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About MaMi" /> {/* Resmi buradan kullan */}
      </div>
    </section>
  );
};

export default AboutSection;
