// FILE: components/Couple.tsx
'use client';

import Image from "next/image";
import { dataUndangan } from "../data/content";

// Helper Component untuk Foto dengan Hiasan CSS
const PhotoFrame = ({ src, delay }: { src: string, delay: string }) => (
  <div className={`relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center animate-on-scroll opacity-0`} style={{ animationDelay: delay }}>
    {/* CSS Flowers / Petals Background */}
    <div className="absolute inset-0 animate-spin-slow opacity-60">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-20 bg-blue-100/80 rounded-full blur-sm" />
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-20 bg-blue-100/80 rounded-full blur-sm" />
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-20 h-12 bg-blue-100/80 rounded-full blur-sm" />
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-20 h-12 bg-blue-100/80 rounded-full blur-sm" />
    </div>
    
    {/* Border Lingkaran */}
    <div className="absolute inset-2 border-[1px] border-blue-300 rounded-full scale-110" />

    {/* Foto Utama */}
    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
      <Image src={src} alt="Mempelai" fill className="object-cover" />
    </div>
  </div>
);

// Helper Component untuk Tombol Instagram
const IgButton = ({ username }: { username: string }) => (
  <a href={`https://instagram.com/${username.replace('@', '')}`} target="_blank" rel="noopener noreferrer"
     className="mt-4 inline-flex items-center gap-2 bg-[#517fa4] text-white px-5 py-2 rounded-lg text-sm font-sans shadow-md hover:bg-[#3a6080] transition-colors">
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
     </svg>
     {username}
  </a>
);

export default function Couple() {
  return (
    <section className="relative w-full py-20 px-6 bg-white overflow-hidden">
        
        {/* Dekorasi Bunga Atas (CSS Only - Efek Awan Biru di pojok) */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-4xl mx-auto space-y-16 relative z-10">

            {/* --- MEMPELAI PRIA --- */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-center md:text-left">
                {/* Foto Pria */}
                <PhotoFrame src="/mara8.jpg" delay="100ms" />
                
                {/* Info Pria */}
                <div className="space-y-3 animate-on-scroll opacity-0" style={{ animationDelay: '300ms' }}>
                    <h2 className="text-5xl text-wedding-blue font-wedding">
                        {dataUndangan.mempelai.pria.namaPanggilan}
                    </h2>
                    <p className="text-lg font-bold text-slate-800 font-sans">
                        {dataUndangan.mempelai.pria.namaLengkap}
                    </p>
                    <div className="text-sm text-slate-500 leading-relaxed font-sans">
                        <p>Putra dari Pasangan</p>
                        <p className="font-bold">{dataUndangan.mempelai.pria.orangTua.ayah}</p>
                        <p>&</p>
                        <p className="font-bold">{dataUndangan.mempelai.pria.orangTua.ibu}</p>
                    </div>
                    <p className="text-sm text-slate-500 mt-2 italic">
                        Beralamat di {dataUndangan.mempelai.pria.asal}
                    </p>
                    {/* Tombol IG */}
                    <IgButton username={dataUndangan.mempelai.pria.instagram} />
                </div>
            </div>

            {/* --- DIVIDER (&) --- */}
            <div className="text-center animate-on-scroll opacity-0" style={{ animationDelay: '500ms' }}>
                <span className="text-6xl md:text-8xl text-blue-200 font-wedding opacity-50">&</span>
            </div>

            {/* --- MEMPELAI WANITA --- */}
            {/* Layout di Mobile tetap Foto diatas, di Desktop Foto di Kanan (Reverse) */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12 text-center md:text-right">
                {/* Foto Wanita */}
                <PhotoFrame src="/mara9.jpg" delay="700ms" />

                {/* Info Wanita */}
                <div className="space-y-3 animate-on-scroll opacity-0" style={{ animationDelay: '900ms' }}>
                    <h2 className="text-5xl text-wedding-blue font-wedding">
                        {dataUndangan.mempelai.wanita.namaPanggilan}
                    </h2>
                    <p className="text-lg font-bold text-slate-800 font-sans">
                        {dataUndangan.mempelai.wanita.namaLengkap}
                    </p>
                    <div className="text-sm text-slate-500 leading-relaxed font-sans">
                        <p>Putri dari Pasangan</p>
                        <p className="font-bold">{dataUndangan.mempelai.wanita.orangTua.ayah}</p>
                        <p>&</p>
                        <p className="font-bold">{dataUndangan.mempelai.wanita.orangTua.ibu}</p>
                    </div>
                    <p className="text-sm text-slate-500 mt-2 italic">
                        Beralamat di {dataUndangan.mempelai.wanita.asal}
                    </p>
                    {/* Tombol IG */}
                    <IgButton username={dataUndangan.mempelai.wanita.instagram} />
                </div>
            </div>

        </div>
    </section>
  );
}