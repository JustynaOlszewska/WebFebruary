import styled from 'styled-components';

export const StyledIcons = styled.i`
  position: absolute;
  top: calc(50%-40px);
  right: 30px;
  opacity: 0.7;
  font-size: 40px;
  z-index: 4;
  @media (min-width: 767px) {
    display: none;
  } ;
`;
export const StyledIconBars = styled(StyledIcons)`
  transform: ${props => (!props.open ? `scale(-1,1)` : `scale(0,1)`)};
  transition: transform 3s;
`;

export const StyledIconTimes = styled(StyledIcons)`
  left: 54px;
  transform: ${props => (props.open ? `scale(-1,1)` : `scale(0,1)`)};
  transition: transform 3s;
`;
