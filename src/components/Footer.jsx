import { profile } from '../data/profile';
import { CodeBrackets, Sparkle } from '../components/Doodles';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-mark" aria-hidden="true">
            N
          </span>
          <div>
            <p className="footer-name">{profile.name}</p>
            <p className="footer-role">{profile.role}</p>
          </div>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <a href={profile.github} target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-link">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="footer-link">
            Email
          </a>
        </nav>

        <p className="footer-copy">
          <CodeBrackets className="footer-brackets" color="var(--coral)" />
          <span>&copy; 2026 Nireez Al Sweidan. All rights reserved.</span>
          <Sparkle className="footer-sparkle" color="var(--sand)" />
        </p>
      </div>
    </footer>
  );
}
