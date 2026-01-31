// FILE: components/Gallery.tsx
'use client';

import Image from "next/image";
import { dataUndangan } from "../data/content";

export default function Gallery() {
  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-12 animate-on-scroll opacity-0">
        
        {/* JUDUL */}
        <div className="text-center space-y-4">
           <p className="text-[#0a2a4a] text-xs font-bold tracking-[0.3em] uppercase opacity-60">
             Our Gallery
           </p>
           <h2 className="text-5xl text-[#005f99] font-wedding">
             {dataUndangan.galeri.judul}
           </h2>
        </div>

        {/* 1. VIDEO YOUTUBE */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
           <iframe 
             width="100%" 
             height="100%" 
             src={`https://www.youtube.com/embed/${dataUndangan.galeri.youtubeID}?rel=0&controls=1`} 
             title="YouTube video player" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
             allowFullScreen
             className="absolute inset-0"
           />
        </div>

        {/* 2. PHOTO GRID (MASONRY STYLE) */}
        {/* columns-2 md:columns-3 membuat layout seperti Pinterest */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
           {dataUndangan.galeri.foto.map((src, index) => (
             <div key={index} className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-md border-2 border-white/50">
                <Image 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  width={500} 
                  height={700}
                  className="w-full h-auto object-cover transform transition duration-500 group-hover:scale-110"
                />
                {/* Overlay saat Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-300" />
             </div>
           ))}
        </div>

      </div>
    </section>
  );
}