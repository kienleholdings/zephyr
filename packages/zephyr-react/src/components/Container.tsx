import React from 'react';
import classNames from 'classnames';

interface Props {
  size?: 'fluid' | 'general' | 'long-form';
}

const Container: React.FC<Props> = ({ children, size = 'general' }) => (
  <div className={classNames(`max-w-container-${size} mx-auto`)}>{children}</div>
);

export default Container;
