// FILE: components/Opening.tsx
'use client';

import Image from "next/image";
import { dataUndangan } from "../data/content";

export default function Opening({ isVisible }: { isVisible: boolean }) {
  // Kalau belum dibuka (isVisible false), sembunyikan animasi
  const animClass = isVisible ? "animate-fade-in-up" : "opacity-0";

  return (
    <section className="relative min-h-screen flex flex-col items-center py-16 px-6 bg-white overflow-hidden text-center">
      
      {/* Background Awan/Watercolor Tipis */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-tr-full opacity-60 blur-3xl pointer-events-none" />

      {/* --- KONTEN --- */}
      <div className="relative z-10 max-w-lg w-full space-y-8 mt-4">
        
        {/* 1. SALAM (Arabic) - Delay 200ms */}
        <div className={`${animClass}`} style={{ animationDelay: '200ms' }}>
          <p className="text-2xl text-[#0a2a4a] font-serif font-medium mb-2">
            اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
          <p className="text-[#005f99] font-bold text-sm tracking-widest uppercase mt-4">
            Assalamu’alaikum Wr. Wb.
          </p>
        </div>

        {/* 2. TEKS PEMBUKA - Delay 500ms */}
        <div className={`${animClass}`} style={{ animationDelay: '500ms' }}>
           <p className="text-slate-600 leading-relaxed text-sm md:text-base px-2 font-sans">
             Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud mengundang Anda di acara kami. 
             Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
           </p>
        </div>

        {/* 3. FOTO LINGKARAN - Delay 800ms */}
        <div className={`relative flex justify-center my-6 ${animClass}`} style={{ animationDelay: '800ms' }}>
           <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">
              
              {/* Frame Bunga CSS (Animasi Putar) */}
              <div className="absolute inset-0 animate-spin-slow opacity-70">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-gradient-to-b from-blue-200 to-transparent rounded-full blur-md" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-24 bg-gradient-to-t from-blue-200 to-transparent rounded-full blur-md" />
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-24 h-16 bg-gradient-to-r from-blue-200 to-transparent rounded-full blur-md" />
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-24 h-16 bg-gradient-to-l from-blue-200 to-transparent rounded-full blur-md" />
              </div>
              
              {/* Garis Lingkaran Tipis */}
              <div className="absolute inset-2 border border-blue-200 rounded-full scale-110" />

              {/* FOTO PASANGAN */}
              <div className="relative w-56 h-56 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                 <Image 
                    src="/mara1.jpg" 
                    alt="Mempelai" 
                    fill 
                    className="object-cover"
                 />
              </div>
           </div>
        </div>

        {/* 4. AYAT SUCI - Delay 1100ms */}
        <div className={`${animClass} relative p-6 mt-4 border border-blue-100 rounded-2xl bg-blue-50/50`} style={{ animationDelay: '1100ms' }}>
           <h3 className="text-[#005f99] font-bold text-xs mb-2 uppercase tracking-widest">
             {dataUndangan.kutipan.judul}
           </h3>
           {/* PERBAIKAN: Menggunakan &quot; pengganti tanda kutip */}
           <p className="text-slate-700 italic text-sm leading-loose font-serif">
             &quot;{dataUndangan.kutipan.isi}&quot;
           </p>
        </div>

      </div>
    </section>
  );
}