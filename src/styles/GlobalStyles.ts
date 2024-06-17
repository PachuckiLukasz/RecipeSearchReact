import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    background-color: #f0f2f5;
  }

  h2, h3 {
    font-family: 'Georgia', serif;
    color: #343a40;
  }
`;

export default GlobalStyles;
