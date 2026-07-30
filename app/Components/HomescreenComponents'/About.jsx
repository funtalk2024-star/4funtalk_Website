import Image from "next/image";
import { AVATARS } from "./avatars";

const highlights = [
  {
    title: "Built for mindful conversations",
    desc: "No noise, no clutter — just calm, reliable calls that help you feel better.",
  },
  {
    title: "Made in Kerala, used everywhere",
    desc: "Started as a way to keep Malayalam-speaking families close, now a wellness companion worldwide.",
  },
  {
    title: "Privacy is non-negotiable",
    desc: "Every call is end-to-end encrypted. What you share stays between you and the person you called.",
  },
];

const collage = [
  { name: "Aysha", size: "h-24 w-24", pos: "translate-y-4" },
  { name: "Ajay", size: "h-32 w-32", pos: "-translate-y-2" },
  { name: "Fidha", size: "h-20 w-20", pos: "translate-y-8" },
  { name: "Sofia", size: "h-28 w-28", pos: "-translate-y-4" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate scroll-mt-28 overflow-hidden bg-white px-5 py-24 text-[#161616] sm:px-8 sm:py-28 md:px-12 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="grid w-full grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        {/* ================= LEFT CONTENT ================= */}

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium text-black/70 sm:text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            About FunTalk
          </div>

          <h2 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] sm:text-[42px] sm:tracking-[-2px] lg:text-[48px]">
            A wellness calling app built
            <br className="hidden lg:block" />{" "}
            <span className="bg-gradient-to-r from-black via-black/70 to-black/30 bg-clip-text text-transparent">
              around your wellbeing.
            </span>
          </h2>

          <p className="mt-6 w-full text-[14px] font-normal leading-[1.8] text-[#707070] sm:w-[85%] sm:text-[16px] lg:w-full lg:text-[16px]">
            FunTalk started with a simple idea — talking things through
            shouldn&apos;t feel like work. No dropped calls, no confusing
            settings, no distractions. Just clear audio, caring
            conversations, and a community of over 10,000 people choosing to
            check in on their mind every single day.
          </p>

          <div className="mt-10 flex w-full flex-col gap-5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-black/[0.06] bg-white p-4 text-left transition-transform duration-300 hover:-translate-y-1 sm:p-5"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-black text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>

                <div>
                  <p className="text-[14px] font-semibold sm:text-[15px]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[13px] leading-[1.6] text-[#8c8c8c] sm:text-[14px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT COLLAGE ================= */}

        <div className="relative mx-auto hidden h-[420px] w-full max-w-[440px] items-center justify-center lg:flex">
          <div
            aria-hidden
            className="absolute h-[360px] w-[360px] rounded-full border border-black/[0.06]"
          />
          <div
            aria-hidden
            className="absolute h-[280px] w-[280px] rounded-full border border-black/[0.05]"
          />

          <div className="relative grid h-full w-full grid-cols-2 place-items-center gap-6 p-10">
            {collage.map((c) => (
              <div
                key={c.name}
                className={`relative ${c.size} ${c.pos} overflow-hidden rounded-[28px] border border-black/[0.06] bg-white shadow-[0_25px_60px_-20px_rgba(0,0,0,0.15)]`}
              >
                <Image
                  src={AVATARS[c.name]}
                  alt={c.name}
                  fill
                  sizes="128px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-2 right-2 z-10 rounded-2xl border border-black/[0.06] bg-white px-5 py-3 shadow-xl shadow-black/5">
            <p className="text-[18px] font-bold tracking-[-0.5px]">10K+</p>
            <p className="text-[10px] font-medium text-[#8c8c8c]">
              People supported
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
