import React, { useState, useEffect } from "react";
import "../styles/aboutMe.css";

const AboutMe = () => {
  const images = [
    "/assets/profile.jpg",
    "/assets/profile.jpg",
    "/assets/profile.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  const selectImage = (index) => setCurrentIndex(index);

  return (
    <section className="about-me-section" id="about">
      <div className="gallery-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Ryan ${currentIndex + 1}`}
          className="main-img"
        />

        <div className="thumbnail-container">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`thumbnail ${index === currentIndex ? "active" : ""}`}
              onClick={() => selectImage(index)}
              alt={`Thumbnail ${index + 1}`}
            />
          ))}
        </div>

        <div className="glass-connect">
            <h3 style={{ color: "#ffb86c" }}>Connect with Me</h3>
            <div className="contact-icons">
                <a href="https://github.com/Ryan000319" target="_blank">
                    <img src="/assets/github.jpg" alt="GitHub" className="icon-img" />
                </a>
                <a href="https://linkedin.com/in/ryan-alistair-b6126420a" target="_blank">
                    <img src="/assets/linkedin.jpg" alt="LinkedIn" className="icon-img" />
                </a>
                <a href="mailto:ryanalistairallen14@gmail.com">
                    <img src="/assets/gmail.jpg" alt="Email" className="icon-img" />
                </a>
            </div>
        </div>

      </div>

      <div className="profile-card">
        <h2>Ryan Alistair Anak Allen</h2>

        <ul className="about-bullets">
          <li>Bachelor's double degree in Engineering & Computer Science (CGPA 3.45)</li>
          <li>Former R&D Intern at SEB, contributed to a robotic arm.</li>
          <li>Proficient in full-stack web & android mobile development.</li>
          <li>Built a YOLO-based automated robot for my Final Year Project.</li>
          <li>Passionate about immersive UX in web, mobile and game development.</li>
        </ul>

        <h3>Core Tech Stack</h3>
        <div className="skills">
          {["Python", "C++", "Kotlin", "React", "Node.js", "Firebase"].map(skill => (
            <span className="skill-chip" key={skill}>{skill}</span>
          ))}
        </div>

        <h3>Awards & Highlights</h3>
        <div className="awards">
          <span className="badge">Best Implemented FYP</span>
          <span className="badge">Swinburne Emerging Leaders Award (SELA)</span>
        </div>

        <h3>Interests</h3>
        <div className="interests">
          {["Gaming", "PC Building", "Piano", "3D Printing", "History"].map(interest => (
            <span className="interest-tag" key={interest}>{interest}</span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutMe;
