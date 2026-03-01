"use client";
import { useMemo } from "react";

export default function InstagramCarousel() {
  const items = useMemo(
    () => [
      { id: 1, src: "/corusel/1.jpg", alt: "Instagram 1" },
      { id: 2, src: "/corusel/2.jpg", alt: "Instagram 2" },
      { id: 3, src: "/corusel/3.jpg", alt: "Instagram 3" },
      { id: 4, src: "/corusel/4.png", alt: "Instagram 4" },
      { id: 5, src: "/corusel/5.png", alt: "Instagram 5" },
      { id: 6, src: "/corusel/6.png", alt: "Instagram 6" },
      { id: 7, src: "/corusel/7.jpg", alt: "Instagram 7" },
      { id: 8, src: "/corusel/8.jpg", alt: "Instagram 8" },
      { id: 9, src: "/corusel/9.png", alt: "Instagram 9" },
    ],
    []
  );

  return (
    <section className="mt-16 ">
      <p className="text-white/80 uppercase tracking-[0.25em] text-xs sm:text-sm">
        INSTAGRAM
      </p>

      <a
        href="https://www.instagram.com/allstartattoo_ireland/"
        target="_blank"
        rel="noreferrer"
        className="block mt-3"
      >
        <h2 className="text-white  uppercase leading-none text-[clamp(22px,3vw,40px)]">
          @allstartattoo_ireland
        </h2>
      </a>

      <div className="mt-8 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 min-w-max pb-3">
          {items.map((img) => (
            <a
              key={img.id}
              href="https://www.instagram.com/allstartattoo_ireland/"
              target="_blank"
              rel="noreferrer"
              className="relative block w-[260px] sm:w-[320px] md:w-[360px] aspect-[4/3] overflow-hidden bg-white/5"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover hover:opacity-90 transition"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}