const audioFiles = {
    "/assets/audio.mp3": "Lofi Hip Hop",
}

let currentTrackIndex = 0;

export const play = (audioRef) => {
    if (audioRef.current) {
        audioRef.current.play();
    }
};

export const pause = (audioRef) => {
    if (audioRef.current) {
        audioRef.current.pause();
    }
};

export const next = (audioRef, setTrackTitle) => {
    currentTrackIndex = (currentTrackIndex + 1) % audioFiles.length;
    updateTrack(audioRef, setTrackTitle);
};

export const previous = (audioRef, setTrackTitle) => {
    currentTrackIndex = (currentTrackIndex - 1 + audioFiles.length) % audioFiles.length;
    updateTrack(audioRef, setTrackTitle);
}

const updateTrack = (audioRef, setTrackTitle) => {
    if (audioRef.current) {
        audioRef.current.src = audioFiles[currentTrackIndex];
        setTrackTitle(audioFiles[currentTrackIndex].split("/").pop().replace(".mp3", ""));
        audioRef.current.play();
    }
};

export const updateDuration = (audioRef, setCurrentTime, setDuration) => {
    if (audioRef.current) {
        audioRef.current.ontimeupdate = () => {
            setCurrentTime(audioRef.current.currentTime);
        };
        audioRef.current.onloadedmetadata = () => {
            setDuration(audioRef.current.duration);
        };
    }
};