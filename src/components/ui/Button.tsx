import type { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

/**
 * It renders a button or anchor element styled as a button with primary or ghost variants.
 * @param {ButtonProps} props - The button variant, href, click handler and content.
 * @returns
 */
const Button = ({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
}: ButtonProps) => {
  const cls = `btn btn-${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
