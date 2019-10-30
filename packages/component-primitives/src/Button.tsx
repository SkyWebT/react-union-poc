import React from 'react';

import icons from './icons';

interface Props {
  icon?: keyof typeof icons;
  status?: 'primary' | 'secondary' | 'active';
  block?: boolean;
}

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  icon,
  status = 'primary',
  block = false,
  ...rest
}) => {
  return (
    <button className={`sx-btn sx-btn--${status} ${block ? 'sx-btn--block' : ''}`}  {...rest}>
      <span className="sx-btn-label">{children}</span>
      {icon && icons[icon]}
    </button>
  );
};

export default Button;
