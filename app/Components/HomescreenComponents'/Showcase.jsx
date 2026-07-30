import PhoneFrame from "./PhoneFrame";
import { CallScreen, FriendsScreen, IncomingCallScreen } from "./PhoneScreens";
import { AVATARS } from "./avatars";

const friends = [
  { name: "Aysha", langs: "English · Malayalam", online: true, avatar: AVATARS.Aysha },
  { name: "Ajay", langs: "English · Malayalam", online: true, avatar: AVATARS.Ajay },
  { name: "Fidha", langs: "Malayalam · English", online: true, avatar: AVATARS.Fidha },
  { name: "Sofia", langs: "English · Malayalam", online: false, avatar: AVATARS.Sofia },
];

export default function Showcase() {
  return (
    <section className="relative overflow-hidden border-t border-black/[0.06] bg-white px-5 py-24 text-[#161616] sm:px-8 sm:py-28 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium text-black/70 sm:text-[12px]">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          App Preview
        </div>

        <h2 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] sm:text-[42px] sm:tracking-[-2px] lg:text-[48px]">
          One app,
          <span className="bg-gradient-to-r from-black via-black/70 to-black/30 bg-clip-text text-transparent">
            {" "}
            every mindful moment.
          </span>
        </h2>

        <p className="mt-6 w-full text-[14px] font-normal leading-[1.8] text-[#707070] sm:w-[70%] sm:text-[16px] lg:w-[45%]">
          From an incoming ring to a calming conversation — see how 4FunTalk
          looks in your hand.
        </p>
      </div>

      <div className="relative mx-auto mt-20 flex max-w-4xl items-end justify-center gap-4 pb-8 sm:gap-8">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.04] blur-[120px]"
        />

        {/* Left phone — Friends list */}

        <PhoneFrame
          time="9:41"
          className="hidden h-[340px] w-[168px] rotate-[-9deg] opacity-90 transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-5deg] sm:block sm:h-[400px] sm:w-[198px]"
        >
          <FriendsScreen friends={friends} />
        </PhoneFrame>

        {/* Center phone — Incoming call */}

        <PhoneFrame
          time="9:41"
          className="relative z-10 h-[420px] w-[210px] transition-transform duration-500 hover:-translate-y-2 sm:h-[480px] sm:w-[238px]"
        >
          <IncomingCallScreen name="Fidha" />
        </PhoneFrame>

        {/* Right phone — Active call */}

        <PhoneFrame
          time="9:41"
          className="hidden h-[340px] w-[168px] rotate-[9deg] opacity-90 transition-transform duration-500 hover:-translate-y-2 hover:rotate-[5deg] sm:block sm:h-[400px] sm:w-[198px]"
        >
          <CallScreen name="Ajay" status="04:12" />
        </PhoneFrame>
      </div>
    </section>
  );
}
