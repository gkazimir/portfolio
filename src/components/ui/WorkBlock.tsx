import './WorkBlock.scss';

interface WorkBlockProps {
  category: string;
  title: string;
  description: string;
  tech: string[];
}

/**
 * It renders a single work case study block with category, title, description and tech tags.
 * @param {WorkBlockProps} props - The work area category, title, description and tech stack.
 * @returns
 */
const WorkBlock = ({ category, title, description, tech }: WorkBlockProps) => {
  return (
    <div className="work-block">
      <span className="work-block-category">{category}</span>
      <h3 className="work-block-title">{title}</h3>
      <p className="work-block-desc">{description}</p>
      <div className="work-block-tech">
        {tech.map((t) => (
          <span key={t} className="work-block-tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WorkBlock;
