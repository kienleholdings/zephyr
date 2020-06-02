import React from 'react';
import classNames from 'classnames';

interface Props {
  noGutter?: boolean;
}

const Grid: React.FC<Props> = ({ children, noGutter }) => (
  <div className={classNames('flex', { '-mx-16': !noGutter })}>{children}</div>
);

export default Grid;
