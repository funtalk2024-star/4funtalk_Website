import Image from "next/image";
import { AVATARS } from "./avatars";

const controlBtn =
  "flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white";

export function CallScreen({ name = "Aysha", status = "Calling..." }) {
  return (
    <>
      {/* Minimize */}

      <div className="mt-6 px-5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
            <path d="M4 14h6v6M20 10h-6V4M14 14l7 7M10 10 3 3" />
          </svg>
        </div>
      </div>

      {/* Caller avatar */}

      <div className="relative mt-6 flex flex-1 flex-col items-center">
        <div className="relative flex h-[120px] w-[120px] items-center justify-center">
          <span className="absolute h-full w-full rounded-full border border-white/10" />
          <span className="absolute h-[82%] w-[82%] rounded-full border border-white/15" />
          <span className="absolute h-[64%] w-[64%] animate-pulse rounded-full border border-white/20" />

          <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full ring-2 ring-white/10">
            <Image
              src={AVATARS[name] ?? AVATARS.Aysha}
              alt={name}
              fill
              sizes="60px"
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-4 text-[15px] font-bold tracking-[2px] text-white">
          {name.toUpperCase()}
        </p>

        <p className="mt-1 text-[10px] text-amber-400/80">{status}</p>
      </div>

      {/* Controls */}

      <div className="mb-6 flex items-center justify-center gap-9">
        <div className="flex flex-col items-center gap-1.5">
          <div className={controlBtn}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <rect x="9" y="2" width="6" height="12" rx="3" />
              <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-[6px] font-medium text-white/60">Microphone ON</span>
        </div>

        <div className="flex flex-col items-center gap-1.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
              <path d="M3 9v6h4l5 5V4L7 9H3z" />
              <path d="M16 8l5 8M21 8l-5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </div>
          <span className="text-[6px] font-medium text-white/60">Speaker OFF</span>
        </div>
      </div>

      <div className="mb-6 flex justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/40">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 rotate-[135deg]">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
          </svg>
        </div>
      </div>

      <div className="mb-2 flex justify-center">
        <span className="h-1 w-[100px] rounded-full bg-white/70" />
      </div>
    </>
  );
}

export function IncomingCallScreen({ name = "Fidha" }) {
  return (
    <>
      <div className="mt-10 flex flex-1 flex-col items-center">
        <p className="text-[10px] font-medium uppercase tracking-[2px] text-white/40">
          Incoming call
        </p>

        <div className="relative mt-6 flex h-[110px] w-[110px] items-center justify-center">
          <span className="absolute h-full w-full animate-pulse rounded-full border border-white/15" />

          <div className="relative h-[90px] w-[90px] overflow-hidden rounded-full ring-2 ring-white/10">
            <Image
              src={AVATARS[name] ?? AVATARS.Aysha}
              alt={name}
              fill
              sizes="90px"
              className="object-cover"
            />
          </div>
        </div>

        <p className="mt-5 text-[16px] font-bold tracking-[1px] text-white">
          {name}
        </p>

        <p className="mt-1 text-[10px] text-white/50">FunTalk audio call</p>
      </div>

      <div className="mb-10 flex items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white shadow-lg shadow-red-500/40">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 rotate-[135deg]">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
            </svg>
          </div>
          <span className="text-[7px] font-medium text-white/50">Decline</span>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" />
            </svg>
          </div>
          <span className="text-[7px] font-medium text-white/50">Accept</span>
        </div>
      </div>
    </>
  );
}

export function FriendsScreen({ friends }) {
  return (
    <>
      {/* App Header */}

      <div className="flex items-center justify-between px-5 pt-5">
        <span className="text-[14px] font-bold tracking-[-0.5px] text-white">
          FunTalk
        </span>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[10px] font-bold text-black">
          A
        </div>
      </div>

      {/* Download Card */}

      <div className="mx-4 mt-5 overflow-hidden rounded-[14px] bg-white">
        <div className="flex items-center justify-between gap-3 px-4 pt-4">
          <div>
            <p className="text-[15px] font-bold leading-tight text-black">
              Download
              <br />
              4FunTalk today
            </p>

            <div className="mt-2 flex gap-1.5">
              <span className="rounded-full border border-black/20 px-2.5 py-1 text-[7px] font-semibold text-black">
                Google Play
              </span>
            </div>
          </div>

          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-[10px]">
            <Image
              src="/Images/LG!.png"
              alt="FunTalk logo"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-4 bg-black px-4 py-2 text-[8px] font-medium text-white">
          Mind Free Talk, Live Better
        </div>
      </div>

      {/* Friends */}

      <p className="mb-2 mt-5 px-5 text-[11px] font-semibold text-white">
        Your circle
      </p>

      <div className="flex flex-1 flex-col gap-2 overflow-hidden px-4 pb-5">
        {friends.map((friend) => (
          <div
            key={friend.name}
            className="flex items-center justify-between rounded-[10px] bg-white/5 px-3 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-white/15">
                <Image
                  src={friend.avatar}
                  alt={friend.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                />

                {friend.online && (
                  <span className="absolute -bottom-[1px] -right-[1px] h-[7px] w-[7px] rounded-full border border-black bg-white" />
                )}
              </div>

              <div className="leading-tight">
                <p className="text-[9px] font-semibold text-white">
                  {friend.name}
                </p>

                <p className="mt-1 text-[7px] text-white/50">
                  {friend.langs}
                </p>
              </div>
            </div>

            <span
              className={`rounded-full px-2.5 py-1 text-[7px] font-semibold ${
                friend.online
                  ? "bg-white text-black"
                  : "bg-white/10 text-white/40"
              }`}
            >
              {friend.online ? "Audio" : "Offline"}
            </span>
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08]" />
    </>
  );
}
