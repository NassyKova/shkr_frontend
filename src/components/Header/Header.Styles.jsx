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
    font-size: var(--fontSuperBig);
    font-weight: 500;
    text-align: center;
    margin: 10px 10px 30px 10px;
    @media screen and (max-width: 800px) {
        font-size: var(--fontBig);
        font-weight: 800;
    }
`;

export const LogoImg = styled.img`
    width: 150px;
    @media screen and (max-width: 768px) {
        width: 100px;
    }
`;
