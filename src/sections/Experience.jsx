import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import { experience } from '../data/experience';
import { Orbit, Sparkle } from '../components/Doodles';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="experience-bg" aria-hidden="true">
        <Orbit className="experience-orbit spin-slow" />
        <Sparkle className="experience-sparkle floaty-soft" color="var(--sand)" />
      </div>

      <div className="container">
        <SectionTitle
          kicker="05 · Experience"
          title="Where I've worked and grown."
          sub="Internships that took me from my first full-stack app to AI-powered features — each one sharpening how I build and collaborate."
        />

        <div className="experience-list">
          {experience.map((job, i) => (
            <Reveal key={job.company} variant="left" delay={0.05 * i}>
              <article className="experience-item">
                <div className="experience-rail" aria-hidden="true">
                  <span
                    className="experience-rail-dot"
                    style={{ background: job.accent }}
                  >
                    {job.current && <span className="experience-current-ring" />}
                  </span>
                </div>

                <div className="experience-body">
                  <header className="experience-head">
                    <div>
                      <h3 className="experience-company">{job.company}</h3>
                      <p className="experience-role">
                        {job.role}
                        {job.current && <span className="experience-current-tag">Current</span>}
                      </p>
                    </div>
                    <span className="experience-period">{job.period}</span>
                  </header>
                  <p className="experience-desc">{job.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
