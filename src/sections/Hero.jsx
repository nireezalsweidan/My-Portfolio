import Reveal from '../components/Reveal';
import SocialLinks from '../components/SocialLinks';
import { Blob, CurlArrow, DotsGrid, Orbit, Sparkle, Squiggle, Star, SunBurst, CodeBrackets } from '../components/Doodles';

function CodeWindow() {
  return (
    <div className="hero-code" aria-hidden="true">
      <div className="hero-code-bar">
        <span className="dot" style={{ background: '#E76F51' }} />
        <span className="dot" style={{ background: '#E9C46A' }} />
        <span className="dot" style={{ background: '#2A9D8F' }} />
        <span className="hero-code-file">portfolio.jsx</span>
      </div>
      <pre className="hero-code-body">
        <code>
          <span className="c-pink">const</span> <span className="c-yellow">builder</span> = <span className="c-pink">await</span> <span className="c-teal">Nireez</span>.<span className="c-yellow">build</span>({'{'}
          {'\n'}  <span className="c-green">// full-stack, end to end</span>
          {'\n'}  <span className="c-blue">frontend</span>: [<span className="c-orange">React</span>, <span className="c-orange">Next.js</span>],
          {'\n'}  <span className="c-blue">backend</span>: [<span className="c-orange">Node</span>, <span className="c-orange">Django</span>],
          {'\n'}  <span className="c-blue">data</span>: [<span className="c-orange">MongoDB</span>, <span className="c-orange">SQL</span>],
          {'\n'}  <span className="c-blue">deploy</span>: <span className="c-pink">true</span>,
          {'\n'}{'}'});
          {'\n'}
          {'\n'}<span className="c-teal">builder</span>.<span className="c-yellow">ship</span>(<span className="c-orange">'production'</span>); <span className="c-green">// ship it</span>
        </code>
      </pre>
    </div>
  );
}

function FloatingCard({ className, label, sub, color, delay = 0 }) {
  return (
    <div
      className={`hero-chip floaty-soft ${className}`}
      style={{ '--float-rot': '0deg', animationDelay: `${delay}s` }}
      aria-hidden="true"
    >
      <span className="hero-chip-dot" style={{ background: color }} />
      <span>
        <strong>{label}</strong>
        <em>{sub}</em>
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <Blob className="hero-blob hero-blob-1" color="var(--coral-pale)" />
        <Blob className="hero-blob hero-blob-2" color="var(--teal-pale)" />
        <SunBurst className="hero-sunburst spin-slow" color="var(--sand)" />
        <DotsGrid className="hero-dots" />
        <CodeBrackets className="hero-brackets" color="rgba(231, 111, 81, 0.1)" />
      </div>

      <div className="container hero-grid">
        <div className="hero-text">
          <Reveal>
            <p className="hero-kicker">
              <span className="hero-kicker-line" aria-hidden="true" />
              Hi there, I&apos;m
            </p>
          </Reveal>

          <h1 className="hero-name">
            <Reveal delay={0.05}>
              <span className="hero-name-line">
                Nireez
                <Sparkle className="hero-name-sparkle floaty" color="var(--sand)" />
              </span>
            </Reveal>
            <Reveal delay={0.15}>
              <span className="hero-name-line hero-name-line-accent">
                Al Sweidan
                <Squiggle className="hero-name-squiggle" color="var(--coral)" />
              </span>
            </Reveal>
          </h1>

          <Reveal delay={0.25}>
            <p className="hero-role mono-tag">&gt; full stack web developer</p>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="hero-desc">
              I build modern web applications across the entire development lifecycle — from designing
              intuitive interfaces to developing reliable backend systems and deploying{' '}
              <span className="lead-em">production-ready</span> products.
            </p>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                View My Work
                <span className="btn-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
              <a href="#contact" className="btn btn-outline">
                Let&apos;s Connect
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.52}>
            <SocialLinks />
          </Reveal>
        </div>

        <div className="hero-visual">
          <Reveal variant="scale" delay={0.2}>
            <div className="hero-scene">
              <CurlArrow className="hero-curl floaty" />
              <Star className="hero-star floaty" />
              <Orbit className="hero-orbit floaty-soft" />

              <div className="hero-window floaty">
                <div className="hero-window-head">
                  <span className="hero-window-addr">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                      <rect x="3" y="2.5" width="10" height="11" rx="2" />
                      <path d="M2.5 8h11M6 2.5v11" />
                    </svg>
                    nireez.dev
                  </span>
                  <span className="hero-window-lock">✓ Secure</span>
                </div>
                <CodeWindow />
              </div>

              <FloatingCard className="hero-chip-1" label="React" sub="UI" color="#2A9D8F" delay={0.4} />
              <FloatingCard className="hero-chip-2" label="Node.js" sub="Backend" color="#E76F51" delay={1.2} />
              <FloatingCard className="hero-chip-3" label="MongoDB" sub="Data" color="#5B8DEF" delay={2} />

              <div className="hero-deploy floaty-soft" style={{ animationDelay: '0.8s' }} aria-hidden="true">
                <span className="hero-deploy-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3v12M7 9l5-6 5 6" />
                    <path d="M4 21h16" />
                  </svg>
                </span>
                <span>
                  <strong>Deployed</strong>
                  <em>ready to ship</em>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <a href="#about" className="hero-scroll" aria-label="Scroll to About section">
        <span>scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
