// FILE: app/page.tsx
'use client';

import { useState, useEffect } from "react";

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

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // --- SCRIPT ANIMASI SCROLL OTOMATIS ---
  useEffect(() => {
    if (!isOpen) return; // Jangan jalankan kalau cover belum dibuka

    // Observer: Mata-mata yang melihat apakah elemen masuk layar
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Jika elemen terlihat di layar (masuk viewport)
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible'); // Tambahkan class biar muncul
        }
      });
    }, { threshold: 0.15 }); // Muncul saat 15% bagian elemen terlihat

    // Targetkan semua elemen yang punya class 'animate-on-scroll'
    const hiddenElements = document.querySelectorAll('.animate-on-scroll');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isOpen]);

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      
      {/* 1. MUSIC PLAYER (Melayang) */}
      <MusicPlayer isPlaying={isOpen} />

      {/* 2. COVER DEPAN (Animasi Slide Up saat dibuka) */}
      <div 
        className={`fixed inset-0 z-50 transition-transform duration-[1500ms] ease-in-out ${
          isOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <Cover onOpen={() => setIsOpen(true)} />
      </div>

      {/* 3. KONTEN UTAMA */}
      <div className="relative z-0">
         
         {/* HERO (Paling Atas) */}
         {/* Tidak perlu animate-on-scroll karena dia muncul pertama kali */}
         <div id="home">
            <Hero />
         </div>

         {/* OPENING (Fade In dari Bawah) */}
         <div className="animate-on-scroll">
            <Opening isVisible={isOpen} />
         </div>

         {/* COUPLE (Fade In dari Bawah) */}
         <div id="couple" className="animate-on-scroll">
            <Couple />
         </div>
         
         {/* EVENT (Fade In dari Bawah) */}
         <div id="event" className="animate-on-scroll">
            <Event />
         </div>
         
         {/* GALLERY (Fade In dari Bawah) */}
         <div id="gallery" className="animate-on-scroll">
            <Gallery />
         </div>

         {/* GIFT / HADIAH (Fade In dari Bawah) */}
         <div className="animate-on-scroll">
             <Gift />
         </div>

         {/* RSVP / UCAPAN (Fade In dari Bawah) */}
         <div id="rsvp" className="animate-on-scroll">
            <Rsvp />
         </div>

         {/* CLOSING (Fade In dari Bawah) */}
         <div className="animate-on-scroll">
             <Closing />
         </div>

         {/* NAVBAR (Hanya muncul jika sudah dibuka) */}
         {isOpen && <Navbar />}

         {/* COPYRIGHT FOOTER */}
         <div className="py-6 text-center bg-white/50 pb-24 animate-on-scroll">
            <p className="text-slate-400 text-[10px] tracking-widest uppercase">
                Digital Invitation © 2026 • Created with Love
            </p>
         </div>
      </div>

    </main>
  );
}