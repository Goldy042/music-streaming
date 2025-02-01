import React, { useCallback, useState, createContext } from "react";
export const AudioContext = createContext(null);
export function AudioProvider({
  children
}) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);
  return <AudioContext.Provider value={{
    currentTrack,
    setCurrentTrack,
    isPlaying,
    setIsPlaying,
    togglePlay
  }}>
      {children}
    </AudioContext.Provider>;
}