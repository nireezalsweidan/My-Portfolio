import { useEffect, useRef } from 'react';
import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { journey } from '../data/journey';

function Milestone({ item, index }) {
  const year = item.date.split(' ')[1] || item.date;
  const even = index % 2 === 0;
  const side = even ? 'left' : 'right';

  return (
    <div className={`journey-item journey-item-${side}`}>
      {/* Card Content */}
      <Reveal 
        variant={even ? 'left' : 'right'} 
        className={`journey-card-wrap ${even ? 'journey-card-wrap-left' : 'journey-card-wrap-right'}`}
      >
        <article className="journey-card">
          <header className="journey-card-head">
            <span className="journey-card-date">{item.date}</span>
            {item.badge && <span className="journey-badge">{item.badge}</span>}
          </header>
          <h3 className="journey-card-title">{item.title}</h3>
          <p className="journey-card-desc">{item.description}</p>
        </article>
      </Reveal>

      {/* Center Node Indicator */}
      <div className="journey-node" aria-hidden="true">
        <span className="journey-node-ring" />
        <span 
          className="journey-node-core" 
          style={{ '--accent-color': index === 0 ? '#10b981' : '#6366f1' }} 
        />
      </div>

      {/* Large Backdrop Year Display */}
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
      {/* Subtle Background Glow Elements */}
      <div className="journey-bg" aria-hidden="true">
        <div className="journey-glow-top" />
        <div className="journey-glow-bottom" />
      </div>

      <div className="container">
        <SectionTitle
          kicker="02 · My Journey"
          title="Milestones & Journey"
          sub="From software engineering fundamentals at LAU to building full-stack applications and AI models."
        />

        <div className="journey-track">
          <div className="journey-line" aria-hidden="true" />
          {journey.map((item, i) => (
            <Milestone key={item.date + i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}