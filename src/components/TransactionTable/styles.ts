import styled from "styled-components";

export const Container = styled.div`
    table {
        width: 100%;
        border-spacing: 0 0.5rem;
    }

    th {
        font-weight: 400;
        color: var(--text-body);
        text-align: left;
        line-height: 1.5rem;
        padding: 1rem 2rem;
    }

    td {
        padding: 1rem 2rem;
        background: var(--shape);
        border: 0;
        border-radius: 0.25rem;
        color: var(--text-body);


        &:first-child {
            color: var(--text-title);
        }

        &.deposit {
            color: var(--green);         
        }

        &.withdraw {
            color: var(--red);         
        }
    }

`