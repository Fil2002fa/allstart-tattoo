"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions"; // 1. Importa il router delle transizioni

export default function FullScreenMenu({ menuAperto, toggleMenu }) {
  const router = useTransitionRouter(); // 2. Inizializza il router

  const routes = [
    { label: "GALLERIA", url: "/galleria" },
    { label: "CONTACT", url: "/contact" },
    { label: "FAQ", url: "/faq" },
  ];

  // Funzione per gestire il click e l'animazione
  const handleNavigation = (e, url) => {
    e.preventDefault(); // Blocca il link standard
    toggleMenu();       // Chiude il menu a tendina
    
    // Fai partire la transizione di Next.js con l'animazione personalizzata
    router.push(url, {
      onTransitionReady: pageAnimation,
    });
  };

  const menuClasses = menuAperto
    ? "fixed inset-0 bg-black z-40 transition-transform duration-700 translate-y-0"
    : "fixed inset-0 bg-black z-40 transition-transform duration-700 -translate-y-full";

  return (
    <div className={menuClasses}>
      <button onClick={toggleMenu} className='fixed right-0 p-1.5 md:p-10 text-white'>
        CLOSE
      </button>

      <ul className="flex flex-col justify-center min-h-screen px-10 gap-4">
        {routes.map((route) => (
          <li key={route.label} className="list-none">
            <Link
              href={route.url}
              onClick={(e) => handleNavigation(e, route.url)} // 3. Usa la funzione personalizzata
              className="group block relative w-fit overflow-hidden text-white uppercase text-[clamp(40px,8vw,100px)] leading-[1.1]"
            >
              {/* Animazione Hover (Quella che abbiamo sistemato prima) */}
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

// 4. Incolla qui sotto la tua funzione pageAnimation (o importala da un file esterno)
const pageAnimation = () => {
  document.documentElement.animate(
    [
      { opacity: 1, scale: 1, transform: "translateY(0)" },
      { opacity: 0.8, scale: 0.9, transform: "translateY(-100px)" },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      { transform: "translateY(100%)" },
      { transform: "translateY(0)" },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};