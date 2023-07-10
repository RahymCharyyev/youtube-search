import { createGlobalStyle, DefaultTheme } from "styled-components";
import Rubik from "./fonts/Rubik-Light.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik';
        src: local('Rubik'), 
        url(${Rubik}) format('truetype');
        font-weight: 100;
    }
`;

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    textColor: string;
    channelColor: string;
    hoverColor: string;
    inputColor: string;
    caretColor: string;
    logoutColor: string;
    loginColor: string;
  }
}

export const darkTheme: DefaultTheme = {
  body: "#161617",
  textColor: "#fff",
  channelColor: "grey",
  hoverColor: "#525252",
  inputColor: "#232325",
  caretColor: "#fff",
  logoutColor: "#fff",
  loginColor: "#1390e5",
};

export const lightTheme: DefaultTheme = {
  body: "#fff",
  textColor: "#000",
  channelColor: "#1717194d",
  hoverColor: "#C7E4FF",
  inputColor: "#fff",
  caretColor: "#000",
  logoutColor: "#2727274d",
  loginColor: "#2727271a",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: .3s ease;
  }
  p {
    color: ${(props) => props.theme.textColor};
  }
  h2 {
    color: ${(props) => props.theme.textColor};
  }
`;
