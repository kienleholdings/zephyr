import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  d?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  m?: '1' | '2' | '3' | '4';
  noGutter?: boolean;
  t?: '1' | '2' | '3' | '4' | '5' | '6';
}

const generateColumnSize = (d: Props['d'], t: Props['t'], m: Props['m']): string => {
  let desktopStyle = '';
  let mobileStyle = '';
  let tabletStyle = '';
  if (d) {
    desktopStyle = `lg:w-${d}/12`;
  }
  if (m) {
    mobileStyle = `md:w-${d}/6`;
  }
  if (t) {
    tabletStyle = `w-${d}/4`;
  }

  return classNames(desktopStyle, mobileStyle, tabletStyle);
};

const Column: React.FC<Props> = ({ children, className, d, m, noGutter, t }) => (
  <div className={classNames(className, generateColumnSize(d, t, m), { 'px-16': !noGutter })}>
    {children}
  </div>
);

export default Column;
