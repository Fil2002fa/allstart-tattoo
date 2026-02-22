"use client";
import React, { useState } from "react";
import { FaPinterestP, FaFacebookF, FaInstagram } from "react-icons/fa";
import TransitionLink from '../components/TransitionLink'
import { playfair, overpass, metal, urbanist, belanosima } from "../fonts";
import ContactSection from '../components/Footer/ContactSection'

export default function Page() {
  const [age, setAge] = useState(null);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    idea: "",
  });

  // 1. MODIFICA: idea non è più obbligatoria per canSubmit
  const canSubmit =
    form.name.trim() !== "" &&
    form.email.trim() !== "" &&
    form.phone.trim() !== "" &&
    age !== null &&
    consent === true;

  const iconBase =
    "h-11 w-11 rounded-full border border-white/30 flex items-center justify-center hover:border-white/70 transition";

  return (
    <div className="px-10 py-5">
    <div className="fixed top-0  left-0 right-0 z-50">
  <div className="px-10 py-5 flex items-center justify-between">
    <TransitionLink href="/">
      <h1 className={`${playfair.className} text-[clamp(10px,2vw,22px)] font-semibold`}>
        Allstar Ink Tattoo
      </h1>
    </TransitionLink>

    <TransitionLink
      href="/menu"
      className={`${belanosima.className} py-3 cursor-pointer`}
    >
      MENU
    </TransitionLink>
  </div>
</div>
      <h1 className={`${urbanist.className} text-[clamp(48px,8vw,100px)] font-bold mt-10`}>
        BOOK AN APPOINTMENT!!
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_4fr] mt-4 lg:gap-8 items-start ">
        {/* ... (Sidebar Social/Indirizzo rimane invariata) ... */}
        <div className="hidden lg:block space-y-14">
          <div>
            <h2 className={`${urbanist.className} uppercase text-sm font-semibold mb-2`}>Address</h2>
            <p className={`${overpass.className} text-sm font-mono `}>
              44 Wickham St · 44 Wickham St, <br /> Prior&apos;s-Land,
            </p>
          </div>
          <div>
            <h2 className={`${urbanist.className} uppercase text-sm font-semibold mb-2`}>Phone</h2>
            <p className={`${overpass.className} text-sm font-mono `}>+353 061-409-439</p>
          </div>
          <div>
            <h2 className={`${urbanist.className} uppercase text-sm font-semibold mb-2`}>E-mail</h2>
            <p className={`${overpass.className} text-sm font-mono `}>allstarink@gmail.com</p>
          </div>
          <div>
            <h2 className={`${urbanist.className} uppercase text-sm tracking-[0.25em] font-semibold mb-4`}>Social</h2>
            <div className="flex gap-6">
              <a href="https://pinterest.com/" target="_blank" rel="noreferrer" aria-label="Pinterest" className={iconBase}><FaPinterestP className="text-white text-xl" /></a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook" className={iconBase}><FaFacebookF className="text-white text-xl" /></a>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className={iconBase}><FaInstagram className="text-white text-xl" /></a>
            </div>
          </div>
        </div>

        <form
          action="https://formspree.io/f/mvzbobjj"
          method="POST"
          className="relative mx-auto w-9/10 text-black max-w-none bg-[#e50b0b] py-6 px-5"
        >
          <h1 className={`${urbanist.className} uppercase font-bold tracking-tight leading-[1] text-[22px] sm:text-[36px] md:text-[52px]`}>
            Leave your details and we’ll book an appointment
          </h1>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 md:gap-x-8 gap-y-6">
            <div className="space-y-3">
              <Field
                fontClassName={overpass.className}
                label="Name*"
                name="name"
                type="text"
                placeholder="WRITE YOUR NAME"
                autoComplete="name"
                required
                value={form.name}
                onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              />
              <Field
                fontClassName={overpass.className}
                label="E-mail*"
                name="email"
                type="email"
                placeholder="ENTER YOUR EMAIL"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
              />
            </div>

            <div className="space-y-3">
              <Field
                fontClassName={overpass.className}
                label="Phone*"
                name="phone"
                type="tel"
                placeholder="ENTER YOUR PHONE NUMBER"
                autoComplete="tel"
                required
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              />
              <div>
                <p className={`${overpass.className} uppercase font-bold tracking-wide`}>Are you over 18?*</p>
                <div className="mt-2 flex gap-3">
                  <ToggleBtn fontClassName={overpass.className} active={age === true} onClick={() => setAge(true)}>Yes</ToggleBtn>
                  <ToggleBtn fontClassName={overpass.className} active={age === false} onClick={() => setAge(false)}>No</ToggleBtn>
                </div>
                <input type="hidden" name="over18" value={age === null ? "" : age ? "YES" : "NO"} required />
              </div>
            </div>

            <div className="md:col-span-2">
              {/* 2. MODIFICA: Rimosso l'asterisco (*) dal label dell'idea */}
              <p className={`${overpass.className} uppercase font-bold tracking-wide`}>
                What would you like to tattoo?
              </p>
              <div className="mt-2 border border-black/70">
                <textarea
                  name="idea"
                  placeholder="TELL US YOUR IDEA (OPTIONAL)"
                  rows={5}
                  value={form.idea}
                  onChange={(e) => setForm((p) => ({ ...p, idea: e.target.value }))}
                  className={`${overpass.className} w-full resize-none bg-transparent p-3 outline-none placeholder-black/70`}
                />
              </div>
            </div>

            <div className="md:col-span-2">
              <p className={`${overpass.className} uppercase font-bold tracking-wide`}>Do you have a discount code?</p>
              <input
                name="discountCode"
                type="text"
                placeholder="ENTER YOUR CODE HERE"
                className={`${overpass.className} mt-2 w-full bg-transparent outline-none placeholder-black/70`}
              />
              <div className="mt-1 border-b border-black/70" />
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <label className={`${overpass.className} flex items-center gap-3 text-sm tracking-wide`}>
              <input
                type="checkbox"
                className="h-4 w-4 accent-black"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                required
                name="consent"
              />
              <span className={`${overpass.className} uppercase`}>
                I consent to being contacted to schedule the appointment.
              </span>
            </label>

            {/* 3. MODIFICA: Il pulsante è sempre renderizzato, cambia solo stile e stato disabled */}
            <button
              type="submit"
              disabled={!canSubmit}
              className={`${urbanist.className} ml-auto inline-flex items-center gap-3 rounded-full bg-[#161A1D] px-7 py-3 uppercase text-white font-bold tracking-widest transition-all duration-300 ${
                canSubmit ? "opacity-100 cursor-pointer" : "opacity-30 cursor-not-allowed grayscale"
              }`}
            >
              Submit <span className="inline-block h-2 w-2 rounded-full bg-red-600" />
            </button>
          </div>
        </form>
      </div>
       <ContactSection/>
    </div>
  );
}

function Field({ label, fontClassName = "", ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <p className={`${fontClassName} uppercase font-bold tracking-wide`}>{label}</p>
      <input
        {...props}
        className={`${fontClassName} bg-transparent border-none outline-none placeholder-black/70`}
      />
      <div className="border-b border-black/70" />
    </div>
  );
}

function ToggleBtn({ active, onClick, children, fontClassName = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        fontClassName,
        "h-11 w-14 border border-black uppercase font-bold tracking-wide",
        active ? "bg-black text-white" : "bg-transparent text-black",
      ].join(" ")}
    >
      {children}
    </button>
  );
}