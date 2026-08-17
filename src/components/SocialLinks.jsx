import { profile } from '../data/profile';

export default function SocialLinks({ compact = false }) {
  return (
    <div className={`social-links ${compact ? 'social-links-compact' : ''}`}>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="social-link"
        aria-label="GitHub profile of Nireez Al Sweidan"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.72.08-.7.08-.7 1.16.08 1.76 1.18 1.76 1.18 1.02 1.76 2.68 1.25 3.34.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a11 11 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
        </svg>
        <span>GitHub</span>
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="social-link"
        aria-label="LinkedIn profile of Nireez Al Sweidan"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
        </svg>
        <span>LinkedIn</span>
      </a>
      <a href={`mailto:${profile.email}`} className="social-link" aria-label="Email Nireez Al Sweidan">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="2.5" y="5" width="19" height="14" rx="3" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        </svg>
        <span>Email</span>
      </a>
    </div>
  );
}
