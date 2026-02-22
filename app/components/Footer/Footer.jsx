
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { playfair, overpass, metal, urbanist } from "../../fonts";
import { ArrowRight } from 'lucide-react'
import ContactSection from "./ContactSection";

export default function Footer() {
  
  const word = "BOOK NOW"
  return (
    <div className="mt-40">
      <div className="mt-40  mb-50 relative">
  {/* BG */}
  <div className="pointer-events-none opacity-40 absolute right-0 top-0 -z-10
                  h-[560px] w-[560px]
                  md:h-[820px] md:w-[820px]">
    <Image
      src="/Bg-footer.png"
      alt="Footer background"
      fill
      className="object-contain opacity-90"
      priority
    />
  </div>


      <div className="pt-24 md:pt-32">
        <h1 className={`${urbanist.className} mb-5 text-[clamp(44px,12vw,120px)] font-bold md:mb-10 `}>
          !MAKE YOUR MARK!
        </h1>

        <p className={`${urbanist.className} mb-5 text-[clamp(14px,4vw,25px)] md:mb-40 `}>
          Stop thinking, start inking. Book your session <br /> below.
        </p>

        <div className={`${urbanist.className} mb-5 md:mt-20 md:mb-5 `}>
          <p>Schedule an appointment</p>
        </div>

        <div className={`${urbanist.className} text-[clamp(34px,10vw,65px)] `}>allstarink@gmail.com</div>
      </div>
    </div>


           
        <div className=" h-[1px] w-full bg-white/30 mr-10" />

     <div className="h-[1px] w-full bg-white/30 mr-10" />



      <ContactSection />
       <div className="flex justify-center mt-40 text-[clamp(34px,15vw,150px)]">
        <h1 className={`${metal.className} `}> Allstar Ink Tattoo</h1>
       </div>
    </div>
  );
}