import React from 'react';
import classNames from 'classnames';

interface Props {
  a?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  d?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';
  m?: '1' | '2' | '3' | '4';
  t?: '1' | '2' | '3' | '4' | '5' | '6';
  className?: string;
  noGutter?: boolean;
}

const generateColumnSize = (a: Props['a'], d: Props['d'], t: Props['t'], m: Props['m']): string => {
  let anyStyle = '';
  let desktopStyle = '';
  let mobileStyle = '';
  let tabletStyle = '';
  if (a) {
    anyStyle = `w-${a}/12`;
  }
  if (d) {
    desktopStyle = `lg:w-${d}/12`;
  }
  if (m) {
    mobileStyle = `w-${m}/4`;
  }
  if (t) {
    tabletStyle = `md:w-${t}/6`;
  }

  return classNames(anyStyle, desktopStyle, mobileStyle, tabletStyle);
};

const Column: React.FC<Props> = ({ children, className, a, d, m, noGutter, t }) => (
  <div
    className={classNames(className, generateColumnSize(a, d, t, m), {
      'px-16': !noGutter,
      'pb-32': !noGutter,
    })}
  >
    {children}
  </div>
);

export default Column;
