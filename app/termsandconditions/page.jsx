import Footer from "../Components/HomescreenComponents'/Footer";

export const metadata = {
  title: "Terms & Conditions — 4FunTalk",
  description:
    "The Terms & Conditions governing your use of the 4FunTalk mobile application.",
};

const LAST_UPDATED = "July 22, 2026";
const CONTACT_EMAIL = "support@4funtalk.com";
const OPERATOR = "Toppz Dynamics LLP";

const toc = [
  { id: "eligibility", label: "1. Eligibility" },
  { id: "the-service", label: "2. The Service" },
  { id: "accounts", label: "3. Accounts" },
  { id: "coins-wallet", label: "4. Coins, Wallet, and Payments" },
  { id: "refunds", label: "5. Refunds" },
  { id: "acceptable-use", label: "6. Acceptable Use" },
  { id: "intellectual-property", label: "7. Intellectual Property" },
  { id: "liability", label: "8. Limitation of Liability" },
  { id: "termination", label: "9. Termination" },
  { id: "changes", label: "10. Changes to These Terms" },
  { id: "contact", label: "11. Contact Us" },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-black/[0.06] py-10 first:border-t-0 first:pt-0">
      <h2 className="text-[20px] font-semibold tracking-[-0.5px] text-[#161616] sm:text-[22px]">
        {title}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-[14px] leading-[1.85] text-[#4a4a4a] sm:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-white text-[#161616]">
      {/* Hero */}
      <div className="px-5 pb-10 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-[11px] font-medium text-black/70 sm:text-[12px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e5273b]" />
            Legal
          </div>

          <h1 className="mt-6 text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] sm:text-[44px] sm:tracking-[-2px]">
            Terms &amp; Conditions
          </h1>

          <p className="mt-4 text-[14px] leading-[1.8] text-[#8c8c8c] sm:text-[15px]">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="mt-6 text-[14px] leading-[1.85] text-[#4a4a4a] sm:text-[16px]">
            These Terms &amp; Conditions (&quot;Terms&quot;) govern your use
            of the 4FunTalk mobile application (the &quot;App&quot;),
            operated by {OPERATOR} (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;). By downloading, accessing, or using the App,
            you agree to be bound by these Terms. If you do not agree, please
            do not use the App.
          </p>

          {/* At a glance */}
          <div className="mt-10 w-full rounded-3xl border border-black/[0.06] bg-[#fafafa] p-6 sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-black/40">
              At a glance
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-[1.7] text-[#3a3a3a] sm:text-[14px]">
              {[
                "4FunTalk is intended for users aged 18 and over.",
                "Sessions are for relaxation and general well-being support — not a substitute for medical, psychological, or emergency care.",
                "Coin purchases are processed through Google Play billing and are generally non-refundable.",
                "We may suspend or terminate accounts that violate these Terms.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#e5273b]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Table of contents */}
          <div className="mt-8 w-full rounded-3xl border border-black/[0.06] p-6 sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-black/40">
              Contents
            </p>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
              {toc.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-[13px] font-medium text-[#3a3a3a] transition hover:text-[#e5273b] sm:text-[14px]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-24 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="mx-auto w-full max-w-7xl">
          <Section id="eligibility" title="1. Eligibility">
            <p>
              The App is intended for users aged <strong>18 and above</strong>.
              By using the App, you confirm that you meet this age
              requirement and that the information you provide is accurate.
            </p>
          </Section>

          <Section id="the-service" title="2. The Service">
            <p>
              4FunTalk provides voice-based conversations with consultants
              for the purpose of relaxation and general well-being support.
              The service is intended for supportive, non-clinical
              conversation and is not a substitute for professional medical,
              psychological, or emergency care. If you are experiencing a
              medical or mental-health emergency, please contact a qualified
              professional or your local emergency services immediately.
            </p>
          </Section>

          <Section id="accounts" title="3. Accounts">
            <p>
              You are responsible for maintaining the confidentiality of
              your account and for all activity that occurs under it. You
              agree to notify us immediately of any unauthorized use of your
              account.
            </p>
          </Section>

          <Section id="coins-wallet" title="4. Coins, Wallet, and Payments">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Certain features require in-app coins, which can be purchased through the App.</li>
              <li>Coin rates and pricing are displayed in the App and may change from time to time.</li>
              <li>Purchases are processed through the Google Play billing system and are subject to its terms.</li>
              <li>Coins are for use within the App only and hold no monetary value outside the App.</li>
            </ul>
          </Section>

          <Section id="refunds" title="5. Refunds">
            <p>
              Purchases of coins are generally non-refundable except where
              required by applicable law or the applicable app store&apos;s
              refund policy. If you experience a billing issue, please
              contact us at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-[#e5273b] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </Section>

          <Section id="acceptable-use" title="6. Acceptable Use">
            <p>You agree that you will not:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Use the App for any unlawful, harmful, abusive, or fraudulent purpose.</li>
              <li>Harass, threaten, or abuse consultants or other users.</li>
              <li>Attempt to disrupt, hack, or reverse-engineer the App.</li>
              <li>Record, reproduce, or distribute sessions without consent.</li>
              <li>Impersonate any person or misrepresent your identity.</li>
            </ul>
            <p>
              We reserve the right to suspend or terminate accounts that
              violate these Terms.
            </p>
          </Section>

          <Section id="intellectual-property" title="7. Intellectual Property">
            <p>
              All content, trademarks, and materials in the App are owned by
              us or our licensors and are protected by applicable laws. You
              may not use them without our prior written permission.
            </p>
          </Section>

          <Section id="liability" title="8. Limitation of Liability">
            <p>
              The App is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis. To the maximum extent permitted by law,
              we are not liable for any indirect, incidental, or
              consequential damages arising from your use of, or inability
              to use, the App.
            </p>
          </Section>

          <Section id="termination" title="9. Termination">
            <p>
              We may suspend or terminate your access to the App at any time
              if you breach these Terms or for any other reasonable
              operational or legal reason.
            </p>
          </Section>

          <Section id="changes" title="10. Changes to These Terms">
            <p>
              We may update these Terms from time to time. Changes will be
              posted on this page with an updated date. Your continued use
              of the App after changes are posted constitutes acceptance of
              the revised Terms.
            </p>
          </Section>

          <Section id="contact" title="11. Contact Us">
            <p>
              If you have questions or concerns about these Terms, please
              contact us at:
            </p>
            <p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium text-[#e5273b] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
