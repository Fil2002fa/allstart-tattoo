"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions"; // 1. Importa il router delle transizioni
import TransitionLink from "../components/TransitionLink";

export default function FullScreenMenu({ menuAperto, toggleMenu }) {
  const router = useTransitionRouter(); // 2. Inizializza il router

  const routes = [
    { label: "GALLERIA", url: "/galleria" },
    { label: "CONTACT", url: "/contact" },
    { label: "FAQ", url: "/faq" },
  ];


  return (
    <div >
      <TransitionLink href='/' className='fixed right-0 p-1.5 md:p-10 text-white'>
        CLOSE
      </TransitionLink>

      <ul className="flex flex-col justify-center min-h-screen px-10 gap-4">
        {routes.map((route) => (
          <li key={route.label} className="list-none">
            
            <TransitionLink
              href={route.url}
              className="group block relative w-fit overflow-hidden text-white uppercase text-[clamp(40px,8vw,100px)] leading-[1.1]"
            >
              
              <div className="flex">
                {route.label.split("").map((char, i) => (
                  <span
                    key={i}
                    className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full"
                    style={{ transitionDelay: `${i * 0.03}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
              <div className="flex absolute top-0 left-0">
                {route.label.split("").map((char, i) => (
                  <span
                    key={i}
                     className="inline-block transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0"
                    style={{ transitionDelay: `${i * 0.03}s` }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </div>
  );
}