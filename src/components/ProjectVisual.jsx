function Bars({ palette, bars = [30, 55, 40, 70, 50, 85, 60] }) {
  return (
    <div className="pv-bars" aria-hidden="true">
      {bars.map((h, i) => (
        <span
          key={i}
          style={{
            height: `${h}%`,
            background: i % 3 === 0 ? palette[0] : i % 3 === 1 ? palette[1] : palette[2],
          }}
        />
      ))}
    </div>
  );
}

function DashboardMock({ palette }) {
  return (
    <div className="pv-body" aria-hidden="true">
      <div className="pv-sidebar">
        <span className="pv-logo" style={{ background: palette[0] }} />
        {[0, 1, 2, 3].map((n) => (
          <span key={n} className="pv-side-item" style={{ opacity: 1 - n * 0.18 }} />
        ))}
      </div>
      <div className="pv-main">
        <div className="pv-stat-row">
          <span className="pv-stat" style={{ borderColor: palette[1] }}>
            <i style={{ background: palette[0] }} />
            <b style={{ background: palette[1] }} />
          </span>
          <span className="pv-stat">
            <i style={{ background: palette[1] }} />
            <b style={{ background: palette[2] }} />
          </span>
          <span className="pv-stat">
            <i style={{ background: palette[0] }} />
            <b style={{ background: palette[1] }} />
          </span>
        </div>
        <Bars palette={palette} />
      </div>
    </div>
  );
}

function BookingMock({ palette }) {
  return (
    <div className="pv-body pv-booking" aria-hidden="true">
      <div className="pv-cal">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
          <span key={i} className="pv-cal-day" style={i === 3 ? { background: palette[0], color: '#fff' } : undefined}>
            {d}
          </span>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="pv-cal-cell"
            style={i === 6 || i === 9 ? { background: palette[1], opacity: 0.85 } : undefined}
          />
        ))}
      </div>
      <div className="pv-trainers">
        {[0, 1, 2].map((n) => (
          <span key={n} className="pv-trainer">
            <i style={{ background: n === 1 ? palette[0] : palette[1] }} />
            <b style={{ background: palette[2] }} />
          </span>
        ))}
      </div>
    </div>
  );
}

function WaveMock({ palette, waveform = true }) {
  const bars = Array.from({ length: 26 }).map((_, i) => {
    const h = 22 + Math.abs(Math.sin(i * 1.2)) * 70;
    return { h, c: i % 4 === 0 ? palette[0] : i % 4 === 1 ? palette[1] : palette[2] };
  });
  return (
    <div className="pv-wave-wrap" aria-hidden="true">
      <div className="pv-wave">
        {bars.map((bar, i) => (
          <span key={i} style={{ height: `${bar.h}%`, background: bar.c }} />
        ))}
      </div>
      {waveform && (
        <div className="pv-wave-row">
          {[0, 1, 2, 3, 4].map((n) => (
            <span key={n} style={{ width: `${100 - n * 14}%` }} />
          ))}
        </div>
      )}
    </div>
  );
}

function HouseMock({ palette }) {
  return (
    <div className="pv-house-wrap" aria-hidden="true">
      <div className="pv-house" style={{ color: palette[0] }}>
        <svg viewBox="0 0 100 82" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 42 50 8l42 34" />
          <path d="M18 36v38h64V36" />
          <path d="M40 74V52h20v22" />
        </svg>
      </div>
      <div className="pv-house-bars">
        <span style={{ background: palette[0] }} />
        <span style={{ background: palette[1] }} />
        <span style={{ background: palette[2] }} />
        <span style={{ background: palette[0] }} />
      </div>
    </div>
  );
}

// ProjectVisual.jsx

// (Add this near your other mock components: DashboardMock, BookingMock, etc.)

function LobbyMock({ palette }) {
  const accent1 = palette[0]; // E76F51 (Coral)
  const accent2 = palette[1]; // F4A261 (Orange)

  // Dummy chat messages (left/right alignment)
  const messages = [
    { side: 'left', opacity: 1, c: '#E9E3D8' },
    { side: 'right', opacity: 1, c: accent1 },
    { side: 'left', opacity: 0.8, c: '#E9E3D8' },
    { side: 'right', opacity: 0.6, c: accent2 },
  ];

  return (
    <div className="pv-body pv-lobby" aria-hidden="true">
      {/* Sidebar: Servers & Connected Users */}
      <div className="pv-sidebar">
        <span className="pv-logo" style={{ background: accent1 }} />
        {/* 'Connect' Indicator */}
        <span className="pv-side-item" style={{ background: accent1, height: '14px' }} />
        {[0, 1, 2].map((n) => (
          <span
            key={n}
            className="pv-side-item"
            style={{ opacity: 1 - (n + 1) * 0.2, height: '8px' }}
          />
        ))}
      </div>

      {/* Main Area: Chat & Status */}
      <div className="pv-main pv-lobby-main">
        {/* Top Status Bar: Audio, Users, Guest Link */}
        <div className="pv-stat-row pv-lobby-status">
          <div className="pv-lobby-indicators">
            {/* Audio Call indicator (glowing) */}
            <span className="pv-status-indicator" style={{ background: '#2A9D8F' }} />
            {/* Scren Share indicator */}
            <span className="pv-status-indicator" style={{ background: '#4F46E5' }} />
          </div>
          {/* Faked connected user dots */}
          <div className="pv-lobby-users">
            <b style={{ background: accent1 }} />
            <b style={{ background: accent2 }} />
            <b style={{ background: '#9C8E7C' }} />
          </div>
          {/* Guest Link placeholder */}
          <span className="pv-lobby-link" />
        </div>

        {/* The "WaveMock" section, repurposed to show active audio streams */}
        <div className="pv-lobby-audio">
          {/* Active Speaker (Coral) */}
          <WaveMock palette={[accent1, '#E9E3D8', '#E9E3D8']} waveform={false} />
        </div>

        {/* The Chat Input area (Faked messages) */}
        <div className="pv-lobby-chat">
          {messages.map((msg, i) => (
            <div key={i} className={`pv-msg-wrap pv-msg-${msg.side}`}>
              <i style={{ background: msg.side === 'left' ? '#9C8E7C' : accent1 }} />
              <b style={{ background: msg.c, opacity: msg.opacity }} />
            </div>
          ))}
          <div className="pv-chat-input" />
        </div>
      </div>
    </div>
  );
}

