import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { marqueeTech, technologies } from '../data/technologies';
import { CodeBrackets, Sparkle } from '../components/Doodles';

function MarqueeRow() {
  const items = [...marqueeTech, ...marqueeTech];
  return (
    <div className="marquee tech-marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((tech, i) => (
          <span className="tech-marquee-item" key={`${tech}-${i}`}>
            <CodeBrackets className="tech-marquee-bracket" color="var(--coral)" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Technologies() {
  return (
    <section id="technologies" className="section technologies">
      <div className="tech-bg" aria-hidden="true">
        <Sparkle className="tech-sparkle floaty" color="var(--sand)" />
      </div>

      <Reveal>
        <div className="tech-marquee-wrap">
          <MarqueeRow />
        </div>
      </Reveal>

      <div className="container">
        <SectionTitle
          kicker="03 · Toolkit"
          title="Tools I Build With"
          sub="A practical toolkit gathered across studies and internships — languages, frameworks, databases, and the AI side of my stack."
        />

        <div className="tech-grid">
          {technologies.map((group, i) => (
            <Reveal key={group.group} variant="up" delay={(i % 3) * 0.08} className={`tech-card tech-card-${(i % 4) + 1}`}>
              <article className="tech-card-inner">
                <header className="tech-card-head">
                  <span className="tech-card-dot" style={{ background: group.accent }} />
                  <h3 className="tech-card-title">{group.group}</h3>
                  <span className="tech-card-count">{String(group.items.length).padStart(2, '0')}</span>
                </header>
                <ul className="tech-card-list">
                  {group.items.map((item) => (
                    <li key={item} className="tech-card-item">
                      <span className="tech-card-check" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          <Reveal variant="up" delay={0.1} className="tech-card tech-note-card">
            <div className="tech-note">
              <Sparkle className="tech-note-icon" color="var(--sand)" />
              <p>
                Learning never stops — I pick up new tools quickly, and I&apos;m currently deepening my stack with
                Next.js and AI-powered application patterns.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
