import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  :root {
    --background: #eee;
    --background-light: #fff;
    --text: #000;
  }

  @media (prefers-color-scheme: dark){
    :root {
      --background: #334;
      --background-light: #445;
      --text: #fff;
    }
  }

  body {
    background: var(--background);
  }

  body::-webkit-scrollbar {
    width: 10px;
  }

  body::-webkit-scrollbar-thumb {
    background: #8E37D7;
  }

  ::selection {
    background: #8E37D7;
  }

  button,
  input {
    outline: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`