import React, { useEffect, useRef, useContext } from "react";
import { Volume2, SkipBack, SkipForward, Play, Pause } from "lucide-react";
import { AudioContext } from "../contexts/AudioContext";
export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentTrack,
    isPlaying,
    setIsPlaying,
    togglePlay
  } = useContext(AudioContext);
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);
  if (!currentTrack) return null;
  return <div className="flex items-center justify-between px-4 h-full">
      <audio ref={audioRef} src={currentTrack.url} onEnded={() => setIsPlaying(false)} />
      <div className="flex items-center gap-4">
        <img src={currentTrack.image} alt={currentTrack.title} className="w-12 h-12 rounded" />
        <div>
          <div className="font-medium">{currentTrack.title}</div>
          <div className="text-sm text-gray-400">{currentTrack.artist}</div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="text-gray-400 hover:text-white">
          <SkipBack size={24} />
        </button>
        <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform" onClick={togglePlay}>
          {isPlaying ? <Pause size={24} /> : <Play size={24} className="ml-1" />}
        </button>
        <button className="text-gray-400 hover:text-white">
          <SkipForward size={24} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <Volume2 size={20} className="text-gray-400" />
        <input type="range" min="0" max="100" defaultValue="100" className="w-24" onChange={e => {
        if (audioRef.current) {
          audioRef.current.volume = parseInt(e.target.value) / 100;
        }
      }} />
      </div>
    </div>;
}