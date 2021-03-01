import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
${normalize};
body {
    background-color: red;
    min-height: 100vh;
};
`;

export default GlobalStyle;