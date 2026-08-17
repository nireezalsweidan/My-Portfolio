import Reveal from '../components/Reveal';
import SectionTitle from '../components/SectionTitle';
import TechnologyBadge from '../components/TechnologyBadge';
import ProjectCard from '../components/ProjectCard';
import ProjectVisual, { FeaturedVisual } from '../components/ProjectVisual';
import { projects } from '../data/projects';
import { CurlArrow, Sparkle, Star } from '../components/Doodles';

function FeaturedProject({ project }) {
  return (
    <article className="featured-project">
      <div className="featured-project-grid">
        <Reveal variant="left" className="featured-project-visual">
          <FeaturedVisual project={project} />
        </Reveal>

        <div className="featured-project-content">
          <Reveal>
            <span className="featured-project-tag mono-tag">Featured Project</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h3 className="featured-project-title">{project.title}</h3>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="featured-project-subtitle">{project.subtitle}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="featured-project-desc">{project.description}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <h4 className="featured-project-h4">Key features</h4>
            <ul className="featured-project-features">
              {project.features.map((feature) => (
                <li key={feature} className="featured-project-feature">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="featured-project-tech">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} label={tech} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.36}>
            <div className="featured-project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="btn-github">
                  <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a11 11 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
                </svg>
                View Source on GitHub
                <span className="btn-arrow" aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="projects-bg" aria-hidden="true">
        <CurlArrow className="projects-arrow floaty-soft" />
        <Sparkle className="projects-sparkle floaty" color="var(--sand)" />
        <Star className="projects-star floaty-soft" />
      </div>

      <div className="container">
        <SectionTitle
          kicker="06 · Selected Work"
          title="Projects that show how I build."
          sub="From multi-tenant SaaS platforms to deep learning experiments — a mix of full-stack products, systems thinking, and AI exploration."
        />

        <FeaturedProject project={featured} />

        <div className="projects-grid">
          {rest.map((project, i) => (
            <Reveal key={project.id} variant="up" delay={(i % 2) * 0.1} className="project-reveal">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
