import React from 'react';
import classNames from 'classnames';
import utilities from '../utilities';

interface Props {
  className?: string;
  theme: 'error';
}

const Alert: React.FC<Props> = ({ children, className, theme }) => (
  <div className={classNames(utilities.generateAlertStyles(theme), className)}>{children}</div>
);

export default Alert;
