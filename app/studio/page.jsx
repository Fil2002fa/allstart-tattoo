"use client";
import TransitionLink from "../components/TransitionLink";
import ContactSection from "../components/Footer/ContactSection";
import { playfair, overpass, metal, urbanist, belanosima } from "../fonts";
import { ArrowRight } from "lucide-react";

export default function StudioPage() {
  const word = "BOOK NOW";

  return (
    <main className="min-h-screen bg-black text-white px-10 py-5">
      {/* Top bar */}
       <div className="fixed top-0  left-0 right-0 z-50">
        <div className="px-10 py-5 flex items-center justify-between">
          <TransitionLink href="/">
            <h1 className={`${playfair.className} text-[clamp(10px,2vw,22px)] font-semibold`}>
              Allstar Ink Tattoo
            </h1>
          </TransitionLink>
      
          <TransitionLink
            href="/menu"
            className={`${belanosima.className} py-3 cursor-pointer`}
          >
            CLOSE
          </TransitionLink>
        </div>
      </div>

      {/* 3 immagini sopra */}
      <section className=" px-10 pt-20">
        <div className="grid grid-cols-3  ">
          {/* ⬇️ CAMBIA QUI L’ALTEZZA DELLE FOTO SOPRA */}
          <img
            src="/Studio/car-studio.png"
            alt="Studio car"
            className="w-9/10 h-[140px] sm:h-[180px] md:h-[460px]  bg-white/5"
          />
           <video
              className="w-9/10  h-[220px] sm:h-[260px] md:h-[320px] lg:h-[530px] object-cover"
              src="/Studio/video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          
          <img
            src="/Studio/inside.jpg"
            alt="Studio inside"
            className="w-full h-[140px] sm:h-[180px] md:h-[500px]   bg-white/5"
          />
        </div>
      </section>

      {/* Titolo */}
      <section className="px-6 pt-20">
        <h2 className={`${metal.className} text-center text-[clamp(34px,7vw,84px)] leading-[0.95] tracking-wide`}>
          ALLSTAR INK TATTOOOO
        </h2>
      </section>

      {/* About + VIDEO in mezzo */}
      <section className="px-10 pt-20">
        <div className="grid  md:grid-cols-2 md:items-start">
          {/* testo */}
          <div>
            <h3 className={`${metal.className} text-[clamp(22px,4vw,44px)] leading-[1] uppercase`}>
              About the
              Studio
            </h3>

            <p className={`${overpass.className} mt-4 max-w-prose text-sm leading-6 text-white/75`}>
              Founded in Limerick, Allstar Ink Tattoo Studio provides professional custom tattoo services in a clean and
              welcoming environment. The studio is committed to high artistic standards, hygiene, and client
              satisfaction. From concept to completion, every tattoo reflects individuality and quality craftsmanship.
            </p>
          </div>

          {/* ⬇️ CAMBIA QUI L’ALTEZZA DEL VIDEO */}
          <div className="w-full overflow-hidden">
           
           <img
            src="/Studio/studio.jpg"
            alt="Studio"
            className="w-full h-[140px] sm:h-[180px] md:h-[420px]  "
          />
          </div>
        </div>
      </section>

      {/* Owner + testo + bottone */}
      {/* Owner + testo + bottone */}
<section className="px-10 py-12">
  <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
   
    <img
      src="/Studio/owner.jpg"
      alt="Owner"
      className="w-full h-[260px] sm:h-[300px] md:h-[340px] object-cover rounded-md bg-white/5"
    />

    {/* Testo + bottone */}
    <div className="flex flex-col justify-center">
      <div className="flex flex-col gap-6  items-center">
        <p className={`${urbanist.className} text-center text-sm leading-6 text-white/75`}>
  Your story. Your skin. Your tattoo.
  <br />
  Custom pieces designed with intention and crafted with precision.
  Every line has meaning. Every detail matters.
  <br />
  Timeless tattoos, made to last.
</p>

        <button className="group flex items-center gap-4 px-6 py-4 bg-[#161A1D] rounded-full cursor-pointer">
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
        </button>
      </div>
    </div>
  </div>

  <ContactSection />
</section>
    </main>
  );
}