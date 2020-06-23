import React from 'react';
import classNames from 'classnames';

interface Props {
  container?: boolean;
  size?: 'small' | 'normal';
}

const Loader: React.FC<Props> = ({ container, size = 'normal' }) => (
  <div
    className={classNames({
      flex: container,
      'p-32': container,
      'w-full': container,
      'justify-center': container,
    })}
  >
    <div className={classNames(`h-64 w-64 spinner-${size}`)} />
  </div>
);

export default Loader;
