import styled from "styled-components";

export const Wrapper = styled.div`
position: static;

    width: 100%;
`;

export const Admin = styled.div`
    position: relative;
    margin: 0px 20px 0px 0px;
    text-align: end;
    font-family: "Libre Baskerville", serif;
    margin-bottom: 20px;
    a:link {
        color: var(--blueGreen);
        font-family: "Libre Baskerville", serif;
    }
    a:visited {
        color: var(--blueGreen);
    }
    a:hover {
        color: var(--blue);
    }
`;
