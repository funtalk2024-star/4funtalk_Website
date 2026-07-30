import Footer from "../Components/HomescreenComponents'/Footer";

export const metadata = {
  title: "Contact Details — 4FunTalk",
  description: "Official contact details for 4FunTalk — email, phone, and address.",
};

const CONTACT_EMAIL = "support@4funtalk.com";
const CONTACT_PHONE_DISPLAY = "+91 80898 00106";
const CONTACT_PHONE_TEL = "+918089800106";

const details = [
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="m22 6-10 7L2 6" />
      </>
    ),
  },
  {
    label: "Phone",
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE_TEL}`,
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    label: "Address",
    value: "4FunTalk, Kerala, India",
    href: null,
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
];

export default function ContactUsPage() {
  return (
    <main className="bg-white text-[#161616]">
      <div className="px-5 pb-24 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium text-black/70 sm:text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5273b]" />
            Get in touch
          </div>

          <h1 className="mt-6 text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] sm:text-[44px] sm:tracking-[-2px]">
            Contact Details
          </h1>

          <p className="mt-4 w-full text-[14px] leading-[1.8] text-[#707070] sm:w-[80%] sm:text-[16px]">
            Questions about 4FunTalk, need support, or have a privacy or
            safety concern? Reach us directly using the details below.
          </p>

          <div className="mt-12 flex w-full flex-col gap-4">
            {details.map((item) => {
              const Wrapper = item.href ? "a" : "div";
              return (
                <Wrapper
                  key={item.label}
                  {...(item.href ? { href: item.href } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-6"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      {item.icon}
                    </svg>
                  </span>

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-black/40">
                      {item.label}
                    </p>
                    <p className="mt-1 text-[15px] font-medium text-[#161616] sm:text-[16px]">
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          <p className="mt-10 text-[13px] leading-[1.8] text-[#8c8c8c] sm:text-[14px]">
            For data access, deletion, or child safety requests, see our{" "}
            <a
              href="/privacypolicy"
              className="font-medium text-[#e5273b] hover:underline"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
