'use client'
import styles from './style.module.scss';
import { useTransform, motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const Card = ({i, title, description, color, progress, range, targetScale,src,srcBg, bgImage}) => {

  const container = useRef(null);
  
  
  const { scrollYProgress: elementProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })


  const y = useTransform(elementProgress, [0.7, 1], [20, 0]);


  const scale = useTransform(progress, range, [1, targetScale]);
return (
  <div
    ref={container}
    
    className="sticky flex top-8 h-screen items-center justify-center"
  >
    <motion.div
      style={{
        backgroundColor: color,
       backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        scale,
        top: `calc(5vh + ${i * 45}px)`,
      }}
      className="
        relative flex flex-col origin-top
        h-[50vh] w-[80vw] max-w-[1000px] min-h-[250px]
        p-[5vw]
        md:h-[75vh] md:w-[100vw]
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
          style={{ y }}
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
              first-letter:font-['Title'] z-10
            "
          >
            {description}
          </p>
          <div className="absolute mt-5 opacity-80 hidden min-[850px]:block z-0 right-1  top-1/2 -translate-y-1/2    w-[400px] h-[350px]  pointer-events-none">
            <Image
              src={srcBg}
              alt={title || "Project image"}
              fill
              className="object-contain"
              priority={i === 0}
            />
         </div>
        
        </motion.div>
      </div>

    </motion.div>
  </div>
);

}

export default Card;