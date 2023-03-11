import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --maxWidth: 1280px;

  --background: #252c27;
  --green: #37a01b;
  --blue: #43d9f0;
  --pink: #d585b2;
  --blueGreen: #00a18e ;
  --white: #fff;
  --black: black;

  --fontSuperBig: 4rem;
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
    color: var(--blueGreen);
}

.menu{

:hover {
  box-shadow: 0px 0px 20px 1px #00a18e
}

:active {
  box-shadow: 0px 0px 20px 1px #d585b2
}
}



body{
  margin: 0;
  padding: 0;
  background: var(--background);
  color: var(--white);
}
`;
