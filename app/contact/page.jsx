'use client'
import React, { useState } from 'react'
import { FaPinterestP, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function page() {
  const [age, setAge] = useState(null)
  const [consent, setConsent] = useState(false)

    const iconBase =
    "h-11 w-11 rounded-full border border-white/30 flex items-center justify-center hover:border-white/70 transition";

  return (
    <div className=''>
      <h1 className='text-[clamp(48px,8vw,120px)]'>
        BOOK AN APPOINTMENT!!
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr] gap-6 lg:gap-8 items-start px-10">
         <div className="hidden lg:block space-y-14">
        {/* ADDRESS */}
        <div>
          <h2 className="uppercase text-sm tracking-[0.25em] font-semibold mb-6">
            Address
          </h2>
          <p className="text-sm tracking-[0.2em] leading-7 font-mono opacity-95">
            44 Wickham St · 44 Wickham St,
            <br />
            Prior&apos;s-Land,
          </p>
        </div>

        {/* PHONE */}
        <div>
          <h2 className="uppercase text-sm tracking-[0.25em] font-semibold mb-6">
            Phone
          </h2>
          <p className="text-sm tracking-[0.2em] leading-7 font-mono opacity-95">
            +353 061-409-439
          </p>
        </div>

        {/* EMAIL */}
        <div>
          <h2 className="uppercase text-sm tracking-[0.25em] font-semibold mb-6">
            E-mail
          </h2>
          <p className="text-sm tracking-[0.2em] leading-7 font-mono opacity-95">
            allstarink@gmail.com
          </p>
        </div>

        {/* SOCIAL */}
        <div>
          <h2 className="uppercase text-sm tracking-[0.25em] font-semibold mb-6">
            Social
          </h2>

          <div className="flex gap-6">
            <a
              href="https://pinterest.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className={iconBase}
            >
              <FaPinterestP className="text-white text-xl" />
            </a>

            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={iconBase}
            >
              <FaFacebookF className="text-white text-xl" />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={iconBase}
            >
              <FaInstagram className="text-white text-xl" />
            </a>
          </div>
        </div>
      </div>
        <form
        action="https://formspree.io/f/mvzbobjj"
        method="POST"
        className="relative mx-auto w-full text-black  max-w-none bg-red-700  py-6 px-5"  
      >
        {/* Big title */}
        <h1 className="uppercase font-bold tracking-tight leading-[1] text-[22px] sm:text-[36px] md:text-[52px]">
          Leave your details and we’ll book an appointment
        </h1>

        {/* 2-column grid like the photo */}
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-6">
          {/* Left column */}
          <div className="space-y-3">
            <Field
              label="Name*"
              name="name"
              type="text"
              placeholder="WRITE YOUR NAME"
              autoComplete="name"
              required
            />

            <Field
              label="E-mail*"
              name="email"
              type="email"
              placeholder="ENTER YOUR EMAIL"
              autoComplete="email"
              required
            />
          </div>

          {/* Right column */}
          <div className="space-y-3">
            <Field
              label="Phone*"
              name="phone"
              type="tel"
              placeholder="ENTER YOUR PHONE NUMBER"
              autoComplete="tel"
              required
            />

            {/* Age */}
            <div>
              <p className="uppercase font-bold tracking-wide">Are you over 18?*</p>

              <div className="mt-2 flex gap-3">
                <ToggleBtn active={age === true} onClick={() => setAge(true)}>
                  Yes
                </ToggleBtn>
                <ToggleBtn active={age === false} onClick={() => setAge(false)}>
                  No
                </ToggleBtn>
              </div>

              {/* send value to Formspree */}
              <input
                type="hidden"
                name="over18"
                value={age === null ? "" : age ? "YES" : "NO"}
                required
              />

              {age === false && (
                <p className="mt-2 text-sm font-semibold">
                  You must be 18+ to book an appointment.
                </p>
              )}
            </div>
          </div>

          {/* Full row: tattoo description */}
          <div className="md:col-span-2">
            <p className="uppercase font-bold tracking-wide">What would you like to tattoo?*</p>

            <div className="mt-2 border border-black/70">
              <textarea
                name="idea"
                required
                placeholder="TELL US YOUR IDEA"
                rows={5}
                className="w-full resize-none bg-transparent p-3 outline-none placeholder-black/70"
              />
            </div>
          </div>

          {/* Full row: discount code */}
          <div className="md:col-span-2">
            <p className="uppercase font-bold tracking-wide">Do you have a discount code?</p>
            <input
              name="discountCode"
              type="text"
              placeholder="ENTER YOUR CODE HERE"
              className="mt-2 w-full bg-transparent outline-none placeholder-black/70"
            />
            <div className="mt-1 border-b border-black/70" />
          </div>
        </div>

        {/* Footer: checkbox + button bottom right */}
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <label className="flex items-center gap-3 text-sm tracking-wide">
            <input
              type="checkbox"
              className="h-4 w-4 accent-black"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              name="consent"
            />
            <span className="uppercase">
              I consent to being contacted to schedule the appointment.
            </span>
          </label>

          <button
            type="submit"
            disabled={!consent || age !== true}
            className="ml-auto inline-flex items-center gap-3 rounded-full bg-black px-7 py-3 uppercase text-white font-bold tracking-widest disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Submit <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
          </button>
        </div>
      </form>
      </div>
    </div>
  )
}

function Field({ label, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="uppercase font-bold tracking-wide">{label}</p>
      <input
        {...props}
        className="bg-transparent border-none outline-none placeholder-black/70"
      />
      <div className="border-b border-black/70" />
    </div>
  )
}

function ToggleBtn({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "h-11 w-14 border border-black uppercase font-bold tracking-wide",
        active ? "bg-black text-white" : "bg-transparent text-black",
      ].join(" ")}
    >
      {children}
    </button>
  )
}
