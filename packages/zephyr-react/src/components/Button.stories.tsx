import React from 'react';
import Button from './Button';

export const primary = (): React.ReactElement => <Button theme="primary">Button</Button>;
export const secondary = (): React.ReactElement => <Button theme="secondary">Button</Button>;
export const realWorldExample = (): React.ReactElement => (
  <>
    <Button className="mr-16" theme="secondary">
      Cancel
    </Button>
    <Button theme="primary">Submit</Button>
  </>
);

export default { title: 'Button' };
