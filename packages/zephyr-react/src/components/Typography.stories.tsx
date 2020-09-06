import React from 'react';

import Container from './Container';
import utilities from '../utilities';

export const LightTheme = (): React.ReactElement => (
  <Container size="long-form">
    <h1 className={utilities.generateTextStyles('heading-giant', 'light')}>Heading-Giant</h1>
  </Container>
);

export default { title: 'Typography' };
