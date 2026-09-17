import { personal } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

const contactLinks = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    mono: true,
  },
  {
    label: 'Phone',
    value: personal.phone,
    href: `tel:${personal.phone.replace(/[\s-]/g, '')}`,
    mono: true,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/harshal-chaudhari',
    href: personal.linkedin,
    external: true,
    mono: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/Harshal3457',
    href: personal.github,
    external: true,
    mono: false,
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32" aria-label="Contact">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">09 / Contact</span>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-[var(--text-primary)] mb-4 max-w-lg">
            Let's Build Something Useful.
          </h2>
          <p className="text-base text-[var(--text-secondary)] mb-12 max-w-md leading-relaxed">
            I'm currently exploring opportunities in software development and Python full-stack development.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block font-mono text-xs text-[var(--text-secondary)] tracking-wider uppercase mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-md text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-mono text-xs text-[var(--text-secondary)] tracking-wider uppercase mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-md text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-mono text-xs text-[var(--text-secondary)] tracking-wider uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-[var(--surface)] border border-[var(--border)] rounded-md text-sm text-[var(--text-primary)] placeholder-[var(--text-secondary)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
                <p className="text-[10px] font-mono text-[var(--text-secondary)] mt-2">
                  Opens your email client with pre-filled details.
                </p>
              </form>
            </div>

            {/* Right: Contact Links */}
            <div className="space-y-6">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <span className="block font-mono text-[10px] text-[var(--text-secondary)] tracking-widest uppercase mb-1">
                    {link.label}
                  </span>
                  <span className={`text-sm text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors ${link.mono ? 'font-mono' : ''}`}>
                    {link.value}
                  </span>
                </a>
              ))}

              {/* Quick Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--border)]">
                <a
                  href={`mailto:${personal.email}`}
                  className="btn-primary text-xs"
                >
                  Email Me
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  Connect on LinkedIn
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
