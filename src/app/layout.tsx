import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oyinola Beauty Enhance — Braiding, Makeup, Wig & Piercing",
  description: "Premium braiding, makeup artistry, wig installation & revamping, piercing, and photoshoot services in Nigeria. Book your appointment today.",
  openGraph: {
    title: "Oyinola Beauty Enhance",
    description: "Premium braiding, makeup, wig, piercing & photoshoot services in Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#faf7f2] text-stone-900 font-sans">{children}</body>
    </html>
  );
}
