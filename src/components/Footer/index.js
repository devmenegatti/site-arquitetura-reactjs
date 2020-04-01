import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaBehance,
  FaYoutube,
  FaWhatsapp,
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
      <div>
        <PoweredBy>
          <FaCode size={20} />
          <a href="http://marlondev.me" target="blank">Powered by Marlon Menegatti</a>
        </PoweredBy>
        <SocialMedia>
          <a href="http://www.facebook.com/" target='black' ><FaFacebookF size={20} /></a>
          <a href="http://www.instagram.com/" target='black' ><FaInstagram size={20} /></a>
          <a href="http://www.behance.net/" target='black' ><FaBehance size={20} /></a>
          <a href="http://www.youtube.com/" target='black' ><FaYoutube size={20} /></a>
          <a href="http://www.whatsapp.com/" target='black' ><FaWhatsapp size={20} /></a>
        </SocialMedia>
      </div>
    </Container>
  );
}
