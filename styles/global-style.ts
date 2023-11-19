import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  
  li {
    list-style: none;
  }

  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  @layer base {
    #__next {
      display: contents;
    }
  }

  :focus {
    outline: none;
    border: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

`;

export default GlobalStyle;
