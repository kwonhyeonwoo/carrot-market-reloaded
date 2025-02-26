"use client"

import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";


export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
   
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
  }

  html, body {
   width:100%;
    height:100vh;
    font-family: 'Arial', sans-serif;
    background-color:black;
    color: #333;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`