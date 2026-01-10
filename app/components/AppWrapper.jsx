"use client"; 

import React, { useState } from 'react';
import FullScreenMenu from "../FullScreenMenu";


export default function AppWrapper({ children }) {
  const [menuAperto, setMenuAperto] = useState(false);

  const toggleMenu = () => {
    setMenuAperto(prev => !prev);
    console.log("CLIC EFFETTUATO. Nuovo stato:", !menuAperto);
  };

  return (
    <>
      
      <button className='cursor-pointer ' onClick={toggleMenu}>
        MENU
      </button>
      <FullScreenMenu menuAperto={menuAperto} toggleMenu={toggleMenu} /> 
      
      {children}
    </>
  );
}