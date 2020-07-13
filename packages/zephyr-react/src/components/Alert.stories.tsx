import React from 'react';
import Alert from './Alert';
import Container from './Container';

export const error = (): React.ReactElement => (
  <Container size="long-form">
    <Alert theme="error">This is an alert!</Alert>
  </Container>
);

export const longError = (): React.ReactElement => (
  <Container size="long-form">
    <Alert theme="error">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est purus, finibus non sem
      vel, suscipit viverra dolor. Suspendisse porttitor.
    </Alert>
  </Container>
);

export default { title: 'Alert' };
