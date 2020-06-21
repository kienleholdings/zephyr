import React from 'react';
import Button from './Button';
import Container from './Container';

export const primary = (): React.ReactElement => (
  <Container size="long-form">
    <Button theme="primary" size="normal">
      Button
    </Button>
    <br />
    <br />
    <Button theme="primary" size="small">
      Small Button
    </Button>
  </Container>
);
export const secondary = (): React.ReactElement => (
  <Container size="long-form">
    <Button theme="secondary" size="normal">
      Button
    </Button>
    <br />
    <br />
    <Button theme="secondary" size="small">
      Small Button
    </Button>
  </Container>
);
export const realWorldExample = (): React.ReactElement => (
  <Container size="long-form">
    <Button className="mr-16" theme="secondary">
      Cancel
    </Button>
    <Button theme="primary">Submit</Button>
  </Container>
);

export default { title: 'Button' };
