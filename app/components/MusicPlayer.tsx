// FILE: components/MusicPlayer.tsx
'use client';

import { useState, useEffect } from "react";
import { dataUndangan } from "../data/content";

export default function MusicPlayer({ isPlaying }: { isPlaying: boolean }) {
  const [musicStatus, setMusicStatus] = useState(false); // false = pause, true = play

  // PERBAIKAN DISINI:
  // Kita pakai setTimeout agar state tidak berubah secara "Synchronous" (langsung)
  // Ini menghilangkan error ESLint dan memberi efek jeda yang lebih elegan.
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setMusicStatus(true);
      }, 1200); // Musik mulai setelah 1.2 detik (pas animasi cover naik)
      
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  const toggleMusic = () => {
    setMusicStatus(!musicStatus);
  };

  return (
    <div className="fixed top-4 right-4 z-[9999]">
      
      {/* 1. IFRAME YOUTUBE (SEMBUNYI) */}
      <div className="absolute opacity-0 pointer-events-none w-1 h-1 overflow-hidden">
        {musicStatus && (
            <iframe
            width="100%"
            height="100%"
            // Tambahkan 'origin' agar lebih aman dan kadang membantu autoplay di mobile
            src={`https://www.youtube.com/embed/${dataUndangan.audio.youtubeID}?autoplay=1&loop=1&playlist=${dataUndangan.audio.youtubeID}&controls=0&origin=${typeof window !== 'undefined' ? window.location.origin : ''}`}
            title="Music Player"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* 2. TOMBOL FLOAT (PIRINGAN HITAM) */}
      <button
        onClick={toggleMusic}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/50 bg-white/20 backdrop-blur-md shadow-xl flex items-center justify-center transition-all duration-300 ${
           musicStatus ? "animate-spin-slow" : ""
        }`}
      >
        {musicStatus ? (
          // Icon Music Note (Sedang Main)
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-[#0a2a4a]" viewBox="0 0 16 16">
            <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z"/>
            <path fillRule="evenodd" d="M9 3v10H8V3h1z"/>
            <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z"/>
          </svg>
        ) : (
          // Icon Pause/Mute (Sedang Mati)
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-slate-600" viewBox="0 0 16 16">
             <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
          </svg>
        )}
      </button>

    </div>
  );
}