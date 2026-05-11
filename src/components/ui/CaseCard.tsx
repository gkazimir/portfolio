import './CaseCard.scss';

interface CaseCardProps {
  category: string;
  title: string;
  context: string;
  ownership: string;
  impact: string;
  tech: string[];
}

/**
 * It renders a case study card with category, title, context, ownership, impact and tech tags.
 * @param {CaseCardProps} props - The case study data to display.
 * @returns
 */
const CaseCard = ({
  category,
  title,
  context,
  ownership,
  impact,
  tech,
}: CaseCardProps) => {
  return (
    <article className="case-card">
      <span className="case-card-category">{category}</span>
      <h3 className="case-card-title">{title}</h3>
      <p className="case-card-context">{context}</p>
      <div className="case-card-divider" />
      <p className="case-card-ownership">{ownership}</p>
      <blockquote className="case-card-impact">{impact}</blockquote>
      <div className="case-card-tech">
        {tech.map((t) => (
          <span key={t} className="case-card-tag">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
};

export default CaseCard;
