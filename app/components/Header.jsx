import React from "react";
import { playfair, overpass, belanosima } from "../fonts";
import TransitionLink from "./TransitionLink";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-20 w-full bg-transparent text-white px-2.5 md:px-10 py-2">
      <div className="flex items-center">
        <h1 className={`${playfair.className} text-[clamp(15px,3vw,22px)] font-semibold`}>
          Allstar Ink Tattoo
        </h1>

        <div className="ml-auto flex items-center gap-10">
          <p
            className={`${overpass.className} hidden min-[900px]:block text-right text-[clamp(10px,2vw,15px)] leading-tight`}
          >
            44 Wickham St Prior&apos;s-Land,<br /> Limerick, V94 X2K5
          </p>

          <TransitionLink
            href="/menu"
            className={`${belanosima.className} px-4 py-3 cursor-pointer`}
          >
            MENU
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}