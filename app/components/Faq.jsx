import React, { useState } from "react";
import { faqData } from "../faq";
import { overpass, urbanist } from "../fonts";
import Reveal from './Reveal'

export default function Faq({ id }) {
  const [openIndex, setOpenIndex] = useState(null);

  function handleOpen(i) {
    setOpenIndex(prev => (prev === i ? null : i));
  }

  return (
    <div id={id} className="mx-auto w-10/11 scroll-mb-64">
      {/* Animiamo il titolo principale */}
      <Reveal>
        <h1 className={`${urbanist.className} flex leading-0.5 text-[clamp(50px,12vw,140px)] text-red-700 font-semibold py-15`}>
          FAQS****
        </h1>
      </Reveal>

      {faqData.map((f, i) => {
        const isOpen = openIndex === i;
        const num = String(i + 1).padStart(2, "0");

        return (
          /* 2. Avvolgi ogni singola FAQ nel componente Reveal */
          /* Usiamo un piccolo delay basato sull'indice se vuoi un effetto a cascata, 
             oppure lascialo vuoto per farle apparire man mano che entrano nel viewport */
          <Reveal key={i} delay={`${i * 50}ms`} className="mb-2">
            <div
              className={`border uppercase transition-colors duration-500
                ${isOpen ? "bg-[#D60505] text-black border-[#D60505]" : "bg-transparent text-[#D60505] border-[#D60505]"}
                ${i === faqData.length - 1 ? "border-b" : ""} `}
            >
              <div
                className="flex items-center justify-between px-2 md:px-6 py-8 md:py-12 cursor-pointer"
                onClick={() => handleOpen(i)}
              >
                <div className="flex items-center gap-2 md:gap-12">
                  <span className="text-[clamp(18px,3vw,30px)] font-bold min-w-[1.5em]">
                    {num}
                  </span>
                  <h2 className={`${urbanist.className} font-semibold text-[clamp(24px,5vw,60px)] leading-none`}>
                    {f.question}
                  </h2>
                </div>

                <div className="ml-4 p-1 leading-none inline-flex items-center justify-center w-[1.1em] h-[1.1em] text-[clamp(35px,5vw,70px)]">
                  {isOpen ? "-" : "+"}
                </div>
              </div>

              <div
                className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out
                  ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="pb-10 px-[calc(2.5em+2px)] md:px-[calc(6vw+24px)]">
                  <p className="text-[clamp(16px,2vw,22px)] uppercase max-w-4xl">
                    {f.answer}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}