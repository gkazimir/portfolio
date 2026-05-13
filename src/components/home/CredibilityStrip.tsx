import './CredibilityStrip.scss';

const items: string[] = [
  '4 years in frontend',
  'Angular-first development',
  'Enterprise internal products',
];

const CredibilityStrip = () => (
  <div className="cred-strip">
    <div className="cred-strip-inner">
      {items.map((item, i) => (
        <span key={i} className="cred-strip-item">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default CredibilityStrip;
