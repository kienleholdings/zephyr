import React from 'react';
import Container from './Container';

const loremIpsum = (
  <>
    <h1 className="font-bold font-display leading-heading-extra-large mb-16 text-heading-extra-large">
      Lorem Ipsum
    </h1>
    <p className="font-normal font-body leading-body mb-16 text-body">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ullamcorper dolor sed
      malesuada rutrum. Praesent sed finibus felis. Mauris et purus nunc. Nunc placerat cursus orci
      eu bibendum. Vivamus sed turpis imperdiet, maximus tellus non, vehicula metus. Ut vestibulum
      purus sit amet lacus mollis, vel mollis nunc vestibulum. Quisque mattis nisi sed justo
      lacinia, vitae vehicula ligula blandit. Maecenas finibus, ipsum ac feugiat pretium, est turpis
      euismod ligula, vitae interdum dui ante sed neque. Integer ultricies nulla a purus rhoncus, in
      finibus sapien sodales. Duis imperdiet metus erat, eget feugiat est dignissim at. Cras nulla
      purus, venenatis vel maximus sodales, commodo id tellus. Sed porttitor, arcu et gravida
      rhoncus, lectus est commodo nibh, interdum fermentum tellus erat quis eros. Vestibulum sed
      sollicitudin orci, eget condimentum ex.
    </p>
    <p className="font-normal font-body leading-body mb-16 text-body">
      Nam vestibulum lorem enim, dapibus tristique turpis malesuada et. Suspendisse eu finibus nibh.
      Donec facilisis, quam et consequat pellentesque, dui enim ultrices massa, eu blandit est justo
      at urna. Vivamus sit amet semper nulla. Ut sed mauris dapibus, sodales justo in, pulvinar
      risus. Mauris elit dui, lacinia cursus dictum a, aliquet et tortor. Vivamus vitae augue quis
      nunc cursus porttitor.
    </p>
  </>
);

export const noSize = (): React.ReactElement => <Container>{loremIpsum}</Container>;

export const generalSize = (): React.ReactElement => (
  <Container size="general">{loremIpsum}</Container>
);

export const longFormSize = (): React.ReactElement => (
  <Container size="long-form">{loremIpsum}</Container>
);

export const fluidSize = (): React.ReactElement => <Container size="fluid">{loremIpsum}</Container>;

export default { title: 'Container' };
