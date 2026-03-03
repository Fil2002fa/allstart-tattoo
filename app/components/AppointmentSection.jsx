"use client";

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { playfair, overpass, metal, urbanist } from "../fonts";
import TransitionLink from "./TransitionLink";
const BASE_IMAGES = [
  "/AppointmentSection/1.png",
  "/AppointmentSection/2.png",
  "/AppointmentSection/3.png",
  "/AppointmentSection/4.png",
];

export default function AppointmentSection() {
  const word = "BOOK NOW";
  const [images, setImages] = useState(BASE_IMAGES); // ordine stabile SSR


  return (
    <section className="relative overflow-hidden px-8 ">
      <div className="pointer-events-none absolute inset-0">
       <div className="pointer-events-none absolute inset-0 z-0 ">
  {/* top-left */}
 {/* top-left */}
{/* top-left */}
<img
  src={images[0]}
  alt=""
  className="
    absolute
    top-2 left-2
    sm:top-4 sm:left-6
    lg:-top-6 lg:left-16
    xl:-top-10 xl:left-28
    2xl:-top-32 2xl:left-40
    w-28 sm:w-32 md:w-36 lg:w-82 
    opacity-70 sm:opacity-80 lg:opacity-90
  "
/>

{/* top-right */}
<img
  src={images[1]}
  alt=""
  className="
    absolute
    top-14 right-2
    sm:top-16 sm:right-6
    lg:-top-2 lg:right-16
    xl:-top-6 xl:right-28
    2xl:-top-18 2xl:right-40
    w-28 sm:w-32 md:w-36 lg:w-86 
    opacity-70 sm:opacity-80 lg:opacity-90
  "
/>

{/* bottom-left (lasciato bottom-24 su mobile come volevi) */}
<img
  src={images[2]}
  alt=""
  className="
    absolute
    bottom-14 left-2
    sm:bottom-8 sm:left-6
    lg:bottom-0 lg:left-20
    xl:bottom-12 xl:left-32
    2xl:bottom-2 2xl:left-44
    w-32 sm:w-36 md:w-40 lg:w-84
    opacity-70 sm:opacity-80 lg:opacity-90
  "
/>

{/* bottom-right */}
<img
  src={images[3]}
  alt=""
  className="
    absolute
    bottom-12 right-2
    sm:bottom-6 sm:right-6
    lg:bottom-4 lg:right-20
    xl:bottom-2 xl:right-32
    2xl:bottom-0 2xl:right-44
    w-32 sm:w-36 md:w-40 lg:w-80
    opacity-70 sm:opacity-80 lg:opacity-90
  "
/>
</div>
      </div>

      {/* CONTENUTO */}
      <div className="relative z-10 flex flex-col justify-center text-center xl:mt-16 mt-32 xl:mt-96 mb-68 px-6 sm:px-10 lg:px-0">
        <h1 className={`${urbanist.className} font-semibold text-center text-[clamp(45px,8vw,100px)]`}>
          LET THE INK <br />
        </h1>

        <h1 className={`${metal.className} font-semibold text-center leading-[0.9] text-[#D60505] text-[clamp(45px,8vw,90px)]`}>
          FLOW
        </h1>

        <p className={`${overpass.className} max-w-170 mx-auto text-[clamp(9px,1vw,15px)] mt-10`}>
          EXPERT TATTOO STUDIO SPECIALIZING IN BLACK & GREY, FINE LINE, LETTERING,
          REALISM, OLD SCHOOL AND CUSTOM DESIGNS. BASED IN LIMERICK, IRELAND.
        </p>

        {/* due paragrafi extra prima del bottone */}
        <p className={`${overpass.className} max-w-150 mx-auto text-[clamp(9px,1vw,15px)] mt-8`}>
          EVERY PROJECT STARTS FROM SCRATCH — BUILT AROUND YOUR IDEA, YOUR STYLE,
          AND YOUR SKIN.
        </p>

        <p className={`${overpass.className} max-w-150 mx-auto text-[clamp(9px,1vw,15px)] mt-6`}>
          CLEAN WORK, QUALITY MATERIALS, AND STRICT HYGIENE STANDARDS — ALWAYS.
        </p>

        <div className="mt-10 flex justify-center">
          <TransitionLink
          href="/contact"
             className="group flex items-center gap-4 px-4 py-4 bg-[#161A1D] rounded-full cursor-pointer">
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
      </div>
    </section>
  );
}