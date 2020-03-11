import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   * {
        margin: 0;
        padding: 0;
    }
    html, body, #root, .App {
        min-height: 100vh;
        background-color: #fff;
        color: black;
    }
`;
