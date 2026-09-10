export type Story = {
  category: string;
  headline: string;
  summary?: string;
  publisher: string;
  url: string;
  contentType?: string;
};

export const leadStory: Story = {
  category: "EU Regulation",
  headline: "EU begins enforcing the AI Act's new rules and transparency requirements",
  summary:
    "Europe enters a new phase of AI governance as the Commission and national authorities begin applying landmark requirements to advanced systems.",
  publisher: "European Commission",
  url: "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august",
};

export const latestDevelopments: Story[] = [
  {
    category: "Regulation",
    headline: "Commission publishes new guidance for Cyber Resilience Act implementation",
    publisher: "European Commission",
    url: "https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation",
  },
  {
    category: "Resilience",
    headline: "Cyber Europe 2026 tests the EU's collective response to infrastructure disruption",
    publisher: "ENISA",
    url: "https://www.enisa.europa.eu/news/cyber-europe-2026-all-eyes-on-the-eus-collective-response-and-resilience",
  },
  {
    category: "Threat Landscape",
    headline: "European markets watchdog warns that AI is accelerating systemic cyber risk",
    publisher: "Reuters",
    url: "https://www.reuters.com/world/europes-markets-watchdog-warns-cyber-threats-are-growing-ai-speeds-up-risks-2026-04-24/",
  },
];

export const curatedStories: Story[] = [
  {
    category: "Regulation",
    headline: "Commission publishes new guidance for Cyber Resilience Act implementation",
    summary:
      "New implementation guidance is published to support organisations preparing for the Cyber Resilience Act.",
    publisher: "European Commission",
    url: "https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation",
  },
  {
    category: "Regulation",
    headline: "Europe consults industry on certification of managed security services",
    summary:
      "ENISA invites industry views on a certification approach for managed security services across the Union.",
    publisher: "ENISA",
    url: "https://www.enisa.europa.eu/news/have-your-say-on-the-certification-of-eu-managed-security-services",
  },
  {
    category: "Innovation",
    headline: "EU launches action plan for cybersecurity in the age of advanced AI",
    summary:
      "The Commission sets out an action plan linking cybersecurity policy with the rise of advanced artificial intelligence.",
    publisher: "European Commission",
    url: "https://digital-strategy.ec.europa.eu/en/library/eu-action-plan-cybersecurity-and-artificial-intelligence",
  },
  {
    category: "Innovation",
    headline: "Europe's cybersecurity start-up ecosystem: 728 companies mapped",
    summary:
      "A radar of the European cybersecurity start-up landscape maps 728 companies across the continent.",
    publisher: "Wavestone",
    url: "https://www.wavestone.com/en/insight/european-cybersecurity-startup-radar-2026/",
  },
  {
    category: "Innovation",
    headline: "Europe accelerates its transition to quantum-safe cryptography",
    summary:
      "The EU reinforces its cybersecurity posture by pushing forward the move to post-quantum cryptography.",
    publisher: "European Commission",
    url: "https://digital-strategy.ec.europa.eu/en/news/eu-reinforces-its-cybersecurity-post-quantum-cryptography",
  },
  {
    category: "Experts",
    contentType: "Podcast",
    headline: "ENISA experts examine the machine-speed threats emerging from frontier AI",
    summary:
      "ENISA's first podcast episode explores the security implications of frontier artificial intelligence.",
    publisher: "ENISA",
    url: "https://www.enisa.europa.eu/news/enisa-on-air-our-first-podcast-launches-on-frontier-ai",
  },
  {
    category: "Experts",
    contentType: "Leadership interview",
    headline: "Juhan Lepassaar on Europe's ambition to lead global cybersecurity",
    summary:
      "A conversation with ENISA's Executive Director on the agency's past, present and future.",
    publisher: "Review of European Administrative Law",
    url: "https://realaw.blog/2026/06/19/towards-europes-global-leadership-in-cybersecurity-a-conversation-with-enisa-executive-director-juhan-lepassaar-on-the-past-present-and-future-of-the-agency-by-juhan-lepassaar-valentina-g/",
  },
  {
    category: "Resilience",
    headline: "Cyber Europe 2026 tests the EU's collective response to infrastructure disruption",
    summary:
      "The pan-European exercise puts the Union's collective response and resilience under scrutiny.",
    publisher: "ENISA",
    url: "https://www.enisa.europa.eu/news/cyber-europe-2026-all-eyes-on-the-eus-collective-response-and-resilience",
  },
  {
    category: "Threat Landscape",
    headline: "European markets watchdog warns that AI is accelerating systemic cyber risk",
    summary:
      "Europe's markets watchdog says cyber threats are growing as artificial intelligence speeds up risk.",
    publisher: "Reuters",
    url: "https://www.reuters.com/world/europes-markets-watchdog-warns-cyber-threats-are-growing-ai-speeds-up-risks-2026-04-24/",
  },
];

