export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 border-t border-black/[0.06] bg-white px-5 py-24 sm:px-8 sm:py-28 md:px-12 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="relative isolate mx-auto flex w-full max-w-5xl flex-col items-center overflow-hidden rounded-[36px] bg-black px-6 py-16 text-center text-white sm:px-12 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[10%] -top-[30%] h-[400px] w-[400px] rounded-full bg-white/[0.04] blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[30%] -left-[10%] h-[400px] w-[400px] rounded-full bg-white/[0.05] blur-[120px]"
        />

        <div className="relative inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium text-white/70 sm:text-[12px]">
          <span className="relative flex h-2 w-2 items-center justify-center">
            <span className="absolute h-full w-full animate-ping rounded-full bg-white/30" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          Get in touch
        </div>

        <h2 className="relative mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] sm:text-[42px] sm:tracking-[-2px] lg:text-[52px]">
          Ready to live better?
        </h2>

        <p className="relative mt-5 w-full text-[14px] leading-[1.8] text-white/60 sm:w-[70%] sm:text-[16px]">
          Download 4FunTalk today and get your free 5-minute Intro Pack, or
          reach out to our wellness team — we&apos;d love to hear from you.
        </p>

        <div className="relative mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.funtalk.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-[54px] w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 text-black transition-all duration-300 hover:-translate-y-1 sm:w-[175px]"
          >
            <span className="text-[20px] transition-transform duration-300 group-hover:scale-110">▶</span>
            <div className="text-left leading-none">
              <span className="block text-[9px] text-black/50">GET IT ON</span>
              <span className="mt-1.5 block text-[15px] font-semibold">Google Play</span>
            </div>
          </a>
        </div>

        <div className="relative mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:flex-row sm:gap-8">
          <a
            href="mailto:support@4funtalk.com"
            className="flex items-center gap-2 text-[13px] font-medium text-white/70 transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M4 4h16v16H4z" />
              <path d="m22 6-10 7L2 6" />
            </svg>
            support@4funtalk.com
          </a>

          <a
            href="tel:+918089800106"
            className="flex items-center gap-2 text-[13px] font-medium text-white/70 transition hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +91 80898 00106
          </a>
        </div>
      </div>
    </section>
  );
}
