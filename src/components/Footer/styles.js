import styled from 'styled-components';
import { px2rem, px2vh} from "../../utils/convertSize";


export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-top: ${px2vh(10)};
  padding: ${px2vh(5)} ${px2vh(20)};
  max-width: ${px2rem(980)};
  background: #fff;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #ccc;
    padding: ${px2vh(5)};
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #666;
    padding: ${px2rem(5)};

    &:hover {
      color: #000;
    }
  }
`;

export const PoweredBy = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: #666;
  font-weight: bold;
  font-size: ${px2rem(9)};
  white-space: nowrap;

  &:hover {
      color: #000;
      span {
        visibility: visible;
        opacity: 1;
      }
  }

  span {
    opacity: 0;
    visibility: hidden;
    transition:visibility 0.3s linear,opacity 0.3s linear;
  }


`;
