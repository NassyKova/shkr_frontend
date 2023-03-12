import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    font-size: var(--fontMed);
    @media screen and (max-width: 500px) {
        font-size: var(--fontSmall);
    }
`;

export const Button = styled.div`
    color: var(--blueGreen);
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;

    text-decoration: none;
    a:link {
        text-decoration: none;
    }
    transition: ease background-color 250ms;
    &:hover {
        box-shadow: 0px 2px 2px black;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;
