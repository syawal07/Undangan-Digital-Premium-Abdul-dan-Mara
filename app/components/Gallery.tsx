// FILE: components/Gallery.tsx
'use client';

import { useState } from "react";
import Image from "next/image";
import { dataUndangan } from "../data/content";

export default function Gallery() {
  // State untuk fitur Lightbox (Pop-up Foto)
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="relative py-20 px-4 bg-slate-50 overflow-hidden">
      
      {/* Dekorasi Background Halus */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 animate-on-scroll">
        
        {/* --- 1. HEADER JUDUL --- */}
        <div className="text-center space-y-3">
           <div className="flex items-center justify-center gap-4 opacity-60">
              <div className="h-[1px] w-12 bg-[#0a2a4a]" />
              <p className="text-[#0a2a4a] text-xs font-bold tracking-[0.3em] uppercase">
                Our Moment
              </p>
              <div className="h-[1px] w-12 bg-[#0a2a4a]" />
           </div>
           <h2 className="text-5xl md:text-6xl text-[#005f99] font-wedding drop-shadow-sm">
             {dataUndangan.galeri.judul}
           </h2>
           {/* PERBAIKAN ESLINT: Ganti " dengan &quot; */}
           <p className="text-slate-500 text-sm max-w-md mx-auto italic">
             &quot;Merekam setiap detik kebahagiaan dalam lembaran kenangan abadi.&quot;
           </p>
        </div>

        {/* --- VIDEO DIHAPUS SESUAI PERMINTAAN KLIEN --- */}

        {/* --- 2. PHOTO GRID (MASONRY + LIGHTBOX TRIGGER) --- */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
           {dataUndangan.galeri.foto.map((src, index) => (
             <div 
                key={index} 
                className="break-inside-avoid relative group rounded-xl overflow-hidden shadow-lg border-2 border-white bg-white cursor-pointer"
                onClick={() => setSelectedImage(src)} // Klik untuk buka Lightbox
             >
                <Image 
                  src={src} 
                  alt={`Gallery ${index}`} 
                  width={600} 
                  height={800}
                  className="w-full h-auto object-cover transform transition duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gelap & Ikon Mata saat Hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                        </svg>
                    </div>
                </div>
             </div>
           ))}
        </div>

      </div>

      {/* --- 3. LIGHTBOX MODAL (POP-UP FULLSCREEN) --- */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)} // Klik background untuk tutup
        >
            {/* Tombol Close */}
            <button className="absolute top-6 right-6 text-white/70 hover:text-white transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>

            {/* Gambar Full */}
            <div className="relative w-full max-w-4xl h-full max-h-[90vh]">
                <Image 
                    src={selectedImage}
                    alt="Full Preview"
                    fill
                    className="object-contain" // Agar gambar tidak terpotong
                    priority
                />
            </div>
        </div>
      )}

    </section>
  );
}