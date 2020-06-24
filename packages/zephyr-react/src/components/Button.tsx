// We need to strictly enforce the button has type rule for accessibility, part of that rule
// involves button types being strings only, not variables. We used Typescript to strictly enforce
// the usage of only valid HTML button types, so for this file that rule is being disabled
/* eslint-disable react/button-has-type */

import React from 'react';
import classNames from 'classnames';
import _noop from 'lodash/noop';
import utilities from '../utilities';

interface Props {
  className?: string;
  onClick?: () => void;
  size?: 'normal' | 'small';
  theme: 'primary' | 'secondary';
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}

const Button: React.FC<Props> = ({
  children,
  className,
  onClick = _noop,
  size = 'normal',
  theme,
  type = 'button',
}) => (
  <button
    className={classNames(utilities.generateButtonStyles(size, theme), className)}
    onClick={onClick}
    type={type}
  >
    {children}
  </button>
);

export default Button;
