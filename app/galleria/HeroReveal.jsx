
'use client'
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./style.module.css";

export default function HeroReveal ({onComplete}) {
  const heroRef = useRef(null);
  const bgRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const video = videoRef.current;
    if (!bg || !video) return;

    gsap.set(bg, {
  clipPath: "polygon(35% 30%, 65% 30%, 65% 60%, 35% 60%)",
   yPercent: 0,
    willChange: "transform, clip-path",
});


    gsap.set(video, { scale: 1 });

    const tl = gsap.timeline({ 
      paused: true,
       onComplete: () => onComplete?.(),
    });

    // Resti 1s sul quadrato
    tl.to({}, { duration: 1 });

    // Quadrato -> full screen
    tl.to(bg, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 1.6,
      ease: "power4.inOut",
    });

    // Zoom -> normale (in sync)
    tl.to(
      video,
      { scale: 1, duration: 1.6, ease: "power4.inOut" },
      "<"
    );

    tl.to(bg, {
    yPercent: -110,       // -100 basta, -110 assicura che esca completamente
    duration: 2,
    ease: "power4.inOut",
  }, "+=0.2");  

    const onReady = () => tl.play(0);

    if (video.readyState >= 2) onReady();
    else video.addEventListener("canplay", onReady, { once: true });

    return () => {
      video.removeEventListener("canplay", onReady);
      tl.kill();
    };
  }, []);

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
