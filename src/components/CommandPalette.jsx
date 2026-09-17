import { useState, useEffect, useRef, useCallback } from 'react';
import { commandPaletteItems } from '../data/portfolio';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const filtered = commandPaletteItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const execute = useCallback(
    (item) => {
      setOpen(false);
      setQuery('');
      if (item.action === 'navigate') {
        const el = document.querySelector(item.target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (item.action === 'external') {
        window.open(item.target, '_blank', 'noopener');
      }
    },
    []
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery('');
        setActiveIndex(0);
      }
      if (e.key === 'Escape') {
        setOpen(false);
        setQuery('');
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  const handleKeyNav = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % filtered.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
    } else if (e.key === 'Enter' && filtered[activeIndex]) {
      execute(filtered[activeIndex]);
    }
  };

  if (!open) return null;

  return (
    <div
      className="cmd-overlay"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setOpen(false);
          setQuery('');
        }
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
    >
      <div className="cmd-palette animate-fade-in">
        <div className="flex items-center border-b border-[var(--border)]">
          <span className="pl-4 text-[var(--text-secondary)] font-mono text-xs">⌘K</span>
          <input
            ref={inputRef}
            type="text"
            className="cmd-input flex-1"
            placeholder="Type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyNav}
            aria-label="Search commands"
          />
        </div>
        <div className="py-2 max-h-[300px] overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="px-5 py-3 text-sm text-[var(--text-secondary)]">No results found.</p>
          ) : (
            filtered.map((item, i) => (
              <div
                key={item.label}
                className={`cmd-item ${i === activeIndex ? 'active' : ''}`}
                onClick={() => execute(item)}
                role="option"
                aria-selected={i === activeIndex}
              >
                <span className="cmd-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))
          )}
        </div>
        <div className="flex items-center justify-between px-4 py-2.5 border-t border-[var(--border)] text-[10px] font-mono text-[var(--text-secondary)]">
          <span>↑↓ Navigate</span>
          <span>↵ Select</span>
          <span>Esc Close</span>
        </div>
      </div>
    </div>
  );
}
