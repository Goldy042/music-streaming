import React from "react";
import { Link } from "react-router-dom";
import { Music, Radio, Tv, Users, Disc, Library } from "lucide-react";
export function Sidebar() {
  return <aside className="w-60 bg-black border-r border-[#2A2A2A] p-4 flex flex-col">
      <Link to="/" className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-[#00A650] rounded-full" />
        <span className="text-[#00A650] font-bold text-xl">MUSIC</span>
      </Link>
      <nav className="flex flex-col gap-2">
        <Link to="/" className="text-white hover:bg-[#2A2A2A] px-4 py-2 rounded">
          Home
        </Link>
        <Link to="/mix" className="text-gray-400 hover:bg-[#2A2A2A] px-4 py-2 rounded">
          Music Mix
        </Link>
        <Link to="/djs" className="text-gray-400 hover:bg-[#2A2A2A] px-4 py-2 rounded">
          DJs
        </Link>
        <Link to="/shows" className="text-gray-400 hover:bg-[#2A2A2A] px-4 py-2 rounded">
          Shows
        </Link>
      </nav>
      <div className="mt-8">
        <h3 className="text-gray-500 text-sm px-4 mb-2">COLLECTION</h3>
        <nav className="flex flex-col gap-2">
          <Link to="/artists" className="text-gray-400 hover:bg-[#2A2A2A] px-4 py-2 rounded flex items-center gap-2">
            <Users size={20} />
            Artists
          </Link>
          <Link to="/albums" className="text-gray-400 hover:bg-[#2A2A2A] px-4 py-2 rounded flex items-center gap-2">
            <Disc size={20} />
            Albums
          </Link>
          <Link to="/genres" className="text-gray-400 hover:bg-[#2A2A2A] px-4 py-2 rounded flex items-center gap-2">
            <Library size={20} />
            Genres
          </Link>
        </nav>
      </div>
    </aside>;
}