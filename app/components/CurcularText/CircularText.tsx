import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

export default function CircularText() {
  return (
    <div className={styles.wrapper}>
      {/* Testo che gira */}
      <svg viewBox="0 0 250 250" className={styles.svg}>
        <defs>
          <path
            id="curve"
            d="
              M 125, 125
              m -90, 0
              a 90, 90 0 1, 1 180, 0
              a 90, 90 0 1, 1 -180, 0
            "
          />
        </defs>

        <text className={styles.text} fontSize="14">
          <textPath href="#curve">
            CONTACT ME • CONTACT ME • CONTACT ME • CONTACT ME •
          </textPath>
        </text>
      </svg>

      {/* Immagine centrale */}
      <div className={styles.centerImage}>
        <Image
          src="/allstar-icon-removebg-preview.png"
          alt="Tattoo icon"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}
