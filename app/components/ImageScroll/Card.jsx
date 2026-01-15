'use client'
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Card = ({i, title, description, src, color, progress, range, targetScale}) => {

  const container = useRef(null);
  
  // Gestiamo lo scroll interno alla singola card per far apparire il paragrafo
  const { scrollYProgress: elementProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  // Animazione per il paragrafo: opacità e movimento verso l'alto
  const opacity = useTransform(elementProgress, [0.7, 1], [0, 1]);
  const y = useTransform(elementProgress, [0.7, 1], [20, 0]);

  // Scala della card globale (quella che passiamo dal componente padre)
  const scale = useTransform(progress, range, [1, targetScale]);
return (
  <div
    ref={container}
    className="sticky top-0 h-screen flex items-center justify-end pr-[50px]"
  >
    <motion.div
      style={{
        backgroundColor: color,
        scale,
        top: `calc(5vh + ${i * 45}px)`,
      }}
      className="
        relative flex flex-col origin-top
        h-[60vh] w-[80vw] max-w-[1000px] min-h-[300px]
        p-[5vw]
        md:h-[70vh] md:w-[90vw]
        max-md:h-auto max-md:flex-col max-md:p-5
      "
    >
        <div className="relative w-[45%] h-[80%] max-md:w-full max-md:h-[260px]">
            <Image
            src="/FineLine-left.png"
                alt={title || "Project image"}
              fill
              className="object-contain"
              priority={i === 0}
            />
          </div>
     

      <div className="flex  items-center justify-end  h-full   max-md:gap-5 max-md:mt-5">
        <motion.div
          style={{ opacity, y }}
          className="w-[70%] relative top-0 max-md:w-full"
        >
          <p
            className="
              flex 
              text-black font-mono uppercase text-[clamp(14px,2vw,18px)]
              first-letter:text-[clamp(24px,3vw,32px)]
              first-letter:font-['Title'] 
             
            "
          >
            {description}
          </p>

        
        </motion.div>

      </div>
    </motion.div>
  </div>
);

}

export default Card;