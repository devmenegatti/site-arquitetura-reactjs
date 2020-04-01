import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

import { px2rem, px2vh } from "../../utils/convertSize";

export const Container = styled.div`
  .image-gallery-description {
    top:${px2rem(10)};
    bottom: auto;
    font-size: ${px2rem(11)};
    visibility: hidden;
    padding: ${px2rem(5)};
    text-align: start;
    width: 50%;
    background-color: #fffa;
    color: #000;
    border-top-right-radius: ${px2rem(10)};
    border-bottom-right-radius: ${px2rem(10)};
    line-height: ${px2rem(15)} !important;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: all linear .1s;
  }

  .image-gallery-image {
    height: ${px2rem(600)};
  }



  div:hover {
    .image-gallery-description {
      visibility: visible;
    }
  }
`;

export const Slide = styled(ImageGallery)`
`;
