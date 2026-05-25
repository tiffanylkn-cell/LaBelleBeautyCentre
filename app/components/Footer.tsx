import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 font-sans border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Foot Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Column 1: Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider font-serif border-b border-amber-600/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-[#fccf53] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/our_service" className="hover:text-[#fccf53] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact_us" className="hover:text-[#fccf53] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col space-y-4 text-center md:text-left">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider font-serif border-b border-amber-600/30 pb-2">
              Social Media
            </h3>
            <div className="flex items-center justify-center md:justify-start space-x-6 pt-2">
              <a
                href="https://api.whatsapp.com/send/?phone=60109191218"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                title="WhatsApp"
              >
                <Image
                  src="/assets/img/Digital_Glyph_Green.png"
                  alt="WhatsApp"
                  width={36}
                  height={37}
                  className="w-9 h-9 object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/labelle.beauty.centre/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                title="Instagram"
              >
                <Image
                  src="/assets/img/2227.png"
                  alt="Instagram"
                  width={37}
                  height={37}
                  className="w-9 h-9 object-contain filter brightness-95"
                />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61573024270657"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform duration-200"
                title="Facebook"
              >
                <Image
                  src="/assets/img/Facebook_logo_(square).png"
                  alt="Facebook"
                  width={37}
                  height={37}
                  className="w-9 h-9 object-contain"
                />
              </a>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider font-serif border-b border-amber-600/30 pb-2">
              Contact Number
            </h3>
            <p className="text-sm font-semibold tracking-wide text-zinc-100">
              010 - 919 1218
            </p>
            <p className="text-xs text-zinc-400">
              Booking is highly recommended. Appointment only.
            </p>
          </div>

          {/* Column 4: Address */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-white text-base font-semibold uppercase tracking-wider font-serif border-b border-amber-600/30 pb-2">
              Address
            </h3>
            <p className="text-sm leading-relaxed text-zinc-300">
              1-2A, Jalan Bandar 10, Pusat Bandar Puchong, 47610 Puchong, Selangor, Malaysia
            </p>
          </div>

        </div>

        <hr className="border-zinc-800 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <p>Copyright © 2025 La Belle Beauty Centre. All Rights Reserved.</p>
          <p className="tracking-widest uppercase text-[10px]">Korean Holistic Skin Management</p>
        </div>

      </div>
    </footer>
  );
}
