"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number; // In milliseconds
  aspectRatio?: string; // Tailwind class e.g., 'aspect-[2.91/1.5]' or 'aspect-[4/3]'
  sizes?: string;
  priority?: boolean;
}

export default function Carousel({
  images,
  autoPlayInterval = 5000,
  aspectRatio = "aspect-[291/150]",
  sizes = "100vw",
  priority = false,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Reset autoplay timer when slide index changes
  useEffect(() => {
    if (autoPlayInterval > 0 && images.length > 1) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, images.length, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  return (
    <div className={`relative group w-full ${aspectRatio} overflow-hidden rounded-xl shadow-lg bg-zinc-100`}>
      {/* Slider Container */}
      <div
        className="flex w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              fill
              sizes={sizes}
              priority={priority && index === 0}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="hidden group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
            aria-label="Previous Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="hidden group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 items-center justify-center w-10 h-10 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 z-10"
            aria-label="Next Slide"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Pagination Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === index
                  ? "bg-[#fccf53] scale-110 shadow"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
