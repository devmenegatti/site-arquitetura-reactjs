import styled from 'styled-components';

import {
  px2rem,
  px2vh
} from "../../utils/convertSize";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: space-between;
  padding: ${px2rem(10)};

  @media screen and (max-width: 800px) {
    flex-direction: column;
  };
`;

export const AboutText = styled.div`
  height: 100%;
  width: 80%;
  padding: ${px2rem(10)};

  @media screen and (max-width: 800px) {
    width: 100%;
  };
`;

export const Title = styled.h1`
  font-size: ${px2rem(20)};
  padding: ${px2rem(20)} 0;
  padding-right: ${px2rem(20)};
  text-align: justify;
`;

export const Description = styled.p`

  font-size: ${px2rem(14)};
  padding: ${px2rem(20)} 0;
  padding-right: ${px2rem(20)};
  text-align: justify;
  line-height: ${px2rem(22)};
  color: #666;
`;

export const ShortDescription = styled.h2`
  font-size: ${px2rem(16)};
  padding: ${px2rem(20)} 0;
  padding-right: ${px2rem(20)};
  text-align: justify;
`;

export const ImageArea = styled.div`
  min-height: ${px2vh(400)};
  height: auto;
  width: 100%;
  padding: ${px2rem(20)};
  background: url(${props => props.background });
  background-size: cover;
  margin: ${px2vh(30)} 0;
  border-radius: ${px2vh(10)};
  box-shadow: 2px 2px 2px 1px #0002;
`;
