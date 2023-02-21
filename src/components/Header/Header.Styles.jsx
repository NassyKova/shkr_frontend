import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const Slogan = styled.div`
color: var(--green);
font-size: var(--fontBig);
font-weight: 700;
`
export const LogoImg = styled.img`
    width:100px;
    /* @media screen and (max-width: 500px) {
        width: 150px; */
    }
`;

/* export const TMDBLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px) {
        width: 80px;
    }
`; */

