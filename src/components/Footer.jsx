import { personal } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[var(--border)]" role="contentinfo">
      <div className="container-main">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Left: Brand */}
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-[var(--text-primary)] tracking-wide">
              {personal.name.toUpperCase()}
            </p>
            <p className="font-mono text-xs text-[var(--text-secondary)] mt-1">
              {personal.title} · {personal.location}
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex items-center gap-5">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-xs font-mono"
              aria-label="GitHub"
            >
              GitHub
            </a>
            <span className="text-[var(--border)]">·</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-xs font-mono"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <span className="text-[var(--border)]">·</span>
            <a
              href={`mailto:${personal.email}`}
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors text-xs font-mono"
              aria-label="Email"
            >
              Email
            </a>
          </div>

          {/* Right: Copyright */}
          <p className="font-mono text-[10px] text-[var(--text-secondary)]">
            © {currentYear} {personal.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
