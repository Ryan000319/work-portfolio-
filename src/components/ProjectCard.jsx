import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
            </div>
        </motion.div>
    );
};

export default ProjectCard;

