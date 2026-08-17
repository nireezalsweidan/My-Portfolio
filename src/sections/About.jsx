import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { Blob, CurlArrow, DotsGrid, PlusDot, Sparkle } from '../components/Doodles';

function Fact({ label, value }) {
  return (
    <li className="about-fact">
      <span className="about-fact-label">{label}</span>
      <span className="about-fact-value">{value}</span>
    </li>
  );
}

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about-bg" aria-hidden="true">
        <DotsGrid className="about-dots" />
        <Blob className="about-blob" color="var(--teal-pale)" />
      </div>

      <div className="container">
        <SectionTitle kicker="01 · Who I Am" title="Designer at heart, engineer by trade." />

        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <p className="about-lead">
                <span className="about-dropcap">I</span>'m Nireez Al Sweidan, a Computer Science graduate from
                LAU with hands-on experience across full stack web development, software engineering, and AI.
                Through internships at <span className="lead-em">IDS</span>, <span className="lead-em">Ciatek</span>,{' '}
                <span className="lead-em">Stories</span>, and <span className="lead-em">Digital Hub</span>, I've built
                a strong foundation in writing clean code, solving real-world problems, and adapting quickly to new
                tools and technologies.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="about-block">
                <h3 className="about-subhead">
                  <PlusDot className="about-subhead-icon" />
                  Where I&apos;m Headed
                </h3>
                <p>
                  I&apos;m aiming to grow into a professional full stack developer known for writing clean, scalable,
                  and maintainable code — building reliable applications, staying current with modern technologies, and
                  continuously improving to deliver real value in every project I work on.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="about-block about-block-ai">
                <h3 className="about-subhead">
                  <Sparkle className="about-subhead-icon" color="var(--sand)" />
                  Curious About AI
                </h3>
                <p>
                  Alongside web development, I&apos;m interested in AI and intelligent applications, and I want to
                  keep exploring how AI can be integrated into modern software products to create more useful,
                  personalized, and efficient experiences.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal variant="right" delay={0.15}>
            <div className="about-card">
              <div className="about-card-top">
                <div className="about-monogram" aria-hidden="true">
                  <span>N</span>
                </div>
                <div className="about-card-title">
                  <span className="about-card-kicker">field notes</span>
                  <h3 className="about-card-name">Nireez Al Sweidan</h3>
                  <p>Full Stack Web Developer · LAU CS Graduate</p>
                </div>
                <CurlArrow className="about-card-arrow" />
              </div>

              <ul className="about-facts">
                <Fact label="Basis" value="Beirut, Lebanon" />
                <Fact label="Degree" value="B.S. Computer Science" />
                <Fact label="Scholarship" value="USAID Scholar" />
                <Fact label="Focus" value="Full Stack · AI" />
                <Fact label="Motto" value="Build clean, ship reliable" />
              </ul>

              <div className="about-card-note" aria-hidden="true">
                <span className="mono-tag">status: open to work</span>
                <span className="about-note-dot pulse-dot" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
