import styled from 'styled-components';

export const StyledNav = styled.nav`
  color: white;
  display: flex;
  align-items: center;
  font-size: 1rem;
  width: 100vw;
  max-width: 1180px;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  @media (min-width: 767px) {
    height: 100px;
    width: 85%;
     left: 50%;
    transform: translateX(-50%);
  };
  @media (min-width: 1023px) {
     height: 181px;
  };
`;

export const StyledLogo = styled.img`
  height: 57%;
  margin: 10px;
  @media (min-width: 767px) {
    margin: 10px 0;
  } ;
`;
