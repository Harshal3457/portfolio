import { certifications } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Certifications() {
  const sectionRef = useScrollReveal();

  return (
    <section id="certifications" className="py-24 md:py-32" aria-label="Certifications">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">08 / Credentials</span>
          <h2 className="section-title mt-2 mb-12">Certifications</h2>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {certifications.map((cert) => (
              <div key={cert.title} className="card group">
                {/* Issuer */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-semibold text-[var(--accent)] tracking-wider">
                    {cert.issuer}
                  </span>
                  <span className="tech-tag text-[10px]">{cert.grade}</span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 leading-snug">
                  {cert.title}
                </h3>

                {/* Institution + Year */}
                <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                  <span>{cert.institution}</span>
                  <span className="text-[var(--border)]">·</span>
                  <span className="font-mono">{cert.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
