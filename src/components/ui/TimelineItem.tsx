import './TimelineItem.scss';

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  tech: string[];
  bullets: string[];
  isLast?: boolean;
}

/**
 * It renders a single employment timeline entry with role, company, period, bullet points and tech tags.
 * @param {TimelineItemProps} props - The employment details to display.
 * @returns
 */
const TimelineItem = ({
  company,
  role,
  period,
  tech,
  bullets,
  isLast = false,
}: TimelineItemProps) => {
  return (
    <div className={`timeline-item${isLast ? ' last' : ''}`}>
      <div className="timeline-item-rail">
        <span className="timeline-item-dot" />
      </div>
      <div className="timeline-item-content">
        <div className="timeline-item-header">
          <div>
            <h4 className="timeline-item-role">{role}</h4>
            <span className="timeline-item-company">{company}</span>
          </div>
          <span className="timeline-item-period">{period}</span>
        </div>
        <ul className="timeline-item-bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
        <div className="timeline-item-tech">
          {tech.map((t) => (
            <span key={t} className="timeline-item-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
