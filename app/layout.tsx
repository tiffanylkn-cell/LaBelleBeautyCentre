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
    "La Belle Beauty Centre specializes in Korean-inspired facial treatments for acne, pigmentation, anti-aging, hydration, eye bags, dark circles and more. We help restore healthy, radiant skin and enhance your natural beauty through professional skin management solutions.",
  keywords: "beauty centre, skin management, Puchong beauty clinic, anti aging treatment, skin tag removal, eye bag removal, Korean beauty, CAK",
  authors: [{ name: "La Belle Beauty Centre" }],
  openGraph: {
    title: "La Belle Beauty Centre",
    description:
      "La Belle Beauty Centre specializes in Korean-inspired facial treatments for acne, pigmentation, anti-aging, hydration, eye bags, dark circles and more. We help restore healthy, radiant skin and enhance your natural beauty through professional skin management solutions.",
    siteName: "La Belle Beauty Centre",
  },
  icons: {
    icon: [
      {
        url: "/lblogo.png",
        type: "image/png",
        sizes: "922x914",
      },
      { url: "/lblogo.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: ["/lblogo.png"],
    apple: [{ url: "/lblogo.png" }],
  },
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
