"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    image: "/summer1.png",
    title: "Summer Sale 50% OFF",
    subtitle: "Shop the hottest summer deals!",
    badge: "🔥 Hot Deals",
  },
  {
    image: "/summer2.png",
    title: "Beach Ready Collection",
    subtitle: "Everything you need for the perfect summer!",
    badge: "🏖️ New Arrivals",
  },
  {
    image: "/summer3.png",
    title: "Sun Protection Essentials",
    subtitle: "Stay safe and stylish this summer!",
    badge: "☀️ Best Sellers",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold mb-4">
              {slide.badge}
            </span>
            <h1 className="text-5xl font-black mb-4 drop-shadow-lg">{slide.title}</h1>
            <p className="text-xl mb-6 drop-shadow">{slide.subtitle}</p>
            <Link href="/products" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition shadow-lg">
              Shop Now
            </Link>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${index === current ? "bg-orange-500" : "bg-white/60"}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white px-3 py-2 rounded-full font-bold transition"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white px-3 py-2 rounded-full font-bold transition"
      >
        ›
      </button>
    </div>
  );
}