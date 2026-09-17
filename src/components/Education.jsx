import { education } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Education() {
  const sectionRef = useScrollReveal();

  return (
    <section id="education" className="py-24 md:py-32" aria-label="Education">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">07 / Education</span>
          <h2 className="section-title mt-2 mb-12">Academic Background</h2>

          <div className="max-w-2xl space-y-0">
            {education.map((edu, i) => (
              <div
                key={edu.degree}
                className="relative pl-8 pb-10 last:pb-0 group"
              >
                {/* Timeline line */}
                {i < education.length - 1 && (
                  <div className="absolute left-[7px] top-3 bottom-0 w-px bg-[var(--border)] group-hover:bg-[var(--accent)]/30 transition-colors" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 border-[var(--border)] bg-[var(--bg)] group-hover:border-[var(--accent)] transition-colors flex items-center justify-center">
                  <div className="w-[5px] h-[5px] rounded-full bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div>
                  {edu.duration && (
                    <span className="font-mono text-xs text-[var(--accent)] block mb-1">
                      {edu.duration}
                    </span>
                  )}
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                    {edu.degree}
                  </h3>
                  {edu.institution && (
                    <p className="text-sm text-[var(--text-secondary)] mb-2">
                      {edu.institution}
                      {edu.location && <span className="font-mono text-xs"> · {edu.location}</span>}
                    </p>
                  )}
                  <div className="flex items-center gap-4 flex-wrap">
                    {edu.cgpa && (
                      <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                        CGPA {edu.cgpa}
                      </span>
                    )}
                    {edu.achievement && (
                      <span className="tech-tag text-[10px]">{edu.achievement}</span>
                    )}
                    {edu.credits && (
                      <span className="font-mono text-xs text-[var(--text-secondary)]">
                        {edu.credits} credits
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
