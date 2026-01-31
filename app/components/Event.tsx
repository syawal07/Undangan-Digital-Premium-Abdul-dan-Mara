// FILE: components/Event.tsx
'use client';

import { dataUndangan } from "../data/content";

// Helper Component: Kartu Acara
const EventCard = ({ title, date, time, icon }: { title: string, date: string, time: string, icon: string }) => (
  <div className="relative group">
    {/* Efek Glow */}
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-white rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
    
    <div className="relative bg-white/80 backdrop-blur-sm border border-blue-50 p-6 rounded-2xl shadow-sm text-center space-y-3 hover:transform hover:-translate-y-1 transition duration-300">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-3xl text-[#005f99] font-wedding">{title}</h3>
      <div className="w-12 h-[2px] bg-blue-200 mx-auto" />
      <div className="text-slate-600 font-sans text-sm space-y-1">
         <p className="font-bold">{date}</p>
         <p>{time}</p>
      </div>
    </div>
  </div>
);

export default function Event() {
  return (
    <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-100/50 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100/40 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-lg mx-auto relative z-10 space-y-12 animate-on-scroll opacity-0">
        
        {/* Judul */}
        <div className="text-center space-y-2">
          <p className="text-[#0a2a4a] text-xs font-bold tracking-[0.3em] uppercase opacity-70">
            Save The Date
          </p>
          <h2 className="text-5xl md:text-6xl text-[#005f99] font-wedding">
            Rangkaian Acara
          </h2>
          <p className="text-slate-500 text-sm px-4 pt-2 leading-relaxed">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:
          </p>
        </div>

        {/* Kartu Acara */}
        <div className="space-y-6">
            <EventCard 
               title="Akad Nikah" 
               icon="💍"
               date={dataUndangan.acara.tanggal}
               time={dataUndangan.acara.waktu.akad}
            />
            <EventCard 
               title="Resepsi Pernikahan" 
               icon="🥂"
               date={dataUndangan.acara.tanggal}
               time={dataUndangan.acara.waktu.resepsi}
            />
        </div>

        {/* Lokasi & Maps */}
        <div className="text-center space-y-6 pt-4">
            <div className="space-y-2">
               <h3 className="text-2xl text-[#005f99] font-wedding">Lokasi Acara</h3>
               <p className="text-slate-700 font-bold text-sm px-8 leading-relaxed">
                 {dataUndangan.acara.lokasi}
               </p>
            </div>

            {/* TOMBOL MAPS (Menggunakan Link dari Data Content) */}
            <a 
              href={dataUndangan.acara.linkPeta} // <--- Update Disini
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0a2a4a] text-white px-8 py-3 rounded-full font-sans text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <span>Lihat Google Maps</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover:animate-bounce" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
            </a>
        </div>

      </div>
    </section>
  );
}