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
  theme: 'primary' | 'secondary';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

export const generateButtonClassNames = (theme: Props['theme']): string => {
  const commonStyles =
    'py-16 px-48 rounded-partial shadow-1 hover:shadow-2 active:shadow-0 transition duration-75 h-56 font-body text-body leading-body';
  let themeStyles = '';
  if (theme === 'primary') {
    themeStyles =
      'bg-charcoal-normal border-charcoal-normal active:bg-charcoal-dark hover:bg-charcoal-light text-steam-normal';
  } else if (theme === 'secondary') {
    themeStyles =
      'border border-ash-normal bg-steam-normal active:bg-ash-normal text-charcoal-normal hover:text-charcoal-light active:text-charcoal-dark';
  } else {
    // If a developer is using something besides typescript, they might try to use an invalid theme
    // eslint-disable-next-line no-console
    console.error(`Zephyr Error: Unknown button theme ${theme}`);
  }
  return classNames(commonStyles, themeStyles);
};

const Button: React.FC<Props> = ({
  children,
  className,
  onClick = _noop,
  theme,
  type = 'button',
}) => (
  <button
    className={classNames(generateButtonClassNames(theme), className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
