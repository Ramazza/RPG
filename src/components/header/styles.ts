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
    background-color: #0c0c0c;
    position: relative; 
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.6);

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(135deg, #0E3A5D, #1B6CA8);
    }
`;

export const Logo = styled.img`
    position: absolute;
    inset-inline-start: 0px;
    inset-block-start: 0px;
    height: 8vh;
    cursor: pointer;
    background-color: #0c0c0c;
`;

export const HeaderContainer = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 5vw;
    background-color: #0c0c0c;
`;

export const HeaderItem = styled.h3`
    padding: 5px;
    font-family: 'CinzelCustom', serif;
    font-size: 30px;
    color: #77d6f1;
    background-color: #0c0c0c;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: #ade6f7;
        transform: translateY(-1px);
    }
`;