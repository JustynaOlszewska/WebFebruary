import React from 'react';
import styled, { css } from 'styled-components';

const StyledText = styled.div`
position: absolute;
top:42%;
transform: translateY(-50%);
font-family: "Muli-ExtraLight";
opacity: 0.8;
display: none;
@media(min-width: 767px) {
  font-size: 1.25rem;
  display: block;
  width: 73%;
  left: 49.4%;
  transform: translateX(-50%);
}
@media(min-width: 1440px) {
  top: 41%;
}
`;

const headingStyle = css`
  font-weight: 100;
`;

const StyedH1 = styled.h1`
${headingStyle};
margin-bottom: 0;
`;

const StyedH2 = styled.h2`
color: #02aed2;
font-size: 2.5rem;
margin-top: 20px;
${headingStyle}`;

const Text = () => {
  return (
    <StyledText>
      <StyedH1>Będziesz się uczyć z ciekawością.</StyedH1>
      <StyedH2>Obiecujemy.</StyedH2>
    </StyledText>
  );
};

export default Text;
