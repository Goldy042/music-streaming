import React from "react";
import { Search, ShoppingCart, User2 } from "lucide-react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { AudioPlayer } from "./components/AudioPlayer";
import { AudioProvider } from "./contexts/AudioContext";
export function App() {
  return <AudioProvider>
      <div className="flex flex-col bg-black text-white ">
        <div className="flex flex-1 overflow-hidden ">
          <Sidebar />
          <main className="flex-1 flex flex-col min-w-0">
            <header className="flex-none p-8 pl-16">
              <div className="flex items-center justify-between">
                <div className="flex-1 max-w-xl">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input type="search" placeholder="Search here" className="w-full bg-[#2A2A2A] rounded-full py-2 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" />
                  </div>
                </div>
                <div className="flex items-center gap-4 ml-4">
                  <ShoppingCart className="text-gray-400" />
                  <User2 className="text-gray-400" />
                </div>
              </div>
            </header>
            <div className="flex-1 overflow-y-auto min-h-0 no-scrollbar">
              <Outlet />
            </div>
          </main>
        </div>
        <div className="h-20 border-t border-[#2A2A2A] fixed w-full bottom-0 bg-black flex items-center justify-center">
          <AudioPlayer />
        </div>
      </div>
    </AudioProvider>;
}