"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TransitionLink from "../components/TransitionLink";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
// counter card 
const [activeIndex, setActiveIndex] = useState(0);
const activeIndexRef = useRef(0);
// Hover card 

  const handleHover = (el) => {
  const allCards = gsap.utils.toArray(".card");
  
  // Anima la card su cui si trova il mouse
  gsap.to(el, {
    scale: 1.4,
    opacity: 1,
    zIndex: 50,
    duration: 0.4,
    ease: "power2.out",
    overwrite: true
  });

  // Rendi tutte le altre card più trasparenti
  allCards.forEach((card) => {
    if (card !== el) {
      gsap.to(card, {
        opacity: 0.1,
        scale: 0.9,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true
      });
    }
  });
};

const handleHoverExit = () => {
  const allCards = gsap.utils.toArray(".card");
  
  gsap.to(allCards, {
    scale: 1,
  opacity: 1,
    zIndex: 10,
    duration:1,
    ease: "power2.inOut",
    overwrite: true
  });
};
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const cardData = [...Array(15).keys()];
  const numberOfSets = 1;

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      let horizontalTween;

      const killGalleryTriggers = () => {
        ScrollTrigger.getAll()
          .filter((t) => String(t.vars?.id || "").startsWith("gallery-"))
          .forEach((t) => t.kill());
      };

      const build = () => {
        killGalleryTriggers();
        gsap.killTweensOf(track);
        gsap.set(track, { x: 0 });

        const totalWidth = track.scrollWidth;
        const windowWidth = window.innerWidth;
        const scrollDistance = Math.max(0, totalWidth - windowWidth);

        horizontalTween = gsap.to(track, {
          x: -scrollDistance,
          ease: "none",
          scrollTrigger: {
            id: "gallery-horizontal",
            trigger: section,
            pin: true,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
            invalidateOnRefresh: true,
           

          },
          

        });

        const cards = gsap.utils.toArray(".card", track);
        cards.forEach((card, idx) => {
  ScrollTrigger.create({
    id: `gallery-active-${idx}`,
    trigger: card,
    containerAnimation: horizontalTween,
    start: "center center",
    end: "center center",
    onEnter: () => {
      const n = idx + 1; 
      if (activeIndexRef.current !== n) {
        activeIndexRef.current = n;
        setActiveIndex(n);
      }
    },
    onEnterBack: () => {
      const n = idx + 1;
      if (activeIndexRef.current !== n) {
        activeIndexRef.current = n;
        setActiveIndex(n);
      }
    },
  });
});


        cards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1,
            scrollTrigger: {
              id: `gallery-fade-${idx}`,
              trigger: card,
              containerAnimation: horizontalTween,
              start: "left 80%",
              end: "center 40%",
              scrub: true,
            },
          });
        });

        ScrollTrigger.refresh();
      };

      build();
      window.addEventListener("resize", build);

      return () => {
        window.removeEventListener("resize", build);
        killGalleryTriggers();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-black text-white ">
      <div className="fixed top-0 left-0 flex justify-between items-center px-10 py-6 w-full z-50 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex-col mt-3">
          <TransitionLink href="/" className="text-sm tracking-wide">
            Allstar Ink Tattoo
          </TransitionLink>
          <div className="mt-3 border-b w-fit">
            <TransitionLink href="/" className="text-sm">
              Contact
            </TransitionLink>
          </div>
        </div>
        <div className="flex gap-6">
          <h1 className="px-3 py-1 text-sm font-light">
            <span className="text-gray-400 mr-2">01</span> GALLERIA
          </h1>
          <TransitionLink href="menu" className="px-3 py-1 text-sm tracking-widest">
            MENU
          </TransitionLink>
        </div>
      </div>

      <section ref={sectionRef} className="relative h-screen overflow-hidden flex items-center">
        <div
          ref={trackRef}
          className="flex gap-10 mb-5 items-center whitespace-nowrap will-change-transform z-10"
        >
         
         
          {[...Array(numberOfSets)].map((_, setIndex) =>
            cardData.map((i) => (
              <div
                key={`${setIndex}-${i}`}
                className="card w-[200px] h-[250px] flex-shrink-0  cursor-pointer "
                  onMouseEnter={(e) => handleHover(e.currentTarget)}
                 onMouseLeave={() => handleHoverExit()}
                style={{ position: 'relative' }}
              >
                <img
                  src={`https://picsum.photos/600/800?random=${i}`}
                  alt=""
                  className="w-full h-full  "
                  draggable={false}
                />
              </div>
            ))
          )}
        </div>
                

        <div className="absolute inset-x-0 bottom-12 z-20 pointer-events-none">
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
