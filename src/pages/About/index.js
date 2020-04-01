import React from 'react';

import {
  Container,
  AboutText,
  Title,
  ShortDescription,
  Description,
  ImageArea
} from './styles';

export default function About() {
  return (
    <Container>
      <AboutText>
        <Title size={20} fontWeight="bold">NOME PESSOA</Title>
        <ShortDescription size={16} fontWeight="bold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae justo mi. Curabitur dapibus ligula nec eros ultricies, sagittis blandit nibh faucibus.
        </ShortDescription>
        <Description size={14} fontWeight="normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae justo mi. Curabitur dapibus ligula nec eros ultricies, sagittis blandit nibh faucibus. Sed rutrum felis et molestie mollis. Nulla laoreet mauris ac porta molestie. Duis non dolor a nibh pretium tristique. Aenean ligula ligula, pretium non diam a, viverra faucibus nulla. Mauris vitae facilisis metus, eu tempus massa. Aenean rhoncus non elit in pretium. Quisque a faucibus purus. Maecenas in lorem porttitor, ultricies neque at, varius arcu. Vivamus vel imperdiet arcu. Quisque aliquet, magna vitae vestibulum ornare, elit mauris laoreet arcu, sed blandit ligula massa vel nibh.
        </Description>
      </AboutText>
      <ImageArea background="https://diegocarmona.com.br/wp-content/uploads/sites/19/2017/02/Saiba-o-que-%C3%A9-empres%C3%A1rio-individual.jpg" />
    </Container>
  );
}
