import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./style.module.css";

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
      <div>
        <h1 className="mb-5 text-6xl font-bold md:mb-10 md:text-8xl">
          !MAKE YOUR MARK!
        </h1>

        <p className="mb-5 text-xl md:mb-10 md:text-2xl">
          Stop thinking, start inking. Book your session <br /> below.
        </p>

        <div className="mb-5 md:mb-10">
          <p>Schedule an appointment</p>
        </div>

        <div className="text-3xl md:text-4xl">allstarink@gmail.com</div>
      </div>

      <div className="pt-16 md:flex md:items-start md:justify-between">
        <h1 className="mb-10 text-6xl font-bold md:text-9xl">
          Limerick, <br />
          Ireland {/* Corretto spelling da Irland a Ireland */}
        </h1>

        <div className="cursor-pointer md:mr-10">
          <div className="group flex items-center gap-6">
            <h1 className="mb-2 text-6xl">(Get Inked)</h1>
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-10" />
          </div>

          <div className="w-fit border-t pt-10 ">
            <div className="grid grid-cols-[auto_1fr_2fr] gap-x-16 gap-y-10">
              <div className="flex flex-col gap-16 text-gray-600">
                <p>01</p>
                <p>02</p>
                <p>03</p>
              </div>

              <div className="flex flex-col gap-16">
                <p>Get in Touch</p>
                <p>Position</p>
                <p>Social</p>
              </div>

              <div className="flex flex-col gap-y-10">
                <p>
                  Book Your Appointment <br />
                  allstarink@gmail.com
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