'use client';

import { motion } from 'framer-motion';

export default function IntroCard() {
  return (
    <div className="sticky flex top-1 justify-center items-center h-screen">
      <motion.div
        className="
          relative flex flex-col justify-center text-center origin-top
          w-[80vw] max-w-[1000px] min-h-[250px]
          p-[5vw]
          md:w-[90vw]
          bg-black text-white
        "
      >
        <h2 className="uppercase font-['Title'] text-[clamp(40px,10vw,74px)] leading-none tracking-tight">
          Tattoo styles
        </h2>

        <div className="mx-auto mt-6 h-[1px] w-16 bg-white/30" />

        <p className="mx-auto mt-6 max-w-[60ch] font-mono uppercase text-white/80 text-[clamp(13px,1.4vw,16px)] leading-relaxed">
          Scroll to explore a curated selection of tattoo styles—each one with its own mood, rhythm, and signature linework.
        </p>

        <p className="mt-5 text-xs uppercase tracking-[0.25em] text-white/50">
          keep scrolling
        </p>
      </motion.div>
    </div>
  );
}
