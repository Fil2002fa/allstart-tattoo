import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./style.module.css";
import Image from "next/image";

// 1. Corretta la sintassi del componente SocialLink
const SocialLink = ({ label, url }) => {
  return (
    <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`${styles.navItem} no-underline`}
  >
    <span className="text-white">{label}</span>
    <span className={styles.underline} />
  </a>
  );
};

export default function ContactSection() {
  return (
    <div className="mt-40 ml-10">
      <div className="mt-40 ml-10 mb-50 relative">
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
    <h1 className="mb-5 text-6xl font-bold md:mb-10 md:text-9xl">
      !MAKE YOUR MARK!
    </h1>

    <p className="mb-5 text-xl md:mb-40 md:text-2xl">
      Stop thinking, start inking. Book your session <br /> below.
    </p>

    <div className="mb-5 md:mt-20 md:mb-5">
      <p>Schedule an appointment</p>
    </div>

    <div className="text-3xl  md:text-5xl">allstarink@gmail.com</div>
  </div>
</div>


           

      <div className="pt-36 md:flex md:items-start md:justify-between">
        <h1 className="mb-10 text-6xl font-bold md:text-9xl">
          Limerick, <br />
          Ireland 
        </h1>

        <div className="cursor-pointer md:mr-10">
        

          <div className="w-fit pt-10 ">
            <div className="grid grid-cols-[auto_1fr_2fr] gap-x-16 ">
              <div className="flex flex-col gap-160">
                <p>Position</p>
                <p>02</p>
                <p>03</p>
              </div>

              <div className="flex flex-col gap-16">
                <p>Get in Touch</p>
                <p></p>
                <p></p>
              </div>

              <div className="flex flex-col gap-y-10">
                <p>
                  Social
                </p>

                <p>
                  44 Wickham St · 44 Wickham St,
                  <br />
                  Prior&apos;s-Land,
                </p>
                <div className="flex gap-5 ">
                  {/* 2. Utilizzo corretto del componente SocialLink */}
                  <SocialLink label="Instagram" url="https://instagram.com/..." />
                  <SocialLink label="Facebook" url="https://facebook.com/..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}