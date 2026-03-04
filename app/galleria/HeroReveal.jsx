"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

export default function HeroReveal({ onComplete }) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const video = videoRef.current;
    if (!bg || !video) return;

    let tl;

    const build = () => {
      tl?.kill();

      const w = window.innerWidth;

      // ✅ Responsive: quadrato più grande su mobile, più piccolo su desktop
      // (così non sembra “perso” su schermi piccoli)
      const startClip =
        w < 640
          ? "polygon(20% 25%, 80% 25%, 80% 65%, 20% 65%)"
          : w < 1024
          ? "polygon(28% 28%, 72% 28%, 72% 62%, 28% 62%)"
          : "polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)";

      // ✅ Timing più veloce su mobile
      const hold = w < 640 ? 0.5 : 1;
      const expand = w < 640 ? 1.1 : 1.6;
      const slideUp = w < 640 ? 1.4 : 2.0;
      const slideGap = w < 640 ? 0.1 : 0.2;

      gsap.set(bg, {
        clipPath: startClip,
        yPercent: 0,
        willChange: "transform, clip-path",
      });

      gsap.set(video, { scale: 1 });

      tl = gsap.timeline({
        paused: true,
        onComplete: () => onComplete?.(),
      });

      // resta un attimo sul quadrato
      tl.to({}, { duration: hold });

      // quadrato -> full screen
      tl.to(bg, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: expand,
        ease: "power4.inOut",
      });

      // zoom video (se vuoi puoi fare 1.03 su desktop per un minimo “push”)
      tl.to(
        video,
        { scale: 1, duration: expand, ease: "power4.inOut" },
        "<"
      );

      // slide via
      tl.to(
        bg,
        {
          yPercent: -110,
          duration: slideUp,
          ease: "power4.inOut",
        },
        `+=${slideGap}`
      );

      tl.play(0);
    };

    const onReady = () => build();

    if (video.readyState >= 2) onReady();
    else video.addEventListener("canplay", onReady, { once: true });

    // ✅ Rebuild su resize/orientation change
    const onResize = () => build();
    window.addEventListener("resize", onResize);

    return () => {
      video.removeEventListener("canplay", onReady);
      window.removeEventListener("resize", onResize);
      tl?.kill();
    };
  }, [onComplete]);

  return (
    <main className={styles.page}>
      <section ref={heroRef} className={styles.hero}>
        <div ref={bgRef} className={styles.heroBg}>
          <video
            ref={videoRef}
            className={styles.heroVideo}
            src="/tattoo-bw.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </section>
    </main>
  );
}