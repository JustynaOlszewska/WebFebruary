import styled from 'styled-components';

export const StyledUl = styled.ul`
  text-align: center;
  list-style-type: none;
  font-family: 'Muli-Bold';

  @media (max-width: 766px) {
    width: 200px;
    height: 100vh;
    padding: 40px 0;
    margin-top: 0;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #3b3a30;
    opacity: 0.7;
    transform: ${props => (props.open ? `translateX(0)` : `translateX(150%)`)};
    transition: transform 3s;
  }

  @media (min-width: 767px) {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin-top: 10px;
    margin-left: 20%;
    left: 0;
    top: 0;
    height: 100%;
    flex-grow: 1;
  }
  @media (min-width: 1180px) {
    margin-left: 452px;
  } ;
`;

export const StyledLi = styled.li`
  margin: 40px 0;

  @media (max-height: 330px) {
    margin: 30px 0;
  }
  @media (max-height: 280px) {
    margin: 15px 0;
  } ;
`;
