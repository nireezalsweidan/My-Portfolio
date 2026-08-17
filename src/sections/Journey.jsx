import { useEffect, useRef } from 'react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { journey } from '../data/journey';
import { Blob, Orbit, Sparkle, Star } from '../components/Doodles';
import { WavyDivider } from '../components/Doodles';

function TimelinePath() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <svg className="journey-line" ref={ref} viewBox="0 0 200 1200" preserveAspectRatio="none" aria-hidden="true">
      <path
        className="stroke-draw"
        d="M100 0c80 90-80 150 0 240s-80 150 0 240 80 150 0 240-80 150 0 240 80 150 0 240"
        fill="none"
        stroke="var(--line-strong)"
        strokeWidth="3"
        strokeDasharray="10 12"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Milestone({ item, index }) {
  const year = item.date.split(' ')[1];
  const even = index % 2 === 0;
  const side = even ? 'left' : 'right';

  return (
    <div className={`journey-item journey-item-${side}`}>
      <Reveal variant={even ? 'left' : 'right'} className={`journey-card-wrap ${even ? 'journey-card-wrap-left' : 'journey-card-wrap-right'}`}>
        <article className="journey-card">
          <header className="journey-card-head">
            <span className="journey-card-date">{item.date}</span>
            {item.badge && <span className="journey-badge">{item.badge}</span>}
          </header>
          <h3 className="journey-card-title">{item.title}</h3>
          <p className="journey-card-desc">{item.description}</p>
        </article>
      </Reveal>

      <div className="journey-node" aria-hidden="true">
        <span className="journey-node-ring" />
        <span className="journey-node-core" style={{ background: index === 0 ? 'var(--coral)' : 'var(--teal)' }} />
      </div>

      <Reveal
        variant="up"
        delay={0.1}
        className={`journey-year-wrap ${even ? 'journey-year-wrap-left' : 'journey-year-wrap-right'}`}
      >
        <span className="journey-year" aria-hidden="true">
          {year}
        </span>
      </Reveal>
    </div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="section journey">
      <div className="section-divider-wave top">
        <WavyDivider fill="var(--bg-soft)" />
      </div>

      <div className="journey-bg" aria-hidden="true">
        <Blob className="journey-blob" color="var(--coral-pale)" />
        <Orbit className="journey-orbit spin-slow" />
        <Star className="journey-star floaty" />
        <Sparkle className="journey-sparkle floaty-soft" color="var(--sand)" />
      </div>

      <div className="container">
        <SectionTitle
          kicker="02 · My Journey"
          title="A path from first commit to full stack."
          sub="From a USAID scholarship at LAU to internships across full-stack, software engineering, and AI — every step built the developer I am today."
        />

        <div className="journey-track">
          <TimelinePath />
          {journey.map((item, i) => (
            <Milestone key={item.date} item={item} index={i} />
          ))}
        </div>
      </div>

      <div className="section-divider-wave bottom">
        <WavyDivider fill="var(--bg)" />
      </div>
    </section>
  );
}
