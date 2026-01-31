// FILE: components/Rsvp.tsx
'use client';

import { useState } from "react";
import { dataUndangan } from "../data/content";

export default function Rsvp() {
  const [formData, setFormData] = useState({
    nama: "",
    jumlah: "1",
    status: "Hadir",
    pesan: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // FORMAT PESAN WHATSAPP
    // %0A adalah kode untuk Enter (Baris baru)
    const text = `Halo Kak Abdul & Mar'a, saya ingin konfirmasi kehadiran:%0A%0A` +
                 `👤 Nama: *${formData.nama}*%0A` +
                 `👥 Jumlah: *${formData.jumlah} Orang*%0A` +
                 `✅ Status: *${formData.status}*%0A` +
                 `💌 Ucapan: ${formData.pesan}%0A%0A` +
                 `Terima kasih!`;

    // Buka WhatsApp
    const waLink = `https://wa.me/${dataUndangan.rsvp.nomorWA}?text=${text}`;
    window.open(waLink, '_blank');
  };

  return (
    <section className="relative py-20 px-6 bg-slate-50 overflow-hidden">
      
      {/* Dekorasi Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-bl-full opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-tr-full opacity-50 blur-3xl" />

      <div className="relative z-10 max-w-lg mx-auto space-y-10 animate-on-scroll opacity-0">
        
        {/* Judul */}
        <div className="text-center space-y-4">
           <h2 className="text-5xl text-[#005f99] font-wedding drop-shadow-sm">
             {dataUndangan.rsvp.judul}
           </h2>
           <p className="text-slate-500 text-sm leading-relaxed px-4">
             {dataUndangan.rsvp.deskripsi}
           </p>
        </div>

        {/* FORMULIR (Glass Effect) */}
        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-md border border-blue-50 p-8 rounded-2xl shadow-lg space-y-5">
           
           {/* Input Nama */}
           <div className="space-y-2">
              <label className="text-xs font-bold text-[#0a2a4a] uppercase tracking-wider">Nama Tamu</label>
              <input 
                type="text" 
                name="nama"
                required
                placeholder="Masukkan Nama Anda"
                value={formData.nama}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#005f99] text-slate-700 transition"
              />
           </div>

           {/* Input Jumlah & Status (Grid) */}
           <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0a2a4a] uppercase tracking-wider">Jumlah</label>
                <select 
                    name="jumlah"
                    value={formData.jumlah}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#005f99] text-slate-700 transition"
                >
                    {[1,2,3,4,5].map(num => (
                        <option key={num} value={num}>{num} Orang</option>
                    ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0a2a4a] uppercase tracking-wider">Kehadiran</label>
                <select 
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#005f99] text-slate-700 transition"
                >
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak Hadir">Maaf, Tidak Bisa</option>
                    <option value="Masih Ragu">Masih Ragu</option>
                </select>
              </div>
           </div>

           {/* Input Ucapan */}
           <div className="space-y-2">
              <label className="text-xs font-bold text-[#0a2a4a] uppercase tracking-wider">Ucapan & Doa</label>
              <textarea 
                name="pesan"
                rows={4}
                required
                placeholder="Berikan ucapan manis untuk mempelai..."
                value={formData.pesan}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-blue-50/50 border border-blue-100 focus:outline-none focus:ring-2 focus:ring-[#005f99] text-slate-700 transition resize-none"
              />
           </div>

           {/* Tombol Kirim */}
           <button 
             type="submit"
             className="w-full bg-[#0a2a4a] text-white font-bold py-4 rounded-xl shadow-lg hover:bg-[#005f99] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group"
           >
             <span>Kirim via WhatsApp</span>
             {/* Icon WA */}
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="group-hover:animate-pulse" viewBox="0 0 16 16">
               <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
             </svg>
           </button>

        </form>

      </div>
    </section>
  );
}