import { useState, useEffect } from 'react';
import { personal } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function GitHubActivity() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const res = await fetch(
          `https://api.github.com/users/${personal.githubUsername}/repos?sort=updated&per_page=6&type=owner`
        );
        if (!res.ok) throw new Error('API failed');
        const data = await res.json();
        setRepos(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHub();
  }, []);

  return (
    <section id="github" className="py-24 md:py-32" aria-label="GitHub activity">
      <div className="container-main">
        <div ref={sectionRef} className="reveal">
          <span className="section-label mb-4 block">04 / Development</span>
          <h2 className="section-title mt-2 mb-4">GitHub Activity</h2>
          <p className="text-sm text-[var(--text-secondary)] mb-8 font-mono">
            github.com/{personal.githubUsername}
          </p>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-4 bg-[var(--surface-alt)] rounded w-3/4 mb-3" />
                  <div className="h-3 bg-[var(--surface-alt)] rounded w-full mb-2" />
                  <div className="h-3 bg-[var(--surface-alt)] rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : error || repos.length === 0 ? (
            <div className="card max-w-md text-center py-8">
              <p className="text-[var(--text-secondary)] text-sm mb-4">
                {error
                  ? 'Unable to load GitHub data at the moment.'
                  : 'GitHub repositories will appear here.'}
              </p>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                View GitHub Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card group block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate">
                        {repo.name}
                      </h3>
                      <svg className="w-3.5 h-3.5 text-[var(--text-secondary)] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    {repo.description && (
                      <p className="text-xs text-[var(--text-secondary)] mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center gap-3 mt-auto">
                      {repo.language && (
                        <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              background:
                                repo.language === 'Python'
                                  ? '#3572A5'
                                  : repo.language === 'JavaScript'
                                  ? '#f1e05a'
                                  : repo.language === 'Java'
                                  ? '#b07219'
                                  : repo.language === 'HTML'
                                  ? '#e34c26'
                                  : repo.language === 'CSS'
                                  ? '#563d7c'
                                  : 'var(--accent)',
                            }}
                          />
                          <span className="font-mono">{repo.language}</span>
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                          ★ {repo.stargazers_count}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex"
              >
                View Full Profile
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
