import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --maxWidth: 1280px;

  --background: #252c27;
  --green: #59824e;
  --blue: #43d9f0;
  --pink: #d585b2;
  --blueGreen: #00a18e;
  --white: #fff;
  --black: black;

  --fontSuperBig: 2.5rem;
  --fontBig: 1.4rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
}

* {
  box-sizing: border-box;

  color: var(--white)
}

body{
  margin: 0;
  padding: 0;
  background: var(--background);
  color: var(--white);

  /* .cocktail-container{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    color: rgb(34, 141, 143)
  } */


  :hover {
  color: var(--blueGreen);
}
  button {
    background-color: rgb(56, 131, 43);
    color: white;
    font-size: 22px;
    outline: none;
    border: none;
    margin: 20px 0;
    padding: 10px;
    border-radius: 20px;
  }
`;
