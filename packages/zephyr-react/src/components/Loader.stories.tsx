import React from 'react';

import Container from './Container';
import Loader from './Loader';

export const normal = (): React.ReactElement => (
  <Container size="long-form">
    <Loader />
  </Container>
);

export const small = (): React.ReactElement => (
  <Container size="long-form">
    <Loader size="small" />
  </Container>
);

export const withContainer = (): React.ReactElement => (
  <Container size="long-form">
    <Loader container />
  </Container>
);

export default { title: 'Loader' };
