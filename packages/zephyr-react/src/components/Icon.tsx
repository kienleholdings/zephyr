import React from 'react';
import classNames from 'classnames';

// Icons here come from https://heroicons.com/
export const close = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const spinner = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-50" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

interface Props {
  name: 'close' | 'spinner';
  size: 'normal' | 'modal' | 'full';
}

export const mapIconToProp = (name: Props['name']): React.ReactElement => {
  switch (name) {
    case 'close':
      return close;
    case 'spinner':
      return spinner;
    default:
      return <div className="bg-danger-normal h-full w-full" />;
  }
};

export const mapSizeToProp = (size: Props['size']): string => {
  switch (size) {
    case 'modal':
      return 'h-24 w-24';
    case 'full':
      return 'h-full w-full';
    case 'normal':
    default:
      return 'h-32 w-32';
  }
};

const Icon: React.FC<Props> = ({ name, size }) => (
  <span className={classNames('inline-block', mapSizeToProp(size))}>{mapIconToProp(name)}</span>
);

export default Icon;
