import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #ccc;
  margin-top: 10px;
  padding: 10px;

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
