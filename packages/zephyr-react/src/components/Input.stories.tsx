import React from 'react';
import _noop from 'lodash/noop';

import Button from './Button';
import Input from './Input';

const testValidator = (text: string): boolean => text.length > 0;

export const text = (): React.ReactElement => (
  <Input
    label="Text Input"
    name="test"
    onChange={_noop}
    placeholder="I'm a placeholder"
    type="text"
  />
);

export const textWithErrorHandling = (): React.ReactElement => (
  <Input
    errorMessage="This field is required"
    label="Text Input"
    name="test"
    onChange={_noop}
    placeholder="I'm a placeholder"
    type="text"
    validator={testValidator}
  />
);

export const realWorldExample = (): React.ReactElement => (
  <>
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
  </>
);

export default { title: 'Input' };
