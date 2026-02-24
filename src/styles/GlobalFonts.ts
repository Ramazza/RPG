import { createGlobalStyle } from "styled-components";

/* Cinzel */
import CinzelRegular from "../assets/fonts/Cinzel/static/Cinzel-Regular.ttf";
import CinzelBold from "../assets/fonts/Cinzel/static/Cinzel-Bold.ttf";

/* Playfair Display */
import PlayfairRegular from "../assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf";
import PlayfairBold from "../assets/fonts/Playfair_Display/static/PlayfairDisplay-Bold.ttf";
import PlayfairItalic from "../assets/fonts/Playfair_Display/static/PlayfairDisplay-Italic.ttf";

export const GlobalFonts = createGlobalStyle`

  @font-face {
    font-family: 'CinzelCustom';
    src: url(${CinzelRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'CinzelCustom';
    src: url(${CinzelBold}) format('truetype');
    font-weight: 700;
    font-style: bold;
  }

  @font-face {
    font-family: 'PlayfairDisplayCustom';
    src: url(${PlayfairRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'PlayfairDisplayCustom';
    src: url(${PlayfairBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'PlayfairDisplayCustom';
    src: url(${PlayfairItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
  }

  body {
    margin: 0;
    font-family: 'PlayfairDisplayCustom', serif;
    background-color: #0f0f0f;
    color: #E6F4FF;
  }

`;