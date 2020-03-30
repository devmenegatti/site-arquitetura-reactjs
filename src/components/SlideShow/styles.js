import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export const Container = styled.div`
  .image-gallery-description {
    top:10px;
    bottom: auto;
    font-size: 14px;
    visibility: hidden;
    padding: 5px;
    text-align: start;
    width: 50%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    line-height: 20px !important;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    transition: all linear .1s;
  }

  div:hover {
    .image-gallery-description {
      visibility: visible;
    }
  }
`;

export const Slide = styled(ImageGallery)`

`;
