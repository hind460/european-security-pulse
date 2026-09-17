import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";

import logo from "@/assets/ish-mark-2026.svg";
import cybersecHero from "@/assets/cybersec-netherlands-2026-hero.webp";
import cybersecSocial from "@/assets/cybersec-netherlands-2026-social.webp";
import cybersecVanOordt from "@/assets/cybersec-van-oordt.png";
import cybersecBartGroothuis from "@/assets/cybersec-bart-groothuis.png";
import cybersecGroeneveldGaiser from "@/assets/cybersec-groeneveld-gaiser.png";

const TITLE = "When the Whistleblower Took the Main Stage | International Security Hub";
const DESCRIPTION =
  "Cybersec Netherlands 2026 turned digital sovereignty into a question of ownership, operational judgment and collective responsibility.";
const SOCIAL_IMAGE = `https://id-preview--a1245732-e1d4-496a-a76f-4ce85900c245.lovable.app${cybersecSocial}`;

export const Route = createFileRoute(
  "/articles/when-the-whistleblower-took-the-main-stage",
)({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:image", content: SOCIAL_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: SOCIAL_IMAGE },
    ],
  }),
  component: CybersecArticlePage,
});

function ArticleFigure({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure className="my-10 sm:my-14">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="h-auto w-full bg-muted object-cover"
      />
      <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}

function CybersecArticlePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-20 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="inline-flex min-w-0 items-center gap-3">
            <img src={logo} alt="" width={989} height={1245} className="h-10 w-auto shrink-0" />
            <span className="hidden font-serif text-base font-bold sm:block">
              International Security Hub
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 border border-border bg-background px-3 py-2 text-sm font-semibold transition-colors hover:bg-accent"
          >
            <ArrowLeft className="size-4 shrink-0" aria-hidden="true" />
            Front page
          </Link>
        </div>
      </header>

      <main>
        <article>
          <header className="mx-auto max-w-5xl px-5 pb-8 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-16">
            <p className="kicker">Spotlight</p>
            <h1 className="mx-auto mt-4 max-w-4xl font-serif text-4xl leading-[1.08] font-bold sm:text-5xl lg:text-6xl">
              When the Whistleblower Took the Main Stage
            </h1>
            <p className="mt-4 font-serif text-xl font-semibold text-signal sm:text-2xl">
              Inside Cybersec Netherlands 2026
            </p>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Cybersec Netherlands 2026 turned digital sovereignty from a policy abstraction
              into a question of ownership, operational judgment and collective responsibility.
              Its most powerful example came from a whistleblower willing to make an
              uncomfortable warning public.
            </p>
            <p className="meta mt-6">By K. El Bouhmi & M. Molina Barea</p>
          </header>

          <figure className="mx-auto max-w-[1440px] px-0 sm:px-6">
            <img
              src={cybersecHero}
              alt="A speaker addressing the audience on the Cybersec Netherlands 2026 main stage"
              width={1600}
              height={900}
              fetchPriority="high"
              className="aspect-[16/9] w-full bg-night object-cover object-center"
            />
            <figcaption className="px-5 pt-2 text-xs text-muted-foreground sm:px-0">
              Cybersec Netherlands 2026 at Jaarbeurs in Utrecht.
            </figcaption>
          </figure>

          <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6 sm:py-16">
            <blockquote className="border-l-2 border-signal pl-5 font-serif text-2xl leading-snug font-semibold sm:text-3xl">
              “It’s not an idea anymore. It’s real.”
            </blockquote>
            <p className="mt-8 text-lg leading-8">
              That was the message as Cybersec Netherlands 2026 opened its doors. The promise
              was not simply two days of discussion, networking and product demonstrations.
              This year, organisers said, the emphasis would be on the quality of the
              information: lessons attendees could use today and tomorrow, answers to urgent
              questions and a clearer understanding of what must happen next.
            </p>
            <p className="mt-6 text-lg leading-8">
              One Main Stage appearance would come to embody that ambition. Pieter van Oordt,
              Chief Privacy Officer at Logius, the Dutch government agency responsible for
              services including DigiD, MijnOverheid and Digipoort, stood before an audience of
              cybersecurity professionals, government officials and industry leaders and
              described what happened when he raised concerns about the proposed acquisition of
              Dutch cloud provider Solvinity by US-based Kyndryl. His appearance transformed an
              abstract debate about digital sovereignty into a human story about responsibility,
              institutional pressure and the protection of critical public infrastructure.
            </p>

            <ArticleFigure
              src={cybersecVanOordt}
              alt="Jeroen van Nijnatten and Pieter van Oordt on the Cybersec Netherlands stage"
              width={800}
              height={534}
              caption="Jeroen van Nijnatten and Pieter van Oordt at Cybersec 2026. Photo courtesy of Pieter van Oordt; publicly available via web archives."
            />

            <p className="text-lg leading-8">
              It also raised a broader question: what kind of cybersecurity forum is willing to
              put such a story on its biggest stage?
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">Cybersecurity Belongs in the Boardroom</h2>
            <p className="mt-6 text-lg leading-8">
              We asked Jeroen Van Nijnatten why Cybersec needs to exist in 2026. His answer is
              that one of the reasons the event exists is that cybersecurity still does not
              receive the strategic attention it demands.
            </p>
            <blockquote className="my-8 border-l-2 border-signal pl-5 font-serif text-2xl leading-snug font-semibold">
              “CISOs are still out of the boardroom.”
            </blockquote>
            <p className="text-lg leading-8">
              That is more than an organisational problem. Decisions about suppliers,
              infrastructure, artificial intelligence, data and foreign ownership can affect
              the continuity of essential services and, ultimately, national security. Yet the
              people responsible for understanding those risks are not always present when the
              decisions are made.
            </p>
            <p className="mt-6 text-lg leading-8">
              Cybersec Netherlands was created to help close that gap, moving the conversation
              beyond the technical management of individual threats and towards what Van
              Nijnatten calls total digital resilience and digital sovereignty. The subjects
              themselves are no longer unfamiliar. Cybersecurity, technological dependence and
              sovereignty are discussed extensively.
            </p>
            <p className="mt-6 text-lg leading-8">
              What remains inadequate, he argues, is the level of awareness and the speed with
              which that awareness becomes action. The rise of AI makes the task more urgent: it
              is changing both the threats organisations face and the technologies used to
              counter them. No company, government department or security team can respond
              adequately in isolation.
            </p>
            <p className="mt-6 text-lg leading-8">
              The event therefore aims to act as a wake-up call. Cyber resilience is not solely
              an IT concern, and digital sovereignty cannot be achieved through disconnected
              decisions.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">Sovereignty Is a Collective Project</h2>
            <p className="mt-6 text-lg leading-8">
              That message was echoed by Bart Groothuis, Member of the European Parliament, who
              stressed that digital sovereignty cannot be delivered by one organisation, sector
              or country acting alone. It requires a collaborative and collective effort
              involving governments, European institutions, security agencies, technology
              providers, researchers and private organisations. Digital sovereignty does not
              necessarily mean isolation or attempting to build every technology nationally.
            </p>
            <p className="mt-6 text-lg leading-8">
              It means developing the collective capacity to make independent decisions, manage
              critical dependencies and protect essential systems without surrendering control
              to actors whose interests or legal obligations may conflict with Europe’s own. In
              that sense, cooperation is not the opposite of sovereignty. It is one of its
              conditions.
            </p>

            <ArticleFigure
              src={cybersecBartGroothuis}
              alt="Bart Groothuis speaking about European digital sovereignty at Cybersec Netherlands 2026"
              width={1708}
              height={921}
              caption="Bart Groothuis at Cybersec 2026. Photo by R. Molina Barea."
            />

            <p className="text-lg leading-8">
              Groothuis placed the Dutch conversation within a wider European challenge. Supply
              chains, cloud platforms, cyberattacks and technology markets cross national
              borders. A vulnerability in one organisation or country can rapidly affect many
              others. Sovereignty must therefore be developed collectively, with countries
              sharing responsibility as well as ambition.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">A Community Not Just a Trade Show</h2>
            <p className="mt-6 text-lg leading-8">
              Van Nijnatten describes the event’s purpose primarily in terms of
              community-building rather than marketing. That means bringing CISOs, technical
              specialists, government representatives, researchers, policymakers and business
              leaders into the same room. It also means looking beyond the Netherlands.
            </p>
            <p className="mt-6 text-lg leading-8">
              Digital infrastructure and cyber threats cross borders, so greater resilience
              depends on cooperation with key parties across Europe and the wider NATO
              community. The objective is not to present Cybersec Netherlands as a formal part
              of that alliance. It is to create a setting in which people connected to the same
              security challenges can compare experiences, build trust and develop lasting
              working relationships.
            </p>
            <p className="mt-6 text-lg leading-8">
              It is intended to be a place to which the community returns each year and one that
              grows alongside the challenges it confronts. One of this year’s additions was the
              Tech Theatre, created to bring independent stories together and allow participants
              to examine technologies and technical questions in greater depth, without every
              conversation becoming a product pitch. It made the event useful at more than one
              level: strategic enough for policymakers and executives, but sufficiently
              practical for specialists seeking knowledge they can apply.
            </p>
            <blockquote className="my-8 border-l-2 border-signal pl-5 font-serif text-2xl leading-snug font-semibold">
              Attendees should leave with “answers, knowledge and what steps we need to take.”
            </blockquote>

            <h2 className="mt-12 font-serif text-3xl font-bold">Where Strategy Meets Operational Reality</h2>
            <p className="mt-6 text-lg leading-8">
              The gap between cyber threats and organisational reality continues to grow.
              Defence organisations operate in a world shaped by geopolitical tensions, hybrid
              threats and continuous digital conflict. CISOs responsible for critical
              infrastructure, meanwhile, face the daily challenge of securing highly
              interconnected environments under mounting operational, political and societal
              pressure.
            </p>
            <p className="mt-6 text-lg leading-8">
              In their joint session, Colonel Mietta Groeneveld and Jeroen Gaiser, Deputy CISO at
              the Dutch Ministry of Infrastructure and Water Management, brought those two
              worlds together. From a defence perspective, Groeneveld presented cyber resilience
              as a strategic capability in an era in which digital threats are directly
              connected to national security and societal stability. Gaiser added the
              operational reality of Dutch critical infrastructure, where resilience is not
              theoretical: it determines the continuity of essential public services,
              industrial systems and governmental responsibilities.
            </p>
            <p className="mt-6 text-lg leading-8">
              Together, they challenged what they called the “linear fallacy”: the belief that
              an increase in cyberattacks can be answered simply by employing a corresponding
              number of additional cybersecurity specialists. Talent remains essential, but
              organisations cannot solve an expanding, interconnected threat landscape through
              headcount alone, especially while qualified specialists remain scarce. Instead,
              resilience depends on how effectively people, organisations and systems work
              together.
            </p>
            <p className="mt-6 text-lg leading-8">
              Gaiser emphasised knowledge-sharing through a federative approach, in which
              expertise and responsibilities remain distributed while organisations are
              connected through trusted structures for cooperation. No single organisation sees
              the entire threat landscape. Each holds part of the picture, and resilience
              depends on their ability to combine those insights.
            </p>
            <p className="mt-6 text-lg leading-8">
              Groeneveld brought the discussion into the reality of an active incident. When
              immediate containment is necessary, she argued, operational security must take
              priority. Compliance frameworks remain important, but they must support the
              mission rather than delay the actions required to contain an attack, preserve
              continuity and prevent further damage.
            </p>

            <ArticleFigure
              src={cybersecGroeneveldGaiser}
              alt="Mietta Groeneveld and Jeroen Gaiser discussing cyber resilience on stage"
              width={1448}
              height={1086}
              caption="Mietta Groeneveld and Jeroen Gaiser at Cybersec 2026. Photo by R. Molina Barea."
            />

            <p className="text-lg leading-8">
              Their discussion exposed the tension between strategy and execution. Although
              collaboration, information-sharing and collective resilience receive growing
              attention at the national level, many organisations still struggle with
              fragmentation, dependency risks, talent shortages and the complexity of
              protecting interconnected IT and operational technology environments.
              Cybersecurity leaders must translate these technical risks into questions of
              governance, operational continuity and public accountability.
            </p>
            <p className="mt-6 text-lg leading-8">
              Rather than offering simple answers, the session confronted more difficult
              questions: Who ultimately owns cyber resilience? How do organisations move from
              awareness to action? What does resilience look like in practice when systems,
              societies and geopolitical interests have become deeply interconnected? The
              answer cannot be reduced to more tools or more specialists. It requires clear
              authority, shared knowledge, joint preparation and trusted relationships across
              institutional boundaries. Resilience does not grow linearly. It grows through
              community.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">When Sovereignty Becomes Personal</h2>
            <p className="mt-6 text-lg leading-8">
              Van Oordt’s Main Stage appearance demonstrated what these principles can mean in
              practice. He had raised concerns about Kyndryl’s proposed acquisition of
              Solvinity, which operates infrastructure supporting some of the Netherlands’ most
              important digital public services. Foreign ownership, he warned, could create
              risks arising from another jurisdiction, including questions about access to data
              and the continued availability of essential systems.
            </p>
            <p className="mt-6 text-lg leading-8">
              He also drew attention to an internal risk assessment that reportedly concluded
              that the proposed safeguards were insufficient and that had not initially been
              shared with Parliament in full. Van Oordt first raised his concerns internally. He
              later took them into the public domain.
            </p>
            <p className="mt-6 text-lg leading-8">
              The proposed acquisition was ultimately blocked by the Dutch authorities on
              public-interest grounds. Placing him on the Main Stage was significant because his
              story did not offer an easy success narrative or a product solution. It concerned
              institutional accountability, conflicting interests and the personal consequences
              of voicing an uncomfortable warning.
            </p>
            <p className="mt-6 text-lg leading-8">
              It also showed why the absence of cybersecurity and privacy expertise from senior
              decision-making matters. Digital sovereignty is shaped not only by national
              strategies, but also by procurement decisions, ownership structures, contracts
              and the willingness of individuals to challenge assurances they believe are
              inadequate.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">Jaarbeurs: Connecting the Cybersecurity Ecosystem</h2>
            <p className="mt-6 text-lg leading-8">
              Royal Dutch Jaarbeurs provides the platform for Cybersec Netherlands and acts as a
              connector for the entire Dutch cybersecurity ecosystem. It brings public
              authorities, businesses, knowledge institutions, security professionals and
              technology providers together, providing a stage for collaboration, knowledge
              sharing and innovation.
            </p>
            <p className="mt-6 text-lg leading-8">
              That role has developed over the years through Cybersec Europe in Brussels and
              Cybersec Netherlands, its Dutch edition. By building a cross-border community
              around both events, Jaarbeurs has helped turn digital sovereignty from a policy
              ambition into a shared practice: strengthening collective resilience, encouraging
              trusted cooperation and creating space for the security community to exchange
              knowledge and prepare together.
            </p>
            <p className="mt-6 text-lg leading-8">
              The approach also connects security with sustainability. Jaarbeurs has
              progressively made responsible event organisation and the technology lifecycle
              more visible, showing that resilience includes not only how systems are protected,
              but also how technology is sourced, used, reused and retired. The next Cybersec
              Europe will take place on 26 and 27 May 2027 at Brussels Expo. Register via{" "}
              <a
                href="https://www.cyberseceurope.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-signal underline underline-offset-4"
              >
                cyberseceurope.com
              </a>
              .
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">Security and Sustainability Across the Technology Lifecycle</h2>
            <p className="mt-6 text-lg leading-8">
              Jaarbeurs’ ambition to become more sustainable was visible not only in the
              organisation of Cybersec Netherlands, but also in the exhibitor mix. There was a
              stronger presence of vendors offering sustainable hardware disposal and secure
              data destruction, connecting end-of-life data security with responsible reuse and
              recycling. That connection matters.
            </p>
            <p className="mt-6 text-lg leading-8">
              Cybersecurity responsibilities do not end when a device is replaced or removed
              from service. Retired hardware can still contain sensitive information, while
              careless disposal creates environmental costs as well as security risks. Treating
              secure data destruction, reuse and recycling as parts of the same lifecycle shows
              how operational security and sustainability can reinforce one another.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">Is the Event Making an Impact</h2>
            <p className="mt-6 text-lg leading-8">
              Asked whether Cybersec Netherlands is genuinely making a difference, Van Nijnatten
              is unequivocal.
            </p>
            <blockquote className="my-8 border-l-2 border-signal pl-5 font-serif text-2xl leading-snug font-semibold">
              “Yes, I believe we are. We are making an impact from the moment you are walking in.”
            </blockquote>
            <p className="text-lg leading-8">
              The strongest support for that claim is not the scale of the exhibition floor or
              the length of its partner list. It is the range of conversations the event is
              prepared to host. Groothuis presented sovereignty as a collective European
              undertaking. Groeneveld and Gaiser connected strategic threats to operational
              reality. Van Oordt showed what happens when concerns about national infrastructure
              collide with institutional and commercial interests. Van Nijnatten linked them
              through the idea of community.
            </p>
            <p className="mt-6 text-lg leading-8">
              The wider programme brought together figures from cybersecurity, intelligence,
              government and defence, including Pieter Cobelens, former Director of the Dutch
              Military Intelligence and Security Service; Bas Dunnebier of the AIVD; and Dutch
              Minister of Justice and Security David van Weel. The event’s advisory board
              connects independent leaders with experience across education, critical
              infrastructure, incident response, aviation, technology and public-private
              cooperation. Van Nijnatten credits that board with helping the event improve from
              one edition to the next.
            </p>
            <p className="mt-6 text-lg leading-8">
              The challenge now is to turn the awareness created inside the venue into better
              decisions outside it: greater CISO involvement in the boardroom, stronger
              cooperation across sectors, faster information-sharing and clearer action on
              digital dependencies.
            </p>

            <h2 className="mt-12 font-serif text-3xl font-bold">From Conversation to Collective Action</h2>
            <p className="mt-6 text-lg leading-8">
              Cybersec Netherlands 2026 presented digital sovereignty not as a slogan, but as a
              series of practical questions. Who controls essential infrastructure? Whose laws
              apply to it? Who has access to the information needed to defend it? Who is
              empowered to act during a crisis? And who is present when strategic decisions are
              made?
            </p>
            <p className="mt-6 text-lg leading-8">
              The answers cannot come from one institution alone. Resilience requires community:
              trusted relationships through which governments, industry, defence, researchers
              and security professionals can share knowledge, coordinate decisions and act
              together when it matters. Digital sovereignty requires collective European
              capacity. Operational resilience requires professionals who can act decisively
              when an incident is unfolding. Accountability requires people willing to voice
              concerns and institutions willing to hear them. Van Oordt gave those questions a
              face and a voice.
            </p>
            <p className="mt-6 text-lg leading-8">
              The wider programme placed them within an ecosystem of government, industry,
              defence, research and technical expertise. That combination points to the event’s
              real purpose. It is not simply to keep cybersecurity in the conversation. It is to
              move the conversation into the rooms where strategic decisions are made, connect
              the organisations responsible for national resilience and ensure that the people
              who understand the risks have both a seat at the table and the authority to act.
            </p>

            <div className="mt-14 border-t border-border pt-8">
              <Link to="/" className="inline-flex items-center gap-2 font-semibold text-signal">
                Continue to the front page
                <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}