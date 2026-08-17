import Reveal from '../components/Reveal';
import { reasons } from '../data/reasons';
import { CurlArrow, Sparkle, Star, WavyDividerB } from '../components/Doodles';

export default function HireMe() {
  return (
    <section id="hire" className="section hireme">
      <div className="section-divider-wave top">
        <WavyDividerB fill="var(--bg-tint)" />
      </div>

      <div className="hireme-bg" aria-hidden="true">
        <CurlArrow className="hireme-arrow floaty-soft" />
        <Sparkle className="hireme-sparkle floaty" color="var(--sand)" />
        <Star className="hireme-star floaty-soft" />
      </div>

      <div className="container">
        <div className="hireme-head">
          <Reveal>
            <span className="section-kicker">07 · The Short Pitch</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="section-title">
              Why work with <span className="lead-em">me?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="section-sub">
              A few honest reasons I make a good addition to any team building something real.
            </p>
          </Reveal>
        </div>

        <div className="hireme-grid">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} variant="up" delay={(i % 3) * 0.08} className={`hireme-card-wrap hireme-card-wrap-${(i % 3) + 1}`}>
              <article className="hireme-card">
                <span className="hireme-card-num" style={{ color: reason.accent }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="hireme-card-bar" style={{ background: reason.accent }} aria-hidden="true" />
                <h3 className="hireme-card-title">{reason.title}</h3>
                <p className="hireme-card-text">{reason.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="section-divider-wave bottom">
        <WavyDividerB fill="var(--bg)" />
      </div>
    </section>
  );
}
