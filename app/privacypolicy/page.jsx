import Footer from "../Components/HomescreenComponents'/Footer";

export const metadata = {
  title: "Privacy Policy — FunTalk",
  description:
    "How FunTalk collects, uses, shares, and protects your information, including our child safety standards.",
};

const LAST_UPDATED = "July 30, 2026";
const CONTACT_EMAIL = "support@4funtalk.com";
const CONTACT_PHONE = "+91 80898 00106";

const toc = [
  { id: "introduction", label: "1. Introduction" },
  { id: "age-requirement", label: "2. Who Can Use FunTalk" },
  { id: "information-we-collect", label: "3. Information We Collect" },
  { id: "permissions", label: "4. Permissions We Request" },
  { id: "how-we-use", label: "5. How We Use Your Information" },
  { id: "how-we-share", label: "6. How We Share Your Information" },
  { id: "security", label: "7. Data Security" },
  { id: "retention", label: "8. Data Retention" },
  { id: "your-rights", label: "9. Your Rights & Choices" },
  { id: "child-safety", label: "10. Children's Privacy & Child Safety Standards" },
  { id: "cookies", label: "11. Cookies & Similar Technologies" },
  { id: "third-party", label: "12. Third-Party Services" },
  { id: "international", label: "13. International Data Transfers" },
  { id: "changes", label: "14. Changes to This Policy" },
  { id: "contact", label: "15. Contact Us" },
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
            This Privacy Policy explains how FunTalk (&quot;FunTalk&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses,
            discloses, and protects information when you use the FunTalk
            mobile application and website (together, the
            &quot;Service&quot;). It also sets out our child safety
            standards. By using FunTalk, you agree to the practices
            described in this policy.
          </p>

          {/* At a glance */}
          <div className="mt-10 w-full rounded-3xl border border-black/[0.06] bg-[#fafafa] p-6 sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[1.5px] text-black/40">
              At a glance
            </p>
            <ul className="mt-4 flex flex-col gap-2.5 text-[13px] leading-[1.7] text-[#3a3a3a] sm:text-[14px]">
              {[
                "Calls on FunTalk are end-to-end encrypted — we do not record or listen to your calls.",
                "FunTalk is intended for users aged 18 and over.",
                "We do not sell your personal information.",
                "We have zero tolerance for child sexual abuse and exploitation (CSAE) — see Section 10.",
                "You can request access to, correction of, or deletion of your data at any time.",
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
          <Section id="introduction" title="1. Introduction">
            <p>
              FunTalk is a wellness calling application that helps people
              have real, voice-first conversations. This policy applies to
              everyone who downloads, installs, browses, or otherwise uses
              the FunTalk app or website, and covers information we collect
              directly from you, automatically through your use of the
              Service, and from limited third-party sources (such as payment
              or analytics providers).
            </p>
            <p>
              If you do not agree with this policy, please do not use
              FunTalk. If you are using FunTalk on behalf of someone else
              (for example, helping a family member set up an account), you
              confirm that you have their permission to do so.
            </p>
          </Section>

          <Section id="age-requirement" title="2. Who Can Use FunTalk">
            <p>
              FunTalk is intended for users who are <strong>18 years of age
              or older</strong>. FunTalk is not directed at children, and we
              do not knowingly allow anyone under 18 to create an account or
              use the Service. See Section 10 (&quot;Children&apos;s Privacy
              &amp; Child Safety Standards&quot;) for full details on how we
              enforce this and what we do if we learn a minor has accessed
              the Service.
            </p>
          </Section>

          <Section id="information-we-collect" title="3. Information We Collect">
            <p>We collect the following categories of information:</p>
            <div>
              <p className="font-semibold text-[#161616]">
                a. Information you provide
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  Account details — name, phone number and/or email address,
                  date of birth (used to confirm you meet our age
                  requirement), profile photo, and password.
                </li>
                <li>
                  Optional profile information you choose to add, such as a
                  bio, gender, or interests.
                </li>
                <li>
                  Content you submit to us directly, such as support
                  requests, survey responses, feedback, or in-app reports
                  about other users.
                </li>
                <li>
                  Payment information when you purchase a subscription or
                  in-app credits. Payments are processed by our
                  third-party payment providers (for example, the Google
                  Play billing system) — FunTalk does not store your full
                  card or payment account details.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                b. Information collected automatically
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  Device information — device model, operating system,
                  unique device and advertising identifiers, language, and
                  time zone.
                </li>
                <li>
                  Usage data — features used, screens viewed, app version,
                  crash and diagnostic logs, and general performance
                  metrics.
                </li>
                <li>
                  Call metadata — such as call duration, timestamp, and
                  participants. We do <strong>not</strong> record, store, or
                  listen to the audio/video content of your calls, which are
                  end-to-end encrypted in transit.
                </li>
                <li>
                  Approximate location derived from your IP address, used
                  for fraud prevention, language/region defaults, and
                  compliance with local law.
                </li>
                <li>
                  Log data such as IP address, browser type (for the
                  website), and access timestamps.
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-[#161616]">
                c. Information from other sources
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-5">
                <li>
                  If you choose to sync your contacts to invite friends, we
                  process the contact details you select for that limited
                  purpose only.
                </li>
                <li>
                  Information from analytics, crash-reporting, and
                  fraud-prevention partners that helps us keep the Service
                  reliable and safe.
                </li>
              </ul>
            </div>
          </Section>

          <Section id="permissions" title="4. Permissions We Request">
            <p>
              The FunTalk app requests the following device permissions.
              Each is used only for the purpose described, and most can be
              managed or revoked at any time from your device settings
              (this may limit related features):
            </p>
            <div className="overflow-x-auto rounded-2xl border border-black/[0.06]">
              <table className="w-full min-w-[480px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="bg-[#fafafa] text-[12px] uppercase tracking-[0.5px] text-black/50">
                    <th className="px-4 py-3 font-semibold">Permission</th>
                    <th className="px-4 py-3 font-semibold">Why we ask</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Microphone", "Required to make and receive voice calls."],
                    ["Camera", "Only if you choose to make a video call."],
                    ["Contacts", "Optional — lets you invite friends. We never upload your full address book without your action."],
                    ["Notifications", "To alert you about incoming calls, messages, and account activity."],
                    ["Storage / Photos", "To let you upload or change your profile picture."],
                    ["Phone state", "To manage call interruptions (e.g., pausing an in-app call for an incoming phone call)."],
                  ].map(([perm, reason]) => (
                    <tr key={perm} className="border-t border-black/[0.06]">
                      <td className="px-4 py-3 font-medium text-[#161616]">{perm}</td>
                      <td className="px-4 py-3 text-[#4a4a4a]">{reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="how-we-use" title="5. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Create and maintain your account and connect your calls.</li>
              <li>Verify your age and eligibility to use the Service.</li>
              <li>Provide customer support and respond to your requests.</li>
              <li>
                Maintain the safety, security, and integrity of the
                Service, including detecting fraud, abuse, spam, and
                violations of our Terms of Service.
              </li>
              <li>
                Investigate and respond to reports of harmful behavior,
                including child safety reports (see Section 10).
              </li>
              <li>Process payments and manage subscriptions.</li>
              <li>
                Send you service-related communications, such as
                verification codes, security alerts, and updates to our
                policies.
              </li>
              <li>
                With your consent, send you marketing communications, which
                you can opt out of at any time.
              </li>
              <li>
                Analyze usage trends to improve app performance, reliability,
                and features.
              </li>
              <li>Comply with legal obligations and enforce our Terms of Service.</li>
            </ul>
          </Section>

          <Section id="how-we-share" title="6. How We Share Your Information">
            <p>
              We do not sell your personal information. We only share
              information in the following circumstances:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Service providers</strong> — vetted vendors who help
                us operate FunTalk, such as cloud hosting, calling/voice
                infrastructure, analytics, crash reporting, customer
                support tools, and payment processors. These providers may
                only use your data to perform services for us.
              </li>
              <li>
                <strong>Safety and legal reasons</strong> — when required by
                law, legal process, or government request, or when we
                believe in good faith that disclosure is necessary to
                protect the rights, property, or safety of FunTalk, our
                users, or the public, including reporting to law
                enforcement or agencies such as the National Center for
                Missing &amp; Exploited Children (NCMEC) where required.
              </li>
              <li>
                <strong>Business transfers</strong> — if FunTalk is involved
                in a merger, acquisition, or sale of assets, information may
                be transferred as part of that transaction, subject to this
                policy.
              </li>
              <li>
                <strong>With your consent</strong> — for any other purpose
                we disclose to you and you agree to at the time.
              </li>
            </ul>
          </Section>

          <Section id="security" title="7. Data Security">
            <p>
              We use industry-standard technical and organizational measures
              to protect your information, including encryption of calls in
              transit, encryption of data at rest where applicable, access
              controls limiting who can view personal data, and regular
              security reviews. No method of transmission or storage is
              100% secure, so we cannot guarantee absolute security. If we
              become aware of a data breach affecting your personal
              information, we will notify you and relevant authorities as
              required by applicable law.
            </p>
          </Section>

          <Section id="retention" title="8. Data Retention">
            <p>
              We retain personal information for as long as your account is
              active and as needed to provide the Service. We may retain
              certain information for longer periods where necessary to
              comply with legal obligations, resolve disputes, enforce our
              agreements, or protect the safety of our users — for example,
              records related to safety reports or suspended accounts may be
              retained even after account deletion. When information is no
              longer needed, we delete or anonymize it.
            </p>
          </Section>

          <Section id="your-rights" title="9. Your Rights & Choices">
            <p>Depending on your location, you may have the right to:</p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Access the personal information we hold about you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>
                Delete your account and associated personal information,
                directly from the app (Settings → Account → Delete
                Account) or by emailing us.
              </li>
              <li>Object to or restrict certain processing of your data.</li>
              <li>Request a portable copy of your data.</li>
              <li>Withdraw consent where processing is based on consent.</li>
              <li>
                Opt out of marketing communications using the unsubscribe
                link or in-app notification settings.
              </li>
              <li>
                Lodge a complaint with your local data protection authority.
              </li>
            </ul>
            <p>
              To exercise any of these rights, contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[#e5273b] hover:underline">
                {CONTACT_EMAIL}
              </a>
              . We may need to verify your identity before fulfilling your
              request.
            </p>
          </Section>

          <Section id="child-safety" title="10. Children's Privacy & Child Safety Standards">
            <p>
              FunTalk is strictly an <strong>18+</strong> service and is not
              directed to children. We do not knowingly collect personal
              information from anyone under the age of 18, and in no event
              from any child under 13, consistent with applicable laws
              including COPPA. If we learn that a user is under 18, we will
              suspend the account, delete associated personal information
              within a reasonable period, and, where required, notify a
              parent or guardian.
            </p>
            <p>
              Because FunTalk connects people through live calls, we hold
              ourselves to strict child safety standards in line with
              Google Play&apos;s Child Safety Standards policy and
              applicable child protection laws:
            </p>
            <ul className="list-disc space-y-1.5 pl-5">
              <li>
                <strong>Zero tolerance:</strong> We have a strict, zero-
                tolerance policy toward any content or behavior that
                sexualizes, endangers, or exploits minors, including Child
                Sexual Abuse and Exploitation (CSAE) material or conduct.
                Any confirmed violation results in immediate, permanent
                account termination.
              </li>
              <li>
                <strong>Age screening:</strong> We require users to confirm
                their date of birth at sign-up and take steps to prevent
                and remove underage accounts when identified.
              </li>
              <li>
                <strong>Reporting and blocking:</strong> Every user can
                report or block another user directly from a call or
                profile. Reports are reviewed by our safety team on a
                priority basis.
              </li>
              <li>
                <strong>Escalation to authorities:</strong> Where we
                identify apparent CSAE content or behavior, we remove it,
                terminate the responsible account, and report it to the
                relevant authorities (including NCMEC or local law
                enforcement, as applicable) in accordance with legal
                requirements.
              </li>
              <li>
                <strong>Cooperation with law enforcement:</strong> We
                cooperate with law enforcement investigations into child
                exploitation and endangerment to the fullest extent
                required and permitted by law.
              </li>
              <li>
                <strong>Dedicated contact:</strong> Anyone — user or not —
                can report a child safety concern to us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[#e5273b] hover:underline">
                  {CONTACT_EMAIL}
                </a>{" "}
                with the subject line &quot;Child Safety Report&quot;. We
                review every report we receive.
              </li>
            </ul>
            <p>
              If you are a parent or guardian and believe a minor has
              provided us with personal information, please contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[#e5273b] hover:underline">
                {CONTACT_EMAIL}
              </a>{" "}
              so we can investigate and remove the account.
            </p>
          </Section>

          <Section id="cookies" title="11. Cookies & Similar Technologies">
            <p>
              Our website uses cookies and similar technologies (such as
              local storage) to keep you signed in, remember your
              preferences, and understand how visitors use our site. You
              can control cookies through your browser settings; disabling
              them may affect some website functionality. Our mobile app
              may use comparable technologies such as SDKs and device
              identifiers for analytics and crash reporting.
            </p>
          </Section>

          <Section id="third-party" title="12. Third-Party Services">
            <p>
              FunTalk may link to or integrate with third-party services
              (for example, payment processors or social platforms). This
              Privacy Policy does not cover those third parties&apos;
              practices. We encourage you to review the privacy policy of
              any third-party service before providing it with information.
            </p>
          </Section>

          <Section id="international" title="13. International Data Transfers">
            <p>
              FunTalk is operated from India and may use service providers
              located in other countries. Where we transfer personal
              information internationally, we take steps to ensure it
              receives an adequate level of protection consistent with this
              policy and applicable law.
            </p>
          </Section>

          <Section id="changes" title="14. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time to
              reflect changes to our practices or for legal, operational, or
              regulatory reasons. We will post the updated policy on this
              page with a revised &quot;Last updated&quot; date, and where
              changes are material, we will provide additional notice (such
              as an in-app notification). Your continued use of FunTalk
              after changes take effect constitutes acceptance of the
              updated policy.
            </p>
          </Section>

          <Section id="contact" title="15. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this
              Privacy Policy or your personal information — including data
              access/deletion requests and child safety reports — contact
              us at:
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium text-[#e5273b] hover:underline">
                {CONTACT_EMAIL}
              </a>
              <br />
              <a href="tel:+918089800106" className="font-medium text-[#e5273b] hover:underline">
                {CONTACT_PHONE}
              </a>
              <br />
              FunTalk, Kerala, India
            </p>
          </Section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
