// FILE: components/Navbar.tsx
'use client';

// Helper Icon Component
const NavItem = ({ icon, label, target }: { icon: React.ReactNode, label: string, target: string }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button 
      onClick={() => scrollTo(target)}
      className="flex flex-col items-center justify-center gap-1 text-[#0a2a4a] hover:text-[#005f99] transition active:scale-95 w-12 group"
    >
      <div className="group-hover:-translate-y-1 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-[9px] font-bold uppercase tracking-wide opacity-80 group-hover:opacity-100">{label}</span>
    </button>
  );
};

export default function Navbar() {
  return (
    // PERBAIKAN POSISI DISINI:
    // 1. 'inset-x-0' = Membentang dari kiri ke kanan penuh
    // 2. 'mx-auto' = Otomatis memposisikan elemen di tengah
    // 3. 'w-fit' = Lebar box mengikuti isinya (tidak full layar)
    <div className="fixed bottom-6 inset-x-0 mx-auto w-fit z-50 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-2xl border border-blue-50 flex items-center gap-6 md:gap-8 animate-fade-in-up">
      
      {/* Home */}
      <NavItem target="home" label="Home" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
           <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
        </svg>
      } />

      {/* Couple */}
      <NavItem target="couple" label="Couple" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
           <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        </svg>
      } />

      {/* Event */}
      <NavItem target="event" label="Acara" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
        </svg>
      } />

      {/* Gallery */}
      <NavItem target="gallery" label="Galeri" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
          <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"/>
        </svg>
      } />

      {/* RSVP */}
      <NavItem target="rsvp" label="Ucapan" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      } />

    </div>
  );
}