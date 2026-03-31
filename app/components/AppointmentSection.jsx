"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { overpass, metal, urbanist } from "../fonts";
import TransitionLink from "./TransitionLink";

const Reveal = ({ children, delay = "0ms", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const checkVisibility = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // CASO 1: L'elemento è già sopra la linea visibile o già nel viewport al caricamento
      // Se la parte inferiore dell'elemento è già passata (siamo più in basso), mostralo subito.
      if (rect.top < windowHeight) {
        setIsVisible(true);
        return true; // Ritorna true se lo abbiamo attivato
      }
      return false;
    };

    // Eseguiamo un controllo immediato al mount
    const alreadyVisible = checkVisibility();
    if (alreadyVisible) return; 

    // CASO 2: L'elemento è sotto il viewport. 
    // Usiamo l'Observer per attivarlo SOLO se ci arriviamo scorrendo verso il basso.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mask ${className}`}>
      <div
        className={isVisible ? "animate-textSlideUp" : "opacity-0 translate-y-10"}
        style={{ 
          animationDelay: isVisible ? delay : "0ms",
          transition: "opacity 0.5s ease, transform 0.5s ease" 
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default function AppointmentSection() {
  const word = "BOOK NOW";

  const images = [
    "/AppointmentSection/1.png",
    "/AppointmentSection/2.png",
    "/AppointmentSection/3.png",
    "/AppointmentSection/4.png",
  ];

  return (
    <section className="relative px-8">
      {/* IMMAGINI TOP */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Reveal className="absolute top-2 left-2 lg:left-16" delay="0ms">
          <img src={images[0]} className="w-28 lg:w-82 opacity-70" alt="" />
        </Reveal>

        <Reveal className="absolute top-14 right-2 lg:right-16" delay="200ms">
          <img src={images[1]} className="w-28 lg:w-86 opacity-70" alt="" />
        </Reveal>
      </div>

      {/* CONTENUTO CENTRALE */}
      <div className="relative z-10 flex flex-col justify-center text-center mt-32 xl:mt-96 mb-64 px-6">
        <Reveal>
          <h1 className={`${urbanist.className} font-semibold text-[clamp(45px,8vw,100px)]`}>
            LET THE INK <br />
          </h1>
        </Reveal>

        <Reveal delay="100ms">
          <h1
            className={`${metal.className} font-semibold leading-[0.9] text-[#D60505] text-[clamp(45px,8vw,90px)]`}
          >
            FLOW
          </h1>
        </Reveal>

        <Reveal delay="200ms" className="mt-10">
          <p className={`${overpass.className} max-w-170 mx-auto text-[clamp(9px,1vw,15px)]`}>
            EXPERT TATTOO STUDIO SPECIALIZING IN BLACK & GREY, FINE LINE, LETTERING,
            REALISM, OLD SCHOOL AND CUSTOM DESIGNS. BASED IN LIMERICK, IRELAND.
          </p>
        </Reveal>

        <Reveal delay="200ms" className="mt-8">
          <p className={`${overpass.className} max-w-150 mx-auto text-[clamp(9px,1vw,15px)]`}>
            EVERY PROJECT STARTS FROM SCRATCH — BUILT AROUND YOUR IDEA, YOUR STYLE,
            AND YOUR SKIN.
          </p>
        </Reveal>

        <Reveal delay="200ms" className="mt-6">
          <p className={`${overpass.className} max-w-150 mx-auto text-[clamp(9px,1vw,15px)]`}>
            CLEAN WORK, QUALITY MATERIALS, AND STRICT HYGIENE STANDARDS — ALWAYS.
          </p>
        </Reveal>

        {/* BOTTONE */}
        <div className="mt-10 flex justify-center">
          <Reveal delay="300ms">
            <TransitionLink
                              href="/contact"
                                 className="group flex items-center gap-4 px-4 py-4 bg-[#161A1D] rounded-full cursor-pointer">
                                <span className="relative w-8 h-8 bg-red-700 rounded-full flex justify-center items-center">
                                  <div className="absolute rounded-full bg-black w-2.5 h-2.5 transition-all duration-500 group-hover:scale-0" />
                                  <div className="absolute scale-0 group-hover:scale-100 transition-all duration-500">
                                    <ArrowRight size={14} />
                                  </div>
                                </span>
                    
                                <span className="relative block overflow-hidden text-white uppercase leading-[1.1] cursor-pointer">
                                  <div className="flex">
                                    {word.split("").map((char, i) => (
                                      <span
                                        key={i}
                                        style={{ transitionDelay: `${i * 0.03}s` }}
                                        className={`${urbanist.className} inline-block font-semibold transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full`}
                                      >
                                        {char === " " ? "\u00A0" : char}
                                      </span>
                                    ))}
                                  </div>
                    
                                  <div className="flex absolute top-0 left-0">
                                    {word.split("").map((char, i) => (
                                      <span
                                        key={i}
                                        style={{ transitionDelay: `${i * 0.03}s` }}
                                        className={`${urbanist.className} inline-block font-semibold transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0`}
                                      >
                                        {char === " " ? "\u00A0" : char}
                                      </span>
                                    ))}
                                  </div>
                                </span>
                              
                              </TransitionLink>
          </Reveal>
        </div>
      </div>

      {/* IMMAGINI BOTTOM */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Reveal className="absolute bottom-14 left-2 lg:left-20" delay="0ms">
          <img src={images[2]} className="w-32 lg:w-84 opacity-70" alt="" />
        </Reveal>

        <Reveal className="absolute bottom-12 right-2 lg:right-20" delay="200ms">
          <img src={images[3]} className="w-32 lg:w-80 opacity-70" alt="" />
        </Reveal>
      </div>
    </section>
  );
}