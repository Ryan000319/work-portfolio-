import React, { useState } from "react";
import "../styles/projects.css";
import { motion } from "framer-motion";

const projectsData = [
    { id: 1, title: "Project 1", description: "This is a project description", category: "Web Development", image: "/assets/project1.jpg" },
];

const categories = ["All", "Web Development", "Mobile Development", "Design"];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredProjects =
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter((project) => project.category === selectedCategory);

    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            {/* Filter Buttons */}
            <div className="filter-buttons">
                {categories.map((category, index) => (
                <button
                    key={index}
                    className={`filter-btn ${selectedCategory === category ? "active" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
                ))}
            </div>

            {/* Projects Container */}
            <div className="projects-container">
                {filteredProjects.map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="project-card"
                    >
                        <img src={project.image} alt={project.title} className="project-img" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
