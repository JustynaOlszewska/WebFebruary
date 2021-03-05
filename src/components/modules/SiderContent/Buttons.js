import React from 'react';
import styled from 'styled-components';

const StyedContainerButton = styled.div`
   width: 73%;
   position: absolute;
   top: 80%;
   left: 51%;
   transform: translateX(-52%);
   @media(min-width: 1024px) {
      top: 73%;
    };
    @media(min-width: 1400px) {
      top: 65%;
    };
`;

const StyledButton = styled.button`
   height: 20px;
   padding-right: 18px;
   width: ${props => props.primary ? '70px' : '110px'};
   opacity: ${props => props.primary ? '1' : '0.8'};
   background-color: ${props => props.primary ? 'white' : 'transparent'};
   color: ${props => props.primary ? '#002841' : '#fff'};
   font-family: "Muli-ExtraBold";
   font-weight: 100;
   font-size: 0.5rem;
   border: 2px solid white;
   border-radius: 30px;
   position: absolute;
   left: ${props => props.primary ? '0' : '35%'};
   @media(min-width: 767px) {
     width: ${props => props.primary ? '178px' : '218px'};
     font-size: 1rem;
     height: 50px;
    };
   @media(min-width: 1024px) {
     left: ${props => props.primary ? '0' : '27%'};
    };
    @media(min-width: 1600px) {
     left: ${props => props.primary ? '0' : '17%'};
    };
`;


const Buttons = () => (
   <StyedContainerButton>
      <StyledButton primary type="submit">Zobacz więcej</StyledButton>
      <StyledButton secondary type="submit">Umów się z Aniołem</StyledButton>
   </StyedContainerButton>
);

export default Buttons;
