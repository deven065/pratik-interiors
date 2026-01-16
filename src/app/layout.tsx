import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { FloatingContactPanel } from "@/components/ui/FloatingContactPanel";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pratik Gupta Interiors | Luxury Interior Design",
  description: "Creating timeless spaces that inspire and elevate everyday living. Premium interior design services for residential, commercial, and hospitality projects across India.",
  keywords: ["interior design", "luxury interiors", "residential design", "commercial design", "hospitality design", "Pratik Gupta", "India"],
  authors: [{ name: "Pratik Gupta Interiors" }],
  openGraph: {
    title: "Pratik Gupta Interiors | Luxury Interior Design",
    description: "Creating timeless spaces that inspire and elevate everyday living.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} antialiased`}
      >
        <Navigation />
        <FloatingContactPanel />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
