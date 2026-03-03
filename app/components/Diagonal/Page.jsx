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

  const mousePos = useRef({ x: 0, y: 0 });

  // ✅ LOGICA CURSORE
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const checkCollision = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const { x, y } = mousePos.current;
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

  // ✅ Parallax righe
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;

  // ✅ Sostituisci il calcolo dentro handleParallax con questo:
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
    let progress = (scrollY - start) / (end - start);
    progress = Math.max(0, Math.min(1, progress));

    // Aumentiamo drasticamente la distanza di movimento
    // e usiamo un offset di base per "pre-caricare" la posizione
    const moveDistance = window.innerWidth < 640 ? 600 : 1200;
    
    // Questo sposta la riga a sinistra di metà del movimento totale + una base fissa
    // per garantire che non si vedano mai i bordi
    const baseOffset = moveDistance / 2;

    const applyTransform = (ref, direction = 1) => {
      if (ref.current) {
        // Calcolo: partiamo da -baseOffset e ci muoviamo in base al progress
        const move = direction === 1 
          ? -baseOffset + (progress * moveDistance) 
          : baseOffset - (progress * moveDistance);
        ref.current.style.transform = `translateX(${move}px)`;
      }
    };

    applyTransform(rowTopRef, 1);
    applyTransform(rowCenterRef, -1);
    
    if (window.innerWidth >= 640) {
      applyTransform(rowBottomRef, 1);
      applyTransform(rowFourthRef, -1);
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
    "/Diagonal/2.png",
    "/Diagonal/3.png",
    "/Diagonal/13.png",
    "/Diagonal/5.png",
    "/Diagonal/7.png",
    "/Diagonal/9.png",
    "/Diagonal/11.png",
    "/Diagonal/12.png",
    "/Diagonal/1.png",
    "/Diagonal/14.png",
  ];

  function mulberry32(seed) {
    return function () {
      let t = (seed += 0x6d2b79f5);
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffleWithSeed(arr, seed) {
    const a = [...arr];
    const rand = mulberry32(seed);
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function repeatToLength(arr, targetLen) {
    const out = [];
    while (out.length < targetLen) out.push(...arr);
    return out.slice(0, targetLen);
  }

  // Aumenta il numero di immagini per coprire tutta la larghezza
  const ROW_LEN = 40;

  const rowTopImages = repeatToLength(shuffleWithSeed(images, 11), ROW_LEN);
  const rowCenterImages = repeatToLength(shuffleWithSeed(images, 22), ROW_LEN);
  const rowBottomImages = repeatToLength(shuffleWithSeed(images, 33), ROW_LEN);
  const rowFourthImages = repeatToLength(shuffleWithSeed(images, 44), ROW_LEN);

  // CARD PIÙ GRANDI - coprono tutta la larghezza
 const cardClass =
    "flex-shrink-0 rounded-lg " +
    "w-[70vw] min-w-[250px] " + 
    "sm:w-[45vw] sm:min-w-[300px] " + 
    "md:w-[35vw] md:min-w-[350px] " + 
    "lg:w-[30vw] lg:min-w-[400px] " +
    "aspect-square";

  // ✅ GAP IDENTICO: Usiamo la stessa variabile per orizzontale e verticale
  // Si rimpicciolisce progressivamente (2.5rem -> 1.5rem)
  const gapClass = "gap-6 min-[420px]:gap-8 sm:gap-12 lg:gap-16";

  const rowClass = `flex ${gapClass} items-center will-change-transform`;

  return (
    <div className="bg-gray-900 overflow-x-hidden overflow-y-hidden">
      <Cursor isActive={isHovered} />

      <section
        ref={containerRef}
        // Aumentiamo l'altezza minima della sezione per dare respiro allo scroll
        className={`relative h-[55vh] sm:h-[100vh] bg-black ${isHovered ? "cursor-none" : ""}`}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
      >
       <div className="sticky  sm:h-screen flex items-center justify-center overflow-hidden">
          
          {/* ✅ IL FIX: 
              1. Abbiamo aggiunto -translate-y-[10%] per tirare su le righe e far vedere la quarta.
              2. Abbiamo usato gapClass anche qui (flex-col) così lo spazio tra le righe è uguale a quello tra le foto.
          */}
          <div className={`flex flex-col ${gapClass} rotate-45 scale-90 sm:scale-100 items-center justify-center w-[250vw] -translate-y-[5%] sm:-translate-y-[10%]`}>
            
            {/* Riga 1 */}
            <div ref={rowTopRef} className={rowClass}>
              {rowTopImages.map((img, i) => (
                <div key={`top-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Riga 2 */}
            <div ref={rowCenterRef} className={rowClass}>
              {rowCenterImages.map((img, i) => (
                <div key={`center-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Riga 3 */}
            <div ref={rowBottomRef} className={rowClass}>
              {rowBottomImages.map((img, i) => (
                <div key={`bottom-${i}`} className={cardClass}>
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Riga 4 - Ora visibile grazie al translate-y e al contenitore centrato */}
            <div ref={rowFourthRef} className={rowClass}>
              {rowFourthImages.map((img, i) => (
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