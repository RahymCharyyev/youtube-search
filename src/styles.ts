import { createGlobalStyle } from "styled-components";
import Rubik from "./fonts/Rubik-Light.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Rubik';
        src: local('Rubik'), 
        url(${Rubik}) format('truetype');
        font-weight: 100;
    }
`;
