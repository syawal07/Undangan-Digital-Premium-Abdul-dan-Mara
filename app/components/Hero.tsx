// FILE: components/Hero.tsx
'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { dataUndangan } from "../data/content";

// --- PERBAIKAN DISINI: WARNA CARD JADI BIRU GELAP ---
const TimeBox = ({ val, label }: { val: number, label: string }) => (
  <div className="flex flex-col items-center justify-center bg-[#0a2a4a]/90 backdrop-blur-sm border border-white/20 text-white p-2 rounded-xl w-14 h-16 md:w-20 md:h-24 shadow-xl ring-1 ring-white/10">
    {/* Angka */}
    <span className="text-xl md:text-3xl font-bold font-sans leading-none">{val < 10 ? `0${val}` : val}</span>
    {/* Label (Hari/Jam) - Warna biru muda biar beda */}
    <span className="text-[8px] md:text-xs uppercase tracking-wider text-blue-200 mt-1">{label}</span>
  </div>
);

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/mara1.jpg",
    "/mara2.jpg",
    "/mara3.jpg",
    "/mara4.jpg",
    "/mara5.jpg",
    "/mara6.jpg"
  ];

  // LOGIKA SLIDESHOW (4 Detik)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // LOGIKA HITUNG MUNDUR
  useEffect(() => {
    const target = new Date(dataUndangan.acara.targetDate).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full overflow-hidden flex flex-col justify-end pb-24 md:pb-12 bg-gray-900">
      
      {/* 1. LAYER SLIDESHOW */}
      {images.map((src, index) => (
        <div 
            key={src}
            className={`absolute inset-0 z-0 transition-all duration-[2000ms] ease-in-out ${
                index === currentImage ? "opacity-100 scale-105" : "opacity-0 scale-100"
            }`}
        >
            <Image 
                src={src} 
                alt={`Mempelai ${index + 1}`}
                fill 
                className="object-cover object-top md:object-center"
                priority={index === 0}
            />
            {/* Overlay Gelap Tipis (Supaya foto tidak terlalu silau) */}
            <div className="absolute inset-0 bg-black/10" />
        </div>
      ))}

      {/* 2. GRADIENT OVERLAY (PENTING BUAT TEKS) */}
      {/* Gradient bawah dibuat lebih tinggi supaya TimeBox kontras */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-transparent via-60% to-slate-50" />

      {/* 3. KONTEN (TEKS & TIMER) */}
      <div className="relative z-20 text-center px-4 w-full animate-fade-in-up space-y-5 mb-4">
        
        {/* Judul & Nama */}
        <div className="space-y-1 drop-shadow-lg">
            <p className="text-white/90 tracking-[0.4em] text-[10px] md:text-sm font-bold uppercase mb-2">
               The Wedding of
            </p>
            <h1 className="text-5xl md:text-8xl text-white font-wedding leading-tight">
                {dataUndangan.mempelai.pria.namaPanggilan}
                <span className="text-blue-300 mx-2 font-sans font-light text-3xl md:text-5xl">&</span>
                {dataUndangan.mempelai.wanita.namaPanggilan}
            </h1>
        </div>

        {/* Countdown Timer (Card Biru Navy) */}
        <div className="flex justify-center gap-3 py-2">
           <TimeBox val={timeLeft.days} label="Hari" />
           <TimeBox val={timeLeft.hours} label="Jam" />
           <TimeBox val={timeLeft.minutes} label="Menit" />
           <TimeBox val={timeLeft.seconds} label="Detik" />
        </div>

        {/* Tanggal Badge */}
        <div className="inline-block pt-2">
             <div className="bg-white/95 backdrop-blur-md px-6 py-2 rounded-full shadow-lg border border-white">
                <p className="text-[#005f99] font-bold text-xs md:text-sm tracking-widest uppercase">
                    {dataUndangan.acara.tanggal}
                </p>
            </div>
        </div>

      </div>
      
    </section>
  );
}