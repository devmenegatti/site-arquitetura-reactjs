import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px 20px;
  border-top: 1px solid #ccc;
  max-width: 980px;
  background: #fff;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #666;
    padding: 6px;

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
  font-size: 12px;
  white-space: nowrap;

  &:hover {
      color: #000;
      span {
        visibility: visible;
        opacity: 1;
      }
  }

  span {
    margin-left: 5px;
    opacity: 0;
    visibility: hidden;
    transition:visibility 0.3s linear,opacity 0.3s linear;
  }


`;
