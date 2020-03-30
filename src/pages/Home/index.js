import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import SlideShow from '../../components/SlideShow';
import { Container } from './styles';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadImages();
  }, []);

  async function loadImages() {
    await api.get('/home').then((response) => {
      setImages(response.data);
    }).catch((error) => {
      alert(error);
    });
  }
  return (
      <Container>
        <SlideShow images={images} />
      </Container>
  );
}
