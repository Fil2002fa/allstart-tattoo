"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink from "../components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".card");

      let horizontalTween;

      const build = () => {
        // kill solo roba del section context (più safe)
        ScrollTrigger.getAll()
          .filter((t) => t?.vars?.trigger === section)
          .forEach((t) => t.kill());

        gsap.killTweensOf(track);

        const totalWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = Math.max(0, totalWidth - windowWidth);

        horizontalTween = gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: "top top",
            end: () => `+=${scrollDistance}`, // ✅ qui!
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // fade basato sulla containerAnimation
        cards.forEach((card) => {
          gsap.to(card, {
            opacity: 1,
            scrollTrigger: {
              trigger: card,
              containerAnimation: horizontalTween, // ✅ fondamentale
              start: "left 80%",
              end: "center 40%",
              scrub: true,
            },
          });
        });

        ScrollTrigger.refresh();
      };

      build();

      const onResize = () => build();
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
      };
    }, section);

    return () => ctx.revert();
  }, []);

 return (
  <div className="w-full bg-black text-white">
    
    {/* HEADER: Deve essere fixed o absolute per non occupare spazio nel flusso */}
    <div className="fixed top-0 left-0 flex justify-between items-center px-10 py-6 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
      <TransitionLink href='/' className="text-sm tracking-wide">Allstar Ink Tattoo</TransitionLink>
      <div className="flex gap-6">
        <h1 className="px-3 py-1 text-sm font-light">
          <span className="text-gray-400 mr-2">01</span> GALLERIA
        </h1>
        <TransitionLink href='menu' className="px-3 py-1 text-sm tracking-widest">MENU</TransitionLink>
      </div>
    </div>

    <section ref={sectionRef} className="relative h-screen overflow-hidden flex items-center">
      

      <div 
        ref={trackRef} 
        className="flex gap-10 items-center whitespace-nowrap will-change-transform z-10"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="card w-[150px] h-[200px] flex-shrink-0 opacity-30"
          >
            <img
              src={`https://picsum.photos/600/800?random=${i}`}
              alt=""
              className="w-full h-full object-cover grayscale"
              draggable={false}
            />
          </div>
        ))}

      </div>
      <div className="absolute inset-x-0 bottom-16 z-20 pointer-events-none">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h1 className="font-serif text-5xl mb-6">Signature Style</h1>
        <p className="text-white/80 leading-relaxed">
          A selection of signature works exploring form, contrast, and permanence.
          <br />
          Custom tattoos designed through dialogue, executed with precision.
        </p>
      </div>
    </div>

      <div className="absolute bottom-10 left-10 text-[10px] opacity-40 z-20">
        SCROLL TO EXPLORE
      </div>

    </section>

  </div>
);
}
