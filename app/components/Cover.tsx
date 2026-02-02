'use client';

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { dataUndangan } from "../data/content";

export default function Cover({ onOpen }: { onOpen: () => void }) {
  const searchParams = useSearchParams();
  const rawName = searchParams.get('kpd'); 
  const guestName = rawName ? decodeURIComponent(rawName) : "Tamu Undangan";

  return (
    // CONTAINER UTAMA
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-between py-10 px-6 bg-white overflow-hidden font-sans selection:bg-blue-100">
      
      {/* ==================================================================
          BACKGROUND "WATERCOLOR" ANIMATION (Murni CSS)
          Kita buat bola-bola warna yang di-blur parah untuk efek cat air
         ================================================================== */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Blob Biru Atas */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] animate-pulse" />
        {/* Blob Ungu/Biru Tengah */}
        <div className="absolute top-[40%] right-[-20%] w-80 h-80 bg-blue-100/50 rounded-full blur-[80px]" />
        {/* Blob Bawah */}
        <div className="absolute bottom-[-10%] left-[20%] w-full h-64 bg-gradient-to-t from-blue-200/30 to-transparent blur-[60px]" />
      </div>

      {/* --- BAGIAN ATAS (JUDUL) --- */}
      <div className="text-center z-10 relative mt-6 animate-fade-in-down">
        <p className="text-wedding-blue font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-2 opacity-80">
          The Wedding of
        </p>
        <h1 className="text-6xl md:text-8xl text-wedding-blue font-wedding leading-none drop-shadow-sm">
          {dataUndangan.mempelai.pria.namaPanggilan}
          <span className="text-4xl md:text-5xl mx-3 font-light text-blue-300">&</span>
          {dataUndangan.mempelai.wanita.namaPanggilan}
        </h1>
      </div>

      {/* --- BAGIAN TENGAH (FOTO & BUNGA CSS) --- */}
      <div className="relative flex-grow flex items-center justify-center w-full z-10 py-8">
        
        {/* CONTAINER UTAMA FOTO */}
        <div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center">
            
            {/* ===========================================================
               TEKNIK BUNGA CSS (ABSTRACT FLORAL PETALS)
               Kita buat lingkaran-lingkaran lonjong yang diputar
               untuk membentuk efek bunga di belakang foto.
               =========================================================== 
            */}
            <div className="absolute inset-0 z-0 animate-spin-slow">
                {/* Kelopak 1 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 w-20 h-32 bg-gradient-to-b from-blue-100 to-white rounded-full opacity-60 blur-sm rotate-0" />
                {/* Kelopak 2 */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-20 h-32 bg-gradient-to-t from-blue-100 to-white rounded-full opacity-60 blur-sm rotate-180" />
                {/* Kelopak 3 */}
                <div className="absolute top-1/2 left-0 -translate-x-6 -translate-y-1/2 w-32 h-20 bg-gradient-to-r from-blue-100 to-white rounded-full opacity-60 blur-sm rotate-0" />
                {/* Kelopak 4 */}
                <div className="absolute top-1/2 right-0 translate-x-6 -translate-y-1/2 w-32 h-20 bg-gradient-to-l from-blue-100 to-white rounded-full opacity-60 blur-sm rotate-0" />
                
                {/* Kelopak Diagonal (Tambahan biar penuh) */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-100/30 scale-125" />
                <div className="absolute inset-0 rounded-full border border-dashed border-blue-200/50 scale-150 animate-spin-reverse-slow" />
            </div>

            {/* RING LUAR SHIMMER */}
            <div className="absolute inset-0 rounded-full border-[1px] border-white/50 shadow-[0_0_30px_rgba(173,216,230,0.6)] z-10 scale-105" />

            {/* FOTO PASANGAN */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-2xl z-20 group">
                {/* Placeholder background jika gambar loading */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                
                <Image 
                    src="/mara1.jpg" 
                    alt="Couple" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority
                />
                
                {/* Efek Kilau di Foto (Overlay) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* DEKORASI DAUN (CSS SHAPE) - Kanan Bawah */}
            <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/10 rounded-tl-[80px] rounded-br-[80px] rounded-tr-[20px] rounded-bl-[20px] z-30 blur-[1px] border border-white/20" />
             {/* DEKORASI DAUN (CSS SHAPE) - Kiri Atas */}
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-400/10 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] z-30 blur-[1px]" />

        </div>
      </div>

      {/* --- BAGIAN BAWAH (TOMBOL & TAMU) --- */}
      <div className="relative z-30 text-center w-full space-y-5 mb-8">
        
        {/* Box Nama Tamu (Glassmorphism) */}
        <div className="inline-block relative group">
             {/* Glow effect di belakang box nama */}
             <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 via-blue-50 to-blue-100 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
             
             <div className="relative bg-white/80 backdrop-blur-md px-10 py-3 rounded-xl shadow-sm border border-blue-50/50">
                <p className="text-wedding-blue text-xs font-bold mb-1 uppercase tracking-wider">Kepada Yth.</p>
                <p className="text-xl md:text-2xl text-slate-800 font-bold capitalize font-wedding tracking-wide">
                  {guestName}
                </p>
             </div>
        </div>

        {/* Tombol Buka Premium */}
        <div className="pt-2">
            <button
                onClick={onOpen}
                className="group relative bg-[#0a2a4a] text-white font-wedding text-2xl md:text-3xl px-14 py-3 pb-4 rounded-full shadow-xl shadow-blue-900/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
                {/* Efek Kilatan Cahaya lewat saat hover */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                
                <span className="relative z-10 flex items-center gap-2">
                   Buka Undangan
                </span>
            </button>
        </div>
        
        <p className="text-[10px] text-blue-300/80 font-sans tracking-widest mt-4">
           CREATED WITH LOVE
        </p>

      </div>
    </div>
  );
}