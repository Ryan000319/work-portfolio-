import React from "react";
import "../styles/aboutMe.css";
import { motion } from "framer-motion";

const AboutMe = () => {
    return (

        <section className="about-me" id="about">
            {/* Video Background */}
            <video autoPlay loop muted playsInline className="about-video">
                <source src="/assets/4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="about-card"
            >
                {/* Profile Picture */}
                <img 
                    src="/assets/profile.jpg"
                    alt="Profile"
                    className="profile-img"
                />
                {/* About Me Text */}
                <div className="about-text">
                    <h2 className="about-title">Ryan Alistair Anak Allen</h2>
                    <h3 className="about-degree">(Bachelor of Engineering (Robotics & Mechatronics) | Bachelor of Computer Science (Software Development) | 3.45 CGPA</h3>
                    <p className="about-description">
                        I am a recent graduate with a passion for creating beautiful, functional, and user-friendly applications. I have experience in web, mobile, and software development, along with vision-based AI applications. Though still gaining experience, I am always eager to learn new technologies and expand my skill set.
                    </p>

                    {/* Skills */}
                    <div className="skills-container">
                        {["JavaScript", "React.js", "Vue.js", "Kotlin", "Python", "C++", "C#", "Ruby", "Firebase", "MYSQL"].map((skill, index) => (
                            <span key={index} className="skill">{skill}</span>
                        ))}
                    </div>

                    
                </div>

                
            </motion.div>
        </section>
    );
};

export default AboutMe;