import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --maxWidth: 1280px;

  --background: #252c27;
  --green: #37a01b;
  --blue: #43d9f0;
  --pink: #d585b2;
  --blueGreen: #00a18e;
  --white: #fff;
  --black: black;

  --fontSuperBig: 3rem;
  --fontBig: 2.5rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
}

* {
  box-sizing: border-box;

  color: var(--white)
}

/* .hover-item {
    background-color: var(--pink);
} */

.hover-item:hover {
    background-color: var(--pink);
}



body{
  margin: 0;
  padding: 0;
  background: var(--background);
  color: var(--white);
}
`;
