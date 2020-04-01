import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import api from '../../services/api';
import SlideShow from '../../components/SlideShow';

import {
  Container
} from './styles';

export default function Project() {
  let { id } = useParams();
  const [images, setImages] = useState([]);


  useEffect(()=>{
    loadImages();
  },[id]);

  async function loadImages() {
    await api.get(`/project\?category=${id}`).then( response => {
      setImages(response.data);
    }).catch(error => {
      alert(error);
    });
  }
  return (
    <Container>
      {console.info(images)}
      {(images.length) ? <SlideShow images={images} /> : <span>Não há projetos disponiveis</span>}
    </Container>
  );
}
