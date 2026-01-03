import React from 'react'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

export default function page() {



  return (
  <div className="w-full  min-h-screen flex flex-col  ">

  <div className="flex justify-between items-center px-4 py-3 w-full z-20 bg-black/50 backdrop-blur-sm text-white">
    <h1 className="text-sm tracking-wide">Allstar Ink Tattoo</h1>
    <div className='flex gap-15 '>
      <h1 className='px-3 py-1 text-sm font-light'>
         <span className='text-gray-400 mr-2 '>01</span> GALLERIA
      </h1>
    <button className="px-3 py-1 text-sm tracking-widest">
      MENU
    </button>
    </div>
  </div>

    <div  className='flex gap-5 mt-auto'>
      {Array.from({ length: 11}).map((_,i) => (
        <img
          key={i}
              src={`/images/foto${i + 1}.jpg`}
            alt=""
              className="w-48 h-auto object-cover"
        />
       
      ))}
    </div>

  <div className=" text-center mt-auto pb-[10vh] md:pb-20" >
    <h1 className="font-serif text-5xl mb-6">
      Signature Style
    </h1>

    <p className="text-center">
      A selection of signature works exploring form, contrast, and permanence.
      <br />
      Custom tattoos designed through dialogue, executed with precision.
    </p>
  </div>
</div>

  )
}
