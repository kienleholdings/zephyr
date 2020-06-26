import React from 'react';
import _noop from 'lodash/noop';

import Button from './Button';
import Container from './Container';
import Input from './Input';

const testValidator = (text: string): boolean => text.length > 0;

export const text = (): React.ReactElement => (
  <Container size="long-form">
    <Input
      label="Text Input"
      name="test"
      onChange={_noop}
      placeholder="I'm a placeholder"
      type="text"
    />
  </Container>
);

export const textWithErrorHandling = (): React.ReactElement => (
  <Container size="long-form">
    <Input
      errorMessage="This field is required"
      label="Text Input"
      name="test"
      onChange={_noop}
      placeholder="I'm a placeholder"
      type="text"
      validator={testValidator}
    />
  </Container>
);

export const realWorldExample = (): React.ReactElement => (
  <Container size="long-form">
    <Input
      errorMessage="This field is required"
      label="First Name"
      name="firstName"
      onChange={_noop}
      placeholder="John"
      type="text"
      validator={testValidator}
    />
    <Input
      errorMessage="This field is required"
      label="Last Name"
      name="lastName"
      onChange={_noop}
      placeholder="Smith"
      type="text"
      validator={testValidator}
    />
    <Button theme="primary">Submit</Button>
  </Container>
);

export default { title: 'Input' };
