import { Component, useEffect, useRef, useState, type ReactNode } from 'react';
import Dither from './Dither';

class BackgroundFallback extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() { return this.state.failed ? null : this.props.children; }
}

export default function InicioBackground() {
  const container = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [paused, setPaused] = useState(true);

  useEffect(() => {
    const element = container.current;
    if (!element) return;
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    const update = () => {
      const canAnimate = inView && !document.hidden && !reducedMotion.matches
        && !document.documentElement.classList.contains('terminal-intro-active');
      if (canAnimate) setReady(true);
      setPaused(!canAnimate);
    };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; update(); });
    observer.observe(element);
    const terminalObserver = new MutationObserver(update);
    terminalObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    reducedMotion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      terminalObserver.disconnect();
      reducedMotion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <div ref={container} className="h-full w-full opacity-25 motion-reduce:opacity-0">
      <BackgroundFallback>
        {ready && <Dither paused={paused} waveSpeed={0.025} waveFrequency={1.6}
          waveAmplitude={0.15} colorNum={3.1} pixelSize={2}
          waveColor={[65 / 255, 58 / 255, 112 / 255]}
          backgroundColor={[5 / 255, 9 / 255, 28 / 255]}
          enableMouseInteraction={false} mouseRadius={0.1} />}
      </BackgroundFallback>
    </div>
  );
}
