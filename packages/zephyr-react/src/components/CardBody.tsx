import React from 'react';
import classNames from 'classnames';

interface Props {
  className?: string;
}

const CardBody: React.FC<Props> = ({ children, className }) => (
  <div className={classNames('p-24', className)}>{children}</div>
);

export default CardBody;
