"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Arrow = () => (
  <svg viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h12M11 5l5 5-5 5" />
  </svg>
);

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 120);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <div className="header-shell">
      <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="MyDerm home">
          <Image src="/myderm-logo.png" alt="MyDerm" width={160} height={160} priority />
        </a>
        <nav aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="tel:+639497289206">
          Book appointment <Arrow />
        </a>
      </header>
    </div>
  );
}
