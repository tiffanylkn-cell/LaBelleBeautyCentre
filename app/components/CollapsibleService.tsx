"use client";

import { useState } from "react";
import Image from "next/image";

interface CollapsibleServiceProps {
  title: string;
  description: string;
  bullets?: string[];
  additionalParagraphs?: string[];
  whatsAppText: string;
}

export default function CollapsibleService({
  title,
  description,
  bullets = [],
  additionalParagraphs = [],
  whatsAppText,
}: CollapsibleServiceProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBooking = () => {
    const encodedText = encodeURIComponent(
      `Hi La Belle, I'm interested in booking an appointment for your "${whatsAppText}" treatment.`
    );
    window.open(`https://wa.me/60109191218?text=${encodedText}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-xl shadow-md border border-zinc-100 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg">
      <div>
        <h3 className="text-xl font-bold font-serif text-zinc-950 text-center mb-3">
          {title}
        </h3>
        
        {/* Toggle Button */}
        <div className="text-center mb-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-sm font-semibold text-amber-700 hover:text-amber-800 underline underline-offset-4 focus:outline-none transition-colors duration-200"
          >
            {isOpen ? "Hide Content" : "Show Content"}
          </button>
        </div>

        {/* Collapsible Content Area */}
        <div
          className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100 my-2" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden space-y-3 text-sm text-zinc-700 leading-relaxed">
            <p className="font-medium text-zinc-800">{description}</p>
            
            {bullets.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {bullets.map((bullet, idx) => (
                  <li key={idx} className="text-zinc-600">
                    {bullet}
                  </li>
                ))}
              </ul>
            )}

            {additionalParagraphs.map((para, idx) => (
              <p key={idx} className="text-zinc-600">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <button
        onClick={handleBooking}
        className="w-full mt-4 bg-[#fccf53] hover:bg-amber-400 text-zinc-950 font-serif font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <span>Book Appointment Now</span>
        <Image
          src="/assets/img/wa_logo.png"
          alt="WhatsApp Logo"
          width={20}
          height={20}
          className="w-5 h-5 object-contain"
        />
      </button>
    </div>
  );
}
