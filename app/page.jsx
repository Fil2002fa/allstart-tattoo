'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef,useState } from 'react';
import styles from './style.module.scss';
import ImageScroll from './components/ImageScroll/ImageScroll'
import AppWrapper from './components/AppWrapper'
import FullScreenMenu from './components/FullScreenMenu';
import Faq from "./components/Faq"

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
  const [menuAperto, setMenuAperto] = useState(false)

  function toggleMenu() {
    setMenuAperto(prev => !prev)
  }


  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'start 0'],
  });

  const paragraph =
    "IF YOU, SERVANT OF THAT PIERCING CLIMAX, FOR YOU, TATTOOS ON F*CKING A GOD-LEVEL. LET THE DAMN INK FLOW!";
  const words = paragraph.split(' ');

  return (
    <div className="dark:bg-black min-h-[300vh]">
      <div className="flex justify-between p-2.5 md:p-2 fixed w-full z-20 bg-black/50 backdrop-blur-sm text-white">
        <h1>Allstar Ink Tattoo</h1>
        <p className="w-55 text-[10px] text-end">
          44 Wickham St · 44 Wickham St, Prior&apos;s-Land, Limerick, V94 X2K5
        </p>
    
          <button onClick={toggleMenu} className='px-4 py-3 cursor-pointer '>
            MENU
          </button>
        
      </div>
 <FullScreenMenu menuAperto={menuAperto} toggleMenu={toggleMenu} />
      <div className="flex flex-col min-h-screen justify-center items-center text-end pt-16 bg-black">
        <div className="text-white text-[clamp(45px,10vw,130px)] font-bold leading-none">
          ONE OF A KIND <br />
          TATTOO <br />
          STUDIO
        </div>
      </div>

      <div className="w-2/4 md:w-1/2 mt-40 ">
        <p ref={container} className={styles.paragraph}>
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

      <div className="h-[20vh]" />
      <ImageScroll /> 
      <Faq />
    </div>
  );
}
