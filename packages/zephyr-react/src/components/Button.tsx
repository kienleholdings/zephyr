// We need to strictly enforce the button has type rule for accessibility, part of that rule
// involves button types being strings only, not variables. We used Typescript to strictly enforce
// the usage of only valid HTML button types, so for this file that rule is being disabled
/* eslint-disable react/button-has-type */

import React from 'react';
import classNames from 'classnames';
import _noop from 'lodash/noop';

interface Props {
  className?: string;
  onClick?: () => void;
  size?: 'normal' | 'small';
  theme: 'primary' | 'secondary';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const generateButtonClassNames = (size: Props['size'], theme: Props['theme']): string => {
  const commonStyles =
    'rounded-partial shadow-1 hover:shadow-2 active:shadow-0 transition duration-75 font-body text-body leading-body';
  let sizeStyles = '';
  switch (size) {
    case 'normal':
      sizeStyles = 'h-56 py-16 px-48';
      break;
    case 'small':
      sizeStyles = 'h-40 py-8 px-24';
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown button size ${size}`);
  }

  let themeStyles = '';
  switch (theme) {
    case 'primary':
      themeStyles =
        'bg-primary-normal active:bg-primary-dark hover:bg-primary-light text-steam-normal';
      break;
    case 'secondary':
      themeStyles =
        'bg-steam-normal active:bg-ash-normal text-primary-normal hover:text-primary-light active:text-primary-dark';
      break;
    default:
      // eslint-disable-next-line no-console
      console.error(`Zephyr Error: Unknown button theme ${theme}`);
  }
  return classNames(commonStyles, sizeStyles, themeStyles);
};

const Button: React.FC<Props> = ({
  children,
  className,
  onClick = _noop,
  size = 'normal',
  theme,
  type = 'button',
}) => (
  <button
    className={classNames(generateButtonClassNames(size, theme), className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
