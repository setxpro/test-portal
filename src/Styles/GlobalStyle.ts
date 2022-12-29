import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,body {
        font-size: calc(60% + .8vmin);
        font-family: 'Montserrat', sans-serif;
    }

    :root {
        --color-cart: #7367F0;
        --color-notify: #EA5455;
        --color-online: #28C76F;
    }

    ::-webkit-scrollbar {
        width: 0;
    }
    ::-webkit-scrollbar-track {
        background: #AAA;
    }
    ::-webkit-scrollbar-thumb {
        background: #AAA;
    }
`;