export const trackerItems = [
  {
    name: "AI Act",
    status: "Now enforcing",
    note: "Commission and national authorities begin applying new rules and transparency requirements.",
    url: "https://digital-strategy.ec.europa.eu/en/news/commission-starts-enforcing-ai-act-rules-and-new-transparency-requirements-2-august",
    publisher: "European Commission",
    active: true,
  },
  {
    name: "Cyber Resilience Act",
    status: "Implementation guidance",
    note: "New guidance published to support timely implementation.",
    url: "https://digital-strategy.ec.europa.eu/en/library/commission-publishes-new-guidance-support-timely-cyber-resilience-act-implementation",
    publisher: "European Commission",
    active: false,
  },
  {
    name: "NIS2",
    status: "Member-state implementation",
    note: "Transposition and application continue across member states.",
    url: "https://digital-strategy.ec.europa.eu/en/policies/nis2-directive",
    publisher: "European Commission",
    active: false,
  },
  {
    name: "EU cybersecurity certification",
    status: "Public consultation",
    note: "Industry views invited on certification of managed security services.",
    url: "https://www.enisa.europa.eu/news/have-your-say-on-the-certification-of-eu-managed-security-services",
    publisher: "ENISA",
    active: false,
  },
];

export const events = [
  {
    title: "Cybersec Netherlands 2026",
    city: "Utrecht",
    date: "8th and 9th September",
    format: "In person",
    topic: "",
    country: "NL",
  },
  {
    title: "IT Security Expo and Congress\u00a0",
    city: "Nuremberg",
    date: "27th to 29th October \u00a0",
    format: "In person",
    topic: "Full spectrum of products and services in cybersecurity",
    country: "DE",
  },
  {
    title: "European Cyber Innovation Summit",
    city: "Tallinn",
    date: "Sample event · date to be confirmed",
    format: "In person",
    topic: "Start-ups and emerging technology",
    country: "EE",
  },
];

export const organisations = [
  { name: "ENISA", type: "EU agency", location: "Athens / Brussels" },
  {
    name: "European Cybersecurity Competence Centre",
    type: "EU body",
    location: "Bucharest",
  },
  {
    name: "European Commission DG CONNECT",
    type: "EU institution",
    location: "Brussels",
  },
  { name: "CERT-EU", type: "Incident response", location: "Brussels" },
  {
    name: "National cybersecurity agencies",
    type: "Member-state authorities",
    location: "Across the EU",
  },
  {
    name: "European cybersecurity start-ups",
    type: "Industry ecosystem",
    location: "Pan-European",
  },
];

export const navItems = [
  "Latest",
  "Regulation",
  "Innovation",
  "Events",
  "Experts",
  "Organisations",
  "Regions",
  "About",
];

export const navHref: Record<string, string> = {
  Latest: "#latest",
  Regulation: "#regulation",
  Innovation: "#innovation",
  Events: "#events",
  Experts: "#experts",
  Organisations: "#organisations",
  Regions: "#organisations",
  About: "#about",
};
