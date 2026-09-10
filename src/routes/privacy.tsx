import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import logo from "@/assets/ish-mark-2026.svg";

const TITLE = "Privacy Statement — International Security Hub";
const DESCRIPTION = "Read the Privacy Statement of International Security Hub.";

const sections = [
  {
    title: "1. Introduction",
    content: (
      <>
        <p>International Security Hub (“ISH,” “we,” “us,” or “our”) is committed to respecting and protecting your privacy.</p>
        <p>This Privacy Policy explains how we collect, use, disclose, retain, and protect personal information when you:</p>
        <ul>
          <li>Visit www.internationalsecurityhub.com and related websites or digital platforms that link to this Policy;</li>
          <li>Subscribe to our newsletters, publications, or alerts;</li>
          <li>Register for or participate in our events, programs, consultations, or working groups;</li>
          <li>Submit an inquiry, application, proposal, or other information to us; or</li>
          <li>Otherwise communicate or engage with us.</li>
        </ul>
        <p>This Policy does not apply to third-party websites or services that maintain their own privacy policies.</p>
      </>
    ),
  },
  {
    title: "2. Who We Are",
    content: (
      <>
        <p>International Security Hub is a private company established in The Netherlands.</p>
        <p>Our contact details are:</p>
        <p>Registered address: Noord Brabantlaan 12, 5651LX Eindhoven, The Netherlands<br />Email: privacy@internationalsecurityhub.com</p>
        <p>For applicable data protection laws, K. El Bouhmi is generally the controller of the personal information described in this Policy.</p>
      </>
    ),
  },
  {
    title: "3. Information We Collect",
    content: (
      <>
        <p>Depending on how you interact with us, we may collect the following categories of information.</p>
        <h3>Information you provide directly</h3>
        <p>This may include:</p>
        <ul>
          <li>Your name, title, employer, organization, department, and professional role;</li>
          <li>Your email address, telephone number, postal address, and other contact details;</li>
          <li>Account or registration information;</li>
          <li>Event registration details, attendance records, dietary requirements, accessibility needs, and travel-related information;</li>
          <li>Newsletter, publication, topic, and communication preferences;</li>
          <li>Information contained in inquiries, correspondence, survey responses, applications, proposals, or submissions;</li>
          <li>Professional biographies, photographs, publications, areas of expertise, and public-profile information;</li>
          <li>Billing, invoicing, donation, sponsorship, or membership information, where applicable; and</li>
          <li>Any other information you choose to provide.</li>
        </ul>
        <p>Please avoid submitting classified information, national-security-sensitive information, operational security information, or confidential third-party material through our website unless we have expressly provided an authorized and appropriately secured channel for that purpose.</p>
        <h3>Information collected automatically</h3>
        <p>When you use our website, we and our service providers may automatically collect:</p>
        <ul>
          <li>IP address;</li><li>Browser, device, and operating-system information;</li><li>Language and approximate location;</li><li>Referring and exit pages;</li><li>Pages viewed, links selected, and time spent on the website;</li><li>Date and time of access;</li><li>Cookie and similar-technology identifiers; and</li><li>Technical logs and security-event information.</li>
        </ul>
        <h3>Information received from other sources</h3>
        <p>We may receive information from:</p>
        <ul>
          <li>Event partners, institutional partners, sponsors, members, or collaborating organizations;</li>
          <li>Publicly available sources, including professional profiles, institutional websites, publications, and conference materials;</li>
          <li>Service providers supporting our website, communications, research, events, or administration; and</li>
          <li>A colleague or organization registering or nominating you for an event, program, or activity.</li>
        </ul>
        <p>If you provide us with another person’s information, you should ensure that you are authorized to do so and, where required, that the person has received this Privacy Policy.</p>
      </>
    ),
  },
  {
    title: "4. How We Use Personal Information",
    content: (
      <>
        <p>We may use personal information to:</p>
        <ul>
          <li>Operate, maintain, secure, and improve our website and digital services;</li><li>Respond to inquiries and communicate with you;</li><li>Provide newsletters, reports, alerts, research, invitations, and other requested content;</li><li>Organize and administer conferences, briefings, webinars, roundtables, training, and other events;</li><li>Manage memberships, partnerships, sponsorships, grants, donations, applications, or contractual relationships;</li><li>Assess participation in programs, expert networks, working groups, or research activities;</li><li>Publish speaker, author, fellow, staff, or contributor information with appropriate authorization;</li><li>Conduct surveys, research, analysis, and program evaluation;</li><li>Understand website use and measure the effectiveness of our communications;</li><li>Maintain the safety, integrity, and security of our systems, personnel, participants, and operations;</li><li>Detect, investigate, and prevent fraud, misuse, cyber incidents, or unlawful activity;</li><li>Establish, exercise, or defend legal claims;</li><li>Fulfil contractual, regulatory, reporting, and legal obligations; and</li><li>Carry out other purposes disclosed when the information is collected.</li>
        </ul>
        <p>We will not use personal information for automated decision-making that produces legal or similarly significant effects unless we provide any notice and safeguards required by applicable law.</p>
      </>
    ),
  },
  {
    title: "5. Legal Bases for Processing",
    content: (
      <>
        <p>Where laws such as the UK General Data Protection Regulation or EU General Data Protection Regulation apply, we rely on one or more of the following legal bases:</p>
        <ul>
          <li><strong>Consent:</strong> You have agreed to a particular use, such as receiving optional marketing communications.</li><li><strong>Contract:</strong> Processing is necessary to enter into or perform an agreement with you.</li><li><strong>Legal obligation:</strong> Processing is necessary for us to comply with applicable law.</li><li><strong>Legitimate interests:</strong> Processing supports our legitimate activities, including operating our organization, conducting research, organizing events, communicating with stakeholders, improving our services, and protecting our systems and participants, provided those interests are not overridden by your rights.</li><li><strong>Public interest:</strong> Processing is necessary for a task carried out in the public interest, where applicable.</li><li><strong>Vital interests:</strong> Processing is necessary to protect someone’s life or physical safety in exceptional circumstances.</li>
        </ul>
        <p>Where we process legally recognized sensitive or special-category information, we will rely on an additional lawful condition as required.</p>
      </>
    ),
  },
  {
    title: "6. Cookies and Similar Technologies",
    content: (
      <>
        <p>We may use cookies, pixels, local storage, and similar technologies to operate the website, remember preferences, understand website use, improve performance, and support communications.</p>
        <p>These technologies may include:</p>
        <ul><li>Strictly necessary cookies, which support essential website functions and security;</li><li>Preference cookies, which remember selected settings;</li><li>Analytics cookies, which help us understand website use; and</li><li>Marketing or embedded-media cookies, where used, which may be set by third-party services.</li></ul>
        <p>Where required by law, we will request consent before placing non-essential cookies. You can manage your choices through [cookie settings link or consent-management tool] and through your browser settings.</p>
        <p>For more information, see our [Cookie Policy link], if maintained separately.</p>
      </>
    ),
  },
  {
    title: "7. When We Share Information",
    content: (
      <>
        <p>We may disclose personal information to:</p>
        <ul><li>Website hosting, cloud storage, cybersecurity, analytics, communications, customer relationship management, registration, payment, and IT service providers;</li><li>Professional advisers, auditors, insurers, and consultants;</li><li>Event venues, travel providers, technology platforms, speakers, co-hosts, and program partners where necessary to administer an activity;</li><li>Research, institutional, funding, or delivery partners, subject to appropriate safeguards;</li><li>Government authorities, regulators, courts, or law-enforcement bodies where disclosure is legally required or necessary to protect rights, safety, or security;</li><li>A successor organization in connection with a merger, restructuring, transfer, or similar organizational transaction; and</li><li>Other parties when you direct us to share information or give your consent.</li></ul>
        <p>We do not sell personal information for monetary consideration. If applicable law defines “sale,” “sharing,” or targeted advertising more broadly and our practices fall within those definitions, we will provide the notices and choices required by that law.</p>
        <p>We require service providers acting on our behalf to process personal information only for authorized purposes and to apply appropriate safeguards.</p>
      </>
    ),
  },
  {
    title: "8. Public Events and Published Content",
    content: <><p>Some events may be recorded, photographed, streamed, transcribed, or summarized. We will provide an appropriate notice where practicable.</p><p>Information you intentionally make public—such as comments during a public session, published articles, speaker biographies, photographs, or recorded presentations—may be accessible globally and may remain available in archives, publications, or third-party records.</p><p>Please notify us before an event if you have concerns about photography, recording, attribution, accessibility, or personal safety. We will consider reasonable requests, although exclusion from all background or group imagery may not always be possible.</p></>,
  },
  {
    title: "9. Security and Sensitive Communications",
    content: <><p>We use reasonable administrative, technical, and physical safeguards designed to protect personal information against unauthorized access, loss, misuse, alteration, or disclosure. These safeguards may include access controls, staff procedures, monitoring, encryption, vendor assessment, backups, and incident-response measures, as appropriate.</p><p>No website, transmission method, or storage system is completely secure. Ordinary website forms and email accounts should not be treated as channels for classified, privileged, export-controlled, operationally sensitive, or otherwise high-risk information.</p><p>To discuss secure submission methods, contact [security contact email or instructions].</p></>,
  },
  {
    title: "10. International Transfers",
    content: <><p>Because our activities and partners may be international, personal information may be processed in countries other than the country in which it was collected. Those countries may have different data protection laws.</p><p>Where required, we use recognized safeguards for international transfers, such as adequacy decisions, approved contractual clauses, data-transfer agreements, or another lawful transfer mechanism. You may contact us for further information about the safeguards relevant to your information.</p></>,
  },
  {
    title: "11. Data Retention",
    content: <><p>We retain personal information only for as long as reasonably necessary for the purposes described in this Policy, including to meet legal, contractual, accounting, reporting, security, and archival requirements.</p><p>Retention periods depend on factors such as:</p><ul><li>The nature and sensitivity of the information;</li><li>The purpose for which it was collected;</li><li>The duration of our relationship with you;</li><li>Applicable limitation periods and legal obligations;</li><li>Security and dispute-resolution needs; and</li><li>Legitimate research, publication, or institutional-archive requirements.</li></ul><p>When information is no longer required, we will delete it, anonymize it, or securely restrict its use, as appropriate.</p></>,
  },
  {
    title: "12. Your Rights and Choices",
    content: <><p>Depending on your location and applicable law, you may have the right to:</p><ul><li>Request access to your personal information;</li><li>Request correction of inaccurate or incomplete information;</li><li>Request deletion of your information;</li><li>Restrict or object to certain processing;</li><li>Receive certain information in a portable format;</li><li>Withdraw consent at any time, without affecting earlier lawful processing;</li><li>Opt out of marketing communications;</li><li>Appeal a decision concerning a privacy request;</li><li>Lodge a complaint with a competent data protection authority; and</li><li>Exercise other rights provided by applicable law.</li></ul><p>To exercise a right, contact [privacy email]. We may need to verify your identity and clarify the scope of your request. Authorized agents may submit requests where permitted by law, subject to appropriate verification.</p><p>You can unsubscribe from promotional emails by using the link included in the message. We may continue to send essential administrative, transactional, security, or legal communications.</p><p>We will not unlawfully discriminate against you for exercising a privacy right.</p></>,
  },
  {
    title: "13. Children’s Privacy",
    content: <><p>Our website and services are primarily intended for professional and adult audiences and are not directed to children under [age, based on applicable law].</p><p>We do not knowingly collect personal information from children without the authorization required by law. If you believe a child has provided personal information improperly, please contact us so that we can review and, where appropriate, delete it.</p></>,
  },
  {
    title: "14. Third-Party Websites and Embedded Services",
    content: <><p>Our website may link to or embed services operated by third parties, including video platforms, mapping services, social networks, payment processors, registration tools, and partner websites.</p><p>Those parties control their own privacy practices. We encourage you to review their privacy policies before providing information or using their services. We are not responsible for third-party websites or services that we do not control.</p></>,
  },
  {
    title: "15. External Contributors and Research Participants",
    content: <><p>If you participate in an interview, research activity, consultation, expert network, or working group, we may provide a separate notice or agreement explaining how information and contributions will be handled.</p><p>Unless expressly agreed otherwise, submitting information through the website does not create a confidential, privileged, source-protection, employment, consultancy, or advisory relationship.</p></>,
  },
  {
    title: "16. Changes to This Privacy Policy",
    content: <><p>We may update this Privacy Policy periodically to reflect changes in our activities, technology, legal obligations, or privacy practices.</p><p>The revised version will be posted on this page with an updated “Last updated” date. If a change is material, we may provide additional notice through the website, by email, or through another appropriate channel.</p></>,
  },
  {
    title: "17. Contact Us",
    content: <><p>For questions, concerns, or requests relating to this Privacy Policy or our handling of personal information, contact:</p><p>International Security Hub<br />Noord Brabantlaan 12, 5651LX, Eindhoven, The Netherlands<br />Privacy@internationalsecurityhub.com<br />+31616776112</p><p>If you are not satisfied with our response, you may have the right to complain to the data protection authority in your country or region. Details for the relevant authority can usually be found on its official website.</p></>,
  },
];

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyStatementPage,
});

