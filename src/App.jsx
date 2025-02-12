import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./styles/app.css";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="app">
      <Hero />
      <AboutMe />
    </div>
  );
}

export default App;
