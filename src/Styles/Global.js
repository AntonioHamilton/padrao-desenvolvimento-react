import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
    }
    html, body, #root, .App {
        height: 100%;
        background-color: #000000;
        color: white;
        font-family: 'Montserrat', sans-serif;
    }
`;
