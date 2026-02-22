import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { playfair, overpass, metal, urbanist } from "../fonts";

export default function AppointmentSection() {
 
    
    const word = "BOOK NOW"

 return (
 
  <div className='flex flex-col justify-center text-center mt-16 mb-68'>
      <h1  className={`${urbanist.className} font-semibold text-center text-[clamp(45px,8vw,100px)]`}>
        LET THE INK <br />  
      </h1>
      <h1  className={`${metal.className} font-semibold text-center leading-[0.9] text-[#D60505] text-[clamp(45px,8vw,90px)]`}>FLOW</h1>
      <p className={`${overpass.className} max-w-170 mx-auto text-[clamp(5px,1vw,15px)] mt-10`}>
        EXPERT TATTOO STUDIO SPECIALIZING IN BLACK & GREY, FINE LINE, LETTERING, REALISM, OLD SCHOOL AND CUSTOM DESIGNS.  BASED IN LIMERICK, IRELAND  ALL STAR INK TATTOO.
      </p>

      <div className='mt-10 flex justify-center  '>
        
            <button
                className="
                    group flex items-center gap-4 px-4 py-4 bg-[#161A1D]  rounded-full cursor-pointer"
                 >
           <span 
            className=' relative w-8 h-8 bg-red-700 rounded-full flex justify-center items-center '>
             <div
                className='absolute rounded-full bg-black w-2.5 h-2.5 transition-all duration-500
                            group-hover:scale-0 '
                >
             </div>

              <div className='absolute scale-0 group-hover:scale-100 transition-all duration-500'>
                <ArrowRight size={14} />
            </div>

           </span>

        <span className="relative block overflow-hidden text-white uppercase leading-[1.1] cursor-pointer">
       
          <div className="flex">
            {word.split("").map((char, i) => (
              <span
                key={i}
                  style={{ transitionDelay: `${i * 0.03}s` }}
                className={`${urbanist.className} inline-block font-semibold transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full`}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>

          
          <div className="flex absolute top-0 left-0">
            {word.split("").map((char, i) => (
              <span
                key={i}
                      style={{ transitionDelay: `${i * 0.03}s` }}
                 className={`${urbanist.className} inline-block font-semibold transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0`}>
          
              
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        </span>
      </button>
    </div>
  </div>
)
}
