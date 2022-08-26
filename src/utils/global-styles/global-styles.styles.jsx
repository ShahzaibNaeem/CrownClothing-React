import { createGlobalStyle } from "styled-components";


export const GlobalStyle=createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
}

body {
  padding: 0px 40px 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a{
  cursor: pointer;
  text-decoration:none;
  font-size:18px;
}

.container{
  max-width:1200px;
  margin: auto;
}

`