function BlogMock({ palette }) {
  return (
    <div className="pv-body pv-blog" aria-hidden="true">
      <div className="pv-blog-feature">
        <span className="pv-blog-thumb" style={{ background: palette[0] }} />
        <span className="pv-blog-feature-title" />
        <span className="pv-blog-feature-line" />
      </div>
      <div className="pv-blog-list">
        {[0, 1, 2].map((n) => (
          <div key={n} className="pv-blog-row">
            <span
              className="pv-blog-row-thumb"
              style={{ background: n === 0 ? palette[1] : n === 1 ? palette[0] : palette[2] }}
            />
            <div className="pv-blog-row-lines">
              <span className="pv-blog-row-title" />
              <span className="pv-blog-row-meta" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CatalogMock({ palette }) {
  return (
    <div className="pv-body pv-catalog" aria-hidden="true">
      <div className="pv-catalog-grid">
        {[0, 1, 2, 3].map((n) => (
          <div key={n} className="pv-catalog-item">
            <span
              className="pv-catalog-thumb"
              style={{ background: n % 2 === 0 ? palette[0] : palette[1] }}
            />
            <span className="pv-catalog-name" />
            <span className="pv-catalog-price" style={{ color: palette[0] }}>
              $--
            </span>
          </div>
        ))}
      </div>
      <div className="pv-catalog-cart">
        <span className="pv-catalog-cart-icon" style={{ background: palette[0] }} />
        <span className="pv-catalog-cart-line" />
      </div>
    </div>
  );
}

const mocks = {
  pos: DashboardMock,
  booking: BookingMock,
  audio: WaveMock,
  house: HouseMock,
  clinic: BookingMock,
  lobby: LobbyMock,
  blog: BlogMock,
  catalog: CatalogMock,
};

export default function ProjectVisual({ project, className = '' }) {
  const Mock = mocks[project.mock] || DashboardMock;
  const pal = project.palette;
  return (
    <div className={`pv ${className}`} aria-hidden="true">
      <div className="pv-top">
        <span className="pv-brand" style={{ color: pal[0] }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="3" />
            <path d="M4 9h16M9 4v16" />
          </svg>
          {project.title.toLowerCase()}
        </span>
        <span className="pv-dot" style={{ background: pal[0] }} />
      </div>
      {project.image ? (
        <img src={project.image} alt={`${project.title} preview`} className="pv-image" loading="lazy" />
      ) : (
        <Mock palette={pal} />
      )}
    </div>
  );
}

export function FeaturedVisual({ project }) {
  return (
    <div className="pv-featured">
      <div className="pv-featured-top">
        <span className="pv-dot" style={{ background: project.palette[0] }} />
        <span className="pv-dot" style={{ background: project.palette[1] }} />
        <span className="pv-dot" style={{ background: '#9c8e7c' }} />
        <span className="pv-addr">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <rect x="3" y="2.5" width="10" height="11" rx="2" />
            <path d="M2.5 8h11M6 2.5v11" />
          </svg>
          StoreFlow — Point of Sale
        </span>
      </div>
      {project.image ? (
        <img src={project.image} alt={`${project.title} preview`} className="pv-featured-image" loading="lazy" />
      ) : (
        <div className="pv-featured-body">
          <div className="pv-featured-side">
            <span className="pv-featured-side-logo" style={{ color: project.palette[0] }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M4 9h16M9 4v16" />
              </svg>
            </span>
            <span className="pv-featured-side-item" style={{ background: project.palette[0] }} />
            <span className="pv-featured-side-item" style={{ background: project.palette[1] }} />
            <span className="pv-featured-side-item" style={{ background: 'var(--line-strong)' }} />
            <span className="pv-featured-side-item" style={{ background: 'var(--line-strong)' }} />
          </div>
          <div className="pv-featured-main">
            <div className="pv-fcard" style={{ borderColor: 'rgba(231,111,81,0.4)' }}>
              <span className="pv-fcard-head" style={{ background: project.palette[0] }} />
              <span className="pv-frow" />
              <span className="pv-frow" />
              <span className="pv-frow" style={{ width: '60%' }} />
            </div>
            <div className="pv-fcard" style={{ borderColor: 'rgba(244,162,97,0.45)' }}>
              <span className="pv-fcard-head" style={{ background: project.palette[1] }} />
              <span className="pv-frow" />
              <span className="pv-frow" />
              <span className="pv-frow" style={{ width: '75%' }} />
            </div>
            <div className="pv-fcard pv-fcard-wide">
              <span className="pv-fcard-head" style={{ background: project.palette[2] }} />
              <Bars palette={project.palette} bars={[40, 65, 50, 80, 60]} />
            </div>
          </div>
        </div>
      )}
      <div className="pv-featured-status">
        <span className="pv-status-dot" style={{ background: '#2A9D8F' }} />
        <span>system online · demo ready</span>
      </div>
    </div>
  );
}