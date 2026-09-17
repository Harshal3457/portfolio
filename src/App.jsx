import { useEffect } from 'react';
import { useTheme } from './hooks/useTheme';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Engineering from './components/Engineering';
import GitHubActivity from './components/GitHubActivity';
import Stack from './components/Stack';
import TechExpertise from './components/TechExpertise';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  // Easter egg: typing "harshal" triggers a subtle visual
  useEffect(() => {
    let buffer = '';
    const target = 'harshal';

    const handleKeyPress = (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      buffer += e.key.toLowerCase();
      if (buffer.length > target.length) {
        buffer = buffer.slice(-target.length);
      }

      if (buffer === target) {
        buffer = '';
        // Subtle console Easter egg
        console.log(
          '%c🚀 Built by Harshal Chaudhari — Python Full Stack Developer',
          'color: #10b981; font-size: 14px; font-weight: bold; font-family: monospace;'
        );
        console.log(
          '%cReact.js → FastAPI → PostgreSQL',
          'color: #71717a; font-size: 11px; font-family: monospace;'
        );

        // Brief visual flash on accent elements
        document.documentElement.style.setProperty('--accent', '#34d399');
        setTimeout(() => {
          document.documentElement.style.setProperty(
            '--accent',
            theme === 'dark' ? '#10b981' : '#059669'
          );
        }, 1500);
      }
    };

    document.addEventListener('keypress', handleKeyPress);
    return () => document.removeEventListener('keypress', handleKeyPress);
  }, [theme]);

  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <CommandPalette />
      <Navigation theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <TechExpertise />
        <Experience />
        <Engineering />
        <GitHubActivity />
        <Stack />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
