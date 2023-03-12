import styled from "styled-components";

// This code defines a styled component called Text, which is an h3 element with specific styling properties.
const Text = styled.h3`
    text-align: center;
    font-size: 2rem;
    color: #00a18e;
    margin: 5rem 20rem;
    font-weight: 300;
    @media screen and (max-width: 1200px) {
        width: auto;
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: 200;
    }
    @media screen and (max-width: 800px) {
        margin: 0 10px;
        font-size: 1.2rem;
        font-weight: 100;
    }
`;

export default Text;
