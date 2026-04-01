import styled from "styled-components";
import DiceIcon from '@/assets/imgs/dice_icon.svg?react';


export const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
  place-items: center;
  gap: 1rem;
  padding: 0.4rem 0;

  font-size: medium;
`;

export const Img = styled(DiceIcon)`
  position: absolute;

  left: 0;
  top: 50%;
  transform: translate(-150%, -50%);

  width: 20px;
  height: 20px;

  cursor: pointer;

  transition: 0.2s;

  path {
    color: white; 
  }

  &:hover path {
    color: #1B6CA8;

  }
`;

export const Pericia = styled.div`
  justify-self: start;
  cursor: pointer;
  
  transition: 0.2s;

  &:hover {
    color: #1B6CA8;

  }
`;

export const Dado = styled.div`
  
`;

export const Bonus = styled.div`
  
`;

export const Treino = styled.div`
  width: 2rem;
  border-bottom: 1px solid white;
  text-align: center;
`;

export const Outros = styled.div`
  width: 2rem;
  border-bottom: 1px solid white;
  text-align: center;
`;