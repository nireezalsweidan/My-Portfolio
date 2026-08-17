const icons = {
  frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4" width="19" height="14" rx="2.5" />
      <path d="M6.5 17.5 4 20M17.5 17.5 20 20M2.5 9.5h19" />
      <path d="m8 13 1.5 1.5L8 16M12 16h4" />
    </svg>
  ),
  ux: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M8 9v11" />
      <circle cx="8" cy="16" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  problem: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-4.5-4.5" />
      <path d="M8.5 11h5M11 8.5v5" />
    </svg>
  ),
  team: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c.5-3.2 2.8-5 5.5-5s5 1.8 5.5 5" />
      <circle cx="16.5" cy="9" r="2.6" />
      <path d="M15.5 15.4c2.6.2 4.4 1.9 4.8 4.6" />
    </svg>
  ),
};

export default function SkillCard({ skill, index }) {
  const Icon = skill.icon ? icons[skill.icon] : icons.frontend;
  return (
    <article className={`skill-card skill-card-${(index % 4) + 1}`}>
      <div className="skill-card-top">
        <span className="skill-card-icon" style={{ background: skill.accent }}>
          {Icon}
        </span>
        <span className="skill-card-num" aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="skill-card-title">{skill.title}</h3>
      <ul className="skill-card-list">
        {skill.items.map((item) => (
          <li key={item} className="skill-card-item">
            <span className="skill-card-bullet" style={{ background: skill.accent }} aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
