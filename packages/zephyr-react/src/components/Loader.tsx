import React from 'react';
import classNames from 'classnames';

import Icon from './Icon';

interface Props {
  container?: boolean;
  size?: 'small' | 'normal';
}

const mapSizeToPx = (size: Props['size']) => {
  let parsedSize = '';
  switch (size) {
    case 'small':
      parsedSize = 'h-24 w-24';
      break;
    case 'normal':
    default:
      parsedSize = 'h-64 w-64';
  }
  return parsedSize;
};

const Loader: React.FC<Props> = ({ container, size = 'normal' }) => (
  <div
    className={classNames({
      flex: container,
      'h-full': container,
      'p-32': container,
      'w-full': container,
      'justify-center': container,
    })}
  >
    <div
      className={classNames(
        'animate-spin light:text-light-fg-normal dark:text-dark-fg-normal',
        mapSizeToPx(size)
      )}
    >
      <Icon name="spinner" size="full" />
    </div>
  </div>
);

export default Loader;
