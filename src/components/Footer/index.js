import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaYoutube,
  FaCode
} from "react-icons/fa";

import {
  Container,
  SocialMedia,
  PoweredBy
} from './styles';

export default function Footer() {
  return (
    <Container>
      <PoweredBy href="http://github.com/devmenegatti/" target="blank">
        <FaCode size={20} />
        <span>Powered by Marlon Menegatti</span>
      </PoweredBy>
      <SocialMedia>
        <a href="http://www.facebook.com/" target='black' ><FaFacebookF size={20} /></a>
        <a href="http://www.instagram.com/" target='black' ><FaInstagram size={20} /></a>
        <a href="http://www.behance.net/" target='black' ><FaBehance size={20} /></a>
        <a href="http://www.youtube.com/" target='black' ><FaYoutube size={20} /></a>
      </SocialMedia>
    </Container>
  );
}