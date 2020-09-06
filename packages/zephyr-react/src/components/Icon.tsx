import React from 'react';
import classNames from 'classnames';

// Icons here come from https://heroicons.com/
export const close = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

interface Props {
  name: 'close';
  size: 'normal' | 'modal';
}

export const mapIconToProp = (name: Props['name']): JSX.Element => {
  switch (name) {
    case 'close':
      return close;
    default:
      return <div className="bg-danger-normal h-full w-full" />;
  }
};

export const mapSizeToProp = (size: Props['size']): string => {
  switch (size) {
    case 'modal':
      return 'h-24 w-24';
    case 'normal':
    default:
      return 'h-32 w-32';
  }
};

const Icon: React.FC<Props> = ({ name, size }) => (
  <span className={classNames('inline-block', mapSizeToProp(size))}>{mapIconToProp(name)}</span>
);

export default Icon;
