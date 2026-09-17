import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);

    // Animate in
    requestAnimationFrame(() => {
      if (overlayRef.current) overlayRef.current.classList.add('active');
    });

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="modal-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
    >
      <div className="modal-content p-6 sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <span className="font-mono text-xs text-[var(--accent)] block mb-2">
              {project.number} / Case Study
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
              {project.title}
            </h2>
            <p className="font-mono text-sm text-[var(--text-secondary)] mt-1">
              {project.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="h-px bg-[var(--border)] mb-6" />

        {/* Overview */}
        <div className="mb-8">
          <h3 className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">
            01 — Overview
          </h3>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
            {project.description}
          </p>
          {project.duration && (
            <p className="font-mono text-xs text-[var(--text-secondary)] mt-2">
              Duration: {project.duration}
            </p>
          )}
        </div>

        {/* Architecture */}
        <div className="mb-8">
          <h3 className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-4">
            02 — Architecture
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            {project.architectureFlow.map((node, i) => (
              <div key={node} className="flex items-center gap-2">
                <span className="flow-node text-xs px-3 py-1.5">{node}</span>
                {i < project.architectureFlow.length - 1 && (
                  <svg className="w-4 h-4 text-[var(--accent)] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* My Contribution */}
        <div className="mb-8">
          <h3 className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">
            03 — My Contribution
          </h3>
          <ul className="space-y-2">
            {project.contributions.map((item, i) => (
              <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="text-[var(--accent)] mt-1.5 shrink-0">
                  <svg className="w-1.5 h-1.5" fill="currentColor" viewBox="0 0 6 6">
                    <circle cx="3" cy="3" r="3" />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technology Stack */}
        <div className="mb-8">
          <h3 className="font-mono text-xs text-[var(--accent)] tracking-widest uppercase mb-3">
            04 — Technology
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Live Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm"
            >
              View Code
            </a>
          )}
          <button onClick={onClose} className="btn-secondary text-sm ml-auto">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
