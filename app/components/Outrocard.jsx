'use client';

import { motion } from 'framer-motion';

export default function OutroCard() {
     const word = "VIEW THE GALLERY"
  return (
    <div className=" flex h-screen items-center justify-center">
      <motion.div
        className="
          relative flex flex-col justify-center text-center origin-top
          w-[80vw] max-w-[1000px] min-h-[250px]
          p-[5vw]
          bg-black text-white
          rounded-3xl
        "
      >
        <h2 className="uppercase font-['Title'] text-[clamp(32px,6vw,56px)] leading-none">
          Want to see more?
        </h2>

        <p className="mx-auto mt-6 max-w-[60ch] font-mono uppercase text-white/80 text-[clamp(13px,1.4vw,16px)] leading-relaxed">
          Scroll-inspired styles are just the beginning. Explore the full collection in the gallery.
        </p>

        <div className="mt-10 flex justify-center p-4">
        <button
  className="
    group relative overflow-hidden
    flex items-center gap-4 px-5 py-4
    border border-white/30 rounded-full cursor-pointer
  "
>
  {/* BG che sale dal basso */}
  <span
    className="
      absolute inset-0
      origin-bottom scale-y-0
      transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
      group-hover:scale-y-100
      bg-red-800
    "
  />

  {/* contenuto sopra */}
  <span className="relative z-10 block overflow-hidden uppercase leading-[1.1]">
    <span className="relative block text-white group-hover:text-white transition-colors duration-300">
      <div className="flex">
        {word.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
            style={{ transitionDelay: `${i * 0.03}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <div className="flex absolute top-0 left-0">
        {word.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0"
            style={{ transitionDelay: `${i * 0.03}s` }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
    </span>
  </span>
</button>

        </div>

        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-white/40">
          curated work
        </p>
      </motion.div>
    </div>
  );
}
