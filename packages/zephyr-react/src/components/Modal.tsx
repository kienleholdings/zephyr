import React from 'react';

import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import Icon from './Icon';

interface Props {
  close?: () => void;
  id: string;
  open: boolean;
  title: string;
}

const Modal: React.FC<Props> = ({ close, children, open, title }) => {
  if (!open) {
    return <></>;
  }
  return (
    <div className="bg-dark-bg-darker absolute bg-opacity-75 bottom-0 items-center justify-center flex left-0 right-0 top-0 w-screen">
      <div className="max-w-container-long-form w-full">
        <Card className="w-full">
          <CardHeader className="flex">
            <span className="flex-grow">{title}</span>
            {close && (
              <button onClick={close} type="button">
                <Icon name="close" size="modal" />
              </button>
            )}
          </CardHeader>
          <CardBody>{children}</CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Modal;
