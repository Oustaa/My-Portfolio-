import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    :root{
        --background-body: #ECECEC;
        --primary-purble: #6C63FF;
        --secondary-gray: #616161;
        --black: #000;
    }
    body{
        padding:0;
        margin:0;
        box-sizing: border-box;
        font-family: 'Englebert', sans-serif;
    }
    ul{
        list-style: none;
    }
    h1,h2,h3,h4,h5,h6{
        margin:0;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyles;