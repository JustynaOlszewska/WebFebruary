import styled from 'styled-components';

export const StyledNav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1180px;
  height: 100px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  @media (min-width: 767px) {
    width: 85%;
    left: 50%;
    transform: translate(-50%);
  }
  @media (min-width: 1023px) {
    margin: 40px 0;
  } ;
`;

export const StyledLogo = styled.img`
  width: 60px;
  height: 70px;
  margin: 10px;
  @media (min-width: 767px) {
    width: 10%;
    height: auto;
    margin: 10px 0;
  } ;
`;
