import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root {
    --color-background: #FFFFFF;
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-grey-100:#333333;
    --color-grey-50:#828282;
    --color-grey-20:#E0E0E0;
    --color-grey-0:#F5F5F5;
    --color-grey-40: #BDBDBD;
    --color-success: #168821;
    --color-warning: #FFCD07;
    --color-error: #E60000;
    --color-information:#155BCB;

    --toastify-color-error: #E60000;
    
  }
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
`;
