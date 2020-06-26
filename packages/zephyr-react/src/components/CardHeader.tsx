import React from 'react';
import classNames from 'classnames';
import utilities from '../utilities';

interface Props {
  className?: string;
}

const CardHeader: React.FC<Props> = ({ children, className }) => (
  <div
    className={classNames(
      'border-ash-normal border-b h-72 p-24',
      utilities.generateTextStyles('heading-small', 'light'),
      className
    )}
  >
    {children}
  </div>
);

export default CardHeader;
