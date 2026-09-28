import { useEffect, useState, type CSSProperties } from 'react';

type ClickSparkProps = {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  extraScale?: number;
};

type Spark = {
  id: number;
  x: number;
  y: number;
  angle: number;
};

export default function ClickSpark({
  sparkColor = '#9151fc',
  sparkSize = 8,
  sparkRadius = 15,
  sparkCount = 7,
  duration = 900,
  extraScale = 0.9,
}: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const timers = new Set<number>();
    let nextId = 0;

    const handleClick = (event: MouseEvent) => {
      if (motionQuery.matches || document.documentElement.classList.contains('terminal-intro-active')) return;

      const target = event.target;
      if (target instanceof Element && target.closest('[data-click-spark-ignore]')) return;

      const nextSparks = Array.from({ length: sparkCount }, (_, index) => ({
        id: nextId++,
        x: event.clientX,
        y: event.clientY,
        angle: (360 / sparkCount) * index + Math.random() * 14 - 7,
      }));

      setSparks((current) => [...current, ...nextSparks].slice(-(sparkCount * 3)));
      const timer = window.setTimeout(() => {
        const ids = new Set(nextSparks.map((spark) => spark.id));
        setSparks((current) => current.filter((spark) => !ids.has(spark.id)));
        timers.delete(timer);
      }, duration + 40);
      timers.add(timer);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [duration, sparkCount]);

  return (
    <>
      <div className="click-spark-layer" aria-hidden="true">
        {sparks.map((spark) => {
          const style = {
            '--spark-x': `${spark.x}px`,
            '--spark-y': `${spark.y}px`,
            '--spark-angle': `${spark.angle}deg`,
            '--spark-size': `${sparkSize}px`,
            '--spark-radius': `${sparkRadius * extraScale}px`,
            '--spark-duration': `${duration}ms`,
            '--spark-color': sparkColor,
          } as CSSProperties;

          return <span key={spark.id} className="click-spark-ray" style={style} />;
        })}
      </div>

      <style>{`
  .click-spark-layer {
    position: fixed;
    inset: 0;
    z-index: 100;
    pointer-events: none;
    overflow: hidden;
  }

  .click-spark-ray {
    position: absolute;
    top: var(--spark-y);
    left: var(--spark-x);
    width: var(--spark-size);
    height: 2px;
    border-radius: 999px;
    background: var(--spark-color);
    box-shadow: 0 0 8px color-mix(in srgb, var(--spark-color) 65%, transparent);
    transform-origin: left center;
    animation: click-spark-ray var(--spark-duration) cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes click-spark-ray {
    0% {
      opacity: 0;
      transform: rotate(var(--spark-angle)) translateX(0) scaleX(0.3);
    }
    15% {
      opacity: 0.9;
    }
    100% {
      opacity: 0;
      transform: rotate(var(--spark-angle)) translateX(var(--spark-radius)) scaleX(1);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .click-spark-layer {
      display: none;
    }
  }
      `}</style>
    </>
  );
}
