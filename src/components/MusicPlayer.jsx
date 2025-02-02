import React, { useRef, useState, useEffect } from "react";
import { play, pause, next, previous, updateDuration } from "../utils/audioPlayer";
import "../styles/musicPlayer.css";

const musicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(new Audio("/assets/audio.mp3"));
    const [trackTitle, setTrackTitle] = useState("Lofi Hip Hop");
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        updateDuration(audioRef, setCurrentTime, setDuration);
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            pause(audioRef);
        } else {
            play(audioRef);
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="music-player">
            <div className="glass-background">
                <h2 className="track-title">{trackTitle}</h2>
                <div className="waveform-animation">
                    {isPlaying && <div className="wave"></div>}
                </div>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    onChange={(e) => (audioRef.current.currentTime = e.target.value)}
                    className="seek-bar"
                />
                <div className="controls">
                    <button onClick={() => previous(audioRef, setTrackTitle)}>⏮️</button>
                    <button onClick={togglePlay}>{isPlaying ? "⏸️" : "▶️"}</button>
                    <button onClick={() => next(audioRef, setTrackTitle)}>⏭️</button>
                </div>
            </div>
        </div>
    );
};

export default musicPlayer;