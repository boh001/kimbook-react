import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { color } from "./variable";
export const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;

    }
    *{
        box-sizing:border-box;
    }
    body{
        height: 8000px;
        padding-top: 50px;
        background-color: ${color.fbBg};
    }
`;
