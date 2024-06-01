import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
  --linear: linear-gradient(
      90deg,
      rgba(253, 86, 29, 1) 0%,
      rgba(252, 134, 69, 1) 100%
    );
  --font-prompt: 'Comfortaa', sans-serif;
  --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-prompt);
  }

  body {
    background-color: #ced4da;
  }
`;

export default GlobalStyle;
