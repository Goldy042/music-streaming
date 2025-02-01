import React, { useEffect, useState, useRef, useContext } from "react";
import { Volume2, SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { AudioContext } from "../contexts/AudioContext";
function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const { currentTrack, isPlaying, setIsPlaying, togglePlay } =
    useContext(AudioContext);
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);
  useEffect(() => {
    if (audioRef.current) {
      const audio = audioRef.current;
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };
      const handleLoadedMetadata = () => {
        setDuration(audio.duration);
      };
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, [currentTrack]);
  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && audioRef.current) {
      const bounds = progressRef.current.getBoundingClientRect();
      const percent = (event.clientX - bounds.left) / bounds.width;
      const newTime = percent * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };
  if (!currentTrack) return null;
  return (
    <div className="flex flex-col h-full w-full">
      <div
        ref={progressRef}
        className="h-1 bg-[#2A2A2A] cursor-pointer group"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-[#00A650] group-hover:bg-green-400 transition-colors"
          style={{
            width: `${(currentTime / duration) * 100}%`,
          }}
        />
      </div>
      <div className="flex items-center justify-betweenpx-4 flex-1 w-full">
        <audio
          ref={audioRef}
          src={currentTrack.url}
          onEnded={() => setIsPlaying(false)}
        />
        <div className="flex items-center pl-8 gap-4 w-full">
          <img
            src={currentTrack.image}
            alt={currentTrack.title}
            className="w-12 h-12 rounded"
          />
          <div>
            <div className="font-medium">{currentTrack.title}</div>
            <div className="text-sm text-gray-400">{currentTrack.artist}</div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="flex items-center gap-4">
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={24} />
            </button>
            <button
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
              onClick={togglePlay}
            >
              {isPlaying ? (
                <Pause size={24} />
              ) : (
                <Play size={24} className="ml-1" />
              )}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={24} />
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>{formatTime(currentTime)}</span>
            <span>/</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full items-center justify-center">
          <Volume2 size={20} className="text-gray-400" />
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="100"
            className="w-24"
            onChange={(e) => {
              if (audioRef.current) {
                audioRef.current.volume = parseInt(e.target.value) / 100;
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
