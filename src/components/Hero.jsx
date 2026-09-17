import { personal } from '../data/portfolio';

const flowNodes = ['React.js', 'REST API', 'FastAPI', 'PostgreSQL / MySQL'];
const metaItems = [
  { label: 'Based In', value: personal.location },
  { label: 'Focus', value: 'Full Stack Development' },
  { label: 'Primary Stack', value: 'Python / React / FastAPI' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Grid Background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Subtle gradient accent */}
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-[1fr,auto] gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div className="max-w-xl">
            {/* Availability Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8 animate-fade-in"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400 tracking-wide">
                Open to New Opportunities
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4"
              style={{ animationDelay: '0.1s' }}
            >
              <span className="text-[var(--text-secondary)] text-lg sm:text-xl font-medium block mb-2">
                Hi, I'm
              </span>
              <span className="text-[var(--text-primary)]">Harshal</span>{' '}
              <span className="text-[var(--accent)]">Chaudhari</span>
            </h1>

            {/* Title */}
            <p
              className="font-mono text-sm sm:text-base text-[var(--accent)] tracking-wide mb-6"
              style={{ animationDelay: '0.2s' }}
            >
              {personal.title}
            </p>

            {/* Bio */}
            <p
              className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-md"
              style={{ animationDelay: '0.3s' }}
            >
              {personal.bio}
            </p>

            {/* Location */}
            <div
              className="flex items-center gap-2 mb-8 text-sm text-[var(--text-secondary)]"
              style={{ animationDelay: '0.35s' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-mono text-xs">{personal.location}</span>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3"
              style={{ animationDelay: '0.4s' }}
            >
              <a href="#projects" className="btn-primary">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a href="#contact" className="btn-secondary">
                Get in Touch
              </a>
              <a
                href={personal.resumeUrl || `mailto:${personal.email}?subject=Resume%20Request`}
                className="btn-secondary"
                target={personal.resumeUrl ? '_blank' : undefined}
                rel={personal.resumeUrl ? 'noopener noreferrer' : undefined}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6" style={{ animationDelay: '0.5s' }}>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label="GitHub profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label="LinkedIn profile"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Architecture Flow + Meta */}
          <div className="hidden lg:flex flex-col items-center gap-8">
            {/* Architecture Flow */}
            <div className="flex flex-col items-center" aria-label="Full-stack architecture visualization">
              <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-widest uppercase mb-4">
                Architecture
              </span>
              {flowNodes.map((node, i) => (
                <div key={node} className="flex flex-col items-center">
                  <div className="flow-node min-w-[180px]">{node}</div>
                  {i < flowNodes.length - 1 && (
                    <div className="flex flex-col items-center my-1">
                      <div
                        className="w-px h-6"
                        style={{
                          background: 'linear-gradient(to bottom, var(--accent), transparent)',
                          animationDelay: `${i * 0.5}s`,
                        }}
                      />
                      <svg
                        className="w-2.5 h-2.5 text-[var(--accent)] -mt-1"
                        fill="currentColor"
                        viewBox="0 0 10 10"
                      >
                        <path d="M5 8L1 3h8L5 8z" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Meta Block */}
            <div className="flex flex-col gap-3 mt-4 w-[200px]">
              {metaItems.map((item) => (
                <div key={item.label} className="border-l border-[var(--border)] pl-3">
                  <span className="block font-mono text-[10px] text-[var(--text-secondary)] tracking-widest uppercase">
                    {item.label}
                  </span>
                  <span className="block text-sm font-medium text-[var(--text-primary)] mt-0.5">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-secondary)] animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="font-mono text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[var(--text-secondary)] to-transparent" />
      </div>
    </section>
  );
}
