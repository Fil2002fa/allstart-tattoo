import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef,useState } from 'react';
import styles from '../style.module.scss';
import { playfair, overpass, metal, urbanist,belanosima } from "../fonts";
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={styles.word}>
      <span className={styles.shadow}>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export default function Paragraph() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start 0.9', 'end 0.7']
    });

  const paragraph =
  "IF YOU, SERVANT OF THAT PIERCING CLIMAX, IF YOU BREATHE THAT ELECTRIC TENSION, FOR YOU, TATTOOS ON F*CKING GOD-LEVEL, NO MERCY, NO FILTERS. LET THE DAMN INK FLOW WILD AND FEARLESS!";
    const words = paragraph.split(' ');
  
    return (
    <div className="md:w-3/5 xl:mt-170 mt-10">
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
  )
}
