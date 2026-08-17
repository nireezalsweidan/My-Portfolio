import { useEffect, useRef } from 'react';

export default function Reveal({ children, variant = 'up', delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      data-variant={variant}
      style={{ '--reveal-delay': `${delay}s` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
