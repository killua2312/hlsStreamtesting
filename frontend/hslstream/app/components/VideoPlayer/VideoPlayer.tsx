"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer: React.FC = () => {
  const [isAdPlaying, setIsAdPlaying] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const [adPlayed, setAdPlayed] = useState(false);

  const handleProgress = (progress: any) => {
    setPlayedSeconds(progress.playedSeconds);
    if (playedSeconds >= 180 && !isAdPlaying && !adPlayed) {
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
          url="http://localhost:5000/public/jujutsukaisen0/output.m3u8"
          playing={!isAdPlaying}
          controls
          onProgress={handleProgress}
          width="100%"
          height="100%"
        />
      </div>

      {isAdPlaying && (
        <div style={{ width: "100%", height: "100vh" }}>
          <ReactPlayer
            url="http://localhost:5000/public/opAd/output.m3u8"
            playing={isAdPlaying}
            onEnded={() => {
              setIsAdPlaying(false);
            }}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
