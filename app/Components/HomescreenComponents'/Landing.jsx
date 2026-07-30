"use client";

import PhoneFrame from "./PhoneFrame";
import { CallScreen, FriendsScreen } from "./PhoneScreens";
import { AVATARS } from "./avatars";

export default function Landing() {
  const stats = [
    { value: "10K+", label: "Total Downloads" },
    { value: "6K+", label: "Daily Visitors" },
    { value: "0.02%", label: "Uninstallation Rate" },
    { value: "8K+", label: "Positive Reviews" },
  ];

  const friends = [
    {
      name: "Aysha",
      langs: "English · Malayalam",
      online: true,
      avatar: AVATARS.Aysha,
    },
    {
      name: "Ajay",
      langs: "English · Malayalam",
      online: true,
      avatar: AVATARS.Ajay,
    },
    {
      name: "Fidha",
      langs: "Malayalam · English",
      online: true,
      avatar: AVATARS.Fidha,
    },
    {
      name: "Sofia",
      langs: "English · Malayalam",
      online: false,
      avatar: AVATARS.Sofia,
    },
    {
      name: "John",
      langs: "Malayalam",
      online: false,
      avatar: AVATARS.John,
    },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-[#fff] text-[#161616]">
      <section id="home" className="relative isolate flex h-full w-full flex-col overflow-hidden">
        {/* ================= BACKGROUND ================= */}

        {/* Decorative lines */}

        <div
          aria-hidden
          className="pointer-events-none absolute left-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-black/[0.04] to-transparent"
        />

        <div
          aria-hidden
          className="pointer-events-none absolute right-[8%] top-0 h-full w-px bg-gradient-to-b from-transparent via-black/[0.04] to-transparent"
        />

        {/* ================= HERO ================= */}

        <div className="relative z-10 flex min-h-0 w-full flex-1 items-center px-5 pt-20 sm:px-8 sm:pt-24 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid h-full w-full grid-cols-1 items-center xl:grid-cols-[1fr_0.8fr] xl:gap-10 2xl:grid-cols-[1.15fr_0.85fr]">
            {/* ================= LEFT CONTENT ================= */}

            <div className="flex h-full w-full flex-col items-center justify-center text-center xl:items-start xl:text-left">
              {/* Badge */}

              <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/30 px-4 py-2 text-[11px] font-medium text-black/70 backdrop-blur-xl sm:text-[12px]">
                <span className="relative flex h-2 w-2 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-black/30" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-black" />
                </span>

                Now with Guided Wellness Calls
              </div>

              {/* Heading */}

              <h1 className="mt-6 text-[42px] font-semibold leading-[1.05] tracking-[-2.5px] sm:mt-7 sm:text-[58px] sm:tracking-[-3px] md:text-[72px] md:tracking-[-4px] lg:text-[82px] xl:text-[76px] 2xl:text-[96px]">
                Mind Free Talk,
                <br />

                <span className="bg-gradient-to-r from-black via-black/70 to-black/30 bg-clip-text text-transparent">
                  Live Better
                </span>
              </h1>

              {/* Description */}

              <p className="mt-6 w-full text-[14px] font-normal leading-[1.8] text-[#707070] sm:w-[80%] sm:text-[16px] md:w-[70%] md:text-[17px] lg:w-[60%] xl:w-[600px] xl:text-[16px] 2xl:text-[18px]">
                A wellness calling app that connects you with caring
                listeners and companions for crystal-clear conversations.
                Talk it out, de-stress, and feel heard — whenever you need
                it.
              </p>

              {/* ================= STORE BUTTONS ================= */}

              <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4 xl:justify-start">
                {/* Google Play */}

                <a
                  href="https://play.google.com/store/apps/details?id=com.funtalk.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-black px-5 text-white shadow-[0_15px_40px_-15px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] sm:w-[185px]"
                >
                  <span className="text-[23px] transition-transform duration-300 group-hover:scale-110">
                    ▶
                  </span>

                  <div className="text-left leading-none">
                    <span className="block text-[9px] text-white/60">
                      GET IT ON
                    </span>

                    <span className="mt-1.5 block text-[17px] font-semibold">
                      Google Play
                    </span>
                  </div>
                </a>
              </div>

              {/* Intro pack note */}

              <p className="mt-5 flex items-center gap-2 text-[12px] font-medium text-[#707070] sm:text-[13px]">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                New here? Get the Intro Pack — 5 minutes of free wellness calls.
              </p>
            </div>

            {/* ================= RIGHT PHONE ================= */}
            {/* Hidden on mobile, tablet and smaller laptops */}
            {/* Visible only from XL — 1280px and above */}

            <div className="relative hidden h-full items-center justify-center xl:flex xl:justify-end">
              {/* Large background circle */}

              <div
                aria-hidden
                className="absolute right-[3%] h-[520px] w-[520px] rounded-full border border-black/[0.05]"
              />

              <div
                aria-hidden
                className="absolute right-[8%] h-[430px] w-[430px] rounded-full border border-black/[0.06]"
              />

              {/* Phone glow */}

              <div
                aria-hidden
                className="absolute right-[5%] h-[480px] w-[480px] rounded-full bg-black/[0.09] blur-[100px] animate-pulse-slow"
              />

              {/* Floating badge */}

              <div className="absolute left-[5%] top-[22%] animate-pulse z-20 rounded-2xl border border-black/[0.06] bg-white/60 px-5 py-4 shadow-xl shadow-black/5 backdrop-blur-xl 2xl:left-[12%]">
                <p className="text-[10px] font-medium uppercase tracking-[2px] text-black/40">
                  Online now
                </p>

                <div className="mt-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-black" />

                  <span className="text-[18px] font-semibold tracking-[-0.5px]">
                    12,480
                  </span>
                </div>
              </div>

              {/* Phone (Calling Screen) — duplicate, rotated behind main phone */}

              <PhoneFrame
                time="6:30"
                className="absolute right-[5%] top-1/2 z-0 h-[380px] w-[190px] -translate-y-1/2 rotate-[40deg] opacity-60 brightness-75 2xl:right-[12%] 2xl:h-[430px] 2xl:w-[215px]"
              >
                <CallScreen name="Aysha" status="Calling..." />
              </PhoneFrame>

              {/* Phone */}

              <PhoneFrame
                time="9:41"
                className="relative z-10 mr-[5%] h-[500px] w-[250px] [transform:perspective(1200px)_rotateY(-12deg)_rotateX(3deg)] transition-transform duration-500 hover:[transform:perspective(1200px)_rotateY(-5deg)_rotateX(1deg)_translateY(-8px)] 2xl:mr-[12%] 2xl:h-[560px] 2xl:w-[280px]"
              >
                <FriendsScreen friends={friends} />
              </PhoneFrame>
            </div>
          </div>
        </div>

        {/* ================= STATISTICS ================= */}

        <div className="relative z-10 shrink-0 border-t border-black/[0.06] bg-white px-5 py-5 sm:px-8 sm:py-6 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid w-full grid-cols-2 gap-y-5 sm:grid-cols-4 sm:gap-y-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  relative flex flex-col items-center justify-center px-2
                  transition-transform duration-300 hover:-translate-y-1

                  ${index % 2 === 0 ? "border-r border-black/10" : ""}

                  ${
                    index !== stats.length - 1
                      ? "sm:border-r sm:border-black/10"
                      : "sm:border-r-0"
                  }
                `}
              >
                <h3 className="text-[22px] font-bold tracking-[-1px] sm:text-[28px] lg:text-[32px] xl:text-[34px]">
                  {stat.value}
                </h3>

                <p className="mt-1 text-center text-[9px] font-medium text-[#8c8c8c] sm:mt-2 sm:text-[11px] lg:text-[12px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}