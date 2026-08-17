import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skills } from '../data/skills';
import { CurlArrow, DotsGrid, Star, WavyDividerB } from '../components/Doodles';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-divider-wave top">
        <WavyDividerB fill="var(--bg-tint)" />
      </div>

      <div className="skills-bg" aria-hidden="true">
        <DotsGrid className="skills-dots" />
        <CurlArrow className="skills-arrow floaty-soft" />
        <Star className="skills-star floaty" />
      </div>

      <div className="container">
        <SectionTitle
          kicker="04 · What I Bring"
          title="What I Bring"
          sub="A snapshot of what I bring to every project — from building interfaces to solving problems and working with a team."
        />

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} variant="up" delay={(i % 2) * 0.1} className="skill-reveal">
              <SkillCard skill={skill} index={i} />
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
