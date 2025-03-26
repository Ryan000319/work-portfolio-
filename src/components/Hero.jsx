import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import "../styles/hero.css";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            {/* Video Background */}
            <video autoPlay loop muted playsInline className="hero-video">
                <source src="/assets/Cafe.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            { /* Hero Content */}
            <div className="hero-content">
                {/* Rounded Container */}
                <motion.div
                    className="hero-text-container"
                    initial={{ opacity: 0, scale: 1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>

                    {/* Hero Text */}
                    <h1>
                        <span className="function-keyword">function </span>
                        <span className="function-name">Name</span>
                        <span className="function-symbols">(){}{"{"}</span>
                    </h1>

                    <p> 
                        <span className="return-statement">return </span>
                        <span className="string">"Ryan Alistair"</span>
                    </p>

                    <h1>
                        <span className="function-symbols">{"}"} </span>
                    </h1>

                    <h1>
                        <span className="function-keyword">function </span>
                        <span className="function-name">Aspiration</span>
                        <span className="function-symbols">(){}{"{"}</span>
                    </h1>

                    <p> 
                        <span className="return-statement">return </span>
                        <span className="string">"</span>
                        <ReactTyped 
                            className="typed-text"
                            strings={["Software Engineer","Web Developer", "Front-end Developer", "Android Developer", "Game Developer"]}
                            typeSpeed={50}
                            backSpeed={20}
                            loop
                        />
                         <span className="string">"</span>
                    </p>

                    <h1>
                        <span className="function-symbols">{"}"} </span>
                    </h1>

                    
                </motion.div>
            </div>
        </section>
        );
    };
    
    export default Hero;