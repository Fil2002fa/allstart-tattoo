"use client";

import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Videozoom() {
  const containerRef = useRef(null);
  const mediaWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const wrapper = mediaWrapperRef.current;
    if (!container || !wrapper) return;

    let tl;

    const build = () => {
      // se esiste già una timeline (es. refresh), kill prima
      if (tl) {
        tl.scrollTrigger?.kill();
        tl.kill();
        tl = null;
      }

      gsap.set(wrapper, {
        x: 0,
        scale: 1,
        transformOrigin: "100% 50%",
      });

      const rect = wrapper.getBoundingClientRect();
      const viewportCenterX = window.innerWidth / 2;
      const wrapperCenterX = rect.left + rect.width / 2;
      const moveToCenterX = viewportCenterX - wrapperCenterX;

      tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: " 50%",
          end: "+=100%",
          scrub: 0.8,
          pin: true,
          pinSpacing: true, // ✅ molto più stabile in React rispetto a false
          invalidateOnRefresh: true,
        },
      });

      tl.to(wrapper, {
        scale: 8,
       x: moveToCenterX * - (1.2),
        ease: "none",
      });
    };

    // build iniziale
    build();

    // refresh handler STABILE
    const onRefresh = () => build();
    ScrollTrigger.addEventListener("refreshInit", onRefresh);

    // refresh finale (font/layout)
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", onRefresh);
      if (tl) {
        tl.scrollTrigger?.kill();
        tl.kill();
      }
    };
  }, []);

    return (
    <div ref={containerRef} className="w-full bg-red-200 h-full  flex items-center pointer-events-none ">
    <div
      ref={mediaWrapperRef}
      className="absolute  w-52 h-30"
    >  <video
          className="w-full h-full object-cover"
          src="/tattoo-bw.mp4"
          autoPlay
          muted
          loop
          playsInline
        /></div>
  </div>
  );
}
