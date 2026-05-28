"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/our_service" },
    { name: "Contact Us", href: "/contact_us" },
    { name: "Testimonials", href: "/testimonial" },
    { name: "Promotions", href: "/promotion" },
  ];

  return (
    <header className="w-full bg-white border-b border-zinc-100 sticky top-0 z-50 shadow-sm">
      {/* Top Branding Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="inline-block transition-transform hover:scale-102">
          <Image
            src="/assets/img/logo_bella.png"
            alt="La Belle Beauty Centre Logo"
            width={271}
            height={58}
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </Link>
        <div className="text-right hidden sm:block">
          <p className="text-xs text-zinc-500 uppercase tracking-widest">WhatsApp</p>
          <a
            href="https://wa.me/60109191218"
            className="text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
          >
            010 - 919 1218
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="w-full bg-[#fccf53] font-serif shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-4 w-full justify-end">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200 uppercase tracking-wider ${
                      isActive
                        ? "bg-amber-600 text-white shadow-sm"
                        : "text-zinc-900 hover:bg-amber-400/50 hover:text-black"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center justify-between w-full md:hidden">
              <span className="text-sm font-semibold uppercase tracking-wider text-zinc-900 px-2 py-1 bg-amber-400/30 rounded">
                Menu
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-zinc-900 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-600"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-amber-300 border-t border-amber-400">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-md text-base font-semibold transition-colors uppercase tracking-wider ${
                      isActive
                        ? "bg-amber-600 text-white"
                        : "text-zinc-950 hover:bg-amber-400"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="border-t border-amber-400/50 pt-2 pb-1 px-3">
                <p className="text-xs text-zinc-700 uppercase tracking-widest">WhatsApp to Book</p>
                <a
                  href="https://wa.me/60109191218"
                  className="text-sm font-bold text-amber-800 hover:underline"
                >
                  010 - 919 1218
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
