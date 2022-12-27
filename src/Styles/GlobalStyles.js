import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle `
    :root{
        --background-light: #ECECEC;
        --primary-purble: #6C63FF;
        --secondary-gray: #616161;
        --black: #000;
    }
    
    html{
        scroll-behavior: smooth;
    }
    
    *{
        font-family: 'Englebert', sans-serif;
        box-sizing: border-box;  
    }

    body{
        padding:0;
        margin:0;
        margin-block-end:150px;
        font-size:14px;
    }
    ul{
        list-style: none;
    }
    h1,h2,h3,h4,h5,h6{
        margin:0;
    }
    h3,h4,h5,h6{
        font-weight:400;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    img{
        max-width:100%;
    }
`;

export default GlobalStyles;