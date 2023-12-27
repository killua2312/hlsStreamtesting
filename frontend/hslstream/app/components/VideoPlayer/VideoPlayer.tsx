"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  const [isAdPlaying, setIsAdPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [adPlayed, setAdPlayed] = useState(false);

  const handleProgress = (progress) => {
    setPlayedSeconds(progress.playedSeconds);
    if (progress.playedSeconds >= 180 && !isAdPlaying && !adPlayed) {
      setIsAdPlaying(true);
      setAdPlayed(true);
    }
  };

  return (
    <div>
      <div
        style={{
          display: isAdPlaying ? "none" : "block",
          width: "100%",
          height: "100vh",
        }}
      >
        <ReactPlayer
          url="http://localhost:5000/hlsfiles/output_1080.m3u8"
          playing={!isAdPlaying}
          controls
          onProgress={handleProgress}
          width="100%"
          height="100%"
        />
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        {isAdPlaying && (
          <ReactPlayer
            url="http://localhost:5000/opAd/output.m3u8"
            playing={isAdPlaying}
            onEnded={() => {
              setIsAdPlaying(false);
            }}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
