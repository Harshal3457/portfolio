import { metrics } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TechExpertise() {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-16 md:py-24 border-y border-[var(--border)]" aria-label="Key metrics">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {metrics.map((metric, i) => (
              <div
                key={metric.label}
                className={`text-center lg:text-left ${
                  i < metrics.length - 1 ? 'lg:border-r lg:border-[var(--border)]' : ''
                } lg:px-6 first:lg:pl-0 last:lg:pr-0`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-[var(--accent)] font-mono mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-[var(--text-secondary)] tracking-wide uppercase">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
