import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2rem 1rem 12rem;
    margin: 0 auto;

    button {
        font-size: 1rem;
        font-weight: bold;
        padding: 0 2rem;

        background-color: var(--blue-light);
        color: white;

        border: 0px;

        border-radius: 0.25rem;
        height: 3rem;


        &:hover {
            filter: brightness(0.9);
        }
    }

`