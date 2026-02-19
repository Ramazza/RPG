import styled, { createGlobalStyle } from "styled-components";
import CinzelFont from "../../assets/fonts/Cinzel/static/Cinzel-Regular.ttf";

export const FontSytle = createGlobalStyle`
    @font-face {
    font-family: 'CinzelCustom';
    src: url(${CinzelFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const HeaderWrapper = styled.div`
    height: 8vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #191919;
`;

export const Logo = styled.img`
    position: absolute;
    inset-inline-start: 0px;
    inset-block-start: 0px;
    height: 8vh;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5vw;
`;

export const HeaderItem = styled.h3`
    padding: 5px;
    font-family: 'CinzelCustom', serif;
    font-size: 30px;
    color: #77d6f1;
    cursor: pointer;

    &:hover{
        color: #ade6f7;
        transform: translateY(-3px);
    }
`;