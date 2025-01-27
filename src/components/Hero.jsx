import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music } from "lucide-react"; 
import { ReactTyped } from "react-typed";
import "../styles/hero.css";

const Hero = () => {
    const [isPlaying, setIsPlaying] = useState(false); 
    const audioRef = useRef(null);

    //Toggle play/pause
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <section className="hero">
            {/* Video Background */}
            <video autoPlay loop muted playsInline className="hero-video">
                <source src="/assets/video_1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            { /* Hero Content */}
            <div className="hero-content">
                {/* Rounded Container */}
                <motion.div
                    className="hero-text-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}>

                    {/* Hero Text */}
                    <h1>
                        <ReactTyped
                            strings={["Hello World, I'm Ryan Alistair"] }
                            typeSpeed={50}
                            backSpeed={30}
                            showCursor={true}
                            cursorChar="|"
                        />
                    </h1>

                    {/* Typing Subtitle*/}
                    <p>
                        <span className="static-text">Aspiring</span>
                        <ReactTyped
                            strings={["Web Developer", "Front-end Developer", "Android Developer"]}
                            typeSpeed={50}
                            backSpeed={20}
                            loop
                        />
                    </p>
                </motion.div>
            </div>
        </section>
        );
    };
    
    export default Hero;