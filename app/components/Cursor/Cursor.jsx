"use client";
import React, { useEffect, useRef } from 'react';
import styles from './style.module.css';
import gsap from 'gsap';

const Cursor = ({ isActive }) => {
  const cursorRef = useRef(null);
useEffect(() => {
  if (!isActive) {
    gsap.set(cursorRef.current, { opacity: 0, scale: 0 });
  }
}, [isActive]);
  useEffect(() => {
    const cursor = cursorRef.current;

    
    const moveCursor = (e) => {
      
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out"
      });
    };

    // Effetto click (espansione)
   const handleExpand = () => {
  // Usiamo GSAP invece della classe CSS
  gsap.to(cursor, {
    scale: 1.5,
    duration: 0.2,
    yoyo: true, // Torna indietro automaticamente
    repeat: 1,  // Ripete una volta (quindi fa: scala su -> scala giù)
    ease: "power2.out",
    overwrite: "auto" // Evita conflitti se clicchi velocemente
  });
};

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleExpand);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
         };
  }, []);


  useEffect(() => {
    if (isActive) {
      gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3 });
    } else {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0, duration: 0.3 });
    }
  }, [isActive]);

  return (
    <div 
      ref={cursorRef} 
      className={styles.cursor}
    >
      <span className={styles.text}>CHECK THE GALLERIE</span>
    </div>
  );
};

export default Cursor;