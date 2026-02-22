"use client";

import React, { useEffect, useRef, useState } from "react";
import Cursor from "../Cursor/Cursor";

export default function HorizontalParallaxGallery() {
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const rowTopRef = useRef(null);
  const rowCenterRef = useRef(null);
  const rowBottomRef = useRef(null);
  const rowFourthRef = useRef(null);

  // Traccia mouse senza re-render
  const mousePos = useRef({ x: 0, y: 0 });

  // ✅ LOGICA CURSORE: Controllo coordinate X e Y durante lo scroll
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const checkCollision = () => {
      if (!containerRef.current) return;

      // Otteniamo la posizione della sezione rispetto al viewport (finestra)
      const rect = containerRef.current.getBoundingClientRect();
      const { x, y } = mousePos.current;

      // Verifichiamo se il mouse (X, Y) è dentro i bordi del rettangolo della sezione
      const isInside = 
        x >= rect.left && 
        x <= rect.right && 
        y >= rect.top && 
        y <= rect.bottom;

      setIsHovered(isInside);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", checkCollision, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", checkCollision);
    };
  }, []);

  // ✅ Parallax righe (con requestAnimationFrame)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;

    const handleParallax = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const rect = container.getBoundingClientRect();

        const containerTop = rect.top + scrollY;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        const start = containerTop - windowHeight;
        const end = containerTop + containerHeight;
        const current = scrollY;

        let progress = (current - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));

        const moveDistance = window.innerWidth < 640 ? 320 : 600;
        const offset = moveDistance / 2;

        if (rowTopRef.current) {
          const x = -offset + progress * moveDistance;
          rowTopRef.current.style.transform = `translateX(${x}px)`;
        }
        if (rowCenterRef.current) {
          const x = offset - progress * moveDistance;
          rowCenterRef.current.style.transform = `translateX(${x}px)`;
        }
        if (rowBottomRef.current) {
          const x = -offset + progress * moveDistance;
          rowBottomRef.current.style.transform = `translateX(${x}px)`;
        }
        if (rowFourthRef.current) {
          const x = offset - progress * moveDistance;
          rowFourthRef.current.style.transform = `translateX(${x}px)`;
        }

        rafId = null;
      });
    };

    window.addEventListener("scroll", handleParallax, { passive: true });
    handleParallax();

    return () => {
      window.removeEventListener("scroll", handleParallax);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=900",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=900",
  ];

  const extendedImages = [...images, ...images, ...images, ...images, ...images];

  const cardClass =
    "flex-shrink-0 overflow-hidden rounded-lg " +
    "w-[46vw] max-w-[220px] " + 
    "sm:w-[32vw] sm:max-w-[280px] " + 
    "md:w-[24vw] md:max-w-[360px] " + 
    "lg:w-[400px] " + 
    "aspect-square";

  const rowClass = "flex gap-3 sm:gap-4 md:gap-6 will-change-transform";

  return (
    <div className="bg-gray-900 overflow-x-hidden">
      <Cursor isActive={isHovered} />

      <section
        ref={containerRef}
        className={`relative h-[100vh] bg-black ${isHovered ? "cursor-none" : ""}`}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center gap-8 overflow-hidden">
          <div className="flex rotate-45 scale-150 flex-col gap-6">
            <div ref={rowTopRef} className={rowClass}>
              {extendedImages.map((img, i) => (
                <div key={`top-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
            <div ref={rowCenterRef} className={rowClass}>
              {extendedImages.map((img, i) => (
                <div key={`center-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
            <div ref={rowBottomRef} className={rowClass}>
              {extendedImages.map((img, i) => (
                <div key={`bottom-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
            <div ref={rowFourthRef} className={rowClass}>
              {extendedImages.map((img, i) => (
                <div key={`fourth-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}