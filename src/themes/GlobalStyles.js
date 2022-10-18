import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-family: sans-serif;

    html {
  scroll-behavior: smooth;
}
 ::selection {
  color: white;
  background-color: blueviolet;
}
::-webkit-scrollbar-track {
  background-color: #222;
}
::-webkit-scrollbar {
  width: 1vh;
}
::-webkit-scrollbar-thumb {
  background: #555;
}

  }
`;

export default GlobalStyles;
