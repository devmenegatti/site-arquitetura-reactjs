import React from 'react';

import { Container, Slide } from './styles';

export default function SlideShow({ images }) {

  const config = {
      showThumbnails: false,
      autoPlay: true,
      showIndex: true,
      infinite: true,
      showBullets: true,
      indexSeparator: " ♥ "
  }
  return (
    <Container>
      <Slide {...config} items={images}  />
    </Container>
  );
}
