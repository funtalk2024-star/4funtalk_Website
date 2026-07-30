import Footer from "../Components/HomescreenComponents'/Footer";

export const metadata = {
  title: "Privacy Policy — 4FunTalk",
  description:
    "How 4FunTalk collects, uses, and protects your information when you use the 4FunTalk mobile application and associated services.",
};

const LAST_UPDATED = "July 30, 2026";
const CONTACT_EMAIL = "support@4funtalk.app";

const toc = [
  { id: "who-we-are", label: "1. Who We Are" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use Your Information" },
  { id: "how-we-share", label: "4. How We Share Your Information" },
  { id: "your-choices", label: "5. Your Choices and Rights" },
  { id: "security", label: "6. Data Security" },
  { id: "child-safety", label: "7. Children’s Privacy" },
  { id: "changes", label: "8. Changes to This Policy" },
  { id: "compliances", label: "9. Compliances" },
  { id: "general", label: "10. General" },
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

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-4 text-[14px] leading-[1.8] text-[#8c8c8c] sm:text-[15px]">
            Last updated: {LAST_UPDATED}
          </p>

          <p className="mt-6 text-[14px] leading-[1.85] text-[#4a4a4a] sm:text-[16px]">
            At 4FunTalk, your privacy is important to us. This Privacy Policy
            explains how we collect, use, and protect your information when
            you use the 4FunTalk mobile application and any associated
            services (collectively referred to as the &quot;App&quot;).
          </p>

          <p className="mt-4 text-[14px] leading-[1.85] text-[#4a4a4a] sm:text-[16px]">
            This privacy policy applies to the 4FunTalk mobile application,
            available on the Google Play Store.
          </p>

          {/* At a glance */}
          <div className="mt-10 w-full rounded-3xl border border-black/[0.06] bg-[#fafafa] p-6 sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-black/40">
              At a glance
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-[1.7] text-[#3a3a3a] sm:text-[14px]">
              {[
                "We do not sell or rent your personal information to third parties for marketing purposes.",
                "4FunTalk is not intended for children under the age of 18.",
                "We use trusted partners (like Agora) only to power in-app features — never to sell or misuse your data.",
                "You can edit your profile or request access, correction, or deletion of your data at any time.",
                "We use reasonable technical and organizational measures, including encrypted (HTTPS) connections, to protect your data.",
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
          <Section id="who-we-are" title="1. Who We Are">
            <p>
              References to &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;
              refer to 4FunTalk and the team managing and operating the App.
              &quot;You&quot; or &quot;your&quot; refers to the user accessing
              and using the App.
            </p>
          </Section>

          <Section id="information-we-collect" title="2. Information We Collect">
            <div>
              <p className="font-semibold text-[#161616]">
                1. Personal Information
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  Name, email address, phone number, and any other
                  information you provide when signing up or using the App.
                </li>
                <li>
                  Gender, profile image, and preferences (if provided).
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">2. Usage Data</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>App Interactions:</strong> Call duration, call
                  history, coin purchases and redemptions, host engagement,
                  etc.
                </li>
                <li>
                  <strong>Website Interactions:</strong> If you visit our
                  website, we may collect IP address, browser type, access
                  time, pages visited, and referring URLs.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                3. Cookies and Tracking Technologies
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  <strong>Cookies:</strong> Small data files stored on your
                  device to improve your experience.
                </li>
                <li>
                  <strong>Tracking Technologies:</strong> Web beacons,
                  pixels, and similar tools to monitor activity, performance,
                  and user behavior.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                4. Device Information
              </p>
              <p>
                We automatically collect certain information about your
                device, such as:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Device model and manufacturer</li>
                <li>Operating system and version</li>
                <li>Unique device identifiers (such as Android ID)</li>
                <li>Mobile network provider</li>
                <li>App version, language preference, and time zone</li>
                <li>IP address and general location (approximate, not precise)</li>
              </ul>
            </div>
          </Section>

          <Section id="how-we-use" title="3. How We Use Your Information">
            <div>
              <p className="font-semibold text-[#161616]">
                To Provide and Improve Our Services
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Operate, maintain, and enhance the App&apos;s features and performance</li>
                <li>Track coin usage and call transactions</li>
                <li>Offer a seamless experience across different devices and sessions</li>
                <li>Monitor service stability and user engagement to improve quality</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                To Communicate with You
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Send confirmations, updates, promotional offers, and notifications</li>
                <li>Provide customer support or respond to user inquiries and feedback</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                To Ensure Safety and Prevent Abuse
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Detect and prevent fraud, unauthorized access, or abuse of the platform</li>
                <li>Enforce our Terms of Use and other legal agreements</li>
              </ul>
            </div>
          </Section>

          <Section id="how-we-share" title="4. How We Share Your Information">
            <div>
              <p className="font-semibold text-[#161616]">
                1. With Trusted Service Providers
              </p>
              <p className="mt-2">
                We may share your data with third-party vendors who support
                our services, such as:
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>Cloud hosting services</li>
                <li>Payment processors</li>
                <li>Analytics platforms</li>
              </ul>
              <p className="mt-2">
                We use third-party services such as Agora to enable
                real-time audio features in the 4FunTalk app. These
                providers may process limited technical information (such as
                IP address or device type) to enable smooth service
                delivery. We ensure that providers like Agora do not sell or
                misuse any personal or sensitive user data, and their data
                handling complies with our privacy standards. Learn more at{" "}
                <a
                  href="https://www.agora.io/en/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#e5273b] hover:underline"
                >
                  Agora&apos;s Privacy Policy
                </a>
                .
              </p>
              <p className="mt-2">
                These partners are required to use your data only for the
                purposes we define and must follow strict confidentiality
                agreements.
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                2. Legal and Regulatory Disclosures
              </p>
              <p className="mt-2">We may disclose your information:</p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  To comply with applicable laws or respond to legal
                  requests (such as court orders, warrants, etc.)
                </li>
                <li>
                  To enforce our policies or investigate suspected illegal
                  activities
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                3. Business Transfers
              </p>
              <p className="mt-2">
                In the event of a merger, acquisition, asset sale, or
                restructuring, your data may be transferred to another
                organization. You will be notified if such a change affects
                your privacy.
              </p>
            </div>
            <p>
              We do not sell or rent your personal information to third
              parties for marketing purposes.
            </p>
          </Section>

          <Section id="your-choices" title="5. Your Choices and Rights">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Edit Profile:</strong> You may update or delete your
                profile information anytime from within the App.
              </li>
              <li>
                <strong>Cookies &amp; Tracking:</strong> You may disable
                cookies or limit tracking via your device or browser
                settings.
              </li>
              <li>
                <strong>Data Requests:</strong> You can contact us to
                request access, correction, or deletion of your data.
              </li>
            </ul>
          </Section>

          <Section id="security" title="6. Data Security">
            <p>
              We take reasonable technical and organizational steps to
              protect your data from:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Unauthorized access</li>
              <li>Accidental loss</li>
              <li>Modification or disclosure</li>
            </ul>
            <p>Security measures include:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Encrypted connections (HTTPS)</li>
              <li>Limited access to sensitive information</li>
              <li>Regular app updates and monitoring</li>
            </ul>
            <p>
              However, please understand that no system is completely
              secure, and your use of the App is at your own risk.
            </p>
          </Section>

          <Section id="child-safety" title="7. Children’s Privacy">
            <p>
              4FunTalk is not intended for children under the age of 18. We
              do not knowingly collect personal information from children.
              If you believe a child has used our App and submitted data,
              please contact us so we can take appropriate steps.
            </p>
          </Section>

          <Section id="changes" title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. If
              changes are made, we will update the date at the top of this
              page or notify you within the App.
            </p>
          </Section>

          <Section id="compliances" title="9. Compliances">
            <p>
              This legal agreement is an electronic record in terms of the
              Indian Information Technology Act, 2000, and the rules under
              it, as applicable and the amended provisions pertaining to
              electronic records in various statutes as amended by the
              Information Technology Act, 2000. This electronic record is
              generated by a computer system and does not require any
              physical or digital signatures.
            </p>
            <p>
              This document is published in accordance with the provisions
              of Rule 3 (1) of the Indian Information Technology
              (Intermediaries Guidelines) Rules, 2011 and Rule 4 of the
              Information Technology (Reasonable Security Practices and
              Procedures and Sensitive Personal Data or Information) Rules,
              2011 under the Information Technology Act, 2000 (21 of 2000)
              amended through the Information Technology Amendment Act, 2008
              that require publishing the rules and regulations, privacy
              policy and Terms of Use for access or usage of the platform.
            </p>
          </Section>

          <Section id="general" title="10. General">
            <p>
              The users may access the services on the platform without
              disclosing personal information unless required by law or for
              the platform&apos;s service. Users are advised not to share
              any personal and sensitive information with supporters, and
              the platform will not be responsible for the same. In case of
              payment for services offered, the platform may receive
              personal information from the users, but the same will not be
              retained by the platform.
            </p>
          </Section>

          <Section id="contact" title="11. Contact Us">
            <p>
              If you have questions or concerns about this Privacy Policy or
              our practices, please contact us at:
            </p>
            <p>
              📧{" "}
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
