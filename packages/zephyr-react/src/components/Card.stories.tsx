import React from 'react';

import Button from './Button';
import Card from './Card';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import Container from './Container';

export const withBody = (): React.ReactElement => (
  <Container size="long-form">
    <Card>
      <CardBody>I&apos;m a card with a body!</CardBody>
    </Card>
  </Container>
);

export const withHeaderAndBody = (): React.ReactElement => (
  <Container size="long-form">
    <Card>
      <CardHeader>I&apos;m a card header!</CardHeader>
      <CardBody>I&apos;m a card with a body!</CardBody>
    </Card>
  </Container>
);

export const withImageAndBody = (): React.ReactElement => (
  <Container size="long-form">
    <Card>
      <CardImage alt="Something random from Lorem Picsum" src="https://picsum.photos/512/256" />
      <CardBody>I&apos;m a card with a body and an image!</CardBody>
    </Card>
  </Container>
);

export const withoutBody = (): React.ReactElement => (
  <Container size="long-form">
    <Card>I&apos;m a card!</Card>
  </Container>
);

export const realWorldExample = (): React.ReactElement => (
  <Container size="long-form">
    <Card>
      <CardImage
        alt="The region of Yirgacheffe, Ethiopia"
        src="https://ictcoffee.com/wp-content/uploads/2019/04/all-about-yirgacheffe-coffee.jpg"
      />
      <CardBody>
        <p className="pb-16">
          A funky coffee with a tea-like body and notes of Jasmine, lavendar, and rose.
        </p>
        <Button theme="primary" size="small" className="mr-8">
          Add to Cart
        </Button>
        <Button theme="secondary" size="small">
          Learn More
        </Button>
      </CardBody>
    </Card>
  </Container>
);

export default { title: 'Card' };
