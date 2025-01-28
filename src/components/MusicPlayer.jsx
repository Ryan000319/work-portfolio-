import React, { useRef, useState, useEffect } from "react";
import { play, pause, next, previous } from "../utils/audioPlayer";
import "../styles/musicPlayer.css";

const musicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const audioRef = useRef(null);

    const songTitle = "Song Title";

    //Toggle Play/Pause
    const togglePlay = () => {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
        setIsPlaying(!isPlaying);
    };

    //Update Song Progress
    useEffect(() => {
        const updateProgress = () => {
            setCurrentTime(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
        };

        audioRef.current.addEventListener("timeupdate", updateProgress);

        return () => {
            audioRef.current.removeEventListener("timeupdate", updateProgress);
        };
    }, []);

    return (
        <div className="music-player">
            {/* Glass Background */}
            <div className="music-glass">
                {/* Song Title */}
                <p className="song-title">{songTitle}</p>

                {/* Animated Waves */}
                <div className={`wave-container ${isPlaying ? "animate" : ""}`}>
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                    <span className="wave"></span>
                </div>

                {/* Progress Bar */}
                <div className="progress-container">
                    <div 
                        className="progress-bar"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                </div>

                {/* Play/Pause Button */}
                <button className="play-button" onClick={togglePlay}>
                    {isPlaying ? "Pause" : "Play"}
                </button>

                {/* Audio Element */}
                <audio ref={audioRef} src="/assets/audio.mp3"></audio>
            </div>
        </div>
    );
};

export default musicPlayer;