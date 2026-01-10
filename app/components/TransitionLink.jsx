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
    navigate(href);
  };

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
