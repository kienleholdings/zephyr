import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
  size?: 'fluid' | 'general' | 'long-form';
}

const Container: React.FC<Props> = ({ children, className, size = 'general' }) => (
  <div className={classNames(`max-w-container-${size} mx-auto px-8 md:px-16`, className)}>
    {children}
  </div>
);

export default Container;
