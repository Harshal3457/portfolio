import { experience } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" className="py-24 md:py-32" aria-label="Experience">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">02 / Experience</span>
          <h2 className="section-title mt-2 mb-12">Where I've Worked</h2>

          {experience.map((exp) => (
            <div
              key={exp.company}
              className="card p-6 sm:p-8 max-w-3xl"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {exp.company}
                    </h3>
                    <span className="tech-tag text-[10px]">{exp.type}</span>
                  </div>
                  <p className="text-sm font-medium text-[var(--accent)]">{exp.role}</p>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {exp.duration}
                  </span>
                  <span className="font-mono text-xs text-[var(--text-secondary)]">
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-2.5 mb-6">
                {exp.responsibilities.map((item, i) => (
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

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
