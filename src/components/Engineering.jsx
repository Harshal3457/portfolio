import { useState } from 'react';
import { engineeringWorkflow } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Engineering() {
  const [activeStep, setActiveStep] = useState(null);
  const sectionRef = useScrollReveal();

  return (
    <section id="engineering" className="py-24 md:py-32" aria-label="Engineering workflow">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">03 / Engineering</span>
          <h2 className="section-title mt-2 mb-4">How I Build</h2>
          <p className="text-[var(--text-secondary)] text-sm max-w-lg mb-12">
            My approach to building full-stack applications — from understanding the problem to shipping the solution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineeringWorkflow.map((item) => (
              <button
                key={item.step}
                className={`card text-left group cursor-pointer transition-all duration-300 ${
                  activeStep === item.step
                    ? 'border-[var(--accent)] bg-[var(--accent-glow)]'
                    : ''
                }`}
                onClick={() =>
                  setActiveStep(activeStep === item.step ? null : item.step)
                }
                onMouseEnter={() => setActiveStep(item.step)}
                aria-expanded={activeStep === item.step}
              >
                {/* Step Number */}
                <span className="font-mono text-xs text-[var(--accent)] block mb-3">
                  {item.step}
                </span>

                {/* Title */}
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="font-mono text-xs text-[var(--text-secondary)] mb-3">
                  {item.subtitle}
                </p>

                {/* Description (expandable) */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeStep === item.step ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed pt-3 border-t border-[var(--border)]">
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Flow connection on desktop */}
          <div className="hidden lg:flex items-center justify-center mt-8 gap-2">
            {engineeringWorkflow.map((item, i) => (
              <div key={item.step} className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                  {item.title}
                </span>
                {i < engineeringWorkflow.length - 1 && (
                  <svg className="w-4 h-4 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
