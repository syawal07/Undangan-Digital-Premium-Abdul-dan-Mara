import type { Metadata } from "next";
import { Great_Vibes, Lato } from "next/font/google"; // Ganti Font disini
import "./globals.css";

// Font Mirip "Justin & Sisca"
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-wedding", // Kita namakan variable-nya font-wedding
});

// Font untuk teks "Save The Date" / "Kepada"
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "The Wedding of Abdul & Mar'a",
  description: "Undangan Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      {/* Masukkan variable font ke body */}
      <body className={`${greatVibes.variable} ${lato.variable} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}