function PrivacyStatementPage() {
  return (
    <main className="min-h-screen bg-muted">
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" aria-label="Return to the International Security Hub front page" className="inline-flex min-w-0 items-center gap-3">
            <img src={logo} alt="" width={989} height={1245} className="h-10 w-auto shrink-0" />
            <span className="hidden font-serif text-base font-bold sm:block">International Security Hub</span>
          </Link>
          <Link to="/" className="inline-flex size-10 items-center justify-center border border-border bg-background text-foreground transition-colors hover:bg-accent sm:w-auto sm:gap-2 sm:px-3" aria-label="Back to front page" title="Back to front page">
            <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
            <span className="hidden text-sm font-semibold sm:inline">Front page</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-3 py-6 sm:px-6 sm:py-10">
        <div className="mb-6 text-center">
          <p className="kicker">International Security Hub</p>
          <h1 className="mt-2 font-serif text-3xl font-bold">Privacy Statement</h1>
        </div>

        <article className="mx-auto max-w-4xl border border-border bg-card px-5 py-7 text-[0.9375rem] leading-7 text-card-foreground shadow-sm sm:px-10 sm:py-10 md:px-14">
          <header className="border-b border-border pb-6">
            <h2 className="font-serif text-2xl font-bold">Privacy Policy</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">Effective date: 07 September 2026<br />Last updated: 07 September 2026</p>
          </header>
          <div className="mt-8 space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="[&_h3]:mt-6 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-bold [&_li]:pl-1 [&_p+p]:mt-4 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                <h2 className="mb-4 border-b border-border pb-2 font-serif text-xl font-bold">{section.title}</h2>
                {section.content}
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}