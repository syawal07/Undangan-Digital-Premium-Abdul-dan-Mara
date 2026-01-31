// FILE: components/Closing.tsx
'use client';

import Image from "next/image";
import { dataUndangan } from "../data/content";

export default function Closing() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden text-center pb-32">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/bg-texture.jpg')] opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto space-y-10 animate-on-scroll opacity-0">
         
         {/* Teks Penutup */}
         <div className="space-y-4">
            <h3 className="text-[#0a2a4a] text-lg font-bold font-serif italic">
               {dataUndangan.penutup.salam}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed px-4">
               {dataUndangan.penutup.ucapan}
            </p>
         </div>

         {/* Foto Lingkaran Akhir */}
         <div className="relative flex justify-center my-8">
             <div className="relative w-48 h-48">
                 {/* Efek Putar Bunga CSS */}
                 <div className="absolute inset-0 animate-spin-slow opacity-50">
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-blue-200 rounded-full blur-sm" />
                     <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-12 bg-blue-200 rounded-full blur-sm" />
                     <div className="absolute top-1/2 left-0 -translate-y-1/2 w-12 h-8 bg-blue-200 rounded-full blur-sm" />
                     <div className="absolute top-1/2 right-0 -translate-y-1/2 w-12 h-8 bg-blue-200 rounded-full blur-sm" />
                 </div>
                 
                 {/* Foto */}
                 <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl z-10">
                    <Image 
                        src="/mara2.jpg" // Pakai foto lain biar variasi
                        alt="Couple Ending" 
                        fill 
                        className="object-cover"
                    />
                 </div>
             </div>
         </div>

         {/* Tanda Tangan */}
         <div className="space-y-2">
            <p className="text-slate-500 text-xs tracking-widest uppercase">
                {dataUndangan.penutup.hormatKami}
            </p>
            <h2 className="text-5xl text-[#005f99] font-wedding">
                {dataUndangan.mempelai.pria.namaPanggilan} & {dataUndangan.mempelai.wanita.namaPanggilan}
            </h2>
            <div className="pt-4 text-slate-400 text-xs leading-relaxed">
                <p>Keluarga Besar</p>
                <p>{dataUndangan.mempelai.pria.orangTua.ayah} & {dataUndangan.mempelai.pria.orangTua.ibu}</p>
                <p>&</p>
                <p>{dataUndangan.mempelai.wanita.orangTua.ayah} & {dataUndangan.mempelai.wanita.orangTua.ibu}</p>
            </div>
         </div>

      </div>
    </section>
  );
}