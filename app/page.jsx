'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef,useState } from 'react';
import styles from './style.module.scss';
import Faq from "./components/Faq"
import AppointmentSection from './components/AppointmentSection'
import Header from './components/Header'
import Footer from './components/Footer/Footer'
import CircularText from './components/CurcularText/CircularText'
import Image from 'next/image';
import Videozoom from './components/Videozoom' 
import Page from './components/Diagonal/Page'
import { playfair, overpass, metal, urbanist,belanosima } from "./fonts";
import Paragraph from './components/Paragraph'

export default function Home() {
 

  return (
   <div className="min-h-[300vh]">

    <Header/>
 
    <div className="flex relative justify-center items-center text-end xl:pt-45 pt-35 bg-black  py-2">
        <div className="text-white text-[clamp(45px,15vw,180px)] font-bold leading-none ">
        <div>
           <h1
          className={`${metal.className} text-[#D60505] block
          text-[clamp(30px,8vw,120px)] text-start xl:text-end leading-[0.1] xl:mr-15 tracking-wide
         animate-textSlideUp [animation-delay:0ms]`}
        >
          ONE OF A KIND
        </h1>
        </div>

       <div className='overflow-hidden'>
         <h1
          className={`${urbanist.className} leading-[0.7] xl:leading-[1] font-semibold
           animate-textSlideUp [animation-delay:1800ms] `}
        >
          TATTOO
        </h1>
       </div>

        <span className="flex xl:mr-50 uppercase gap-10 animate-riseIn ">
            <span className={`${urbanist.className} mr-5 xl:mr-0 font-semibold overflow-hidden`}>
            <h1 className='animate-textSlideUp [animation-delay:1800ms] '>
              STUDIO
            </h1>
            </span>
          <div className="hidden xl:block mr-10 pointer-events-auto ">
            <Videozoom />
          </div>
        </span>
        </div>

        <div className='hidden min-[1200px]:block absolute right-3 items-center top-115 cursor-pointer '>
          <CircularText />
        </div>

        <div className='hidden min-[1200px]:block absolute left-10 top-150 text-left '>
          {/* Playfair per il sottotitolo in basso */}
          <p className={`${overpass.className} text-[clamp(5px,1vw,10px)]`}>
            TATTOO STUDIO IN IRELAND <br />
            IRELAND’S FAVOURITE TATTOO SHOP
          </p>
        </div>
        </div>
        <div className="xl:hidden mt-20 pointer-events-auto">
        <video className="w-full h-full object-cover" src="/tattoo-bw.mp4" autoPlay muted loop playsInline />
      </div>


  <main className="flex flex-col gap-16 md:gap-72">
    <Paragraph />
    <AppointmentSection />
    <Page />
    <Faq id="faq" />
    <Footer />
  </main>
</div>
  );
}
