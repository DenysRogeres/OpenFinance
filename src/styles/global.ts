import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

:root {
    --background: #F0F2F5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cd3;

    --background: #f8f2f5;
    --shape: #ffffff;
}


* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}


html {
    @media (max-width: 1088px) {
        font-size: 93.75%
    }

    @media (max-width: 720px) {
        font-size: 87.5%
    }
}


body {

    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input,textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`