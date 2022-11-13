import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --black: #121214;
    --green: #08C05E;
    --purple: #8257E5;
    --gray: #A8A8A8;
    --white: #FFFFFF;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    color: var(--white);
    background-color: var(--black);
    font-family: 'League Spartan', sans-serif;
  }
`;
