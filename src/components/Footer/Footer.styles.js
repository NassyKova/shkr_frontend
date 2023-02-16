import styled from "styled-components";

export const Wrapper = styled.div`
position: static;

    width: 100%;
`;

export const Admin = styled.div`
    position: relative;
    margin: 20px;
    text-align: end;

    font-family: "Libre Baskerville", serif;
    a:link {
        color: var(--blue);
        font-family: "Libre Baskerville", serif;
    }
    a:visited {
        color: var(--blue);
    }
    a:hover {
        color: var(--blueGreen);
    }
`;
