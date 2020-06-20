import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const CardHeader: React.FC<Props> = ({ children, className }) => (
  <div
    className={classNames(
      'border-ash-normal border-b font-display font-body h-72 p-24  leading-body text-body',
      className
    )}
  >
    {children}
  </div>
);

export default CardHeader;
