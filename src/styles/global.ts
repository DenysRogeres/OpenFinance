import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

:root {
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933FF;

    --text-title: #363f5f;
    --text-body: #969cd3;

    --shape: #ffffff;
    --background: #F0F2F5;
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