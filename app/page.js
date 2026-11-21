import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  GraduationCap,
  Heart,
  MapPin,
  Rocket,
  Send,
  Sparkles,
} from "lucide-react";
import Nav from "@/components/Nav";
import Clock from "@/components/Clock";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Badge from "@/components/Badge";
import VentureImage from "@/components/VentureImage";
import Sc from "@/components/Sc";
import PfpCarousel from "@/components/PfpCarousel";
import CeoSection from "@/components/CeoSection";
import Backbone from "@/components/Backbone";
import {
  quickFacts,
  profileRows,
  interests,
  aboutPoints,
  ventures,
  connectGroups,
  networkLinks,
} from "@/lib/data";

function SectionHead({ icon, label, title }) {
  return (
    <Reveal className="section-head" variant="clip">
      <span className="mono eyebrow">
        <b>
          <Icon name={icon} size={16} strokeWidth={1.7} />
        </b>{" "}
        <Sc>{label}</Sc>
      </span>
      <h2 className="display">
        <Sc>{title}</Sc>
      </h2>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <Reveal className="hero__meta mono" variant="down">
                <span className="pill">
                  <span className="pulse" /> Open to new ideas
                </span>
                <span className="hero__loc">
                  <MapPin size={14} strokeWidth={1.6} /> Patna, IN <Clock />
                </span>
              </Reveal>

              <Reveal as="h1" className="hero__title display" delay={80} variant="blur">
                <span>
                  <Sc>Raj</Sc>
                </span>
                <span>
                  <Sc>Jatav</Sc>
                  <em>.</em>
                </span>
              </Reveal>

              <Reveal className="hero__aka" delay={160} variant="left">
                <span className="mono">
                  <Sc>Also known as</Sc>
                </span>
                <strong className="display">
                  <em>
                    <Sc>Egoistic</Sc>
                  </em>
                </strong>
              </Reveal>

              <Reveal as="p" className="hero__lead" delay={220} variant="clipUp">
                Aspiring CEO, builder and entrepreneur. Turning ideas into reality,
                one venture at a time.
              </Reveal>

              <Reveal className="hero__cta" delay={280} variant="pop">
                <a href="#connect" className="btn btn--primary">
                  <Sc>Get in touch</Sc> <ArrowUpRight size={16} strokeWidth={1.8} />
                </a>
                <a href="#ventures" className="btn btn--ghost">
                  <Sc>View ventures</Sc> <ArrowDown size={16} strokeWidth={1.8} />
                </a>
              </Reveal>
            </div>

            <Reveal className="hero__portrait" delay={200} variant="zoom">
              <div className="portrait">
                <PfpCarousel />
                <div className="portrait__shade" />
                <div className="portrait__caption">
                  <span className="display">
                    <Sc>Raj Jatav</Sc>
                  </span>
                  <span className="mono">
                    <Sc>Egoistic</Sc>
                  </span>
                </div>
              </div>
              <Badge />
              <span className="chip chip--a mono">
                <Rocket size={14} strokeWidth={1.7} /> <Sc>Builder</Sc>
              </span>
              <span className="chip chip--b mono">
                <Sparkles size={14} strokeWidth={1.7} /> <Sc>Entrepreneur</Sc>
              </span>
              <span className="chip chip--c mono">
                <GraduationCap size={14} strokeWidth={1.7} /> <Sc>K.K. University</Sc>
              </span>
            </Reveal>
          </div>

          <div className="container">
            <Reveal className="facts" delay={120} variant="skew">
              {quickFacts.map((f) => (
                <div key={f.label} className="fact">
                  <span className="mono fact__label">
                    <Sc>{f.label}</Sc>
                  </span>
                  <span className="fact__value">{f.value}</span>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <Backbone />

        <section id="about" className="section">
          <div className="container split">
            <SectionHead icon="UserRound" label="About me" title="The person behind the name." />
            <div className="about">
              <Reveal as="p" className="about__lead display" variant="blur">
                I&apos;m Raj Jatav, also known as <em>EGOISTIC</em>. I have a strong
                interest in business, entrepreneurship, and exploring new
                opportunities.
              </Reveal>
              <Reveal as="p" className="about__body" delay={80} variant="left">
                I enjoy bike riding, learning new things, and building my own
                identity.
              </Reveal>
              <Reveal as="p" className="about__body" delay={120} variant="right">
                My ambition is to become a successful CEO, builder, and
                entrepreneur. I believe in thinking independently, staying
                curious, and turning ideas into reality. My goal is to build
                something meaningful, create opportunities, and establish my own
                legacy.
              </Reveal>
              <div className="points">
                {aboutPoints.map((p, i) => (
                  <Reveal className="point" key={p.label} delay={160 + i * 90} variant={["twist", "pop", "left", "right"][i % 4]} replay>
                    <span className="point__icon">
                      <Icon name={p.icon} size={18} strokeWidth={1.6} />
                    </span>
                    <span className="mono point__label">
                      <Sc>{p.label}</Sc>
                    </span>
                    <span className="point__value">{p.value}</span>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="profile" className="section section--compact">
          <div className="container">
            <SectionHead icon="Fingerprint" label="Profile" title="Personal details." />
            <Reveal as="dl" className="profile" variant="clipUp">
              {profileRows.map((r) => (
                <div key={r.field} className="profile__cell">
                  <dt className="mono">
                    <Sc>{r.field}</Sc>
                  </dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </Reveal>
          </div>
        </section>

        <section id="interests" className="section section--tint">
          <div className="container">
            <SectionHead icon="Flame" label="Hobbies & interests" title="What keeps me moving." />
            <div className="cards cards--3">
              {interests.map((it, i) => (
                <Reveal as="article" className="card" key={it.title} delay={i * 110} variant={["left", "up", "right"][i % 3]} replay>
                  <div className="card__top">
                    <span className="card__mark">
                      <Icon name={it.mark} size={18} strokeWidth={1.6} />
                    </span>
                    <span className="card__icon">
                      <Icon name={it.icon} size={22} strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="display">
                    <Sc>{it.title}</Sc>
                  </h3>
                  <p>{it.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="network" className="section section--network">
          <div className="container">
            <SectionHead icon="Network" label="The business" title="Ego Networks." />
            <Reveal className="net" variant="zoom">
              <div className="net__frame">
                <img
                  className="net__img"
                  src="/ego-networks.jpg"
                  alt="Ego Networks logo: a wolf inside a moon ring with the tagline Power moves quietly, est. 2026"
                  width="1672"
                  height="941"
                  loading="lazy"
                />
                <span className="net__sheen" aria-hidden="true" />
              </div>
              <div className="net__meta">
                <p className="net__text">
                  The umbrella every venture moves under. Quiet on the surface, built
                  to last underneath.
                </p>
                <ul className="net__links">
                  {networkLinks.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className="net__pill">
                        <Icon name={l.icon} size={15} strokeWidth={1.7} />
                        <Sc>{l.label}</Sc>
                        <ArrowUpRight size={14} strokeWidth={1.7} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <CeoSection />

        <section id="ventures" className="section">
          <div className="container">
            <SectionHead icon="Rocket" label="Future projects" title="What I am building next." />
            <div className="cards cards--3">
              {ventures.map((v, i) => (
                <Reveal as="article" className="venture" key={v.title} delay={i * 120} variant={["twist", "drop", "skew"][i % 3]} replay>
                  <div className="venture__visual">
                    <VentureImage src={v.image} alt={v.title} icon={v.icon} />
                    <span className="mono venture__status">
                      <Sc>{v.status}</Sc>
                    </span>
                  </div>
                  <div className="venture__body">
                    <span className="mono card__num venture__tag">
                      <Icon name={v.mark} size={15} strokeWidth={1.7} /> <Sc>Venture</Sc>
                    </span>
                    <h3 className="display">
                      <Sc>{v.title}</Sc>
                    </h3>
                    <p>{v.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" className="section section--tint">
          <div className="container split split--wide">
            <div className="connect__intro">
              <SectionHead icon="MessageCircle" label="Social media & contact" title="Let's build something meaningful." />
              <Reveal as="p" className="about__body" delay={80} variant="auto">
                Ideas, collaborations or a simple hello. Reach out on Telegram or
                Instagram, or join the community.
              </Reveal>
              <Reveal delay={140} variant="pop">
                <a
                  href="https://t.me/EGOxCORE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                >
                  <Send size={16} strokeWidth={1.8} /> <Sc>Message on Telegram</Sc>
                </a>
              </Reveal>
            </div>

            <div className="connect__groups">
              {connectGroups.map((g, gi) => (
                <Reveal className="group" key={g.title} delay={gi * 90} variant={gi % 2 ? "right" : "left"}>
                  <h3 className="mono group__title">
                    <Sc>{g.title}</Sc>
                  </h3>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <a href={it.href} target="_blank" rel="noopener noreferrer" className="link-row">
                          <span className="link-row__icon">
                            <Icon name={it.icon} size={18} strokeWidth={1.6} />
                          </span>
                          <span className="link-row__text">
                            <span className="link-row__label">
                              <Sc>{it.label}</Sc>
                            </span>
                            <span className="mono link-row__handle">{it.handle}</span>
                          </span>
                          <ArrowUpRight className="link-row__arrow" size={18} strokeWidth={1.6} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__big display">
            <img src="/pfp-rider.jpg" alt="" width="120" height="120" />
            <span>
              <Sc>Raj Jatav</Sc> <em><Sc>Egoistic</Sc></em>
            </span>
          </div>
          <div className="footer__row">
            <span className="mono footer__tag">
              <Heart size={14} strokeWidth={1.6} /> #Building my own legacy
            </span>
            <a href="#top" className="mono footer__top">
              Back to top <ArrowUp size={14} strokeWidth={1.6} />
            </a>
          </div>
          <div className="footer__legal mono">
            © 2026 Ego Networks. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
