import React from 'react';

import Column from './Column';
import Grid from './Grid';

export const gutter = (): React.ReactElement => (
  <Grid>
    <Column d="3">
      <div className="h-16 bg-charcoal-light" />
    </Column>
    <Column d="6">
      <div className="h-16 bg-charcoal-normal" />
    </Column>
    <Column d="3">
      <div className="h-16 bg-charcoal-dark" />
    </Column>
  </Grid>
);
export const noGutter = (): React.ReactElement => (
  <Grid noGutter>
    <Column noGutter d="3">
      <div className="h-16 bg-charcoal-light" />
    </Column>
    <Column noGutter d="6">
      <div className="h-16 bg-charcoal-normal" />
    </Column>
    <Column noGutter d="3">
      <div className="h-16 bg-charcoal-dark" />
    </Column>
  </Grid>
);

export default { title: 'Grid' };
