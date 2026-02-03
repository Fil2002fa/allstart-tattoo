"use client";
import React, { useEffect, useRef } from 'react';
import styles from './style.module.css';
import gsap from 'gsap';

const Cursor = ({ isActive }) => {
  const cursorRef = useRef(null);

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
      cursor.classList.add(styles.expand);
      setTimeout(() => {
        cursor.classList.remove(styles.expand);
      }, 500);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('click', handleExpand);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('click', handleExpand);
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