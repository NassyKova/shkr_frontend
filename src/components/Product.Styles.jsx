import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-items: center;
`;
export const Wrapper = styled.div`
    margin: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50%;
    border-radius: 10px;
    transition: 0.3s;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.75);
    :hover {
        box-shadow: 0px 0px 20px 1px rgba(4, 4, 4, 1);
    }

    @media screen and (max-width: 768px) {
        width: 90%;
    }
`;

export const Img = styled.div`
    display: flex;
    align-items: center;
    width: 300px;
    border: 1px solid black;
    color: var(--blueGreen);
    @media screen and (max-width: 768px) {
        height: auto;
        width: auto;
    }
`;

export const Title = styled.div`
    display: flex;

    font-size: var(--fontBig);
    color: var(--blueGreen);
`;

export const Ingridients = styled.div`
    color: var(--pink);
    margin-bottom: 10px;
`;
