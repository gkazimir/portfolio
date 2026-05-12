import { useEffect, useRef, useState } from 'react';
import './SkillCard.scss';

export type SkillLevel = 'Advanced' | 'Intermediate' | 'Learning' | 'Familiar';

const levelColorMap: Record<SkillLevel, string> = {
  Advanced: '#22c55e',
  Intermediate: '#38bdf8',
  Learning: '#a78bfa',
  Familiar: '#8c939f',
};

interface SkillCardProps {
  name: string;
  level: SkillLevel;
  progress: number;
}

/**
 * It renders a skill card with a name, level label and animated progress bar.
 * Animates the bar when the card enters the viewport.
 * @param {SkillCardProps} props - The skill name, level and progress percentage.
 * @returns
 */
const SkillCard = ({ name, level, progress }: SkillCardProps) => {
  const color = levelColorMap[level];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    /**
     * IntersectionObserver to detect when the skill card is visible in the viewport.
     * When the card becomes visible, it sets the visible state to true and disconnects the observer.
     */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-card" ref={ref}>
      <div className="skill-card-body">
        <div className="skill-card-header">
          <span className="skill-card-name">{name}</span>
          <span className="skill-card-level" style={{ color }}>
            {level}
          </span>
        </div>
        <div
          className="skill-card-track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${name} proficiency: ${level}`}
        >
          <div
            className="skill-card-fill"
            style={{
              width: visible ? `${progress}%` : '0%',
              backgroundColor: color,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
