"use client";

import Link from "next/link";
import { usePageTransition } from "../hook/usePageTransition";

export default function TransitionLink({ href, children, className }) {
  const { navigate } = usePageTransition();

  if (!href) {
    console.error("TransitionLink: href is required");
    return null;
  }

  const handleClick = (e) => {
    e.preventDefault();

    // ✅ Gestione anchor link (es. "/#faq")
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      const currentPath = window.location.pathname;

      // Se siamo già sulla stessa pagina, scrolla e basta
      if (currentPath === (path || "/")) {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // Se siamo su un'altra pagina, naviga e poi scrolla
      navigate(path || "/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 600); // aumenta se la transizione è lenta
      return;
    }

    // Comportamento normale
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}