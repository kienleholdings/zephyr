import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const Card: React.FC<Props> = ({ children, className }) => (
  <div
    className={classNames(
      'light:bg-light-bg-normal dark:bg-dark-bg-normal shadow-2 rounded-partial',
      className
    )}
  >
    {children}
  </div>
);

export default Card;
