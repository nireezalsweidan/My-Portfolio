import Reveal from './Reveal';

export default function SectionTitle({ kicker, title, sub, align = 'left' }) {
  return (
    <div className={`section-head ${align === 'center' ? 'section-head-center' : ''}`}>
      <Reveal>
        <span className="section-kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="section-title">{title}</h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className="section-sub">{sub}</p>
        </Reveal>
      )}
    </div>
  );
}
