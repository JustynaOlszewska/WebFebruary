import styled from 'styled-components';

export const StyledIcons = styled.i`
  position: absolute;
  font-size: 1rem;
  top: calc(50%-1rem);
  right: 30px;
  opacity: 0.7;
  z-index: 4;
  @media (min-width: 767px) {
    display: none;
  } ;
  /* @media (min-width: 767px) {
    top: calc(50%-40px);
    font-size: 40px;
  } ; */
`;
export const StyledIconBars = styled(StyledIcons)`
  transform: ${({ open }) => (!open ? `scale(-1,1)` : `scale(0,1)`)};
  transition: transform 3s;
`;

export const StyledIconTimes = styled(StyledIcons)`
  left: 54px;
  transform: ${({ open }) => (open ? `scale(-1,1)` : `scale(0,1)`)};
  transition: transform 3s;
`;
