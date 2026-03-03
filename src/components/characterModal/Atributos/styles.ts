import styled from "styled-components";
import bgImage from '../../../assets/imgs/atributos.png'

export const AtributosWrapper = styled.div`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
  font-family: 'PlayfairDisplayCustom';
  color: #E6F4FF;
  text-align: justify;
  height: calc(100vh - 10rem);
  width: 80vw;
  margin: 0 auto;
`;

export const Description = styled.h2`
  width: 40%;
  height: 60%;
  line-height: 1.6;
  word-spacing: 4px;
  display: flex;
  align-items: center;
`;

export const InnerWrapper = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  //background-image: url(${bgImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Atributos = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem; 
  padding: 1rem 0 1rem 0;
`;

export const AtributoText = styled.h3`
  
`;

export const AtributoInput = styled.input`
  width: 2rem;
  height: 1.5rem;

  border: 1px solid #15507F;
  background-color: transparent;
  color: white;

  outline: none;

  &:focus {
    border-color: #1B6CA8;
    box-shadow: 0 0 4px #1B6CA8;
  }
`;