"use client";

import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import TransitionLink from "../components/TransitionLink";
import ContactSection from "../components/Footer/ContactSection";
import { playfair, overpass, belanosima } from "../fonts";

export default function Homepage() {
  const items = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => {
      const fileName = `galleria (${i + 1}).jpg`;
      return {
        id: i + 1,
        src: `/Galleria/${encodeURIComponent(fileName)}`,
        alt: `Galleria ${i + 1}`,
      };
    });
  }, []);

  // Lightbox state
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const ratios = [
  "aspect-[3/4]",
  "aspect-[4/5]",
  "aspect-[2/3]",
  "aspect-[1/1]",
  "aspect-[16/9]",
];


  const openAt = useCallback((index) => {
    setActiveIndex(index);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  }, [items.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i + 1) % items.length);
  }, [items.length]);

  // Keyboard controls (ESC, arrows)
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);

    // Prevent body scroll
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = original;
    };
  }, [isOpen, close, prev, next]);

  // Simple swipe (mobile)
  const touchStartX = useRef(null);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(dx) < 40) return; // threshold
    if (dx > 0) prev();
    else next();
  };

  const active = items[activeIndex];

  function getRatioFromId(id) {
  const seed = (id * 9301 + 49297) % 233280;
  const randomIndex = Math.floor((seed / 233280) * ratios.length);
  return ratios[randomIndex];
}

  return (
    <main className="min-h-screen bg-black px-2 sm:px-6 md:px-8 lg:px-10">
        <div className="fixed top-0 left-0 z-20 w-full bg-transparent text-white px-2.5 md:px-10 py-2">
      <div className="flex items-center">
        <TransitionLink
          href="/"
          className={`${playfair.className} text-[clamp(15px,3vw,22px)] font-semibold`}
        >
          Allstar Ink Tattoo
        </TransitionLink>

        <div className="ml-auto flex items-center gap-10">
          <p
            className={`${overpass.className} hidden min-[900px]:block text-right text-[clamp(10px,2vw,15px)] leading-tight`}
          >
            44 Wickham St Prior&apos;s-Land,<br /> Limerick, V94 X2K5
          </p>

          <TransitionLink
            href="/menu"
            className={`${belanosima.className} px-4 py-3 cursor-pointer`}
          >
            CLOSE
          </TransitionLink>
        </div>
      </div>
    </div>

      <div className="flex items-center h-[320px] md:h-[380px]">
        <h1 className="uppercase text-white tracking-tight text-[clamp(48px,8vw,120px)]">
          Galleria
        </h1>
      </div>

      {/* Nuova Galleria Giustificata */}
<div className="grid gap-4 px-2 grid-cols-2 md:grid-cols-3 auto-rows-[260px] sm:auto-rows-[350px] md:auto-rows-[450px]">
  {items.map((img, idx) => {
    // wide SOLO da md in su (quando hai 3 colonne)
    const wide = idx % 5 === 0;

    return (
      <div
        key={img.id}
        className={`relative overflow-hidden rounded-lg bg-white/5 col-span-1 ${
          wide ? "md:col-span-2" : ""
        }`}
      >
        <button
          type="button"
          onClick={() => openAt(idx)}
          className="w-full h-full block"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </button>
      </div>
    );
  })}
</div>
      <ContactSection />

     
{isOpen && (
  <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
    {/* OVERLAY: click qui chiude */}
    <div
      className="absolute inset-0 bg-black/90 backdrop-blur-sm cursor-pointer"
      onClick={close}
    />

    {/* TOP BAR (sempre visibile) */}
    <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-4 right-2 sm:right-4 z-50 flex items-center justify-between text-white">
      <span className="bg-white/10 px-2 py-1 rounded text-sm sm:text-base">
        {activeIndex + 1} / {items.length}
      </span>

      <button
        onClick={close}
        className="bg-white/10 hover:bg-white/20 transition px-3 py-2 rounded-md"
        aria-label="Chiudi"
      >
        ✕
      </button>
    </div>

    {/* FRECCE AI BORDI PAGINA */}
    <button
      onClick={(e) => {
        e.stopPropagation();
        prev();
      }}
      className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 px-3 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      aria-label="Precedente"
    >
      ‹
    </button>

    <button
      onClick={(e) => {
        e.stopPropagation();
        next();
      }}
      className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 px-3 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
      aria-label="Successiva"
    >
      ›
    </button>

    <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6 pointer-events-none">
 <div
  className="relative z-40 max-w-[92vw] max-h-[88vh] sm:max-w-[90vw] sm:max-h-[90vh] pointer-events-auto"
  onClick={(e) => e.stopPropagation()} 
  onTouchStart={onTouchStart}
  onTouchEnd={onTouchEnd}
>
  <img
    src={active.src}
    alt={active.alt}
    loading="lazy"
     className="w-full max-h-[88vh] sm:max-h-[90vh] md:max-h-[92vh] object-contain select-none"
  draggable={false}
    onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
  />
</div>
  </div>
  </div>
)}
    </main>
  );
}