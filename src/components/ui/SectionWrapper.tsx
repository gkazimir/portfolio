import { useEffect, useRef, useState, type ReactNode } from 'react';
import './SectionWrapper.scss';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  alt?: boolean;
  children: ReactNode;
}

/**
 * It wraps a section with an IntersectionObserver to animate it in when it enters the viewport.
 * @param {SectionWrapperProps} props - The props for the section.
 * @returns
 */
const SectionWrapper = ({
  id,
  className = '',
  alt = false,
  children,
}: SectionWrapperProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /**
     * IntersectionObserver to detect when the section is visible in the viewport.
     * When the section becomes visible, it sets the visible state to true and disconnects the observer.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classNames = [
    'section',
    alt ? 'section-alt' : '',
    visible ? 'visible' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={id} ref={ref} className={classNames}>
      <div className="section-inner">{children}</div>
    </section>
  );
};

export default SectionWrapper;
