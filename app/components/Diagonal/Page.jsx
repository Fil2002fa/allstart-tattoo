import React, { useEffect, useRef,useState } from 'react';
import Cursor from '../Cursor/Cursor'

const HorizontalParallaxGallery = () => {

  // cursor
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const rowTopRef = useRef(null);
  const rowCenterRef = useRef(null);
  const rowBottomRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId = null;

    const handleScroll = () => {
      if (rafId) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const containerRect = container.getBoundingClientRect();
        
        const containerTop = containerRect.top + scrollY;
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;
        
        const start = containerTop - windowHeight;
        const end = containerTop + containerHeight;
        const current = scrollY;
        
        let progress = (current - start) / (end - start);
        progress = Math.max(0, Math.min(1, progress));
        
       const moveDistance = 600; // La distanza totale del viaggio
const offset = moveDistance / 2; // Lo spostamento iniziale (es. 300)

// RIGHE SUPERIORE E INFERIORE (Vanno a DESTRA)
if (rowTopRef.current) {
          const xValue = -offset + (progress * moveDistance);
          rowTopRef.current.style.transform = `translateX(${xValue}px)`;
        }

        // RIGA CENTRALE (Va a SINISTRA: inizia a +500px, finisce a -500px)
        if (rowCenterRef.current) {
          const xValue = offset - (progress * moveDistance);
          rowCenterRef.current.style.transform = `translateX(${xValue}px)`;
        }

        // RIGA INFERIORE (Va a DESTRA: come la superiore)
        if (rowBottomRef.current) {
          const xValue = -offset + (progress * moveDistance);
          rowBottomRef.current.style.transform = `translateX(${xValue}px)`;
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
    "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600",
  ];

  const extendedImages = [...images, ...images, ...images, ...images, ...images];

  return (
    <div className="bg-gray-900 overflow-x-hidden">

      <Cursor isActive={isHovered} />
      <section 
        ref={containerRef}
        className="relative h-[100vh] bg-black cursor-none ;"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center gap-8 overflow-hidden">
          
          <div className="flex rotate-30 scale-150 flex-col gap-6">
            {/* Riga 1 → Destra (parte da 0) */}
            <div 
              ref={rowTopRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {extendedImages.map((img, i) => (
                <div key={`top-${i}`} className="w-[400px] flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={img} className="w-full h-64 object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Riga 2 → Sinistra (parte spostata a destra di 300px) */}
            <div 
              ref={rowCenterRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: 'translateX(300px)' }} // Parte spostata a destra!
            >
              {extendedImages.map((img, i) => (
                <div key={`center-${i}`} className="w-[400px] flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={img} className="w-full h-64 object-cover" alt="" />
                </div>
              ))}
            </div>

            {/* Riga 3 → Destra (parte da 0) */}
            <div 
              ref={rowBottomRef}
              className="flex gap-6 will-change-transform"
              style={{ transform: 'translateX(0px)' }}
            >
              {extendedImages.map((img, i) => (
                <div key={`bottom-${i}`} className="w-[400px] flex-shrink-0 overflow-hidden rounded-lg">
                  <img src={img} className="w-full h-64 object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default HorizontalParallaxGallery;