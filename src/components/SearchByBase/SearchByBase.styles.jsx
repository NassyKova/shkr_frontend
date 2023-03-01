import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

`;

export const Button = styled.div`
    background-color: var(--white);
    color: var(--black);
    padding: 5px 15px;
    font-weight: 500;
    border-radius: 5px;
    outline: 0;
    margin: 10px 30px;
    cursor: pointer;
    box-shadow: 0px 2px 2px black;
    transition: ease background-color 250ms;
    &:hover {
        background-color: var(--pink);
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;
