"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacypolicy", label: "Privacy Policy" },
];

const pillClass =
  "rounded-full border border-black/10 bg-white/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="animate-nav-float-in fixed inset-x-0 top-4 z-50 grid grid-cols-3 items-center px-4 sm:top-5 sm:px-6 lg:top-6 lg:px-10">
      {/* Logo pill */}

      <Link
        href="/"
        className="col-start-1 flex justify-self-start bg-white p-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] sm:p-2.5"
      >
        <Image
          src="/Images/LG!.png"
          alt="FunTalk logo"
          width={100}
          height={90}
          className="h-10 w-11 object-contain sm:h-12 sm:w-14"
          priority
        />
      </Link>

      {/* Nav links pill */}

      <div
        className={`col-start-2 hidden justify-self-center items-center gap-8 px-7 py-3 text-[14px] font-medium text-[#161616] lg:flex ${pillClass}`}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="transition hover:opacity-60">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Connect Us pill (desktop only) */}

      <Link
        href="/#contact"
        className="col-start-3 hidden shrink-0 justify-self-end items-center gap-2 rounded-full bg-black px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5 lg:flex"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>

        Connect Us
      </Link>

      {/* Menu pill (mobile only) */}

      <div className="relative col-start-3 justify-self-end lg:hidden">
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`flex h-11 w-11 flex-col items-center justify-center gap-[5px] ${pillClass}`}
        >
          <span
            className={`block h-[2px] w-5 bg-[#161616] transition ${
              menuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-[#161616] transition ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-5 bg-[#161616] transition ${
              menuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>

        {menuOpen && (
          <div
            className={`absolute right-0 top-[calc(100%+12px)] flex w-48 flex-col gap-1 p-3 ${pillClass} rounded-2xl bg-white/95`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[14px] font-medium text-[#161616] transition hover:bg-black/5"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
