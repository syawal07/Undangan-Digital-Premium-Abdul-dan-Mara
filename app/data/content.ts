// FILE: /data/content.ts

export const dataUndangan = {
  mempelai: {
    pria: {
      namaLengkap: "Abdul Rahmat",
      namaPanggilan: "Abdul",
      asal: "Jakarta",
      instagram: "@abdul_rahmat",
      orangTua: {
        ayah: "Bapak Mappa",
        ibu: "Ibu Syamsia",
      },
    },
    wanita: {
      namaLengkap: "Mar’atussholehah",
      namaPanggilan: "Mar'a",
      asal: "Jayapura",
      instagram: "@mar_atussholehah",
      orangTua: {
        ayah: "Bapak Muh. Jumadi",
        ibu: "Ibu Hj. St Suryani",
      },
    },
  },
  acara: {
    // Tanggal untuk Hitung Mundur (Format: YYYY-MM-DDTHH:mm:ss)
    targetDate: "2026-02-08T10:00:00", 
    
    // Teks Tanggal yang muncul di layar
    tanggal: "Minggu, 08 Februari 2026",
    
    waktu: {
      akad: "10.00 WIT - Selesai",
      resepsi: "13.00 WIT - Selesai",
    },
    
    // Alamat Teks
    lokasi: "Kediaman Mempelai Wanita (Rumah Cantik & Travel RABBANI), Jl. Kali Acai, Yobe, Kec. Abepura, Kota Jayapura",
    
    // LINK MAPS: Saya buatkan link pencarian spesifik ke titik RABBANI
    linkPeta: "https://www.google.com/maps/search/?api=1&query=Rumah+Cantik+%26+Travel+RABBANI+Jl.+Kali+Acai+Abepura",
  },
  kutipan: {
    judul: "QS. Ar-Rum: 21",
    isi: "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
  },
  // --- DATA GIFT / TITIP HADIAH ---
  hadiah: {
    judul: "Titip Hadiah",
    deskripsi: "Doa restu Bapak/Ibu sekalian merupakan karunia yang sangat berarti bagi kami. Dan jika memberi merupakan ungkapan tanda kasih, Bapak/Ibu dapat memberi kado secara cashless.",
    rekening: [
      {
        namaBank: "BRI",
        nomorRekening: "7624-01-002900-50-2",
        atasNama: "MAR’ATUSSHOLEHAH",
      },
      {
        namaBank: "DANA",
        nomorRekening: "085345775853",
        atasNama: "MAR’ATUSSHOLEHAH",
      }
    ]
  },
  rsvp: {
    judul: "Konfirmasi Kehadiran",
    deskripsi: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.",
    nomorWA: "6285345775853", // Format 62 (bukan 08) agar link WA jalan
  },
  // --- BAGIAN BARU: GALERI ---
  galeri: {
    judul: "Momen Bahagia",
    youtubeID: "f0F6jMTPlY4", 
    foto: [
      "/mara1.jpg",
      "/mara2.jpg",
      "/mara3.jpg",
      "/mara4.jpg",
      "/mara5.jpg",
      "/mara6.jpg"
    ]
  },
  penutup: {
    salam: "Wassalamu’alaikum Warahmatullahi Wabarakatuh",
    ucapan: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.",
    hormatKami: "Kami yang berbahagia,",
  },
  audio: {
    // ID YouTube dari link: https://youtu.be/D5Da9wz5ju0
    youtubeID: "D5Da9wz5ju0", 
  }
};