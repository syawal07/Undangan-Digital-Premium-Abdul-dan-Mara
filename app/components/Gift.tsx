// FILE: components/Gift.tsx
'use client';

import { useState } from "react";
import { dataUndangan } from "../data/content";

// Helper Component: Kartu Rekening
const BankCard = ({ bank, number, name }: { bank: string, number: string, name: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Menghapus tanda strip (-) agar yang disalin hanya angka
    const cleanNumber = number.replace(/-/g, '');
    navigator.clipboard.writeText(cleanNumber);
    
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset status setelah 2 detik
  };

  return (
    <div className="relative w-full max-w-sm mx-auto group perspective-1000">
       {/* Background Kartu dengan Gradient Biru Premium */}
       <div className="relative bg-gradient-to-br from-[#0a2a4a] to-[#005f99] text-white rounded-2xl p-6 shadow-xl overflow-hidden border border-white/10 transform transition-transform duration-300 hover:scale-[1.02]">
          
          {/* Hiasan Lingkaran Transparan di Background Kartu */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-xl pointer-events-none" />

          {/* Logo Bank (Teks) & Chip */}
          <div className="flex justify-between items-start mb-6">
             <div className="flex flex-col">
                <span className="font-bold text-lg tracking-wider opacity-90">{bank}</span>
                {/* Chip Kartu Simpel (Kotak Kuning) */}
                <div className="w-10 h-7 bg-gradient-to-r from-yellow-200 to-yellow-500 rounded-md mt-2 shadow-sm opacity-80" />
             </div>
             {/* Logo Contactless (Hiasan) */}
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="opacity-60" viewBox="0 0 16 16">
                <path d="M8 12.5c-1.637 0-3.12-.51-4.342-1.392l-.966 1.258A8.003 8.003 0 0 0 15.5 8.5l-1.574-.42a6.47 6.47 0 0 1-5.926 4.42zM2.876 9.38L1.402 9.8A8.003 8.003 0 0 0 4.5 14.285l.966-1.258a6.47 6.47 0 0 1-2.59-3.647zm10.748-4.76L15.098 3.36a8.003 8.003 0 0 0-4.342-1.392v1.587c1.637 0 3.12.51 4.342 1.392zM8 1.968V.38a8.003 8.003 0 0 0-4.5 2.115l1.474 1.22A6.47 6.47 0 0 1 8 1.968z"/>
             </svg>
          </div>

          {/* Nomor Rekening */}
          <div className="space-y-1 mb-6">
             <p className="text-xs text-blue-200 uppercase tracking-widest">Nomor Rekening</p>
             <p className="text-2xl font-mono tracking-widest drop-shadow-md">{number}</p>
          </div>

          {/* Nama Pemilik & Tombol Copy */}
          <div className="flex justify-between items-end">
             <div className="space-y-1">
                <p className="text-[10px] text-blue-200 uppercase tracking-widest">Atas Nama</p>
                <p className="font-bold text-sm md:text-base tracking-wide uppercase">{name}</p>
             </div>
             
             <button 
                onClick={handleCopy}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all duration-300 shadow-lg ${
                    copied 
                    ? "bg-green-500 text-white translate-y-0" 
                    : "bg-white text-[#0a2a4a] hover:bg-blue-50 active:scale-95"
                }`}
             >
                {copied ? (
                   <>
                     <span>Berhasil!</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/></svg>
                   </>
                ) : (
                   <>
                     <span>Salin</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/><path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/></svg>
                   </>
                )}
             </button>
          </div>
       </div>
    </div>
  );
};

export default function Gift() {
  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white pointer-events-none" />

      <div className="relative z-10 max-w-lg mx-auto text-center space-y-10 animate-on-scroll opacity-0">
         
         {/* Judul */}
         <div className="space-y-4">
            <h2 className="text-5xl text-[#005f99] font-wedding drop-shadow-sm">
                {dataUndangan.hadiah.judul}
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed px-2 md:px-6">
                {dataUndangan.hadiah.deskripsi}
            </p>
         </div>

         {/* Daftar Kartu Rekening */}
         <div className="space-y-6">
            {dataUndangan.hadiah.rekening.map((rek, index) => (
                <BankCard 
                    key={index}
                    bank={rek.namaBank}
                    number={rek.nomorRekening}
                    name={rek.atasNama}
                />
            ))}
         </div>

         {/* Penutup Manis */}
         <div className="pt-6">
             <p className="text-[#0a2a4a] text-sm font-bold italic opacity-60">
                Terima kasih atas doa & restu Anda
             </p>
         </div>

      </div>
    </section>
  );
}