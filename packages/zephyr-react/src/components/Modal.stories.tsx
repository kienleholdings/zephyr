import React from 'react';

import Button from './Button';
import Container from './Container';
import Modal from './Modal';

export const Default = (): React.ReactElement => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <Container size="long-form">
      <Modal close={() => setModalOpen(false)} id="testModal" open={modalOpen} title="Test Modal">
        This is a modal
      </Modal>
      <Button onClick={() => setModalOpen(true)} theme="primary">
        Open Modal
      </Button>
    </Container>
  );
};
export default { title: 'Modal' };
