import React, { useContext } from "react";
import { MoreVertical, Play, Pause } from "lucide-react";
import { AudioContext } from "../contexts/AudioContext";
export function TrendingSection() {
  const {
    currentTrack,
    setCurrentTrack,
    isPlaying,
    togglePlay
  } = useContext(AudioContext);
  const trendingSongs = [{
    title: "Joy Is Coming",
    artist: "Fido",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80",
    type: "Single",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  }, {
    title: "Funds",
    artist: "Davido",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    type: "Single",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
  }, {
    title: "Bundle by Bundle",
    artist: "Burna Boy",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    type: "Single",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
  }, {
    title: "PXY DRIP",
    artist: "Naira Marley",
    image: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&q=80",
    type: "Single",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
  }];
  const handlePlay = song => {
    if (currentTrack?.url === song.url) {
      togglePlay();
    } else {
      setCurrentTrack(song);
    }
  };
  return <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Trending</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingSongs.map((song, index) => <div key={index} className="bg-[#111111] rounded-lg p-4 group hover:bg-[#1A1A1A] transition-colors">
            <div className="relative mb-4">
              <img src={song.image} alt={song.title} className="w-full aspect-square object-cover rounded-lg" />
              <button onClick={() => handlePlay(song)} className={`absolute bottom-4 right-4 w-12 h-12 rounded-full flex items-center justify-center transition-all ${currentTrack?.url === song.url && isPlaying ? "bg-white text-black" : "bg-[#00A650] text-white"} ${currentTrack?.url === song.url ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} aria-label={`${isPlaying && currentTrack?.url === song.url ? "Pause" : "Play"} ${song.title}`}>
                {isPlaying && currentTrack?.url === song.url ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
              </button>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium mb-1 truncate">{song.title}</h3>
                <p className="text-sm text-gray-400 truncate">
                  {song.type} by {song.artist}
                </p>
              </div>
              <button className="text-gray-400 hover:text-white transition-colors" aria-label="More options">
                <MoreVertical size={20} />
              </button>
            </div>
          </div>)}
      </div>
    </section>;
}