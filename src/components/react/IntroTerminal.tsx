import { useEffect, useRef, useState } from 'react';
import { AnimatedSpan, Terminal, TypingAnimation } from '../ui/terminal';
import '../../styles/intro-terminal.css';

const INTRO_DURATION_MS = 5000;
const EXIT_DURATION_MS = 250;

export default function IntroTerminal() {
  const [active, setActive] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const skipRef = useRef<HTMLButtonElement>(null);
  const dismissRef = useRef<() => void>(() => {});

  useEffect(() => {
    const root = document.documentElement;
    // The early script prevents a content flash on every page load.
    if (!root.classList.contains('terminal-intro-active')) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(reduce);
    setActive(true);
    const previousFocus = document.activeElement;
    const content = document.getElementById('portfolio-content');
    const wasInert = content?.inert ?? false;
    if (content) content.inert = true;
    let done = false;
    let exitTimer: ReturnType<typeof setTimeout>;
    const unlock = () => {
      root.classList.remove('terminal-intro-active');
      root.classList.remove('terminal-intro-revealing');
      if (content) content.inert = wasInert;
    };
    const remove = () => {
      const hadFocus = document.activeElement === skipRef.current;
      unlock();
      setActive(false);
      if (hadFocus) {
        if (previousFocus instanceof HTMLElement && previousFocus !== document.body) {
          previousFocus.focus({ preventScroll: true });
        } else content?.focus({ preventScroll: true });
      }
    };
    const finish = (immediate = false) => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      setLeaving(true);
      root.classList.add('terminal-intro-revealing');
      if (immediate || reduce) remove();
      else exitTimer = setTimeout(remove, EXIT_DURATION_MS);
    };
    dismissRef.current = () => finish(true);
    const timer = setTimeout(() => finish(), INTRO_DURATION_MS - (reduce ? 0 : EXIT_DURATION_MS));
    const onKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish(true);
      if (event.key === 'Tab' && !done) { event.preventDefault(); skipRef.current?.focus(); }
    };
    const onPageHide = () => { finish(true); clearTimeout(exitTimer); unlock(); };
    document.addEventListener('keydown', onKeydown);
    window.addEventListener('pagehide', onPageHide);
    // React now owns the timer; release the pre-hydration fallback.
    window.dispatchEvent(new Event('terminal-intro:ready'));
    return () => {
      clearTimeout(timer);
      clearTimeout(exitTimer);
      document.removeEventListener('keydown', onKeydown);
      window.removeEventListener('pagehide', onPageHide);
      unlock();
    };
  }, []);

  useEffect(() => { if (active) skipRef.current?.focus({ preventScroll: true }); }, [active]);

  return (
    <section id="terminal-intro" className={leaving ? 'is-leaving' : ''} aria-label="Bienvenida al portafolio" lang="es">
      <div className="intro-shell">
        <header className="intro-identity">
          <span className="intro-brand-mark" aria-hidden="true">✦</span>
          <div><p className="intro-name">Darlynzen</p><p className="intro-role">Software Developer</p></div>
        </header>
        <div aria-hidden="true">
          <Terminal title="~/darlynzen" className="intro-terminal-window" startOnView={false} sequence={!reducedMotion}>
            {active && (reducedMotion ? <span className="intro-static-text">Hola, soy Darlynzen. Bienvenid@ a mi portafolio.</span> : <TypingAnimation duration={30} className="intro-terminal-line intro-command"> npm install darlynzen.portfolio</TypingAnimation>)}
            {active && !reducedMotion && <AnimatedSpan className="intro-terminal-line intro-output" initial={{ opacity: 0 }} transition={{ duration: 0.2 }}>✓ Updating design...</AnimatedSpan>}
            {active && !reducedMotion && <AnimatedSpan className="intro-terminal-line intro-output" initial={{ opacity: 0 }} transition={{ duration: 0.2 }}>✓ Verifying data...</AnimatedSpan>}
            {active && !reducedMotion && <AnimatedSpan className="intro-terminal-line intro-output" initial={{ opacity: 0 }} transition={{ duration: 0.2 }}>✓ Installing dependencies...</AnimatedSpan>}
            {active && !reducedMotion && <AnimatedSpan className="intro-terminal-line intro-output" initial={{ opacity: 0 }} transition={{ duration: 0.2 }}><span>ℹ Updated 1 file:</span><span className="intro-updated-file">- lib/theme.ts</span></AnimatedSpan>}
            {active && !reducedMotion && <AnimatedSpan className="intro-terminal-line intro-success" initial={{ opacity: 0 }} transition={{ duration: 0.2 }}>
              <span>Success! Project initialization completed</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.725 8.156c1.55-.918 2.326-1.377 2.895-1.051c.57.325.556 1.22.529 3.01l-.007.463c-.008.509-.012.763.083.986c.095.224.277.391.643.726l.332.305c1.286 1.178 1.93 1.766 1.778 2.428c-.15.661-.995.957-2.684 1.548l-.437.153c-.48.169-.72.253-.904.421c-.184.169-.291.402-.506.87l-.196.426c-.756 1.646-1.134 2.47-1.796 2.553c-.663.082-1.171-.63-2.188-2.054l-.263-.368c-.289-.405-.433-.607-.642-.727c-.208-.119-.457-.142-.956-.187l-.453-.042c-1.753-.16-2.63-.24-2.888-.85c-.259-.61.271-1.347 1.332-2.818l.275-.381c.301-.418.452-.627.507-.87c.055-.242.009-.49-.084-.986l-.085-.451c-.328-1.746-.492-2.618.011-3.078c.503-.46 1.339-.203 3.011.311l.433.134c.475.146.713.219.955.188c.243-.03.463-.16.904-.421l.4-.238Z" />
                  <path strokeLinecap="round" d="M13.5 6.5L13 6M9.5 2.5l2 2m-5 2L4 4m2 8l-1.5-1.5M2 8l.5.5" opacity=".5" />
                </g>
              </svg>
            </AnimatedSpan>}
          </Terminal>
        </div>
        <p className="intro-sr-only" role="status">Bienvenido al portafolio de Darlynzen. La introducción dura cinco segundos.</p>
        <div className="intro-footer"><button ref={skipRef} type="button" onClick={() => dismissRef.current()}>Saltar</button></div>
      </div>
    </section>
  );
}
