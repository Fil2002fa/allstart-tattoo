import React, { useState } from "react";
import { faqData } from "../faq";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  function handleOpen(i) {
    setOpenIndex(prev => (prev === i ? null : i));
  }

  return (
    <div>
      <h1 className="flex justify-center text-[clamp(40px,10vw,70px)]">
        FAQS****
      </h1>

      {faqData.map((f, i) => {
        const isOpen = openIndex === i;
        const num = String(i + 1).padStart(2, "0");
        return (
          <div 
             className={`border w-10/11 mx-auto uppercase transition-colors duration-300
    ${isOpen ? "bg-red-600 text-black border-red-600" : "bg-transparent text-red-600 border-red-600"}
  `}
>
            
          <div className="p-2">
            <span className="text-[clamp(14px,2vw,20px)">
              {num}
            </span>
         </div>
            <div className="flex flex-col">
              <div className="py-2 px-2 md:px-6 flex justify-between text-[clamp(30px,4vw,50px)] uppercase">
              <p className="font-semibold">{f.question}</p>

              <button
                className="cursor-pointer text-[clamp(40px,5vw,70px)] mr-2"
                onClick={() => handleOpen(i)}
              >
                {isOpen ? "-" : "+"}
              </button>
            </div>


            <div
              className={`
                overflow-hidden
                transition-[max-height,opacity,transform] duration-500 ease-in-out
                ${isOpen ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 "}
              `}
            >
              <div className="py-2 px-2 md:px-6 md:py-4 pr-8 uppercase">
                {f.answer}
              </div>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
