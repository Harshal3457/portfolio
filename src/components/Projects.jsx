import { useState } from 'react';
import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeNav, setActiveNav] = useState(0);
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 md:py-32" aria-label="Selected projects">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">06 / Selected Work</span>
          <h2 className="section-title mt-2 mb-3">Projects</h2>
          <p className="text-sm text-[var(--text-secondary)] max-w-lg mb-12">
            A selection of applications I've worked on across full-stack development, APIs, databases, and automation.
          </p>

          {/* Project Navigation */}
          <div className="flex items-center gap-6 mb-10 border-b border-[var(--border)] pb-4 overflow-x-auto">
            {projects.map((project, i) => (
              <button
                key={project.id}
                onClick={() => setActiveNav(i)}
                className={`flex items-center gap-2 pb-1 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-[17px] ${
                  activeNav === i
                    ? 'text-[var(--accent)] border-[var(--accent)]'
                    : 'text-[var(--text-secondary)] border-transparent hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="font-mono text-xs">{project.number}</span>
                <span>{project.title}</span>
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="space-y-6">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`transition-all duration-500 ${
                  activeNav === i
                    ? 'opacity-100 translate-y-0'
                    : 'hidden'
                }`}
              >
                <div
                  className="card p-6 sm:p-8 cursor-pointer group"
                  onClick={() => setSelectedProject(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && setSelectedProject(project)
                  }
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="grid lg:grid-cols-[1fr,280px] gap-8 items-start">
                    {/* Left: Project Info */}
                    <div>
                      {/* Category + Duration */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-widest uppercase">
                          {project.category}
                        </span>
                        {project.duration && (
                          <>
                            <span className="text-[var(--border)]">·</span>
                            <span className="font-mono text-[10px] text-[var(--text-secondary)]">
                              {project.duration}
                            </span>
                          </>
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors mb-2">
                        {project.title}
                      </h3>

                      {/* Subtitle */}
                      <p className="font-mono text-sm text-[var(--accent)] mb-4">
                        {project.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 max-w-lg">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.highlights.map((h) => (
                          <span key={h} className="tech-tag">{h}</span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        <button
                          className="btn-secondary text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                        >
                          View Case Study
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Live Demo
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right: Architecture Flow */}
                    <div className="hidden lg:flex flex-col items-center justify-center border-l border-[var(--border)] pl-8">
                      <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-widest uppercase mb-4">
                        Architecture
                      </span>
                      {project.architectureFlow.map((node, j) => (
                        <div key={node} className="flex flex-col items-center">
                          <div className="flow-node min-w-[160px] text-xs">{node}</div>
                          {j < project.architectureFlow.length - 1 && (
                            <div className="flex flex-col items-center my-1">
                              <div className="w-px h-5 bg-gradient-to-b from-[var(--accent)] to-transparent" />
                              <svg className="w-2 h-2 text-[var(--accent)] -mt-0.5" fill="currentColor" viewBox="0 0 10 10">
                                <path d="M5 8L1 3h8L5 8z" />
                              </svg>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
