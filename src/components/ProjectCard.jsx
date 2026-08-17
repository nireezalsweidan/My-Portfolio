import TechnologyBadge from './TechnologyBadge';
import ProjectVisual from './ProjectVisual';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-visual">
        <ProjectVisual project={project} />
      </div>
      <div className="project-card-content">
        <header className="project-card-head">
          <div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-subtitle">{project.subtitle}</p>
          </div>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card-link"
              aria-label={`${project.title} on GitHub`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a11 11 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
              </svg>
            </a>
          ) : (
            <span className="project-card-link project-card-link-disabled" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="5" y="11" width="14" height="9" rx="2" />
                <path d="M8 11V7a4 4 0 0 1 8 0v4" />
              </svg>
            </span>
          )}
        </header>
        <p className="project-card-desc">{project.description}</p>
        <ul className="project-card-features">
          {project.features.map((feature) => (
            <li key={feature} className="project-card-feature">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="project-card-tech">
          {project.technologies.map((tech) => (
            <TechnologyBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </article>
  );
}
