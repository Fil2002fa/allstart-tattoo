'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef,useState } from 'react';
import styles from './style.module.scss';
import ImageScroll from './components/ImageScroll/ImageScroll'
import Faq from "./components/Faq"
import AppointmentSection from './components/AppointmentSection'
import TransitionLink from './components/TransitionLink'
import Footer from './components/Footer/Footer'
import CircularText from './components/CurcularText/CircularText'
import Image from 'next/image';
import Videozoom from './components/Videozoom' 
import OutroCard from './components/ImageScroll/Outrocard';

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
    "IF YOU, SERVANT OF THAT PIERCING CLIMAX, FOR YOU, TATTOOS ON F*CKING A GOD-LEVEL. LET THE DAMN INK FLOW!";
  const words = paragraph.split(' ');

  return (
    <div className="min-h-[300vh]">
      <div className="flex justify-between p-2.5 md:px-10 mt-2 fixed w-full z-20 bg-transparent  text-white">
        <h1>Allstar Ink Tattoo</h1>
        <p className="w-55 text-[10px] text-end">
          44 Wickham St · 44 Wickham St, Prior&apos;s-Land, Limerick, V94 X2K5
        </p>
    
         <TransitionLink href="/menu" className='px-4 py-3 cursor-pointer '>
            MENU
          </TransitionLink>
      </div>

      <div className="flex relative justify-center items-center text-end pt-45 bg-black">
        <div className="text-white text-[clamp(45px,10vw,130px)] font-bold leading-none">
          ONE OF A KIND <br />
          TATTOO <br />
        <span className="flex  ml-50 gap-10 uppercase">
        <span>Studio</span>
        <div className=" pointer-events-auto"> 
          <Videozoom />
        </div>
      </span>
        </div>
         <div className='absolute right-3  items-center top-115 cursor-pointer '>
          <CircularText />
         </div>
      </div>

      <div className="md:w-3/5 mt-170 ">
        <p ref={container} className={styles.paragraph} >
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
          
      <ImageScroll /> 
       <OutroCard />
      <Faq />
      <Footer/>
    </div>
  );
}
