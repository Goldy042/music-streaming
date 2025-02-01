import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export function ArtistsCarousel() {
  const artists = [{
    name: "Artist 1",
    image: "https://placehold.co/200x200/111/333"
  }, {
    name: "Artist 2",
    image: "https://placehold.co/200x200/111/333"
  }, {
    name: "Artist 3",
    image: "https://placehold.co/200x200/111/333"
  }, {
    name: "Artist 4",
    image: "https://placehold.co/200x200/111/333"
  }, {
    name: "Artist 5",
    image: "https://placehold.co/200x200/111/333"
  }];
  return <section>
      <h2 className="text-2xl font-bold mb-6">Popular Artists</h2>
      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          {artists.map((artist, index) => <div key={index} className="flex-none">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-2">
                <img src={artist.image} alt={artist.name} className="w-full h-full object-cover" />
              </div>
            </div>)}
        </div>
        <button className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00A650] rounded-full flex items-center justify-center">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#00A650] rounded-full flex items-center justify-center">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>;
}