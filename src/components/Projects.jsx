import React, {useState} from "react";
import "../styles/projects.css"
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard"

const projectsData = [
    { id: 1, title: "Portfolio Website", description: "Testing Website ", category: "Web Development", image: "/assets/project1.jpg"},
    { id: 2, title: "Portfolio Website 2", description: "Testing Website ", category: "Mobile Development", image: "/assets/project1.jpg"}
];

const categories = ["All", "Web Development", "Mobile Development"];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = 
        selectedCategory === "All"
            ? projectsData
            : projectsData.filter((project) => project.category === selectedCategory);

    return (
        <section className="projects" id="projects">
            <h2 className="projects-title">My Projects</h2>

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

            {/* Projects Grid */}
            <div className="projects-container">
                {filteredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;