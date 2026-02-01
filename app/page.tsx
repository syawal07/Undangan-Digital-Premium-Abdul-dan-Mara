// FILE: app/page.tsx
'use client';

import { useState, useEffect, Suspense } from "react"; // 1. Tambah Import Suspense

// Import Semua Komponen
import Cover from "./components/Cover";
import Hero from "./components/Hero"; 
import Opening from "./components/Opening";
import Couple from "./components/Couple";
import Event from "./components/Event";
import Gift from "./components/Gift";
import Rsvp from "./components/Rsvp";
import Gallery from "./components/Gallery";
import Closing from "./components/Closing";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

// 2. KITA UBAH NAMA FUNGSI UTAMA MENJADI 'MainContent'
// Ini berisi semua logika website kamu
function MainContent() {
  const [isOpen, setIsOpen] = useState(false);

  // --- SCRIPT ANIMASI SCROLL OTOMATIS ---
  useEffect(() => {
    if (!isOpen) return; 

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible'); 
        }
      });
    }, { threshold: 0.15 }); 

    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* 1. MUSIC PLAYER */}
      <MusicPlayer isPlaying={isOpen} />

      {/* 2. COVER DEPAN */}
      <div 
        className={`fixed inset-0 z-50 transition-transform duration-[1500ms] ease-in-out ${
          isOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <Cover onOpen={() => setIsOpen(true)} />
      </div>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-0">
         
         <div id="home">
            <Hero />
         </div>

         <div className="animate-on-scroll">
            <Opening isVisible={isOpen} />
         </div>

         <div id="couple" className="animate-on-scroll">
            <Couple />
         </div>
         
         <div id="event" className="animate-on-scroll">
            <Event />
         </div>
         
         <div id="gallery" className="animate-on-scroll">
            <Gallery />
         </div>

         <div className="animate-on-scroll">
             <Gift />
         </div>

         <div id="rsvp" className="animate-on-scroll">
            <Rsvp />
         </div>

         <div className="animate-on-scroll">
             <Closing />
         </div>

         {isOpen && <Navbar />}

         <div className="py-6 text-center bg-white/50 pb-24 animate-on-scroll">
            <p className="text-slate-400 text-[10px] tracking-widest uppercase">
                Digital Invitation © 2026 • Created with Love
            </p>
         </div>
      </div>

    </main>
  );
}

// 3. FUNGSI UTAMA BARU (HOME)
// Tugasnya hanya membungkus MainContent dengan Suspense agar Vercel tidak error
export default function Home() {
  return (
    <Suspense fallback={null}>
       <MainContent />
    </Suspense>
  );
}