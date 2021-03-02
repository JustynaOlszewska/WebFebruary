import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import muliBold from '../fonts/Muli-Bold.ttf';
import muliBoldItalic from '../fonts/Muli-BoldItalic.ttf';
import multiExtraBold from '../fonts/Muli-ExtraBold.ttf';
import muliExtraBoldItalic from '../fonts/Muli-ExtraBoldItalic.ttf';
import muliExtraLight from '../fonts/Muli-ExtraLight.ttf';
import muliExtraLightItalic from '../fonts/Muli-ExtraLightItalic.ttf';
import muliItalic from '../fonts/Muli-Italic.ttf';
import muliLight from '../fonts/Muli-Light.ttf';
import muliLightItalic from '../fonts/Muli-LightItalic.ttf';
import muliRegular from '../fonts/Muli-Regular.ttf';
import muliSemiBold from '../fonts/Muli-SemiBold.ttf';
import muliSemiBoldItalic from '../fonts/Muli-SemiBoldItalic.ttf';

const GlobalStyle = createGlobalStyle`
${normalize};

@font-face {
    font-family: "Muli-Bold";
    src: url(${muliBold}) format("ttf");
  };

@font-face {
    font-family: "Muli-BoldItalic";
    src: url(${muliBoldItalic}) format("ttf");
  };

@font-face {
    font-family: "Muli-ExtraBold";
    src: url(${multiExtraBold}) format("ttf");
  };

@font-face {
    font-family: "Muli-ExtraBldItalic";
    src: url(${muliExtraBoldItalic}) format("ttf");
  };

@font-face {
    font-family: "Muli-ExtraLight";
    src: url(${muliExtraLight}) format("ttf");
  };

@font-face {
    font-family: "Muli-ExtraLightItalic";
    src: url(${muliExtraLightItalic}) format("ttf");
  };

@font-face {
    font-family: "Muli-Italic";
    src: url(${muliItalic}) format("ttf");
  };

@font-face {
    font-family: "Muli-Light";
    src: url(${muliLight}) format("ttf");
  };

@font-face {
    font-family: "Muli-LightItalic";
    src: url(${muliLightItalic}) format("ttf");
  };

@font-face {
    font-family: "Muli-Regular";
    src: url(${muliRegular}) format("ttf");
  };

@font-face {
    font-family: "Muli-SemiBold";
    src: url(${muliSemiBold}) format("ttf");
  };

@font-face {
    font-family: "Muli-SemiBoldItalic";
    src: url(${muliSemiBoldItalic}) format("ttf");
  };

body {
    background-color: red;
    width: 100%;
    min-height: 100vh;
    font-size: 16px;
};
`;

export default GlobalStyle;
