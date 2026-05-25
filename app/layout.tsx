import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | La Belle Beauty Centre",
  description:
    "La Belle Beauty Centre brings the essence of true Korean beauty right to you. Combining advanced skincare science, time-honored traditions, and holistic treatments to nurture your skin from the inside out.",
  keywords: "beauty centre, skin management, Puchong beauty clinic, anti aging treatment, skin tag removal, eye bag removal, Korean beauty",
  authors: [{ name: "La Belle Beauty Centre" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900 font-sans">
        <Navbar />
        <main className="flex-grow w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
