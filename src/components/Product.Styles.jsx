import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    /* align-items: center; */
    /* justify-content: center; */
    /* flex-direction: column; */
    color: var(--blueGreen);
    background: var(--background);
    margin-bottom: 50px;
    
`;

export const Img = styled.div`
    /* object-fit: contain; */
    /* width: 100%;
    height: auto; */
    width: 300px;
    border: 1px solid black;
    color: var(--blueGreen);
`;

export const Title = styled.div`
    display: flex;
    /* justify-content: center; */
    font-size: var(--fontSuperBig);
    color: var(--blueGreen);
`;

export const Ingridients = styled.div`
    color: var(--pink);
    margin-bottom: 10px;
    align-items: left;
`;
