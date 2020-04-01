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

export const PoweredBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${px2vh(20)};
  color: #666;

  &:hover {
      width: ${px2vh(170)};
      color: #000;
      a {
        display: flex;
      }
  }

  a {
    display:none;
    color: #666;
    font-size: ${px2rem(9)};
    margin-left: ${px2rem(3)};
    font-weight: bold;
    white-space: nowrap;
    text-decoration: none;
    transition:visibility 0.3s linear,opacity 0.3s linear;
  }


`;
