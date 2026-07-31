"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#features", label: "Features" },
  { href: "/#contact", label: "Contact" },
  { href: "/termsandconditions", label: "Terms & Conditions" },
  { href: "/privacypolicy", label: "Privacy Policy" },
];

const pillClass =
  "rounded-full border border-black/10 bg-white/70 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] backdrop-blur-xl";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="animate-nav-float-in fixed inset-x-0 top-4 z-50 grid grid-cols-3 items-center px-4 sm:top-5 sm:px-6 lg:top-6 lg:px-10">
        {/* Logo pill */}

        <Link
          href="/"
          className="col-start-1 flex justify-self-start bg-white p-2 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] sm:p-2.5"
        >
          <Image
            src="/Images/LG!.png"
            alt="4FunTalk logo"
            width={100}
            height={90}
            className="h-10 w-11 object-contain sm:h-12 sm:w-14"
            priority
          />
        </Link>

        {/* Nav links pill */}

        <div
          className={`col-start-2 hidden w-max justify-self-center items-center gap-8 whitespace-nowrap px-9 py-3 text-[14px] font-medium text-[#161616] lg:flex xl:gap-10 xl:px-12 ${pillClass}`}
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
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
            <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
          </svg>

          Connect Us
        </Link>

        {/* Menu button (mobile only) */}

        <div className="relative col-start-3 justify-self-end lg:hidden">
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className={`relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-[5px] ${pillClass}`}
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
        </div>
      </div>

      {/* Mobile menu backdrop */}

      <div
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile menu panel */}

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed right-0 top-0 z-40 flex h-full w-[80%] max-w-xs flex-col bg-white pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-1 flex-col gap-1 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl border-b border-black/[0.05] px-3 py-3.5 text-[15px] font-medium text-[#161616] transition hover:bg-black/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="px-6 pt-4">
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-5 py-3.5 text-[14px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] transition hover:-translate-y-0.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
              <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
              <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
            Connect Us
          </Link>
        </div>
      </div>
    </>
  );
}
