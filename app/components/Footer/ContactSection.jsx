"use client";

import React, { useState } from "react";
import styles from "./style.module.css";
import Link from "next/link";
import { playfair, overpass, metal, urbanist } from "../../fonts";
import { ArrowRight } from "lucide-react";

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
  const word = "BOOK NOW";
  const [openIndex, setOpenIndex] = useState(null);

  function handleOpen(i) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <div className="mt-6 lg:mt-36">
      <div className="  py-5 flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
        {/* SINISTRA */}
        <div className="flex flex-col xl:items-start items-center xl:gap-20 gap-6">
          <h1 className={`${urbanist.className} text-[clamp(34px,10vw,80px)] font-bold leading-none`}>
            READY TO BOOK?
          </h1>

          <button className="group flex items-center gap-4 px-6 py-4 bg-[#161A1D] rounded-full cursor-pointer">
            <span className="relative w-8 h-8 bg-red-700 rounded-full flex justify-center items-center">
              <div className="absolute rounded-full bg-black w-2.5 h-2.5 transition-all duration-500 group-hover:scale-0" />
              <div className="absolute scale-0 group-hover:scale-100 transition-all duration-500">
                <ArrowRight size={14} />
              </div>
            </span>

            <span className="relative block overflow-hidden text-white uppercase leading-[1.1] cursor-pointer">
              <div className="flex">
                {word.split("").map((char, i) => (
                  <span
                    key={i}
                    style={{ transitionDelay: `${i * 0.03}s` }}
                    className={`${urbanist.className} inline-block font-semibold transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>

              <div className="flex absolute top-0 left-0">
                {word.split("").map((char, i) => (
                  <span
                    key={i}
                    style={{ transitionDelay: `${i * 0.03}s` }}
                    className={`${urbanist.className} inline-block font-semibold transition-transform duration-350 ease-[cubic-bezier(0.76,0,0.24,1)] translate-y-full group-hover:translate-y-0`}
                  >
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </div>
            </span>
          </button>
        </div>

        {/* DESTRA */}
        <div className={`${overpass.className} w-full md:w-auto md:mr-0`}>
          {/* DESKTOP (>= md): griglia normale */}
          <div className="hidden md:block">
            <div className="w-fit pt-5">
              <div className="grid grid-cols-1 gap-y-10 gap-x-16 md:grid-cols-[auto_auto_auto]">
                <div className="flex flex-col">
                  <p className="mb-4">Position</p>
                  <p className="mb-2">
                    44 Wickham St · 44 Wickham St,
                    <br />
                    Prior&apos;s-Land,
                  </p>
                  <p>061-409-439</p>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="mb-2 uppercase">Get in touch</p>
                  <Link href="/contact">Contact me</Link>
                  <Link href="/gallery">Gallery</Link>
                  <Link href="/faq">FAQs</Link>
                </div>

                <div className="flex flex-col">
                  <p className="mb-4">Social</p>
                  <div className="flex flex-col gap-2">
                    <SocialLink label="Instagram" url="https://instagram.com/..." />
                    <SocialLink label="Facebook" url="https://facebook.com/..." />
                    <SocialLink label="Pinterest" url="https://pinterest.com/..." />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE (< md): accordion */}
          <div className="md:hidden pt-5 border-t border-white/15">
            {/* ITEM 0 - POSITION */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => handleOpen(0)}
                className="w-full flex items-center justify-between py-6"
              >
                <span className="uppercase tracking-wide">Position</span>
                <span className="text-3xl leading-none">{openIndex === 0 ? "−" : "+"}</span>
              </button>

              <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${openIndex === 0 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-6">
                  <p className="mb-2">
                    44 Wickham St · 44 Wickham St,
                    <br />
                    Prior&apos;s-Land,
                  </p>
                  <p>061-409-439</p>
                </div>
              </div>
            </div>

            {/* ITEM 1 - GET IN TOUCH */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => handleOpen(1)}
                className="w-full flex items-center justify-between py-6"
              >
                <span className="uppercase tracking-wide">Get in touch</span>
                <span className="text-3xl leading-none">{openIndex === 1 ? "−" : "+"}</span>
              </button>

              <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${openIndex === 1 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-6 flex flex-col gap-4">
                  <Link href="/contact">Contact me</Link>
                  <Link href="/gallery">Gallery</Link>
                  <Link href="/faq">FAQs</Link>
                </div>
              </div>
            </div>

            {/* ITEM 2 - SOCIAL */}
            <div className="border-b border-white/15">
              <button
                type="button"
                onClick={() => handleOpen(2)}
                className="w-full flex items-center justify-between py-6"
              >
                <span className="uppercase tracking-wide">Social</span>
                <span className="text-3xl leading-none">{openIndex === 2 ? "−" : "+"}</span>
              </button>

              <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ${openIndex === 2 ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="pb-6 flex flex-col gap-2">
                  <SocialLink label="Instagram" url="https://instagram.com/..." />
                  <SocialLink label="Facebook" url="https://facebook.com/..." />
                  <SocialLink label="Pinterest" url="https://pinterest.com/..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 lg:mt-36 text-[clamp(24px,13vw,150px)]">
        <h1 className={`${metal.className}`}>Allstar Ink Tattoo</h1>
      </div>
    </div>
  );
}