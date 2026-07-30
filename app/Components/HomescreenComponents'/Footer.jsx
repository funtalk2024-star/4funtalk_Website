import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Download", href: "/#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacypolicy" },
      { label: "Contact Details", href: "/contactus" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-black/[0.06] bg-white px-5 pb-8 pt-16 text-[#161616] sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
      <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
        <div className="max-w-xs">
          <div className="inline-flex items-center gap-2.5 bg-white">
            <Image
              src="/Images/LG!.png"
              alt="FunTalk logo"
              width={40}
              height={36}
              className="h-9 w-10 object-contain"
            />
            <span className="text-[17px] font-bold tracking-[-0.5px]">
              FunTalk
            </span>
          </div>

          <p className="mt-4 text-[13px] leading-[1.7] text-[#8c8c8c]">
            Mind Free Talk, Live Better. A wellness calling app for the
            conversations that help you feel better.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-black/40">
                {col.title}
              </p>

              <div className="mt-4 flex flex-col gap-3">
                {col.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[13px] font-medium text-[#3a3a3a] transition hover:text-black"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-[13px] font-medium text-[#3a3a3a] transition hover:text-black"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-6 sm:flex-row">
        <p className="text-[12px] text-[#8c8c8c]">
          © {new Date().getFullYear()} FunTalk. All rights reserved.
        </p>

        <p className="text-[12px] text-[#8c8c8c]">
          Made for better conversations.
        </p>
      </div>
    </footer>
  );
}
