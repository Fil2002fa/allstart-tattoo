'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef,useState } from 'react';
import styles from './style.module.scss';
import Faq from "./components/Faq"
import AppointmentSection from './components/AppointmentSection'
import TransitionLink from './components/TransitionLink'
import Footer from './components/Footer/Footer'
import CircularText from './components/CurcularText/CircularText'
import Image from 'next/image';
import Videozoom from './components/Videozoom' 
import Page from './components/Diagonal/Page'
import { playfair, overpass, metal, urbanist,belanosima } from "./fonts";





const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default function Home() {
  const container = useRef(null);
 

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'end 0.7']
  });

  const paragraph =
  "IF YOU, SERVANT OF THAT PIERCING CLIMAX, IF YOU BREATHE THAT ELECTRIC TENSION, FOR YOU, TATTOOS ON F*CKING GOD-LEVEL, NO MERCY, NO FILTERS. LET THE DAMN INK FLOW WILD AND FEARLESS!";
const words = paragraph.split(' ');

  return (
   <div className="min-h-[300vh]">
  {/* Header Nav */}
<div className="flex items-start p-2.5 md:px-10 mt-2 fixed w-full z-20 bg-transparent text-white">
  {/* SINISTRA */}
  <h1 className={`${playfair.className} text-[clamp(10px,2vw,22px)] font-semibold `}>
    Allstar Ink Tattoo
  </h1>

  {/* DESTRA (gruppo) */}
  <div className="ml-auto flex items-start gap-10">
    <p className={`${overpass.className} text-right mt-2 text-[clamp(10px,2vw,15px)] leading-tight`}>
      44 Wickham St Prior's-Land,<br /> Limerick, V94 X2K5
    </p>

     <TransitionLink href='/menu' className={`${belanosima.className} fpx-4 font-bebas py-3 cursor-pointer`}>
        MENU
      </TransitionLink>
  </div>
</div>

  {/* Hero Section */}
    <div className="flex relative justify-center items-center text-end pt-45 bg-black">
        <div className="text-white text-[clamp(45px,15vw,180px)] font-bold leading-none">
         <h1
            className={`${metal.className} text-[#D60505] block 
            text-[clamp(28px,8vw,120px)] leading-[0.4] mr-15 tracking-wide `}
          >
            ONE OF A KIND
          </h1>
          <h1 className={`${urbanist.className} font-semibold`}>TATTOO</h1> 
        <span className="flex mr-50 uppercase gap-10">
        <span className={`${urbanist.className} font-semibold`}>STUDIO</span>
        <div className=" mr-10 pointer-events-auto"> 
          <Videozoom />
        </div>
      </span>
        </div>


    <div className='absolute right-3 items-center top-115 cursor-pointer '>
      {/* Qui dentro CircularText dovrebbe ereditare Overpass o Bebas dal suo componente */}
      <CircularText />
    </div>

    <div className='absolute left-10 top-150 text-left '>
      {/* Playfair per il sottotitolo in basso */}
      <p className={`${overpass.className} text-[clamp(5px,1vw,10px)]`}>
        TATTOO STUDIO IN IRELAND <br />
        IRELAND’S FAVOURITE TATTOO SHOP
      </p>
    </div>
  </div>

  {/* Sezione Paragraph */}
  <div className="md:w-3/5 mt-170 ">
    <p ref={container} className={`${styles.paragraph} ${urbanist.className} font-semibold tracking-wide   text-[clamp(100px,10vw,150px)]`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  </div>

  <AppointmentSection /> 
  <Page/>

  <Faq />
  <Footer/>
</div>
  );
}
