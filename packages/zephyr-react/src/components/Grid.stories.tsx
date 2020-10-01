import React from 'react';

import Column from './Column';
import Container from './Container';
import Grid from './Grid';

export const gutter = (): React.ReactElement => (
  <Grid>
    <Column d="3" m="4" t="3">
      <div className="h-16 bg-primary-lighter" />
    </Column>
    <Column d="6" m="4" t="6">
      <div className="h-16 bg-primary-normal" />
    </Column>
    <Column d="3" m="4" t="3">
      <div className="h-16 bg-primary-darker" />
    </Column>
  </Grid>
);
export const noGutter = (): React.ReactElement => (
  <Grid noGutter>
    <Column noGutter d="3" m="4" t="3">
      <div className="h-16 bg-primary-lighter" />
    </Column>
    <Column noGutter d="6" m="4" t="6">
      <div className="h-16 bg-primary-normal" />
    </Column>
    <Column noGutter d="3" m="4" t="3">
      <div className="h-16 bg-primary-darker" />
    </Column>
  </Grid>
);

export const gutterWithContainer = (): React.ReactElement => (
  <Container size="long-form">
    <Grid>
      <Column d="3" m="4" t="3">
        <div className="h-16 bg-primary-lighter" />
      </Column>
      <Column d="6" m="4" t="6">
        <div className="h-16 bg-primary-normal" />
      </Column>
      <Column d="3" m="4" t="3">
        <div className="h-16 bg-primary-darker" />
      </Column>
    </Grid>
  </Container>
);

export default { title: 'Grid' };
