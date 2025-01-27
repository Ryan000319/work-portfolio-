import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Music } from "lucide-react"; 
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
            <video autoPlay loop muted className="hero-video">   
                <source src="https://assets.coderrocketfuel.com/video-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Animated Title */}
            <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Hi, I'm Ryan Alistair Anak Allen 👋
            </motion.p>

            {/* Animated Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Short Introduction Here
            </motion.p>
            
            {/* Music Player*/}
            <div className="music-player">
                <audio ref={audioRef} loop>
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3" />
                </audio>

                {/* Play/Pause Button */}
                <motion.button
                    className="play-pause-button"
                    onClick={togglePlay}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </motion.button>
            </div>
        </section>
        );
    };
    
    export default Hero;