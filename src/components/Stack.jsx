import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Stack() {
  const sectionRef = useScrollReveal();

  return (
    <section id="stack" className="py-24 md:py-32" aria-label="Technical skills">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">05 / Stack</span>
          <h2 className="section-title mt-2 mb-4">Technologies I Work With</h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg mb-12">
            Tools and technologies I use to build full-stack web applications.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((category) => (
              <div key={category.category} className="card group">
                {/* Category Header */}
                <h3 className="text-sm font-bold text-[var(--text-primary)] mb-1">
                  {category.category}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-4 font-mono">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--border)] mb-4 group-hover:bg-[var(--accent)] transition-colors duration-500" />

                {/* Tech Items */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
