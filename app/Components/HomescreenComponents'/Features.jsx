const features = [
  {
    title: "Voice-Based Sessions",
    desc: "Adaptive bitrate streaming keeps every consultation calm and clear, even on weak networks.",
    icon: (
      <path d="M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
    ),
  },
  {
    title: "Caring, Trained Listeners",
    desc: "Every companion on 4FunTalk is trained to listen with patience and without judgment.",
    icon: (
      <path d="M12 21s-6.7-4.35-9.3-8.28C1.02 10.1 1.5 6.5 4.6 5A5.4 5.4 0 0 1 12 6.5 5.4 5.4 0 0 1 19.4 5c3.1 1.5 3.58 5.1 1.9 7.72C18.7 16.65 12 21 12 21z" />
    ),
  },
  {
    title: "Talk Anytime You Need",
    desc: "See who's available right now and start a calming conversation in one tap.",
    icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
  },
  {
    title: "Multi-Language Support",
    desc: "Talk it out fluently in English, Malayalam and more languages.",
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
      </>
    ),
  },
  {
    title: "Privacy First",
    desc: "End-to-end encrypted sessions. What you share stays between you and your counselor.",
    icon: (
      <path d="M12 2 4 5v6c0 5.5 3.4 9.7 8 11 4.6-1.3 8-5.5 8-11V5l-8-3zM9.5 12l1.8 1.8L15 10" />
    ),
  },
  {
    title: "Save Your Favorite Companions",
    desc: "Pin the listeners who help you most and reach them in a single tap.",
    icon: (
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-28 border-t border-black/[0.06] bg-white px-5 py-24 text-[#161616] sm:px-8 sm:py-28 md:px-12 lg:px-16 xl:px-20 2xl:px-24"
    >
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium text-black/70 sm:text-[12px]">
          <span className="h-1.5 w-1.5 rounded-full bg-black" />
          Features
        </div>

        <h2 className="mt-6 text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] sm:text-[42px] sm:tracking-[-2px] lg:text-[48px]">
          Everything you need
          <br />
          <span className="bg-gradient-to-r from-black via-black/70 to-black/30 bg-clip-text text-transparent">
            to feel better.
          </span>
        </h2>

        <p className="mt-6 w-full text-[14px] font-normal leading-[1.8] text-[#707070] sm:w-[70%] sm:text-[16px] lg:w-[45%]">
          4FunTalk keeps wellness support simple, without cutting the features
          that actually matter.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-black/[0.06] bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                {f.icon}
              </svg>
            </div>

            <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.3px]">
              {f.title}
            </h3>

            <p className="mt-2 text-[14px] leading-[1.7] text-[#8c8c8c]">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
