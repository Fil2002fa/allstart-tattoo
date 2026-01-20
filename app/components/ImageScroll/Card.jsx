'use client'
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Card = ({i, title, description, color, progress, range, targetScale,src}) => {

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
    
    className="sticky flex top-12 h-screen items-center justify-center"
  >
    <motion.div
      style={{
        backgroundColor: color,
        scale,
        top: `calc(5vh + ${i * 45}px)`,
      }}
      className="
        relative flex flex-col origin-top
        h-[50vh] w-[80vw] max-w-[1000px] min-h-[250px]
        p-[5vw]
        md:h-[60vh] md:w-[90vw]
      "
    >
  
      <div className="absolute hidden min-[850px]:block  left-[-20] top-1/2 -translate-y-1/2 w-[320px] h-[400px]  pointer-events-none">
        <Image
          src={src}
          alt={title || "Project image"}
          fill
          className="object-contain"
          priority={i === 0}
        />
      </div>

      <div className="flex items-center justify-end h-full">
        <motion.div
          style={{ opacity, y }}
          className="w-[70%] flex flex-col gap-20 mb-15"
        >
          <h3 className="text-black uppercase top-0 font-['Title'] text-[clamp(18px,2.2vw,28px)] leading-none">
            {title}
          </h3>

          <p
            className="
              text-black font-mono uppercase
              text-[clamp(14px,2vw,18px)]
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