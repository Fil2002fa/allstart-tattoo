'use client'
import Link from 'next/link';
import React from 'react'

export default function FullScreenMenu({menuAperto, toggleMenu}) {
   const menuClasses = menuAperto 
    ? 'fixed inset-0 bg-black z-40 transition-transform duration-700 transform translate-y-0'
    : 'fixed inset-0 bg-black z-40 transition-transform duration-700  -translate-y-full';
  

const routes = [
       {
            label: "GALLERIA" ,
            url: "/galleria"
        },
        
        {
            label: "CONTACT" ,
            url: "/contact"
        },
        {
            label: "FAQ" ,
            url: "/faq"
        },
]
    
        

return (
    <div className={menuClasses }>
          <button onClick={toggleMenu} 
          className='fixed right-0 p-1.5  md:p-10'>
                    CLOSE
         </button>

       <div className=''>
         <Link href={"/"} onClick={toggleMenu} >
            Allstar Ink Tattoo
         </Link>
       </div>

        
        <div className='flex flex-col text-[clamp(35px,10vw,60px)] justify-center  min-h-screen  '>
           {routes.map((route) =>(
                <Link  key={route.label} href={route.url}>
                    {route.label}
                </Link>
           ))}
            
        </div>
    </div>
  )
}
