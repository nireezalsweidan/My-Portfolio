export function Sparkle({ className = '', color = 'var(--sand)' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 2c1.4 8.6 5.4 14.4 18 18-12.6 3.6-16.6 9.4-18 18-1.4-8.6-5.4-14.4-18-18 12.6-3.6 16.6-9.4 18-18Z"
        fill={color}
      />
    </svg>
  );
}

export function Star({ className = '', color = 'var(--coral)' }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M20 0l4.5 13.3L38 20l-13.5 6.7L20 40l-4.5-13.3L2 20l13.5-6.7L20 0Z"
        fill={color}
      />
    </svg>
  );
}

export function CurlArrow({ className = '', color = 'var(--coral)' }) {
  return (
    <svg className={className} viewBox="0 0 120 100" fill="none" aria-hidden="true">
      <path
        d="M110 10C72 8 22 20 10 48c-10 23 8 44 34 44 20 0 28-14 24-30-4-16-22-20-33-12-10 7-8 24 6 28"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M95 30l16 12 12-10"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function Squiggle({ className = '', color = 'var(--coral)' }) {
  return (
    <svg className={className} viewBox="0 0 200 18" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path
        d="M2 12C20 3 36 15 54 12s34-10 52-8 34 11 50 4 34-8 42-4"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Orbit({ className = '', color = 'var(--teal)' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="2" strokeDasharray="4 7" />
      <circle cx="50" cy="6" r="7" fill={color} />
      <circle cx="92" cy="62" r="5" fill="var(--sand)" />
    </svg>
  );
}

export function Blob({ className = '', color = 'var(--coral-pale)' }) {
  return (
    <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
      <path
        d="M43.6 32.7C60 14.6 84.6 7 108.7 11.6c23.6 4.6 45.7 17.4 59.6 36.6 14 19.4 19.8 44.3 15 66.4-4.7 21.8-19.7 40.5-39.2 52-19.8 11.8-44.3 16.4-66.4 10-22.5-6.5-42.4-23-52.6-42.3C14.8 115.2 9.6 93.5 13.8 73.4c4-19.8 14.8-37.8 29.8-40.7Z"
        fill={color}
      />
    </svg>
  );
}

export function CodeBrackets({ className = '', color = 'var(--ink)' }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" aria-hidden="true">
      <path d="M22 8L6 30l16 22" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 8l16 22-16 22" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PlusDot({ className = '', color = 'var(--teal)' }) {
  return (
    <svg className={className} viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <path d="M15 4v22M4 15h22" stroke={color} strokeWidth="4.5" strokeLinecap="round" />
    </svg>
  );
}

export function DotsGrid({ className = '', color = 'var(--line-strong)' }) {
  const dots = [];
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 6; x += 1) {
      dots.push(<circle key={`${x}-${y}`} cx={10 + x * 20} cy={10 + y * 20} r="2.4" fill={color} />);
    }
  }
  return (
    <svg className={className} viewBox="0 0 120 80" fill="none" aria-hidden="true">
      {dots}
    </svg>
  );
}

export function SunBurst({ className = '', color = 'var(--sand)' }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <g key={angle} transform={`rotate(${angle} 50 50)`}>
          <path d="M50 8v18" stroke={color} strokeWidth="5" strokeLinecap="round" />
          <path d="M50 74v18" stroke={color} strokeWidth="5" strokeLinecap="round" opacity="0.5" />
        </g>
      ))}
      <circle cx="50" cy="50" r="9" fill={color} />
    </svg>
  );
}

export function WavyDivider({ fill = 'var(--bg-soft)' }) {
  return (
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 70h1440V30c-140-28-260 16-420 8S720 8 540 14C360 20 220 54 0 22v48Z"
        fill={fill}
      />
    </svg>
  );
}

export function WavyDividerB({ fill = 'var(--bg)' }) {
  return (
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
      <path
        d="M0 40C240 64 420 4 720 16c280 11 460 42 720 12v42H0V40Z"
        fill={fill}
      />
    </svg>
  );
}
