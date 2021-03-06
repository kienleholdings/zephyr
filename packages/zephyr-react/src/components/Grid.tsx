import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  noGutter?: boolean;
}

const Grid: React.FC<Props> = ({ children, className, noGutter }) => (
  <div
    className={classNames(
      'flex flex-wrap',
      { 'md:-mx-16': !noGutter, '-mx-8': !noGutter },
      className
    )}
  >
    {children}
  </div>
);

export default Grid;
