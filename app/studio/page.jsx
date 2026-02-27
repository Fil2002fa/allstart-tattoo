"use client";
import TransitionLink from '../components/TransitionLink'
import Image from "next/image";
import ContactSection from '../components/Footer/ContactSection'
import { playfair, overpass, metal, urbanist, belanosima } from "../fonts";
import { ArrowRight } from 'lucide-react'

export default function StudioPage() {
    const word = "BOOK NOW"
  return (
    <main className="min-h-screen bg-black text-white px-10 py-5 ">
      {/* Top bar */}
      <header className="flex items-center justify-between px-6 pt-6">
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
      </header>

      {/* Hero image row */}
      <section className="px-6 pt-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1520975958225-1e5f3b59f6e6?auto=format&fit=crop&w=800&q=80"
              alt="Studio photo 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 280px"
              priority
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1529257414771-1960a42f8cde?auto=format&fit=crop&w=800&q=80"
              alt="Studio photo 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 280px"
            />
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1520975682136-7f6f2ddf1c6c?auto=format&fit=crop&w=800&q=80"
              alt="Studio photo 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 33vw, 280px"
            />
          </div>
        </div>
      </section>

      {/* Big title */}
      <section className="px-6 pt-10">
        <h2 className={`${metal.className} text-center text-[clamp(34px,7vw,84px)] leading-[0.95] tracking-wide`}>
          ALLSTAR INK TATTOOOO
        </h2>
      </section>

      {/* About + big photo */}
      <section className="px-6 pt-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          {/* About text */}
          <div>
            <h3 className={`${metal.className} text-[clamp(22px,4vw,44px)] leading-[1] uppercase`}>
              About the
              <br />
              Studio
            </h3>

            <p className={`${overpass.className} mt-4 max-w-prose text-sm leading-6 text-white/75`}>
              Founded in Limerick, Allstar Ink Tattoo Studio provides professional custom tattoo services in a clean and
              welcoming environment. The studio is committed to high artistic standards, hygiene, and client
              satisfaction. From concept to completion, every tattoo reflects individuality and quality craftsmanship.
            </p>
          </div>

          {/* Big image */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-neutral-900">
            <Image
              src="https://images.unsplash.com/photo-1520975881848-6b5a4bb7e0bd?auto=format&fit=crop&w=1400&q=80"
              alt="Studio big photo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Bottom grid: portrait + quote + button */}
      <section className="px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3 md:items-end">
          {/* Portrait */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-900 md:col-span-1">
            <Image
              src="https://images.unsplash.com/photo-1520975857217-85b2e1fa89bb?auto=format&fit=crop&w=900&q=80"
              alt="Artist portrait"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>


          {/* Quote + button */}
          <div className="md:col-span-1">
            <p className={`${urbanist.className} text-sm leading-6 text-white/75`}>
              Your story. Your skin. Your tattoo.
              <br />
              Custom tattoos made with passion and precision.
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
           <ContactSection/>
      </section>
    </main>
  );
}