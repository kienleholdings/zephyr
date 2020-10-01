import React from 'react';
import classNames from 'classnames';

interface Props {
  alt: string;
  className?: string;
  src: string;
}

const CardImage: React.FC<Props> = ({ alt, className, src }) => (
  <img alt={alt} className={classNames('block w-full rounded-t-partial', className)} src={src} />
);

export default CardImage;
