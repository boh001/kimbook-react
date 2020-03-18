import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { color } from "./variable";
export const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;

    }
    *{
        -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
    }
    html{
        background-color: ${color.fbBg};
        width:100%;
        height:100%;
    
    }
    body{
        width:100%;
        height:100%;
   
    }
`;
