import React from 'react';
import classNames from 'classnames';

type sizes = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12';

interface Props {
  a?: sizes;
  d?: sizes;
  m?: sizes;
  t?: sizes;
  className?: string;
  noGutter?: boolean;
}

const ensureFullWidth = (style?: sizes) => {
  if (!style) {
    return '';
  }
  if (style === '12') {
    return 'w-full';
  }
  return `w-${style}/12`;
};

const generateColumnSize = (a: Props['a'], d: Props['d'], t: Props['t'], m: Props['m']): string => {
  const anyStyle = ensureFullWidth(a);
  const desktopStyle = `lg:${ensureFullWidth(d)}`;
  const mobileStyle = ensureFullWidth(m);
  const tabletStyle = `md:${ensureFullWidth(t)}`;

  return classNames(anyStyle, desktopStyle, mobileStyle, tabletStyle);
};

const Column: React.FC<Props> = ({ children, className, a, d, m, noGutter, t }) => (
  <div
    className={classNames(className, generateColumnSize(a, d, t, m), {
      'px-8': !noGutter,
      'pb-16': !noGutter,
      'md:px-16': !noGutter,
      'md:pb-32': !noGutter,
    })}
  >
    {children}
  </div>
);

export default Column;
