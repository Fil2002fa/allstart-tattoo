"use client";
import TransitionLink from "../components/TransitionLink";
import ContactSection from "../components/Footer/ContactSection";
import { playfair, overpass, metal, urbanist, belanosima } from "../fonts";
import { ArrowRight } from "lucide-react";

export default function StudioPage() {
  const word = "BOOK NOW";

  return (
    <main className="min-h-screen bg-black text-white px-2 sm:px-6 md:px-8 lg:px-10">
      {/* Top bar */}
       <div className="fixed top-0  left-0 right-0 z-50">
        <div className="fixed top-0 left-0 z-20 w-full bg-transparent text-white px-2.5 md:px-10 py-2">
                 <div className="flex items-center">
                    <TransitionLink
                     href="/"
                     className={`${playfair.className} text-[clamp(15px,3vw,22px)] font-semibold`}
                   >
                     Allstar Ink Tattoo
                   </TransitionLink>
                       
                   <div className="ml-auto flex items-center gap-10">
                     <p
                       className={`${overpass.className} hidden min-[900px]:block text-right text-[clamp(10px,2vw,15px)] leading-tight`}
                     >
                       44 Wickham St Prior&apos;s-Land,<br /> Limerick, V94 X2K5
                     </p>
           
                     <TransitionLink
                       href="/menu"
                       className={`${belanosima.className} px-4 py-3 cursor-pointer`}
                     >
                       CLOSE
                     </TransitionLink>
                   </div>
                 </div>
               </div>
      </div>

      {/* 3 immagini sopra */}
      <section className="px-2 sm:px-10 md:px-10 lg:px-10 pt-20">
        <div className="grid grid-cols-3 gap-0 sm:gap-10 md:gap-26 ">
          {/* ⬇️ CAMBIA QUI L’ALTEZZA DELLE FOTO SOPRA */}
          <img
            src="/Studio/car-studio.png"
            alt="Studio car"
            className="w-9/10 h-[140px] sm:h-[180px] md:h-[400px]  bg-white/5"
          />
           <video
              className="w-9/10  h-[220px] sm:h-[260px] md:h-[320px] lg:h-[450px] object-cover"
              src="/Studio/video.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          
          <img
            src="/Studio/inside.jpg"
            alt="Studio inside"
            className="w-full h-[140px] sm:h-[180px] md:h-[400px]   bg-white/5"
          />
        </div>
      </section>

      {/* Titolo */}
      <section className="flex flex-col gap-10 text-center pt-20">
        <h2 className={`${metal.className} text-center text-[clamp(34px,7vw,84px)] leading-[0.95] tracking-wide`}>
          ALLSTAR INK TATTOOOO
        </h2>
         <p className={`${overpass.className} text-[clamp(10px,2vw,15px)]`}>
            TATTOO STUDIO IN IRELAND, <br />
            44 Wickham St Prior's-Land,
Limerick, V94 X2K5
            
          </p>
      </section>

      {/* About + VIDEO in mezzo */}
      <section className="px-10 pt-20 ">
        <div className="grid  md:grid-cols-2 md:items-start">
          {/* testo */}
          <div>
            <h3 className={`${metal.className} text-[clamp(22px,4vw,44px)] text-center md:text-start leading-[1] uppercase`}>
              About the
              Studio
            </h3>

            <p className={`${overpass.className} mt-4 mb-4 max-w-prose text-center lg:text-start text-sm leading-6 text-white/75`}>
              Founded in Limerick, Allstar Ink Tattoo Studio provides professional custom tattoo services in a clean and
              welcoming environment. The studio is committed to high artistic standards, hygiene, and client
              satisfaction. From concept to completion, every tattoo reflects individuality and quality craftsmanship.
            </p>
          </div>

          <div className="w-full overflow-hidden flex justify-center md:justify-start">
              <img
                src="/Studio/studio.jpg"
                alt="Studio"
                className="
                  w-full md:w-full
                  max-w-[400px] md:max-w-none
                  h-[140px] sm:h-[180px] md:h-[420px]
                  object-cover rounded-md
                  mx-auto md:mx-0
                "
              />
            </div>
        </div>
      </section>

      {/* Owner + testo + bottone */}
      {/* Owner + testo + bottone */}
<section className="py-12">
  <div className="grid gap-8 md:gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">

    {/* Mobile: testo sopra, desktop a destra */}
    <div className="order-1 md:order-2 flex flex-col items-center md:items-center">
      <h3 className={`${metal.className} text-[clamp(20px,3.6vw,34px)] uppercase leading-none`}>
        Meet the Team
      </h3>
      <p className={`${urbanist.className} mt-5 text-xs uppercase tracking-widest text-white/50`}>
        Your story, your skin
      </p>

      <p className={`${urbanist.className}  text-center  text-sm leading-6 text-white/75 max-w-prose`}>
       
        Custom pieces designed with intention and crafted with precision.
        Every line has meaning. Every detail matters.
        
        Timeless tattoos, made to last.
      </p>

       <TransitionLink
          href="/contact"
              className="group flex items-center gap-4 mt-5 px-4 py-4 bg-[#161A1D] rounded-full cursor-pointer">
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
    </div>

    {/* Mobile: immagine dopo titolo/sottotitolo, desktop a sinistra */}
    <img
      src="/Studio/owner.jpg"
      alt="Owner"
      className="order-2 md:order-1 w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover rounded-md bg-white/5"
    />
  </div>

 <div className="mt-20">
   <ContactSection />
 </div>
</section>
    </main>
  );
}