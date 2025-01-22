import React from "react";
import "../styles/home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home">
      <section className="section hero">
        <h1>Hi, I'm Ryan Alistair Anak Allen 👋</h1>
        <p>Software Developer | Tech Enthusiast</p>
        <a href="#projects">View Projects</a>
      </section>

      <section id="about" className="section about">
        <h2>About Me</h2>
        <p>I specialize in React and modern web development.</p>
      </section>

      <section id="projects" className="section projects">
        <h2>My Projects</h2>
        <p>Check out my work below.</p>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact Me</h2>
        <p>Email: ryanalistairanakallen14@example.com</p>
        <p>LinkedIn: www.linkedin.com/in/ryan-alistair-b6126420a</p>
      </section>
    </div>
  );
};

export default Home;
