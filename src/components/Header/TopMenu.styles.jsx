import styled from "styled-components";

export const Wrapper = styled.div`
        display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Button = styled.div`
    color: var(--blueGreen);
 padding: 10px;
    border-radius: 5px;
    outline: 0;
    margin: 0px 0px;
    cursor: pointer;

    transition: ease background-color 250ms;
    &:hover {
        box-shadow: 0px 2px 2px black;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`