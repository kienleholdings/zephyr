import React from 'react';

import Container from './Container';
import Icon from './Icon';

export const close = (): React.ReactElement => (
  <Container size="long-form">
    <Icon name="close" size="normal" />
  </Container>
);

export default { title: 'Icons' };
