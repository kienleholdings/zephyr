import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => (
  <div className={classNames('bg-steam-normal shadow-2 rounded-partial', className)}>
    {children}
  </div>
);

export default Card;
