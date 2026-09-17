import { personal } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const facts = [
  { value: '8.56', label: 'MCA CGPA', sub: 'First Class with Distinction' },
  { value: '9.33', label: 'BCA CGPA', sub: null },
  { value: 'Intern', label: 'Software Developer', sub: 'LM Software Solutions' },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32" aria-label="About me">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          {/* Section Label */}
          <span className="section-label mb-4 block">01 / About</span>

          <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-20 items-start mt-8">
            {/* Left: Large Statement */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-[var(--text-primary)] mb-8">
                {personal.aboutStatement}
              </h2>

              {/* Accent line */}
              <div className="w-12 h-px bg-[var(--accent)] mb-8" />

              <p className="text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                {personal.aboutDescription}
              </p>
            </div>

            {/* Right: Fact Cards */}
            <div className="flex flex-col gap-4">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className="card group flex items-start gap-4 reveal-delay-{i+1}"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-[var(--accent)] font-mono min-w-[70px]">
                    {fact.value}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {fact.label}
                    </div>
                    {fact.sub && (
                      <div className="text-xs text-[var(--text-secondary)] mt-0.5 font-mono">
                        {fact.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
