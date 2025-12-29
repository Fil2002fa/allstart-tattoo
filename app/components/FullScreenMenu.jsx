"use client";

import Link from "next/link";

export default function FullScreenMenu({ menuAperto, toggleMenu }) {
  const routes = [
    { label: "GALLERIA", url: "/galleria" },
    { label: "CONTACT", url: "/contact" },
    { label: "FAQ", url: "/faq" },
  ];

  const menuClasses = menuAperto
    ? "fixed inset-0 bg-black z-40 transition-transform duration-700 translate-y-0"
    : "fixed inset-0 bg-black z-40 transition-transform duration-700 -translate-y-full";

  return (
    <div className={menuClasses}>
      <button onClick={toggleMenu} 
          className='fixed right-0 p-1.5  md:p-10'>
                    CLOSE
         </button>

       <div>
         <Link href={"/"} onClick={toggleMenu} >
            Allstar Ink Tattoo
         </Link>
         </div>
         
      <ul className="flex flex-col justify-center min-h-screen px-10 gap-4">
        {routes.map((route) => (
          <li key={route.label} className="list-none">
            <Link
                href={route.url}
                onClick={toggleMenu}
                className="group relative block overflow-hidden text-white uppercase text-[clamp(40px,8vw,100px)] leading-[1.1]"
              >
                {/* PRIMA RIGA (Sale verso l'alto) */}
                <div className="flex">
                  {route.label.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                      style={{ transitionDelay: `${i * 0.03}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>

                {/* SECONDA RIGA (Sale dal basso verso la posizione originale) */}
                <div className="flex absolute top-0 left-0">
                  {route.label.split("").map((char, i) => (
                    <span
                      key={i}
                      className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0"
                      style={{ transitionDelay: `${i * 0.03}s` }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </div>
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}